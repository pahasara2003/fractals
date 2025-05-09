"use client";
import { useEffect, useRef } from "react";
import update_graph from "@/types/update_graph";



const Canvas = ({
  scale,
  xOffset,
  yOffset,
  c,
  fractal,
  canvasRef,
  iter
}: any) => {

  const width = Math.max(window.innerWidth,1200);
  const height = Math.max(window.innerHeight,700);
  

  useEffect(()=>{
    window.addEventListener('resize',()=>{
      const width = Math.max(window.innerWidth,1200);
  const height = Math.max(window.innerHeight,700);
      update_graph(canvasRef,xOffset,yOffset,scale,c,fractal,width,height,iter)

    })
  },[])

  update_graph(canvasRef,xOffset,yOffset,scale,c,fractal,width,height,iter)

  

  return (
    <section  className="p-0 m-0">
      <canvas
        width={window.innerWidth}
        height={window.innerHeight}
        className={`m-0 left-0 p-0 cursor-grab`}
        ref={canvasRef}
      ></canvas>
      </section>
  );
};

export default Canvas;
