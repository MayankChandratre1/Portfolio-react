import React, { useEffect, useState } from 'react'

const Cursor = () => {
    const [positions, setPositions] = useState({
        x: 5,
        y: 5
    })

  const handleChange = (e)=>{
    // console.log(e);
    setPositions({x: e.pageX-10, y:e.pageY-5})
  }

  useEffect(()=>{
    const a = setTimeout(()=>{window.addEventListener("mousemove", (e)=>{handleChange(e)})},100)


    return () => {
        clearTimeout(a)
        window.removeEventListener("mousemove", (e)=>{handleChange(e)})
    }
  },[])
  return (
    <div className='z-30 w-8 h-8 rounded-full border-4 border-red-500 absolute transition-all duration-0 ease-in pointer-events-none animate-bounce shadow-glow' style={{top:`${positions.y}px`, left:`${positions.x}px`}}>

    </div>
  )
}

export default Cursor