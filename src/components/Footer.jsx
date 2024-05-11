import React from 'react'
import {
    FaGithubSquare,
    FaInstagram,
    FaLinkedin,
    FaTwitterSquare,
  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex max-sm:flex-col md:flex-row justify-between py-8 px-12 items-center bg-emerald-700 text-slate-200  gap-4 '>
        <h1>Portfolio-V1 2024. All rights reserved.</h1>
        <div className="flex gap-x-4">
            <a href="https://github.com/Sholola-Gbolahan" target="_blank">
              <FaGithubSquare className=" h-8 w-8 text-emerald-200 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/sholola-gbolahan-887095191/" target="_blank">
              <FaLinkedin className=" h-8 w-8 text-emerald-200  hover:text-black duration-300" />
            </a>
            <a href="https://twitter.com/ShololaGbolahan" target="_blank">
              <FaTwitterSquare className=" h-8 w-8 text-emerald-200  hover:text-black duration-300" />
            </a>
            <a href="https://www.instagram.com/sholola_gbolahan/?hl=en" target="_blank">
              <FaInstagram  className=" h-8 w-8 text-emerald-200  hover:text-black duration-300" />
            </a>
          </div>
       <h1>Design By Sholola Gbolahan</h1>
    </div>
  )
}

export default Footer