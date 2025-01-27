export const loadWasm = async () => {
  const wasm = await import("../public/pkg/fractals.js");
  return wasm;
};
