import { Github } from 'lucide-react';
import React from 'react';

const NewProjectCard = ({ title, github, live, thumbnail, description, tech }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg flex flex-col bg-white dark:bg-gray-800 overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative w-full flex-1 ">
        {/* Thumbnail */}
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{title}</h2>
        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{description}</p>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech && tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-white bg-blue-500 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors"
          >
           <Github size={24} color="#fff" /> 
          </a>
          {live && <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors"
          >
            Live Demo
          </a>}
        </div>
      </div>
    </div>
  );
};

export default NewProjectCard;
