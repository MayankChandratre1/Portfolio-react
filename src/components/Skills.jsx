import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-gradient-to-t  from-gray-700 to-gray-600"
    >
      <div className="max-w-[70%] text-center text-white relative">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>

        <div className="absolute -rotate-[30deg] -left-10 -top-5 italic text-red-400 ">
          It's a <span className="bg-white bg-opacity-10">DRUM</span>, Make some
          sound <br /> <div className="animate-bounce">&darr;</div>
        </div>
        <div className="flex flex-col justify-center gap-5">

          <SkillSet >
          <SkillElement label={"MERN Stack"} sound={"snare"}  />
          </SkillSet>

          <SkillSet> 
          <SkillElement label={"Problem Solving"} sound={"tom-1"}  />
          <SkillElement label={"DSA"} sound={"tom-1"}  />
          </SkillSet>
          

          <SkillSet>
          <SkillElement label={"HTML5 & CSS"} sound={"tom-4"} />
          <SkillElement label={"Javascript"}  />
          <SkillElement label={"Tailwind"} sound={"tom-2"}  />
          </SkillSet>

          <SkillSet>
          <SkillElement label={"Java Core"} sound={"tom-3"}  />
          <SkillElement label={"Typescript"}  />
          </SkillSet>

          <SkillSet>
          <SkillElement label={"Git & GitHub"} sound={"kick-bass"}  />
          </SkillSet>
          
          
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
    <div
      className={`md:w-52 w-auto p-5  rounded-md shadow-md active:scale-75 transition-all duration-100 ease-in text-xs md:text-lg border border-red-500 hover:bg-red-500`}
      onClick={handleClick}
    >
      {label ? label : "Skill"}
    </div>
  );
};

const SkillSet = ({ children }) => {
 
  return (
    <div className={`flex gap-2 justify-center flex-wrap items-center`}>
      {children}
    </div>
  );
};

export default Skills;
