/* tslint:disable */
/* eslint-disable */
export function is_mandelbrot(x: number, y: number, x1: number, y1: number, scale: number): number;
export function is_julia(x: number, y: number, x1: number, y1: number, scale: number, cx: number, cy: number): number;
export function generate_mandelbrot(x0: number, y0: number, scale: number): Uint8Array;
export function generate_julia(x0: number, y0: number, scale: number, cx: number, cy: number): Uint8Array;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly is_mandelbrot: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly is_julia: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly generate_mandelbrot: (a: number, b: number, c: number) => [number, number];
  readonly generate_julia: (a: number, b: number, c: number, d: number, e: number) => [number, number];
  readonly __wbindgen_export_0: WebAssembly.Table;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
