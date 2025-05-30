import { NextRequest } from "next/server";
import { HttpsProxyAgent } from "https-proxy-agent";

// export const runtime = "edge";

// 你的代理地址，可根据需要修改
const proxy = process.env.HTTPS_PROXY || "http://127.0.0.1:7890";
const agent = new HttpsProxyAgent(proxy);

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return new Response("Missing OpenAI API key", { status: 500 });
  }

  // 打印代理地址，便于调试
  console.log('HTTPS_PROXY:', proxy);

  const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages,
      stream: true,
    }),
    agent,
  } as any);

  if (!openaiRes.body) {
    return new Response("No response body from OpenAI", { status: 500 });
  }

  // 处理 OpenAI SSE 流，只输出 content
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const stream = new ReadableStream({
    async start(controller) {
      const reader = openaiRes.body!.getReader();
      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        // 逐行处理
        let lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed === "" || !trimmed.startsWith("data:")) continue;
          const data = trimmed.replace(/^data: /, "");
          if (data === "[DONE]") {
            controller.close();
            return;
          }
          try {
            const json = JSON.parse(data);
            const content = json.choices?.[0]?.delta?.content;
            if (content) {
              controller.enqueue(encoder.encode(content));
            }
          } catch (e) {
            // 忽略解析错误
          }
        }
      }
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    },
  });
}
