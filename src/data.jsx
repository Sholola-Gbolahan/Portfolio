import { nanoid } from "nanoid";
import React from "react";
import { FaHtml5, FaJs, FaReact, FaWordpress } from "react-icons/fa";
import MixMaster from "./assets/image/MixMaster.jpg";
import Youtube from "./assets/image/Youtube.png";
import Cart from "./assets/image/Cart.png";
import ERP from "./assets/image/ERP.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "Wordpress",
    icon: <FaWordpress className="h-16 w-16 text-emerald-500" />,
    text: " With advanced WordPress skills, I expertly build dynamic and static content, crafting engaging websites that blend functionality with aesthetics. ",
  },
];

export const projects = [
  {
    id: nanoid(),
    title: "Be-Global ERP System ",
    img: ERP,
    url: "https://www.begnh.com/customer",
    year: "2023",
    madeAt: "Gurugeeks",
    github: "https://github.com/Gurugeeksroyalty-ltd/Be-Global_Frontend",
    text: "An ERP system that oversees the operations of restaurants, studios, and short-term rental bookings",
    stack: ["React", "Redux","scss"],
  },
  {
    id: nanoid(),
    title: "Youtube Search",
    img: Youtube,
    url: "https://youtube-search-seven-mu.vercel.app/",
    github: "https://github.com/Sholola-Gbolahan/YouTube-Browser-Application",
    year: "2023",
    madeAt: "",
    text: "This project utilizes the YouTube free API to watch YouTube videos based on search queries.",
    stack: ["react", "Axios","Semantic Ui"],
  },
  {
    id: nanoid(),
    title: "Mix Master Cocktail",
    img: MixMaster,
    url: "https://mix-master-eight.vercel.app/",
    github: "https://github.com/Sholola-Gbolahan/MixMaster",
    year: "2024",
    madeAt: "",
    stack: ["react","Styled Component"],
    text: "the ultimate party sidekick app that fetches cocktails from the hilarious Cocktails DB API.",

  },
 
  {
    id: nanoid(),
    title: "Products Cart",
    img: Cart,
    url: "https://product-cart-puce.vercel.app/ ",
    github: "https://github.com/Sholola-Gbolahan/Redux-Toolkit",
    year: "2024",
    text: "a product cart that enables users to effortlessly remove, increase quantities, and clear items.",
    stack: ["react", "Redux", "Axios"],
  },
];
