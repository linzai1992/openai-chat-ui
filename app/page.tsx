"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [streaming, setStreaming] = useState(false);

  async function handleSend() {
    setStreaming(true);
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);

    const response = await fetch("/api/openai-stream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });

    const reader = response.body!.getReader();
    const decoder = new TextDecoder();
    let aiMsg = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      aiMsg += decoder.decode(value, { stream: true });
      setMessages([...newMessages, { role: "assistant", content: aiMsg }]);
    }
    setStreaming(false);
    setInput("");
  }

  return (
    <main>
      <div>
        {messages.map((msg, i) => (
          <div key={i}>
            <b>{msg.role}:</b> {msg.content}
          </div>
        ))}
        {streaming && <div>AI 正在输入...</div>}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        disabled={streaming}
      />
      <button onClick={handleSend} disabled={streaming || !input}>
        发送
      </button>
    </main>
  );
}
