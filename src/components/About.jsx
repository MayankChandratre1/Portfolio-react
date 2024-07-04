import React from "react";
import profile from "../assets/Profile.png";
import ContactCard from "./ContactCard";
import HoverElement from "./HoverElement";

const About = () => {
  return (
    // <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600 text-white text-justify">
    //   <div className="max-w-[70%] text-center mt-16 flex flex-col justify-center items-center">
    //     <img src={profile} alt="Your Name" className="w-52 md:w-60 rounded-full object-cover object-center mx-auto hover:scale-[1.1] mb-5 transition-all duration-200 linear row-span-2 place-self-center opacity-70 hover:opacity-100 "/>
    //     <ContactCard />
    //    <div>
    //     <h2 className="text-4xl font-bold mb-4 text-left ">It's me, Mayank </h2>
    //     <p className="mb-4 text-xl text-justify place-self-start"> I am a student, doing my majors in Computer Science. I wasn't always a
    //       fan of computers but when I got introduced to programming after
    //       completing my school I decided to throw myself into this world. Since
    //       then I am in love with programming and I aim to learn more and more on
    //       my journey of becoming a software engineer.</p>
    //     </div>
    //   </div>
    // </section>

    <section
      id="about"
      className="min-h-screen p-4 grid grid-cols-5 max-md:grid-cols-1  md:items-center justify-center bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600 text-white text-justify"
    >
      <div className="py-4 flex flex-col md:justify-center justify-end items-center gap-3">
        <HoverElement text={"Mayank Chandratre"}><img src={profile} alt="profile" className="w-32 sm:w-52 md:w-102 rounded-full "/></HoverElement>
        <ContactCard />
      </div>
      <div className="mx-4 col-span-4">
        <div >
        <p className="text-3xl mb-2 text-left font-bold">Hey, It's me Mayank👋</p>
       <HoverElement text={"Web development, DSA, Backend"}> <span className="text-slate-500 italic">Web, Backend, DSA...</span></HoverElement>
        </div>
        <p className="pt-2 text-slate-200">Launching myself into the tech world with passion and determination. I am a Computer Science student with a deep enthusiasm for software development. I love building and constantly learning new things, with a particular interest in Web Development and DevOps.<br/> Want to know more about me? <a href="#contact" className="underline">Let's connect</a> and have a chat.</p>
      </div>
    </section>
  );
};

export default About;
