import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-gradient-to-t  from-gray-700 to-gray-600"
    >
      <div className="max-w-[70%] text-center text-white relative">
        <h2 className="text-2xl md:text-4xl font-bold mb-12">Skills</h2>

        <div className="absolute -rotate-[30deg] -left-10 -top-5 italic text-yellow-500 ">
          {/* It's a <span className="bg-white bg-opacity-10">DRUM</span>, Make some
          sound <br /> <div className="animate-bounce">&darr;</div> */}
        </div>
        <div className="flex flex-col justify-center gap-5">
          
          <SkillSet skills={['MERN Stack','NextJs']} color="red" sound={"tom-1"} />
          <SkillSet skills={['Problem Solving','DSA']} color="blue" sound={"tom-2"} />
          <SkillSet skills={['HTML5','Tailwind','Javascript']} color="red" sound={"tom-4"} />
          <SkillSet skills={['Java Core','Typescript']} color="blue" sound={"tom-3"} />
          <SkillSet skills={['Git & Github','Docker','Turborepo','Github Actions']} color="red" sound={"crash"} />
          {/* 
          <SkillSet>
          <SkillElement label={"Java Core"} sound={"tom-3"}  color={'yellow'} />
          <SkillElement label={"Typescript"} color={'yellow'}  />
          </SkillSet>

          <SkillSet>
          <SkillElement label={"HTML5 & CSS"} sound={"tom-4"} color={'green'} />
          <SkillElement label={"Javascript"} color={'green'} />
          <SkillElement label={"Tailwind"} sound={"tom-2"} color={'green'} />
          </SkillSet>
          
          <SkillSet>
          <SkillElement label={"Git & GitHub"} sound={"kick-bass"} color={'blue'}  />
          <SkillElement label={"Docker"} sound={"kick-bass"} color={'blue'} />
          <SkillElement label={"Turborepo"} sound={"kick-bass"} color={'blue'} />
          <SkillElement label={"Github Actions"} sound={"kick-bass"} color={'blue'} />
          </SkillSet> */}
          
          
        </div>
      </div>
    </section>
  );
};

const SkillElement = ({ label, sound, color }) => {
  const handleClick = () => {
    const sd = new Audio(
      `../../public/sounds/${sound ? sound + ".mp3" : "crash.mp3"}`
    );
    setTimeout(() => sd.play(), 100);
  };

  
  
  return (
    // <div
    //   className={`md:w-52 w-auto p-5  rounded-md shadow-md active:scale-75 transition-all duration-100 ease-in text-xs md:text-lg ${color} border border-${color}`}
    //   onClick={handleClick}
    // >
    //   {label ? label : "Skill"}
    // </div>
    <button
      className={`md:w-52 w-auto p-5  rounded-md shadow-md active:scale-75 transition-all duration-100 ease-in text-xs md:text-lg hover:animate-bounce hover:my-3 ${color}`}
      onClick={handleClick}
    >
      {label ? label : "Skill"}
    </button>
  );
};

const SkillSet = ({ children , skills, color, sound }) => {
 
  return (
    <div className={`flex gap-2 justify-center flex-wrap items-center`}>
      {skills.map(skill => (
        <SkillElement color={color} label={skill} sound={sound} />
      ))}
    </div>
  );
};

export default Skills;
