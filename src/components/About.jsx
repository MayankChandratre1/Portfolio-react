import React from "react";
import profile from "../assets/Profile.png";
import ContactCard from "./ContactCard";
import HoverElement from "./HoverElement";

const About = () => {
  return (
    

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
        <p className="text-xl md:text-3xl mb-2 text-left font-bold">Hey, It's me Mayank👋</p>
       <HoverElement text={"Web development, DSA, DevOps"}> <span className="text-slate-500 italic">Web, DSA, DevOps...</span></HoverElement>
        </div>
        <p className="pt-2 text-slate-200 text-lg md:text-md">Launching myself into the tech world with passion and determination. I am a Computer Science student with a deep enthusiasm for software development. I love building and constantly learning new things, with a particular interest in <span className="font-bold">Web Development and DevOps</span>.<br/> Want to know more about me? <a href="#contact" className="underline">Let's connect</a> and have a chat.</p>
      </div>
    </section>
  );
};

export default About;
