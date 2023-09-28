'use client'
import React from 'react'
import { name , about} from '@/constants'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'Kasi Nathan S J',
        1000, 
        'Web Developer',
        1000,
        'Mobile Developer',
        1000,
        'Competitive Coder',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className=' col-span-7 place-self-center text-center sm:text-left'>
        <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
        <span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 '>
        {`Hello i'm `}
        </span>
        <ExampleComponent/>
        </h1>
        <p className='text-[#ADB7BE] text-lg lg:text-xl mb-6'>{about}</p>
        <div>
        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-4px  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'>
          <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
            DownLoad CV
          </span>
        </button>
        </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[400px] h-[400px] relative'>
          <Image 
          alt="photo" 
          src="/photo.png"  
          width={300} 
          height={300}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
