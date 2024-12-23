import React, { useState } from "react";
import MovieHubProject from "../assets/MovieHubProject.png";
import NotesProject from "../assets/NotesProject.png";
import PaytmProject from "../assets/PaytmProject.png";
import TodoProject from "../assets/TodoProject.png";
import WeatherProject from "../assets/WeatherProject.png";
import ChatApp from "../assets/ChatApp.png";
import NewProjectCard from "./NewProjectCard";

const projects = [
  {
    title:"Typora",
    description:"A Full Stak Blog app made with NextJS and Postgres with Typescript.",
    thumbnail:"https://res.cloudinary.com/dvsl1aslo/image/upload/v1734625982/ddra3uaqdmii619eupee.png",
    tech:["NextJs","Typescript","Prisma","Postgres","AuthJs","TailwindCss"],
    live:"https://typora-nine.vercel.app/",
    github:"https://github.com/MayankChandratre1/typora"
  },{
    title:"AI Chat App",
    github:"https://github.com/MayankChandratre1/chat-app-firebase",
    live:"https://chatapp-4db2b.web.app/",
    tech:["NextJS","Firebase","Typescript","ShadcnUI","Gemini AI"],
    description:"A chat app made with firebase featuring an AI partner for you.",
    thumbnail:"https://res.cloudinary.com/dvsl1aslo/image/upload/v1734626355/xgcvav4jdsqhojsmirwn.png"
  },
  {
    title:"Chat App",
    github:"https://github.com/MayankChandratre1/chat-app-2.0",
    tech:["NextJS","Typescript","Web Sockets","Docker","Azure"],
    description:"A chat app made with NextJS and websockets and containarized with Docker",
    thumbnail:ChatApp
  }
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex  items-center justify-center py-12 bg-gradient-to-b  from-gray-700 to-gray-600"
    >
      <div className="max-w-screen px-12 text-center text-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-5">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* <ProjectCard
            title={"The Chat App"}
            image={ChatApp}
            repo={"https://github.com/MayankChandratre1/chat-app-2.0"}
            tech={
              "NextJs, Websockets, Docker, Turborepo, Github Actions, Azure VM"
            }
          >
            This is a Full Stack + DevOps project. Create an account, put on a
            profile picture, create chat rooms join members and chat in real
            time.
          </ProjectCard>

          <ProjectCard
            title={"Todo Web App"}
            image={TodoProject}
            repo={"https://github.com/MayankChandratre1/05_Todo"}
            tech={"MongoDB, Javascript, EJS, JWT"}
          >
            I made this Todo list project with CSS, EJS, ExpressJs. You can add
            daily tasks as well as your work tasks and mark them as completed
            once done.
          </ProjectCard>

          <ProjectCard
            title={"Payments App"}
            image={PaytmProject}
            repo={"https://github.com/MayankChandratre1/paytm-cohort"}
            tech={"React, MongoDB, Express, Tailwind"}
          >
            It's a MERN stack project with JWT authentication. User can SignUp &
            LogIn and send simulated money to other signed up users. It uses zod
            for input validation.
          </ProjectCard>

          <ProjectCard
            title={"Notes App"}
            image={NotesProject}
            repo={"https://github.com/MayankChandratre1/04_NotesApp"}
            tech={"EJS, Javascript, MongoDB, JWT"}
          >
            I made this Notes App project with CSS, EJS, ExpressJs. User can
            create notes i.e. txt files and perform CRUD operations on it
          </ProjectCard>

          <ProjectCard
            title={"Weather App"}
            image={WeatherProject}
            repo={"https://github.com/MayankChandratre1/02_WeatherApp"}
            tech={"Javascript, HTML, CSS, APIs"}
          >
            Made for practicing the API and Async JS with basic HTML, CSS for
            frontend. Used OpenWeatherMap API. Icons downloaded from Flaticon
            site.
          </ProjectCard>

          <ProjectCard
            title={"Movie Hub"}
            image={MovieHubProject}
            repo={"https://github.com/MayankChandratre1/MovieHub"}
            tech={"Javascript, HTML, CSS"}
          >
            A Project in HTML CSS and Vanilla Js. It uses LocalStorage Api of JS
            to simulate the authentication to certain point.
          </ProjectCard> */}


          {
            projects && projects.map(pr => (
              <NewProjectCard
              key={pr.title}
              title={pr.title}
              description={pr.description}
              thumbnail={pr.thumbnail}
              tech={pr.tech}
              github={pr.github}
              live={pr.live}
              />
            ))
          }

          {/* Add more projects as needed */}
        </div>
      </div>
    </section>
  );
};



const ProjectCard = ({ image, title, repo, children, tech }) => {
  return (
    <div className="bg-gray-100  text-white rounded-xl p-4 shadow-lg flex flex-col  items-center bg-gradient-to-br from-gray-500 to-gray-600  justify-between">
      <h3 className="text-lg md:text-2xl font-bold my-4">{title}</h3>
      <p className="mb-2 text-justify text-sm md:text-md hidden md:block">
        {children}
      </p>
      <div className="text-green-400  font-semibold text-left">{tech}</div>
      <img
        className="w-[100%] h-24 md:h-52 object-cover object-left-top rounded-xl my-2"
        src={image}
        alt=""
      />
      <a
        href={repo}
        className=" text-sm md:text-md text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-xl  block w-full mt-2"
        target="blank"
      >
        View Code &rarr;
      </a>
    </div>
  );
};

export default Projects;
