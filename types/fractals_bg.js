let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}

/**
 * @param {number} x
 * @param {number} y
 * @param {number} x1
 * @param {number} y1
 * @param {number} scale
 * @param {number} max_iter
 * @returns {number}
 */
export function is_mandelbrot(x, y, x1, y1, scale, max_iter) {
    const ret = wasm.is_mandelbrot(x, y, x1, y1, scale, max_iter);
    return ret;
}

/**
 * @param {number} x
 * @param {number} y
 * @param {number} x1
 * @param {number} y1
 * @param {number} scale
 * @param {number} cx
 * @param {number} cy
 * @param {number} max_iter
 * @returns {number}
 */
export function is_julia(x, y, x1, y1, scale, cx, cy, max_iter) {
    const ret = wasm.is_julia(x, y, x1, y1, scale, cx, cy, max_iter);
    return ret;
}

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
 * @param {number} x0
 * @param {number} y0
 * @param {number} scale
 * @param {number} screen_w
 * @param {number} screen_h
 * @param {number} max_iter
 * @returns {Uint8Array}
 */
export function generate_mandelbrot(x0, y0, scale, screen_w, screen_h, max_iter) {
    const ret = wasm.generate_mandelbrot(x0, y0, scale, screen_w, screen_h, max_iter);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {number} x0
 * @param {number} y0
 * @param {number} scale
 * @param {number} screen_w
 * @param {number} screen_h
 * @param {number} max_iter
 * @param {number} cx
 * @param {number} cy
 * @returns {Uint8Array}
 */
export function generate_julia(x0, y0, scale, screen_w, screen_h, max_iter, cx, cy) {
    const ret = wasm.generate_julia(x0, y0, scale, screen_w, screen_h, max_iter, cx, cy);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

export function __wbindgen_init_externref_table() {
    const table = wasm.__wbindgen_export_0;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
    ;
};

