"use client";
import { useEffect, useRef } from "react";
import { update } from "@/types/render";

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
