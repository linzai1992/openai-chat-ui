/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/openai-stream/route";
exports.ids = ["app/api/openai-stream/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "?d272":
/*!********************************!*\
  !*** supports-color (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fopenai-stream%2Froute&page=%2Fapi%2Fopenai-stream%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fopenai-stream%2Froute.ts&appDir=%2FUsers%2Fyunlinchen%2FDesktop%2FPractice_code%2Fopenai-chat-ui%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyunlinchen%2FDesktop%2FPractice_code%2Fopenai-chat-ui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fopenai-stream%2Froute&page=%2Fapi%2Fopenai-stream%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fopenai-stream%2Froute.ts&appDir=%2FUsers%2Fyunlinchen%2FDesktop%2FPractice_code%2Fopenai-chat-ui%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyunlinchen%2FDesktop%2FPractice_code%2Fopenai-chat-ui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_yunlinchen_Desktop_Practice_code_openai_chat_ui_app_api_openai_stream_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/openai-stream/route.ts */ \"(rsc)/./app/api/openai-stream/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/openai-stream/route\",\n        pathname: \"/api/openai-stream\",\n        filename: \"route\",\n        bundlePath: \"app/api/openai-stream/route\"\n    },\n    resolvedPagePath: \"/Users/yunlinchen/Desktop/Practice_code/openai-chat-ui/app/api/openai-stream/route.ts\",\n    nextConfigOutput,\n    userland: _Users_yunlinchen_Desktop_Practice_code_openai_chat_ui_app_api_openai_stream_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/openai-stream/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZvcGVuYWktc3RyZWFtJTJGcm91dGUmcGFnZT0lMkZhcGklMkZvcGVuYWktc3RyZWFtJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGb3BlbmFpLXN0cmVhbSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnl1bmxpbmNoZW4lMkZEZXNrdG9wJTJGUHJhY3RpY2VfY29kZSUyRm9wZW5haS1jaGF0LXVpJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnl1bmxpbmNoZW4lMkZEZXNrdG9wJTJGUHJhY3RpY2VfY29kZSUyRm9wZW5haS1jaGF0LXVpJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNxQztBQUNsSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1jaGF0LXVpLz85YzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy95dW5saW5jaGVuL0Rlc2t0b3AvUHJhY3RpY2VfY29kZS9vcGVuYWktY2hhdC11aS9hcHAvYXBpL29wZW5haS1zdHJlYW0vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL29wZW5haS1zdHJlYW0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9vcGVuYWktc3RyZWFtXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9vcGVuYWktc3RyZWFtL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3l1bmxpbmNoZW4vRGVza3RvcC9QcmFjdGljZV9jb2RlL29wZW5haS1jaGF0LXVpL2FwcC9hcGkvb3BlbmFpLXN0cmVhbS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvb3BlbmFpLXN0cmVhbS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fopenai-stream%2Froute&page=%2Fapi%2Fopenai-stream%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fopenai-stream%2Froute.ts&appDir=%2FUsers%2Fyunlinchen%2FDesktop%2FPractice_code%2Fopenai-chat-ui%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyunlinchen%2FDesktop%2FPractice_code%2Fopenai-chat-ui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/openai-stream/route.ts":
/*!****************************************!*\
  !*** ./app/api/openai-stream/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var https_proxy_agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https-proxy-agent */ \"(rsc)/./node_modules/https-proxy-agent/dist/index.js\");\n/* harmony import */ var https_proxy_agent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(https_proxy_agent__WEBPACK_IMPORTED_MODULE_0__);\n\n// export const runtime = \"edge\";\n// 你的代理地址，可根据需要修改\nconst proxy = process.env.HTTPS_PROXY || \"http://127.0.0.1:7897\";\nconst agent = new https_proxy_agent__WEBPACK_IMPORTED_MODULE_0__.HttpsProxyAgent(proxy);\nasync function POST(req) {\n    const { messages } = await req.json();\n    const apiKey = process.env.OPENAI_API_KEY;\n    if (!apiKey) {\n        return new Response(\"Missing OpenAI API key\", {\n            status: 500\n        });\n    }\n    // 打印代理地址，便于调试\n    console.log(\"HTTPS_PROXY:\", proxy);\n    const response = await fetch(\"https://api.openai.com/v1/chat/completions\", {\n        method: \"POST\",\n        headers: {\n            \"Authorization\": `Bearer ${apiKey}`,\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            model: \"gpt-3.5-turbo\",\n            messages,\n            stream: true\n        }),\n        agent\n    });\n    if (!response.body) {\n        return new Response(\"No response body from OpenAI\", {\n            status: 500\n        });\n    }\n    return new Response(response.body, {\n        headers: {\n            \"Content-Type\": \"text/event-stream\",\n            \"Cache-Control\": \"no-cache\",\n            \"Connection\": \"keep-alive\"\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL29wZW5haS1zdHJlYW0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ29EO0FBRXBELGlDQUFpQztBQUVqQyxpQkFBaUI7QUFDakIsTUFBTUMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLElBQUk7QUFDekMsTUFBTUMsUUFBUSxJQUFJTCw4REFBZUEsQ0FBQ0M7QUFFM0IsZUFBZUssS0FBS0MsR0FBZ0I7SUFDekMsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNRCxJQUFJRSxJQUFJO0lBRW5DLE1BQU1DLFNBQVNSLFFBQVFDLEdBQUcsQ0FBQ1EsY0FBYztJQUN6QyxJQUFJLENBQUNELFFBQVE7UUFDWCxPQUFPLElBQUlFLFNBQVMsMEJBQTBCO1lBQUVDLFFBQVE7UUFBSTtJQUM5RDtJQUVBLGNBQWM7SUFDZEMsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQmQ7SUFFNUIsTUFBTWUsV0FBVyxNQUFNQyxNQUFNLDhDQUE4QztRQUN6RUMsUUFBUTtRQUNSQyxTQUFTO1lBQ1AsaUJBQWlCLENBQUMsT0FBTyxFQUFFVCxPQUFPLENBQUM7WUFDbkMsZ0JBQWdCO1FBQ2xCO1FBQ0FVLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUNuQkMsT0FBTztZQUNQZjtZQUNBZ0IsUUFBUTtRQUNWO1FBQ0FuQjtJQUNGO0lBRUEsSUFBSSxDQUFDVyxTQUFTSSxJQUFJLEVBQUU7UUFDbEIsT0FBTyxJQUFJUixTQUFTLGdDQUFnQztZQUFFQyxRQUFRO1FBQUk7SUFDcEU7SUFFQSxPQUFPLElBQUlELFNBQVNJLFNBQVNJLElBQUksRUFBRTtRQUNqQ0QsU0FBUztZQUNQLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsY0FBYztRQUNoQjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuYWktY2hhdC11aS8uL2FwcC9hcGkvb3BlbmFpLXN0cmVhbS9yb3V0ZS50cz81YzU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBIdHRwc1Byb3h5QWdlbnQgfSBmcm9tIFwiaHR0cHMtcHJveHktYWdlbnRcIjtcblxuLy8gZXhwb3J0IGNvbnN0IHJ1bnRpbWUgPSBcImVkZ2VcIjtcblxuLy8g5L2g55qE5Luj55CG5Zyw5Z2A77yM5Y+v5qC55o2u6ZyA6KaB5L+u5pS5XG5jb25zdCBwcm94eSA9IHByb2Nlc3MuZW52LkhUVFBTX1BST1hZIHx8IFwiaHR0cDovLzEyNy4wLjAuMTo3ODk3XCI7XG5jb25zdCBhZ2VudCA9IG5ldyBIdHRwc1Byb3h5QWdlbnQocHJveHkpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIGNvbnN0IHsgbWVzc2FnZXMgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVk7XG4gIGlmICghYXBpS2V5KSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcIk1pc3NpbmcgT3BlbkFJIEFQSSBrZXlcIiwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxuXG4gIC8vIOaJk+WNsOS7o+eQhuWcsOWdgO+8jOS+v+S6juiwg+ivlVxuICBjb25zb2xlLmxvZygnSFRUUFNfUFJPWFk6JywgcHJveHkpO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHthcGlLZXl9YCxcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbW9kZWw6IFwiZ3B0LTMuNS10dXJib1wiLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBzdHJlYW06IHRydWUsXG4gICAgfSksXG4gICAgYWdlbnQsXG4gIH0gYXMgYW55KTtcblxuICBpZiAoIXJlc3BvbnNlLmJvZHkpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiTm8gcmVzcG9uc2UgYm9keSBmcm9tIE9wZW5BSVwiLCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShyZXNwb25zZS5ib2R5LCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJ0ZXh0L2V2ZW50LXN0cmVhbVwiLFxuICAgICAgXCJDYWNoZS1Db250cm9sXCI6IFwibm8tY2FjaGVcIixcbiAgICAgIFwiQ29ubmVjdGlvblwiOiBcImtlZXAtYWxpdmVcIixcbiAgICB9LFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJIdHRwc1Byb3h5QWdlbnQiLCJwcm94eSIsInByb2Nlc3MiLCJlbnYiLCJIVFRQU19QUk9YWSIsImFnZW50IiwiUE9TVCIsInJlcSIsIm1lc3NhZ2VzIiwianNvbiIsImFwaUtleSIsIk9QRU5BSV9BUElfS0VZIiwiUmVzcG9uc2UiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1vZGVsIiwic3RyZWFtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/openai-stream/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/debug","vendor-chunks/https-proxy-agent","vendor-chunks/agent-base","vendor-chunks/ms"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fopenai-stream%2Froute&page=%2Fapi%2Fopenai-stream%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fopenai-stream%2Froute.ts&appDir=%2FUsers%2Fyunlinchen%2FDesktop%2FPractice_code%2Fopenai-chat-ui%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyunlinchen%2FDesktop%2FPractice_code%2Fopenai-chat-ui&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();