import React from 'react';

const Header = () => {
  return (
    <header className="bg-slate-200 bg-opacity-50 z-10  text-slate-950 p-4  fixed  w-full backdrop-blur-md">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl">Mayank Chandratre</h1>
        <ul className="flex space-x-4">
          <li><a href="#about" className='hover:underline transition-all duration-100 ease-in-out'>About</a></li>
          <li><a href="#skills" className='hover:underline transition-all duration-100 ease-in-out'>Skills</a></li>
          <li><a href="#projects" className='hover:underline transition-all duration-100 ease-in-out'>Projects</a></li>
          <li><a href="#contact" className='hover:underline transition-all duration-100 ease-in-out'>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
