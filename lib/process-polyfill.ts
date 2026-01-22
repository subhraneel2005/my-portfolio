// Polyfill for process in browser environment
if (typeof window !== "undefined" && typeof process === "undefined") {
  // @ts-expect-error - polyfill for browser
  globalThis.process = { env: {} };
}

