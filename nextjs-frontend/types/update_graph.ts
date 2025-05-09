import init, { generate_mandelbrot } from "@/wasm/fractals";


const fractalType = [generate_mandelbrot];


export default async (
    canvasRef: any,
    newXoffset: number,
    newYoffset: number,
    newScale: number,
    c: number[],
    fractal: number,
    width:number,
    height:number,
    iter:number
  ) => {
    await init();

   

    const result = fractalType[fractal](newXoffset,-newYoffset, newScale, width,height,iter);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (!ctx) return;

    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < result.length; i++) {
      const x = i % width; // x-coordinate
      const y = Math.floor(i / width); // y-coordinate

      const color = result[i];
      const index = (y * canvas.width + x) * 4;
      data[index] = color * 0.6;
      data[index + 1] = color * 0.7;
      data[index + 2] = color;
      data[index + 3] = 255;
    }

    ctx.putImageData(imageData, 0, 0);
   
  };