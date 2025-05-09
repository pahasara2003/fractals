import React from 'react'

const ConfigurePanel = ({
  
    setScale,
    setXOffset,
    setYOffset,
    canvasRef,
    iter,
    setIter
}:any) => {
  return (
    <div className=" max-md:hidden backdrop-blur-md rounded-xl text-lime-400 font-[mono] p-3 m-5 absolute z-[100] top-0 right-5">
     <p className="font-bold text-[1.5rem]">Mandelbrot Set</p>
      <p>Iterations : {iter} </p>
      <div>
        <button onClick={()=>{
          setIter((prev:number)=> Math.min(400,prev +1))
        }}  className="bg-lime-400 rounded-md hover:bg-green-500 w-[25px] m-2 text-black">+</button>
        <button onClick={()=>{
          setIter((prev:number)=> Math.max(1 ,prev -1))
        }}  className="bg-lime-400 rounded-md hover:bg-green-500 w-[25px] m-2 text-black">-</button>
      </div>
      <div className="mt-3"> 
      <div>
      <button onClick={()=>{
          setIter(75)
          setXOffset(0)
          setYOffset(0)
          setScale(1)

        }}  className="bg-lime-400 hover:bg-green-500 p-2 py-1 rounded-md m-3 text-black">Reset</button>
       
        <button onClick={()=>{
           const link = document.createElement("a");
           link.download = `${Date.now()}.png`;

           if(canvasRef.current) {link.href = canvasRef.current.toDataURL("image.png")};
           link.click();

        }}  className="bg-lime-400 hover:bg-green-500 p-2 py-1 rounded-md m-3 text-black">Download .png</button>
      </div>
      </div>
      
      Use hand to move.

    </div>
  )
}

export default ConfigurePanel