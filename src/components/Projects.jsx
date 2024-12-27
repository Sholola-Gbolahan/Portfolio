import React from "react";

import { projects } from "../data";
import SectionTitle from "./SectionTitle";
import ProjectCards from "./ProjectCards";
import Tabs from "./Tab";
import WordpressList from "./WordpressList";
import SoftwareApplication from "./SoftwareApplication";

const Projects = () => {

  const tabData = [
    { id: 1, label: "Software Application", content: <SoftwareApplication/>},
    { id: 2, label: "Wordpress Site", content:  <WordpressList/> },

  ];
  
  return (
    <section className="py-20 align-element " id="projects">

      <SectionTitle text="Web creation" />
      <Tabs tabs = {tabData}/>
    
    </section>
  );
};

export default Projects;
