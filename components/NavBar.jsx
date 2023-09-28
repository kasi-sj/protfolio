'use client'
import React from 'react'

import { useState, useTransition } from 'react'
import { Bars3Icon , XMarkIcon } from "@heroicons/react/24/solid"
import Link from 'next/link'
const navLink = [
    {
        title:"About",
        path:"#about"
    },
    {
        title:"Projects",
        path:"#projects"
    },
    {
        title:"Contact",
        path:"#contact"
    }
]

const Nav = () => {
  const [navBarOpen , setNavBarOpen] = useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 bg-[#121212] bg-opacity-90 z-10'>
      <div className=' flex items-center justify-between mx-auto py-4'>
        <Link href={"/"} className=' text-2xl md:text-5xl mx-5 text-white font-semibold'>Logo</Link>
        <div className='menu block md:hidden mx-5'>
            {
                !navBarOpen ? (
                    <button onClick={()=>setNavBarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200  hover:text-white hover:border-white'>
                        <Bars3Icon className='h-5 w-5 '/>
                    </button>
                ) : (
                    <button onClick={()=>setNavBarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200  hover:text-white hover:border-white'>
                        <XMarkIcon className='h-5 w-5 '/>
                    </button>
                )
            }
        </div>
        <div className='menu hidden md:block md:w-auto w-1 px-24' id="navbar">
            <ul className='flex w-full space-x-8'>
                {navLink.map((item,index)=>(
                    <li key={index}>
                        <NavLink  href={item.path} title={item.title} />
                    </li>
                ))}
            </ul>
        </div>
      </div>
      {navBarOpen && <MenuOverlay/>}
    </nav>
  )
}

const NavLink = ({href , title}) => {
    return (
        <Link href={href} className='block py-2 pl-3 text-[#ADB&BE] sm:text-xl rounded md:p-0 hover:text-white' >
            {title}
        </Link>
    )
}

const MenuOverlay = () => {
    return (
        <ul className='flex flex-col py-4 items-center'>
            {navLink.map((item,index)=>(
                <li key={index}>
                    <NavLink  href={item.path} title={item.title} />
                </li>
            ))}
        </ul>
    )
  }

export default Nav
