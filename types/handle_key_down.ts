  export default function handle_key_down(event: KeyboardEvent,scale:number,setScale:any,Xoffset:any,Yoffset:any)  {
      event.preventDefault(); // Prevent default scrolling behavior
      const activeElement = document.activeElement as any;
        switch (event.key) {
          case "+":
            setScale((prev:number)=> prev*0.9); 
            break;
          case "-":
            setScale((prev:number)=> prev/0.9);
            break;
          case "ArrowLeft":
            Xoffset((prev:number)=> prev - 0.1*scale/1.3);
            break;
          case "ArrowRight":
            Xoffset((prev:number)=> prev + 0.1*scale/1.3);           
            break;
          case "ArrowUp":
            
            break;
          case "ArrowDown":
            
            break;
          default:
            break;
        }
      
    };