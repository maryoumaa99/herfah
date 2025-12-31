
"use client"

import Banner from "./components/Hero";
import NewMember from "./components/Account";

import Cats from "./components/Cats";
import Image from "next/image";
import Navbar from "@/app/components/navBar";
import Link from "next/link";
import { RiAccountCircleFill } from "react-icons/ri";
import { useEffect, useState } from "react";




export default function SetHome() {

    const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { 
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


   return(
    <>
        
         {/* NAV BAR */}
        <div className={`
        flex items-center fixed h-[10vh] w-full px-4 py-5 z-20 transition-all duration-500
        ${scrolled ? "bg-gradient-to-b  from-[var(--background)]/70 via-[var(--background)]/50 to-transparent shadow-md" : "bg-transparent shadow-none"}
      `}>

            {/* MINI Logo */}
            <div className="w-[10%] h-[7vh] ">
                <Image width={100} height={100}
                src="/logo/wCLogo.png"
                alt="logo"
                className="object-contain w-full h-full"
                />
            </div>

            {/* NAV LINKS CONTAINER */}
            <div className=" w-full h-full flex justify-center items-center  ">
                {/* NAV LINKS */}
                <div className="md:w-[50%] w-full  h-[7vh] flex text-center  md:justify-center md:items-center ">
                            <Navbar /> 
                </div>
            </div>

            <div className="login  flex justify-end items-end  hidden md:block max-w-[10%] max-lg:w-[7%] mr-5">
                        {/* Account Icon */}
                            <Link href="#account" className="cursor-pointer text-3xl text-[var(--text)] my-auto   ">
                            <RiAccountCircleFill />
                            </Link>
                        </div>
            
        </div>
    
        <div className="banner-wrapper relative h-screen max-md:mb-[10vh] ">
            <Banner/>
        </div>
        

        <Cats/>
        <NewMember/>
        
    </>
   )
}