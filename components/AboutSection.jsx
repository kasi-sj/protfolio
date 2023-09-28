'use client'
import { useState, useTransition } from 'react'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'  

const TAB_DATA = [
    {
        title:"Skills",
        id:"skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express</li>
                <li>React.js</li>
                <li>Next.js</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content: (
            <ul className='list-disc pl-2'>
                <li>PSNA college of Engineering and Technologies </li>
            </ul>
        )
    },
    {
        title:"Certifications",
        id:"certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Meta Front End Developer</li>
                <li>Flutter Mobile App Developer</li>
                <li>Full Stack Developer Udemy</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()
    const handleTabChange = (id)=>{
        startTransition(()=>{
            setTab(id);
        })
    }
    return (
        <section className='mt-24' id="about"> 
        <div className=' grid grid-cols-2 gap-8'>
            <div className='flex justify-center max-lg:col-span-2 text-center px-10 '>
                <Image alt="computer" width={500} height={500} src="/computer.jpeg" />
            </div>
            <div className='flex flex-col justify-start items-start max-lg:col-span-2'>
                <h2 className='text-4xl font-bold text-white mb-4 '>About Me</h2>
                <p className='text-base md:text-lg' >Hi, I’m Kasi Nathan S J, I’m a competitive programmer with a keen interest in web development and cybersecurity. I have strong skills in Java and Python programming languages as well as SQL queries. My passion for coding has led me to explore various domains of computer science. I am always eager to learn new technologies and apply them to real-world problems. I am currently seeking opportunities to work on challenging projects that will help me grow as a developer.</p>
                <div className='flex flex-row mt-8'>
                    <TabButton active={tab=="skills"} selectTab={()=>handleTabChange("skills")} >skills</TabButton>
                    <TabButton active={tab=="education"} selectTab={()=>handleTabChange("education")} >education</TabButton>
                    <TabButton active={tab=="certifications"} selectTab={()=>handleTabChange("certifications")} >certifications</TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t)=>t.id==tab).content}

                </div>
            </div> 
        </div>
        </section>
    )
}

const TabButton = ({active , selectTab , children}) =>{
    const buttonClasses = active ? 'text-white  ' : 'text-[#ADB7BE]'
    const variants = {
        default:{width:"0%"},
        active:{width:"calc(100% - 0.75rem)"} 
    }
    return (
        <button onClick={selectTab} >
            
                <p className={`mr-3 font-semibold hover:text-white ${buttonClasses} `} >{children}</p>
                <motion.div 
                animate={active ? "active" : "default"}
                variants={variants}
                className='h-1 bg-primary-500 rounded-full mt-2 mr-3' 
            ></motion.div>
        </button>
    )
}

export default AboutSection
