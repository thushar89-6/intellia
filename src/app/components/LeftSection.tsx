import React from 'react'
import Logo from './Logo'
import Card from './Card'
import MovingComponent from './MovingComponent'

export default function LeftSection() {
  return (
    <div className=' lg:px-10 px-4 pt-10 flex flex-col gap-16 max-sm:gap-10'>
       <Logo />
       <div>
            <h1 className=' text-5xl font-semibold leading-tight'>Pharma Intelligence Powered by AI</h1>
            <p className=' text-[#9b939a] mt-4 lg:mr-10 font-semibold'>Access comprehensive insights across multiple disease areas
            through our Al-powered competitive intelligence platform.</p>
       </div>
       {/* <div className=' flex overflow-hidden gap-8 transition-transform duration-1000 hover:translate-x-60'>
        
       </div> */}
       <MovingComponent />
    </div>
  )
}
