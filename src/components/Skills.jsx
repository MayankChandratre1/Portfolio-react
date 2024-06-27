import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-gradient-to-t  from-gray-700 to-gray-600">
      <div className="max-w-[70%] text-center text-white">
        <h2 className="text-4xl font-bold mb-5">Skills</h2>
        <ul className="text-sm md:text-lg xl:text-xl flex flex-wrap justify-center space-x-4">
          <li className='hover:px-5 animate-bounce rounded-full hover:bg-violet-950 hover:text-white py-3 hover:shadow-xl shadow-violet-600 transition-all duration-200 ease-in'>HTML5</li>
          <li className='hover:px-5 animate-bounce rounded-full hover:bg-violet-950 hover:text-white py-3 hover:shadow-lg shadow-violet-600 transition-all duration-200 ease-in'>CSS</li>
          <li className='hover:px-5 animate-bounce rounded-full hover:bg-violet-950 hover:text-white py-3 hover:shadow-lg shadow-violet-600 transition-all duration-200 ease-in'>JavaScript</li>
          <li className='hover:px-5 animate-bounce rounded-full hover:bg-violet-950 hover:text-white py-3 hover:shadow-lg shadow-violet-600 transition-all duration-200 ease-in'>React</li>
          <li className='hover:px-5 animate-bounce rounded-full hover:bg-violet-950 hover:text-white py-3 hover:shadow-lg shadow-violet-600 transition-all duration-200 ease-in'>Node.js</li>
          <li className='hover:px-5 animate-bounce rounded-full hover:bg-violet-950 hover:text-white py-3 hover:shadow-lg shadow-violet-600 transition-all duration-200 ease-in'>MongoDB</li>
          <li className='hover:px-5 animate-bounce rounded-full hover:bg-violet-950 hover:text-white py-3 hover:shadow-lg shadow-violet-600 transition-all duration-200 ease-in'>Tailwind CSS</li>
          <li className='hover:px-5 animate-bounce rounded-full hover:bg-violet-950 hover:text-white py-3 hover:shadow-lg shadow-violet-600'>Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
