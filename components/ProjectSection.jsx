'use client'
import {CodeBracketIcon , EyeIcon } from "@heroicons/react/24/outline"
import Link from 'next/link'
import { useState,useRef } from 'react'
import { motion , useInView } from 'framer-motion'

const ProjectData = [
    {
        id:1,
        title:"Promptopia Website",
        description:"it is a web application where you can create your own prompt and share it with your friends.",
        image:"/project1.png",
        git:"https://github.com/kasi-sj/promtopia",
        previewURL:"https://promtopia-11nm8sa4w-kasi-sj.vercel.app/",
        tag: ["All" , "Web" ]
    },
    {
        id:2,
        title:'Portfolio',
        description:"It is a portfolio website which is made using react and tailwindcss.",
        image : "/project3.png",
        git:"https://github.com/kasi-sj/protfolio-1",
        previewURL:"https://protfolio-1-hp0qmw3h4-kasi-sj.vercel.app/",
        tag:["All" , "Web" , "Ui/Ux"]
    },
    {
        id:3,
        title:"Nike clone",
        description:"It is a clone of nike website which is made using react and tailwindcss.",
        image:"/project2.png",
        git:"https://github.com/kasi-sj/nike-c",
        previewURL:"https://nike-c-cx3b-o9j833kun-kasi-sj.vercel.app/",
        tag:["All"  , "Ui/Ux"]
    },
    {
        id:4,
        title:"Job Magnet",
        description:"JOB SEARCH PLATFORM Utilized NEXT.js for the front end and MongoDB for the database.Users have the flexibility to manually enter job search detailsor opt for automated extraction by uploading their resume. ",
        image:"/jobMagnet.png",
        git:"https://github.com/kasi-sj/jobmagnet",
        previewURL:"https://jobmagnet.vercel.app/",
        tag:["All" , "Web" , "AI" ]
    }
]

const ProjectCard = ({ imgUrl , title , description , gitURL , previewURL}) => {
  return (
    <div className='p-4 w-[400px]' >
    <div className='h-52 md:h-72 rounded-t-xl relative group' style={
        {
            background:`url(${imgUrl})` ,
            backgroundSize:'cover',
            backgroundPosition:'center center',
            backgroundRepeat:'no-repeat'
        }
        }>
      <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
        <Link href={gitURL} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
            <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE]  cursor-pointer  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white'/>
        </Link>
        <Link href={previewURL} className='h-14 w-14 ml-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
            <EyeIcon className='h-10 w-10 text-[#ADB7BE]  cursor-pointer  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white'/>
        </Link>
      </div>
    </div>
    <div className="text-white rounded-b-xl bg-[#181818] mt-3 py-6 px-4">
        <h5 className='font-semibold text-xl mb-2' >{title}</h5>
        <p  className='text-[#ADB&BE]'>{description}</p>
    </div >
    </div>
  )
}

const ProjectTag = ({name , onClink , isSelected}) => {
    const buttonStyle = isSelected ? "text-white bg-primary-500":"text-[#ADB7BE] border-slate-600 hover:border-white"
    return(
        <button onClick={onClink} className={` rounded-full border-2 px-6 py-3 cursor-pointer ${buttonStyle}`}>{name}</button>
    )
}

const ProjectSection = () =>{
    const [tag , setTag] = useState("All");
    const ref = useRef(null);
        
    const handleTagChange  = (newTag) => {
        setTag(newTag);
    };

    const cardVariants = {
        initial:{
            opacity:0,
            y:100
        },  
        animate:{
            opacity:1,
            y:0,
        }   
    }

    return (
        <section id="projects" >
        <div >
            <h2 className='text-4xl font-bold text-white mb-4 mt-10 text-center' >My Projects</h2>
            <div className='text-white flex justify-center items-center gap-2 py-6'>
                <ProjectTag name={"All"} onClink={()=>handleTagChange("All")} isSelected={tag=="All"}/>
                <ProjectTag name={"Web"} onClink={()=>handleTagChange("Web")} isSelected={tag=="Web"}/>
                <ProjectTag name={"Ui/Ux"} onClink={()=>handleTagChange("Ui/Ux")} isSelected={tag=="Ui/Ux"}/>
                <ProjectTag name={"AI"} onClink={()=>handleTagChange("AI")} isSelected={tag=="AI"}/>
            </div>
            <ul  ref={ref} className='flex flex-wrap justify-center' >{ProjectData.map((data , index)=>(
                data.tag.includes(tag) &&
                <motion.li variants={cardVariants} initial="initial" animate={inView ? "animate" : "initial"} transition={{duration:0.3,delay:index*0.4}} key={data.id} >
                    <ProjectCard  title={data.title} imgUrl={data.image} description={data.description} gitURL={data.git} previewURL={data.previewURL}/>
                </motion.li>
            ))}</ul>
        </div>
        </section>
    )
}



export default ProjectSection
