import React from 'react'

import { projects } from '../data'
import SectionTitle from './SectionTitle'
import ProjectCards from './ProjectCards'


const Projects = () => {
  return (
    <section className='py-20 align-element'  id="projects">
        <SectionTitle text="Web creation" />
        <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8 '>
           {projects.map((project) => {
                 return <ProjectCards key={project.id} {...project} />
            }) }

        </div>

    </section>
  )
}

export default Projects