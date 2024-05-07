import React from 'react'            
import {links} from '../data'

const Navbar = () => {
  return (
    <>
        <nav className= 'bg-black sticky top-0 z-20'>
            <div className='align-element py-2 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-6  justify-between'>
                <h2 className='text-3xl font-bold text-white '>
                    Web<span className='text-emerald-600'>Dev</span>
                </h2>

                <div className='flex gap-x-6'>
                    {links.map( (link) =>{
                    const{id,href,text} =link;
                    return <a 
                    key={id}
                     href={href} 
                     className='capitalize text-lg text-white tracking-wide hover:text-emerald-600 duration-500'>{text}</a>
                    })}
                </div>
                <div className='text-white'> 
                    <h4>08121622738</h4>
                    <h4>Shololagbolahan@gmail.com</h4>
                    
                </div>

            </div>
        </nav>
    </>

  )
}

export default Navbar