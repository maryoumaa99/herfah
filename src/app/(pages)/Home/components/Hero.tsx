"use client"

import Image from "next/image"

import { RiAccountCircleFill } from "react-icons/ri"
import Link from "next/link"
import Navbar from "../../../components/navBar"
import HeroBannerMd from "@/app/components/heroBannerMd"
import HeroBannerSm from "@/app/components/heroBannerSm"


function Banner(){

    return(
        <>


         {/* BIG LOGO CONTAINER */}
        <div className="logoCont absolute 
                        w-[60%] 
                        h-[30%]
                        md:w-[40%]
                        xl:w-[30%]
                        top-1/2
                        left-1/2
                        -translate-x-1/2
                        -translate-y-1/2 z-10
                        "
            >
                <div  className="
                        mb-5
                        mx-auto
                        myMotion " >
                <Image  width={1000} height={1000}
                        src="/logo/wBigLogo.png"
                        alt="logo"
                        className="object-contain w-full h-full"
                    />

            
            </div>
            {/* BIG TEXT */}
            <div className="bigText mx-auto  text-center  ">
                <h2 className=" text-canter text-[10px]  text-[var(--text)] md:text-[0.7em] md:bottom-[20vh] xl:text-[1.2em] lg:text-[1em] ">
                      اول مجتمع عربي للحرف اليدوية و المشاريع الصغيرة في مصر 
                </h2>
            </div>

        </div>

  
            <div className="banner absolute w-screen h-screen top-0 left-0 max-md:hidden md:block">
                <HeroBannerMd/>
            </div>
            <div className="banner absolute w-screen h-screen top-0 left-0 md:hidden block">
                <HeroBannerSm/>
            </div>
            

        
          
       
        </>
    )
}

export default Banner