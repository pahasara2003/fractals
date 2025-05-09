import {useState,useRef,useEffect} from 'react'

const Joystick = (
    {
        setScale,
        setXOffset,
        setYOffset,
        iter,
        setIter,
        canvasRef
    }:any
) => {
    const button = useRef<HTMLDivElement>(null);
    let initialValue = useRef<[number,number]>([0,0])
    let shift = useRef<any>([0,0])


   


  return (
    <div className="md:hidden absolute bottom-[20px]">
    <div className="ring-lime-400  w-[125px] flex-col flex items-center justify-center h-[125px] left-[calc(50vw-62.5px)] rounded-full relative bottom-[0px]">
      <div onClick={()=>setYOffset((prev:number) => prev +10)} className="w-[45px] h-[45px] bg-lime-400  rounded-full relative top-[-5px] " ></div>
      <div className='flex'>
      <div onClick={()=>setXOffset((prev:number) => prev -10)} className="w-[45px] h-[45px] bg-lime-400  rounded-full relative left-[-20px] " ></div>
      <div onClick={()=>setXOffset((prev:number) => prev +10)} className="w-[45px] h-[45px] bg-lime-400  rounded-full relative left-[20px] " ></div>

      </div>
      <div onClick={()=>setYOffset((prev:number) => prev -10)} className="w-[45px] h-[45px] bg-lime-400  rounded-full relative top-[5px] " ></div>

    </div>
  </div>
  )
}

export default Joystick