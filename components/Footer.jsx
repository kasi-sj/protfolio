import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='footer border border-t-[#333533f] border-x-transparent'>
      <div className='container p-12 flex justify-between'>
        <span className='z-10' ><Image src="/logo.jpg" height={60} width={60} alt={"logo"} className='rounded-full'/></span>
        <p className='text-slate-600' >All rights reserved</p>
        <div className='text-slate-600 flex-col'> 
          <div>phone : +91 9080725679 </div>
          <div>Email : kasinathansj@gmail.com</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
