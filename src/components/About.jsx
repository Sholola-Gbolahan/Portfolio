import React from 'react'

import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="bg-white py-20"  id="about">
        <div className='align-element grid md:grid-cols-2 gap-16 items-center'>
            <img src={aboutSvg} alt="about" className='w-full h-64' />
            <article>
                <SectionTitle text="Little About Me" />
                <p className='text-slate-600 mt-8 leading-loose'>
                Results-driven Frontend Developer with 2+ years of experience in JavaScript libraries (React,Bootstrap, Tailwind css, Styled Components, WordPress) and agile Scrum environments. Proven ability to collaborate with teams and deliver high-quality client-side web applications that meet customer needs. Skilled in translating UI/UX wireframes into functional, user-friendly, and visually appealing interactive applications. Proficient in tools like Figma. Dedicated to delivering exceptional results and driving business success.
                </p>
            </article>

        </div>
        

    </section>
  )
}

export default About