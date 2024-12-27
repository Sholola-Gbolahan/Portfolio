import React from "react"
import { projects } from "../data"
import ProjectCards from "./ProjectCards"

const WordpressList = () => {
  // Filter projects with type "wordpress"
  const wordpressProjects = projects.filter((item) => item.type === "wordpress")

  return (
  
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6"> 
        {wordpressProjects.map((project) => (
            <ProjectCards {...project} key={project.id} />
        ))}
        </div>
  )
}

export default WordpressList
