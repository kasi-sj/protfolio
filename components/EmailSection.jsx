'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const EmailSection = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, subject, message } = e.target.elements
    const res = await fetch('/api/send', {
      body: JSON.stringify({
        email: email.value,
        subject: subject.value,
        message: message.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    const result = await res.json()
    console.log(result)
  }

  return (
    <section className='relative  grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] absolute  from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg  transform   -translate-x-1/2 top-3/4 -left-4 '>          </div>
      <div className='z-10'>
      
        <h5 className='text-xl font-bold text-white my-2'>{"Let's Connect"}</h5>
        <p className='text-[#ADB&BE] mb-4 max-w-md'>{" "}
            {"I'm currently looking for new oppertunities, my inbox is always open."+
            "Whether you have a question or just want to say hi, I'll try my best to get back to you! "}
        </p>
        <div className=' mt-5 socials flex flex-row gap-2'>
            <Link href="linkedin.com" >
                <Image src="/linkedin.png" alt="linkedin" width={30} height={30} />
            </Link>
            <Link href="github.com" >
                <Image src="/github.png" alt="github" width={30} height={30} />
            </Link>
        </div>
      </div>
      <div>
        <form className=' flex flex-col ' onSubmit={handleSubmit}>          
            
          <div className='mb-6'>
            <label htmlFor='email' type='email' className='text-white block  text-sm font-medium mb-2' >Your email</label>
            <input id='email' type="email" required placeholder='youremail@gmail.com' className= 'bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 '/>
          </div>
          <div className='mb-6'>
            <label htmlFor='subject' type='text' className='text-white block  text-sm font-medium mb-2' >Subject</label>
            <input id='subject' type="text" required placeholder='Just say hi' className= 'bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
          </div>
          <div className='mb-6' >
            <label htmlFor='message' type='text' className='text-white block  text-sm font-medium mb-2' >Message</label>
            <textarea id='message' type="text" required placeholder='Your message' className= 'bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
          </div>
          <div>
            <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium  w-full px-5 py-2.5 rounded-lg'>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default EmailSection
