'use client'
import React from 'react'
import { name , about} from '@/constants'
import Image from 'next/image'
import { motion } from 'framer-motion'
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
  const fileId = "1voz8Ws58IzBC9-fHcJx3aK1SqvIpOUgY";
  
  const handleDownload = () => {
    const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const anchor = document.createElement("a");
    anchor.href = downloadLink;
    anchor.download = "your-file-name.ext"; // Replace with your desired filename
    anchor.click();
  };

  return (
    <section className='lg:py-16' >
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <motion.div initial={{opacity:0 , scale:0}} animate={{opacity:1 ,scale:1}} transition={{duration:0.5}}  className=' col-span-8 place-self-center text-center sm:text-left justify-self-start'>
        <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
        <span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 '>
        {`Hello i'm `}
        </span>
        <ExampleComponent/>
        </h1>
        <p className='text-[#ADB7BE] text-lg lg:text-xl mb-6'>{about}</p>
        <div>
        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white'>Hire Me</button>
        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-4px  bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500' onClick={handleDownload}>
          <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
            DownLoad CV
          </span>
        </button>
        </div>
        </motion.div>
        <motion.div initial={{opacity:0 , scale:0}} animate={{opacity:1 ,scale:1}} transition={{duration:0.8}}   className='col-span-4 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full z-0 bg-[#181818] w-[400px] h-[400px] relative'>
          <Image 
          alt="photo" 
          src="/photo.png"  
          width={300} 
          height={300}
          className='absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
