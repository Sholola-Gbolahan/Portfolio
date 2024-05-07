import React from "react";

import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { jsx } from "react/jsx-runtime";

const ProjectCards = ({ url, img, github, title, text, stack,year,madeAt }) => {
  return (
    <article className=" bg-white rounded-lg shadow-md block hover:shadow-xl duration-300 ">
      <img
        src={img}
        alt={title}
        className="w-full object-fill rounded-t-lg h-64"
      />

      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>
        {/* Stack */}
        <div className="mt-5 flex gap-x-2 overflow-auto">
          {Array.isArray(stack) &&
            stack.map(
              (
                item,
                index // Check if stack is an array
              ) => (
                <span
                  key={index}
                  className="inline-block bg-emerald-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {item}
                </span>
              )
            )}
        </div>

        <div className="flex gap-3 mt-5">
          <div>
            <h2 className="font-semibold ">
              Year:
              <span className=" ml-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
                {year}
              </span>
            </h2>
          </div>
          <div>
            <h2 className="font-semibold normal-case">
              Made at :
              <span className="ml-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
                {madeAt}
              </span>
            </h2>
          </div>
        </div>

        <div className="mt-5 flex gap-x-4 ">
          <a href={url} target="_blank" >
            <TbWorldWww className=" h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href={github} target="_blank" >
            <FaGithubSquare className=" h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCards;
