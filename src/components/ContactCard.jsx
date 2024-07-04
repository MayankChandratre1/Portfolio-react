import React from 'react'
import githubLogo from "../assets/github.svg"
import gmailLogo from "../assets/gmail.svg"
import linkedinLogo from "../assets/linkedin.svg"
import HoverElement from './HoverElement'

const ContactCard = ({message}) => {
  return (
    <ul className='flex items-center space-x-4 px-4 py-4 bg-slate-500 bg-opacity-20 rounded-md'>
      {message ? <h4 className='text-white'>{message}</h4>:null}
        <li><HoverElement text={"github"} down={true}><a href="https://github.com/MayankChandratre1"><img src={githubLogo} alt="" className='w-5 h-5 hover:scale-105  '/></a></HoverElement></li>
        <li><HoverElement text={"linkedin"} down={true}><a href=""><img src={linkedinLogo} alt="" className='w-5 h-5 hover:scale-105 '/></a></HoverElement></li>
        <li><HoverElement text={"mail"} down={true}><a href=""><img src={gmailLogo} alt="" className='w-5 h-5 hover:scale-105 '/></a></HoverElement></li>
    </ul>
  )
}

export default ContactCard