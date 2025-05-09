import {useRef,useState} from 'react'

const ConfigurePanel = ({
  
    setScale,
    setXOffset,
    setYOffset,
    canvasRef,
    iter,
    setIter,
    fractal,
    setFractal,
    c,
    setC
}:any) => {

  const [inputData,setInputData] = useState([c[0],c[1]])
  const angleRef = useRef(null)
  const radiusRef = useRef(null)


  return (
    <div className=" w-[400px] max-md:hidden backdrop-blur-md rounded-xl text-lime-400 font-[mono] p-3 m-5 absolute z-[100] top-0 right-5">
    <div className='flex justify-evenly items-center'> 
      <span onClick={()=> setFractal((prev:number)=> (prev + 1)%2)} className='text-black bg-lime-400 w-[25px] h-[25px] text-center cursor-pointer rounded-full'>{"<"}</span>    
      <p className="font-bold px-2 text-[1.5rem]">{fractal == 1 ? "Mandelbrot Set" : "Julia Set"}</p>
      <span className='text-black bg-lime-400 w-[25px] h-[25px] text-center  cursor-pointer rounded-full' onClick={()=> setFractal((prev:number)=> (prev + 1)%2)}>{">"}</span>    
    </div>
      
      
      <p className='text-center pt-3'>Iterations : {iter} </p>
      <div className='flex justify-center'>
        <button onClick={()=>{
          setIter((prev:number)=> Math.min(400,prev +1))
        }}  className="bg-lime-400 rounded-md hover:bg-green-500 w-[25px] m-2 text-black">+</button>
        <button onClick={()=>{
          setIter((prev:number)=> Math.max(1 ,prev -1))
        }}  className="bg-lime-400 rounded-md hover:bg-green-500 w-[25px] m-2 text-black">-</button>
      </div>
      <div className={`my-3 ${fractal == 0 ? "" : "hidden"}`}>
      <p className='text-center pt-3'> C (complex number) : {c[0].toFixed(3)} + {c[1].toFixed(3)}i </p>
     <div className='flex flex-col items-center gap-2 py-2 '>
     

        <div className='flex items-center gap-3'>
          <span>Radius :{Math.sqrt(c[1]**2 + c[0]**2).toFixed(3)} </span>
        <input type="range" ref={radiusRef} className='w-[200px]' min={0} max={1} step={0.001} 
        onInput={(e)=>{
          const r = parseFloat((e.target as HTMLInputElement).value) 
          const theta = Math.atan2(c[1],c[0])
          setC([r*Math.cos(theta),r*Math.sin(theta)]);        
        }}
          />
        </div>

        <div className='flex items-center gap-3'>
          <span>Angle : {(Math.atan2(c[1],c[0])*180/Math.PI).toFixed(3)}  </span>
        <input ref={angleRef} type="range" className='w-[200px]' min={0} max={Math.PI*2} step={Math.PI/1200} 
           onInput={(e)=>{
            const theta = parseFloat((e.target as HTMLInputElement).value) 
            const r = Math.sqrt(c[1]**2 + c[0]**2)
            setC([r*Math.cos(theta),r*Math.sin(theta)]);        
          }}
           />
        </div>

     </div>

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