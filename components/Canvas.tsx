"use client";
import { useState, useEffect, useRef } from "react";
import init, { generate_mandelbrot } from "../pkg/fractals.js";
const interpolateTurbo = (x: number): [number, number, number] => {
  // Clamp x between 0 and 1
  x = Math.max(0, Math.min(1, x));

  // Turbo colormap coefficients
  const r =
    0.13572138 +
    4.6153926 * x -
    42.66032258 * x ** 2 +
    132.13108234 * x ** 3 -
    152.94239396 * x ** 4 +
    59.28637943 * x ** 5;
  const g =
    0.09140261 +
    2.19418839 * x +
    4.84296658 * x ** 2 -
    43.24731374 * x ** 3 +
    77.45539657 * x ** 4 -
    44.64127393 * x ** 5;
  const b =
    0.1066733 +
    26.79459949 * x -
    281.10140949 * x ** 2 +
    1062.2710535 * x ** 3 -
    1812.77270598 * x ** 4 +
    1090.21001171 * x ** 5;

  // Clamp RGB values between 0 and 1
  return [
    Math.max(0, Math.min(1, r)),
    Math.max(0, Math.min(1, g)),
    Math.max(0, Math.min(1, b)),
  ];
};

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scale, setScale] = useState(1.3);
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const update = async (
    newXoffset: number,
    newYoffset: number,
    newScale: number
  ) => {
    await init();

    const result = generate_mandelbrot(
      -2 * newScale + newXoffset,
      newScale * -1 + newYoffset,
      newScale
    );

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < result.length; i++) {
      const x = i % 1200; // x-coordinate
      const y = Math.floor(i / 1200); // y-coordinate

      const color = result[i];

      const index = (y * canvas.width + x) * 4;
      data[index] = color * 0.6;
      data[index + 1] = color * 0.7;
      data[index + 2] = color;
      data[index + 3] = 255;
    }

    ctx.putImageData(imageData, 0, 0);
  };
  useEffect(() => {
    update(xOffset, yOffset, scale);
  }, []);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log(xOffset, yOffset, scale);
      switch (event.key) {
        case "+":
          if (scale < 1.34) {
            setScale((prevScale) => {
              const newScale = prevScale * 0.9;
              update(xOffset, yOffset, newScale); // Call update with the new scale
              return newScale;
            });
          }
          break;
        case "-":
          setScale((prevScale) => {
            const newScale = prevScale / 0.9;
            update(xOffset, yOffset, newScale); // Call update with the new scale
            return newScale;
          });
          break;
        case "ArrowLeft":
          setXOffset((prevScale) => {
            const newOffset = prevScale - 0.1 * scale;
            update(newOffset, yOffset, scale); // Call update with the new scale

            return newOffset;
          });
          break;
        case "ArrowRight":
          setXOffset((prevScale) => {
            const newOffset = prevScale + 0.1 * scale;
            update(newOffset, yOffset, scale); // Call update with the new scale

            return newOffset;
          });
          break;
        case "ArrowUp":
          setYOffset((prevScale) => {
            const newOffset = prevScale - 0.05 * scale;
            update(xOffset, newOffset, scale); // Call update with the new scale

            return newOffset;
          });
          break;
        case "ArrowDown":
          setYOffset((prevScale) => {
            const newOffset = prevScale + 0.05 * scale;
            update(xOffset, newOffset, scale); // Call update with the new scale

            return newOffset;
          });
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [xOffset, yOffset, scale]); // Dependencies added for proper updates

  return (
    <canvas
      width={1200}
      height={750}
      className="m-0 p-0"
      ref={canvasRef}
    ></canvas>
  );
};

export default Canvas;
