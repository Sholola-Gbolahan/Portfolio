/* eslint-disable react/prop-types */
import React, { useState } from "react"

import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"
import { TbWorldWww } from "react-icons/tb"
import { jsx } from "react/jsx-runtime"

const ProjectCards = ({
  url,
  img,
  github,
  title,
  text,
  stack,
  year,
  madeAt,
}) => {

  const [readMore, setReadMore] = useState(false)
  return (
    <article className="px-3 py-7 block duration-300 ">
      <a href={url} target="_blank">
      <img
        src={img}
        alt={title}
        className="w-full object-fill rounded-t-lg h-64"
      />
      </a>

      <div className="capitalize py-2 pt-8">
        <h2 className="text-xl tracking-wide font-medium text-center  ">
          {title}
        </h2>
        <p className="mt-4 text-md text-slate-700 leading-normal text-center">
        {readMore ? text : `${text.substring(0, 150)}...`}<br/>
        <button className="text-emerald-400 font-semibold" onClick={() => setReadMore(!readMore)}>
            {readMore ? " show less" : " read more"}
          </button>
        </p>
        {/* Stack */}
        <div className="mt-5 flex gap-x-2 justify-center overflow-auto">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block bg-emerald-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-5 justify-center">
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

        <div className="mt-5 flex gap-x-4 justify-center">
          <a href={url} target="_blank">
            <TbWorldWww className=" h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href={github} target="_blank">
            <FaGithubSquare className=" h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCards
