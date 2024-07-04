import React, { Children, useState } from 'react'

const HoverElement = ({text, children, down}) => {
    const [show, setShow] = useState(false)

    const handleHover = (mouseover)=>{
        if(mouseover) setShow(true)
        else setShow(false)
    }
  return (
    <div className='relative' onMouseOver={()=>handleHover(true)} onMouseLeave={()=>handleHover(false)}>
        <div className={`${show ? "scale-100 -translate-y-2":"scale-0 translate-y-2"} absolute ${down ? "-bottom-10":"-top-8"} left-1/2 -translate-x-1/2  text-nowrap bg-red-500 px-2 py-1 rounded-full text-xs transition-all duration-160 ease-in text-white`} >{text}</div>
        {children}
    </div>
  )
}

export default HoverElement