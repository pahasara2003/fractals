import p5Types from "p5";
import init, { generate_mandelbrot } from "../pkg/fractals.js";

const calculate = async (p5: p5Types, height: number, width: number) => {
  // await init();

  // const result = generate_mandelbrot(-2.0, -1.0, 1.0);

  for (let i = 0; i < 10000; i++) {
    const x = i % 1200; // x-coordinate
    const y = Math.floor(i / 1200); // y-coordinate

    const color = 200;

    const index = (y * 1200 + x) * 4;
    p5.pixels[index] = color; // Red
  }
};

export const setupHelper = (p5: p5Types, height: number, width: number) => {
  p5.loadPixels();
  calculate(p5, height, width);
};

export const drawHelper = (
  p5: p5Types,
  canvasHeight: number,
  canvasWidth: number
) => {
  calculate(p5, 750, 1200);

  p5.updatePixels();
};
