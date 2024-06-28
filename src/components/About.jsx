import React from 'react';
import profile from '../assets/Profile.png'

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600 text-white text-justify">
      <div className="max-w-[70%] text-center mt-16">
        <img src={profile} alt="Your Name" className="w-52 md:w-60 rounded-full object-cover object-center mx-auto hover:scale-[1.1] mb-5 transition-all duration-200 linear row-span-2 place-self-center opacity-70 hover:opacity-100 "/>
        <div>
        <h2 className="text-4xl font-bold mb-4 text-left ">Hey there,</h2>
        <p className="mb-4 text-xl text-justify place-self-start"> I am a student, doing my majors in Computer Science. I wasn't always a
          fan of computers but when I got introduced to programming after
          completing my school I decided to throw myself into this world. Since
          then I am in love with programming and I aim to learn more and more on
          my journey of becoming a software engineer.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
