import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
      <div>
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB&BE] mb-4 max-w-md'>{" "}
            I'm currently looking for new oppertunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to you! 
        </p>
        <div className='socials flex flex-row gap-2'>
            <Link hef="linkedin.com" >
                <Image src="linkedin.png" alt="linkedin" />
            </Link>
            <Link hef="github.com" >
                <Image src="github.png" alt="github" />
            </Link>
        </div>
      </div>
      <div>
        <form>
            
        </form>
      </div>
    </section>
  )
}

export default EmailSection
