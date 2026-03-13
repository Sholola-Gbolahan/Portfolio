import React from "react";
import { ProfilesPics } from "../assets";
import {
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24" id="home">
      <div className=" align-element grid md:grid-cols-2 items-center gap-24" >
        <article >
          <h1 className="lg:text-7xl text-3xl font-bold tracking-wider"> I'm Oluwagbolahan</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
           Web Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/Sholola-Gbolahan" target="_blank">
              <FaGithubSquare className=" h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/sholola-gbolahan-887095191/" target="_blank">
              <FaLinkedin className=" h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://twitter.com/ShololaGbolahan" target="_blank">
              <FaTwitterSquare className=" h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.instagram.com/sholola_gbolahan/?hl=en" target="_blank">
              <FaInstagram  className=" h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>

        <article className="hidden md:block">
          <img src={ProfilesPics} alt="Profile Pics"  className="rounded-3xl border-8 border-gray-800"/>
        </article>
      </div>
    </div>
  );
};

export default Hero;
