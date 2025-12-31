

"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

const HeroBannerSm = () => {
     // BANNER IMAGES
        const bgPics =[ "/Images/1.png" ,
                        "/Images/2.jpg", 
                        "/Images/4.png",
                        "/Images/5.png",
                        "/Images/6.png" ]
    
        const [ index , setIndex ] = useState(0)
    
    
            useEffect(()=>{
                const interval = setInterval(() => {
                    setIndex((prev) => (prev+1) % bgPics.length)
                } , 4000)
    
                return () => clearInterval(interval)
            },[ bgPics.length ])
    
  return (
    <div>
        
                     <div className="picSlider relative overflow-hidden w-full h-screen">
                    {/* PIC FADE EFFECT */}
                            {bgPics.map((pic, i) => (
                                <Image width={1000} height={1000}
                                alt="catsAsBg"
                                key={i}
                                className={`object-cover  transition-opacity duration-700 absolute inset-0 w-full h-full ${
                                    i === index ? "opacity-100" : "opacity-0"
                                }`}
                                src={pic}
                                />
                            
                            ))}
                        <div className="absolute top-0 left-0 w-full min-h-full bg-black opacity-50"></div>
                        <div className="absolute inset-0 bg-gradient-to-b  from-[var(--background)]/40 via-[var(--background)]/20 to-[var(--background)]"></div>
        
                    </div>
      
    </div>
  )
}

export default HeroBannerSm
