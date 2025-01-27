export const handleKeyDown = (event: KeyboardEvent) => {
  console.log(xOffset, yOffset, scale);
  switch (event.key) {
    case "+":
      if (scale < 1.34) {
        setScale((prevScale) => {
          const newScale = prevScale * 0.9;
          update(canvasRef, xOffset, yOffset, newScale); // Call update with the new scale
          return newScale;
        });
      }
      break;
    case "-":
      setScale((prevScale) => {
        const newScale = prevScale / 0.9;
        update(canvasRef, xOffset, yOffset, newScale); // Call update with the new scale
        return newScale;
      });
      break;
    case "ArrowLeft":
      setXOffset((prevScale) => {
        const newOffset = prevScale - 0.1 * scale;
        update(canvasRef, newOffset, yOffset, scale); // Call update with the new scale

        return newOffset;
      });
      break;
    case "ArrowRight":
      setXOffset((prevScale) => {
        const newOffset = prevScale + 0.1 * scale;
        update(canvasRef, newOffset, yOffset, scale); // Call update with the new scale

        return newOffset;
      });
      break;
    case "ArrowUp":
      setYOffset((prevScale) => {
        const newOffset = prevScale - 0.05 * scale;
        update(canvasRef, xOffset, newOffset, scale); // Call update with the new scale

        return newOffset;
      });
      break;
    case "ArrowDown":
      setYOffset((prevScale) => {
        const newOffset = prevScale + 0.05 * scale;
        update(canvasRef, xOffset, newOffset, scale); // Call update with the new scale

        return newOffset;
      });
      break;
    default:
      break;
  }
};
