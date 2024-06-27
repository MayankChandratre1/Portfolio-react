import React from "react";
import profile from "../assets/Profile.png";
import MovieHubProject from "../assets/MovieHubProject.png";
import NetflixProject from "../assets/NetflixProject.png";
import NotesProject from "../assets/NotesProject.png";
import PaytmProject from "../assets/PaytmProject.png";
import TodoProject from "../assets/TodoProject.png";
import WeatherProject from "../assets/WeatherProject.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex  items-center justify-center py-12 bg-gradient-to-b  from-gray-700 to-gray-600"
    >
      <div className="max-w-screen px-12 text-center text-white">
        <h2 className="text-4xl font-bold mb-5">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-gray-100  text-white rounded-xl p-4 shadow-lg flex flex-col  items-center bg-gradient-to-br from-gray-500 to-gray-600  justify-between ">
            <h3 className="text-2xl font-bold my-4">Todo Web App</h3>
            <p className="mb-2 text-justify">
              I made this Todo list project with CSS, EJS, ExpressJs. You can
              add daily tasks as well as your work tasks and mark them as
              completed once done.
            </p>
            <img
              className="w-[100%] h-52 object-cover object-left rounded-xl my-2 shadow-lg"
              src={TodoProject}
              alt=""
            />
            <a
              href="https://github.com/MayankChandratre1/05_Todo"
              className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-xl  block w-full mt-2"
            >
              View Code &rarr;
            </a>
          </div>

          <div className="bg-gray-100  text-white rounded-xl p-4 shadow-lg flex flex-col  items-center bg-gradient-to-br from-gray-500 to-gray-600  justify-between">
            <h3 className="text-2xl font-bold my-4">Payments App</h3>
            <p className="mb-2 text-justify">
              It's a MERN stack project with JWT authentication. User can SignUp & LogIn and send simulated money to other signed up users.
              It uses zod for input validation.
            </p>
            <img
              className="w-[100%] h-52 object-cover object-left rounded-xl my-2"
              src={PaytmProject}
              alt=""
            />
            <a
              href="https://github.com/MayankChandratre1/paytm-cohort"
              className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-xl  block w-full mt-2"
            >
              View Code &rarr;
            </a>
          </div>

          <div className="bg-gray-100  text-white rounded-xl p-4 shadow-lg flex flex-col  items-center bg-gradient-to-br from-gray-500 to-gray-600  justify-between">
            <h3 className="text-2xl font-bold my-4">Notes App</h3>
            <p className="mb-2 text-justify">
            I made this Notes App project with CSS, EJS, ExpressJs. User can create notes i.e. txt files and perform CRUD operations on it.
            </p>
            <img
              className="w-[100%] h-52 object-cover object-left rounded-xl my-2"
              src={NotesProject}
              alt=""
            />
            <a
              href="https://github.com/MayankChandratre1/04_NotesApp"
              className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-xl  block w-full mt-2"
            >
              View Code &rarr;
            </a>
          </div>

          <div className="bg-gray-100  text-white rounded-xl p-4 shadow-lg flex flex-col  items-center bg-gradient-to-br from-gray-500 to-gray-600  justify-between">
            <h3 className="text-2xl font-bold my-4">Weather App</h3>
            <p className="mb-2 text-justify">
            Made for practicing the API and Async JS with basic HTML, CSS for frontend. Used OpenWeatherMap API. Icons downloaded from Flaticon site.
            </p>
            <img
              className="w-[100%] h-52 object-cover object-center rounded-xl my-2"
              src={WeatherProject}
              alt=""
            />
            <a
              href="https://github.com/MayankChandratre1/02_WeatherApp"
              className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-xl  block w-full mt-2"
            >
              View Code &rarr;
            </a>
          </div>

          <div className="bg-gray-100  text-white rounded-xl p-4 shadow-lg flex flex-col  items-center bg-gradient-to-br from-gray-500 to-gray-600  justify-between">
            <h3 className="text-2xl font-bold my-4">MovieHub Website</h3>
            <p className="mb-2 text-justify">
            A Project in HTML CSS and Vanilla Js. It uses LocalStorage Api of JS to simulate the authentication to certain point.
            </p>
            <img
              className="w-[100%] h-52 object-cover object-center rounded-xl my-2"
              src={MovieHubProject}
              alt=""
            />
            <a
              href="https://github.com/MayankChandratre1/MovieHub"
              className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-xl  block w-full mt-2"
            >
              View Code &rarr;
            </a>
          </div>
          
          {/* Add more projects as needed */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
