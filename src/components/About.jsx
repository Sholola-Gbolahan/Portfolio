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
                    Detailed oriented and qualified Fronted Developer able to collaborate with a team, 2+ years experience with JavaScript Libraries React, Bootstrap and Wordpress, able to work in an agile scrum environment. I help companies like Gurugeeks(IT), Farmrequest, to build client-side web applications and to translate UI/UX wireframe (Like Figma) for companies and customer needs into functional, user friendly, and appealing interactive applications
                </p>
            </article>

        </div>
        

    </section>
  )
}

export default About