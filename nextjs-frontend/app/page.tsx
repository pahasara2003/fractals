"use client";

import Canvas from "@/components/Canvas";
import { useState, useEffect, useRef } from "react";
import ConfigurePanel from "./ConfigurePanel";
import Joystick from "./Joystick";

export default function Home() {
  const [scale, setScale] = useState(1);
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const [iter, setIter] = useState(100);

  const [fractal, setFractal] = useState<any>("Mandelbrot");

  const dragStart = useRef<[number, number]>([0, 0]);
  const drag = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const zoomLevel = useRef(100);
  if (canvasRef.current) {
    canvasRef.current.style.cursor = `grab`;
  }

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      dragStart.current = [e.clientX, e.clientY];
      drag.current = true;
    });

    document.addEventListener("mousemove", (e) => {
      let x = e.clientX - dragStart.current[0];
      let y = e.clientY - dragStart.current[1];

      if (canvasRef.current && drag.current) {
        canvasRef.current.style.transform = `translate(${x}px,${y}px)`;
      }
    });

    document.addEventListener("mouseup", (e) => {
      let x = e.clientX - dragStart.current[0];
      let y = e.clientY - dragStart.current[1];
      console.log(scale);

      setXOffset((prev) => prev - x);
      setYOffset((prev) => prev + y);
      drag.current = false;
      if (canvasRef.current) {
        canvasRef.current.style.cursor = `grab`;

        canvasRef.current.style.transform = "translateX(0px)";
      }
    });
    

    document.addEventListener(
      "wheel",
      function (e) {
        e.preventDefault();

        const canvasRect = canvasRef.current?.getBoundingClientRect();
        if (!canvasRect) return;

        const mouseX = e.clientX - canvasRect.left;
        const mouseY = e.clientY - canvasRect.top;

        const normalizedX = (mouseX / canvasRect.width) * 2 - 1;
        const normalizedY = (mouseY / canvasRect.height) * 2 - 1;

        // Reverse the direction for more intuitive zooming
        const direction = e.deltaY > 0 ? "out" : "in";
        // Use smaller zoom delta for smoother zooming
        const zoomDelta = Math.abs(e.deltaY) > 100 ? 0.5 : 0.25;

        const oldZoom = zoomLevel.current;
        // Apply zoom changes more gradually
        zoomLevel.current =
          direction === "in"
            ? zoomLevel.current * (1 + 0.05 * zoomDelta)
            : zoomLevel.current / (1 + 0.05 * zoomDelta);

        // Clamp zoom levels to prevent extreme values
        zoomLevel.current = Math.max(25, zoomLevel.current);

        const s = 100 / zoomLevel.current;
        const oldScale = 100 / oldZoom;

        // Adjust offset to keep mouse position fixed
        setXOffset((prev) => {
          const dx = normalizedX * (oldScale - s);
          return (prev + dx) / (s / oldScale);
        });

        setYOffset((prev) => {
          const dy = normalizedY * (oldScale - s);
          return (prev + dy) / (s / oldScale);
        });

        setScale(s);
      },
      { passive: false }
    );
  }, []);

  return (
    <>
      <ConfigurePanel
        setScale={setScale}
        setXOffset={setXOffset}
        setYOffset={setYOffset}
       
        canvasRef={canvasRef}
        iter={iter}
        setIter={setIter}
      />
      <section className="overflow-hidden max-h-[100vh]">
      <Canvas
        scale={scale}
        xOffset={xOffset}
        yOffset={yOffset}
        c={[0.285, 0.01]}
        fractal={0}
        canvasRef={canvasRef}
        iter={iter}
      />
      </section>
      <Joystick setXOffset = {setXOffset} setYOffset = {setYOffset} scale={scale} canvasRef={canvasRef}/>
    </>
  );
}
