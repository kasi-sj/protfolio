'use client'
import React, { useState } from 'react'
import {CodeBracketIcon , EyeIcon } from "@heroicons/react/24/outline"
import Link from 'next/link'
const ProjectData = [
    {
        id:1,
        title:"react Promptopia Website",
        description:"project1 description",
        image:"/project1.png",
        git:"",
        previewURL:"",
        tag: ["All" , "Web"]
    },
    {
        id:2,
        title:'react Portfolio Website',
        description:"project2 description",
        image : "/project1.png",
        git:"",
        previewURL:"",
        tag:["All" , "Web"]
    },
    {
        id:3,
        title:"react Nike clone",
        description:"project3 description",
        image:"/project2.png",
        git:"",
        previewURL:"",
        tag:["All" , "Web" , "Ui/Ux"]
    }
]

const ProjectCard = ({ imgUrl , title , description , gitURL , previewURL}) => {
  return (
    <div className='p-4 w-[400px]'>
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
    const buttonStyle = isSelected ? "text-white bg-purple-500":"text-[#ADB7BE] border-slate-600 hover:border-white"
    return(
        <button onClick={onClink} className={` rounded-full border-2 px-6 py-3 cursor-pointer ${buttonStyle}`}>{name}</button>
    )
}

const ProjectSection = () =>{
    const [tag , setTag] = useState("All");
    const handleTagChange  = (newTag) => {
        setTag(newTag);
    };
    return (
        <div >
            <h2 className='text-4xl font-bold text-white mb-4 mt-10 text-center' >My Projects</h2>
            <div className='text-white flex justify-center items-center gap-2 py-6'>
                <ProjectTag name={"All"} onClink={()=>handleTagChange("All")} isSelected={tag=="All"}/>
                <ProjectTag name={"Web"} onClink={()=>handleTagChange("Web")} isSelected={tag=="Web"}/>
                <ProjectTag name={"Ui/Ux"} onClink={()=>handleTagChange("Ui/Ux")} isSelected={tag=="Ui/Ux"}/>
            </div>
            <div className='flex flex-wrap justify-center' >{ProjectData.map((data)=>(
                data.tag.includes(tag) && <ProjectCard key={data.id} title={data.title} imgUrl={data.image} description={data.description} gitURL={data.git} previewURL={data.previewURL}/>
            ))}</div>
        </div>
    )
}



export default ProjectSection
