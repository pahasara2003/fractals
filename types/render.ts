import init, {
  generate_mandelbrot,
  generate_julia,
} from "../public/pkg/fractals";

export const update = async (
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
