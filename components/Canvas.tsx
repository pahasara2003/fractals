"use client";
import { useEffect, useRef } from "react";
import init, { generate_mandelbrot, generate_julia } from "./fractals";
const Canvas = ({
  scale,
  setScale,
  xOffset,
  setXOffset,
  yOffset,
  setYOffset,
  c,
  fractal,
}: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const update = async (
    canvasRef: any,
    newXoffset: number,
    newYoffset: number,
    newScale: number,
    c: number[],
    fractal: string
  ) => {
    await init();

    const algo = () => {
      switch (fractal) {
        case "Mandelbrot":
          return generate_mandelbrot(
            -2 * newScale + newXoffset,
            newScale * -1 + newYoffset,
            newScale
          );
        case "Julia":
          return generate_julia(
            -2 * newScale + newXoffset,
            newScale * -1 + newYoffset,
            newScale,
            c[0],
            c[1]
          );
        case "Newton's":
          return generate_julia(
            -2 * newScale + newXoffset,
            newScale * -1 + newYoffset,
            newScale,
            c[0],
            c[1]
          );

        default:
          return generate_mandelbrot(
            -2 * newScale + newXoffset,
            newScale * -1 + newYoffset,
            newScale
          );
      }
    };

    const result = algo();

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
    setXOffset(0);
    setYOffset(0);
    update(canvasRef, 0, 0, scale, c, fractal);
  }, [fractal, c]); // Only update when `fractal` changes

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const activeElement = document.activeElement as any;
      if (activeElement.tagName !== "INPUT") {
        switch (event.key) {
          case "+":
            setScale((prevScale: any) => {
              const newScale = prevScale * 0.9;
              update(canvasRef, xOffset, yOffset, newScale, c, fractal); // Call update with the new scale
              return newScale;
            });
            break;
          case "-":
            setScale((prevScale: any) => {
              const newScale = prevScale / 0.9;
              update(canvasRef, xOffset, yOffset, newScale, c, fractal); // Call update with the new scale
              return newScale;
            });
            break;
          case "ArrowLeft":
            setXOffset((prevScale: any) => {
              const newOffset = prevScale - 0.1 * scale;
              update(canvasRef, newOffset, yOffset, scale, c, fractal); // Call update with the new scale
              return newOffset;
            });
            break;
          case "ArrowRight":
            setXOffset((prevScale: any) => {
              const newOffset = prevScale + 0.1 * scale;
              update(canvasRef, newOffset, yOffset, scale, c, fractal); // Call update with the new scale

              return newOffset;
            });
            break;
          case "ArrowUp":
            setYOffset((prevScale: any) => {
              const newOffset = prevScale - 0.05 * scale;
              update(canvasRef, xOffset, newOffset, scale, c, fractal); // Call update with the new scale

              return newOffset;
            });
            break;
          case "ArrowDown":
            setYOffset((prevScale: any) => {
              const newOffset = prevScale + 0.05 * scale;
              update(canvasRef, xOffset, newOffset, scale, c, fractal); // Call update with the new scale

              return newOffset;
            });
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [xOffset, yOffset, scale, c, fractal]); // Dependencies added for proper updates

  return (
    <section>
      <canvas
        width={1200}
        height={700}
        className="m-0 p-0"
        ref={canvasRef}
      ></canvas>
    </section>
  );
};

export default Canvas;
