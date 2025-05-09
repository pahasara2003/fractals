"use client";
import { useEffect, useState } from "react";
import update_graph from "../types/update_graph";



const Canvas = ({
  scale,
  xOffset,
  yOffset,
  c,
  fractal,
  canvasRef,
  iter
}: any) => {

  const [dimensions, setDimensions] = useState({ width: 1200, height: 700 });
  
  useEffect(()=>{
    const width = Math.max(window.innerWidth,1200);
    const height = Math.max(window.innerHeight,700);
    setDimensions({
      width: width,
      height: height,
    });
    update_graph(canvasRef,xOffset,yOffset,scale,c,fractal,width,height,iter)
  },[xOffset,yOffset,scale,c,fractal,iter])

  useEffect(()=>{
    


    window.addEventListener('resize',()=>{
      const width = Math.max(window.innerWidth,1200);
      const height = Math.max(window.innerHeight,700);
      update_graph(canvasRef,xOffset,yOffset,scale,c,fractal,width,height,iter)

    })
  },[])


  

  return (
    <section  className="p-0 m-0">
      <canvas
        width={dimensions["width"]}
        height={dimensions["height"]}
        className={`m-0 left-0 p-0 cursor-grab`}
        ref={canvasRef}
      ></canvas>
      </section>
  );
};

export default Canvas;
