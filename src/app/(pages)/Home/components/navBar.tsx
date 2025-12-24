"use client";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { RiGalleryFill } from "react-icons/ri";
import { FaQuestion, FaUserAlt } from "react-icons/fa";
import { BiSolidCategory, BiSolidOffer } from "react-icons/bi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

     {/* Mobile Menu Icon */}




     
        <div
          className= {` 
                       absolute
                       w-[35%]
                       top-0
                       right-0
                       h-screen
                       bg-[var(--text)]
                       text-[var(--background)] 
                       flex 
                       flex-col 
                       pt-23
                       
                       gap-7
                       text-[18px]
                       p-5
                       
                       transition-all 
                       duration-300 ${
                      isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
        >



          <Link href="#about" className="flex flex-row-reverse items-center gap-2" ><FaQuestion />
           عن حرفة

          </Link>
          <Link href="#gallery"  className="flex flex-row-reverse items-center gap-2"> <RiGalleryFill/>
          معرضنا
 

          </Link>
          <Link href="#cats" className="flex flex-row-reverse items-center gap-2"><BiSolidCategory />
          الاقسام
           </Link>
          <Link href="#offers" className="flex flex-row-reverse items-center gap-2"><BiSolidOffer /> 
           العروض </Link>

          <Link href="#offers" className="flex flex-row-reverse items-center gap-2"><FaUserAlt/> 
          سجل معنا</Link>

         
          
        </div>

   <nav className="h-full w-full flex justify-center justify-end items-center md:justify-center font-[var(--bodyFont)]">

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-3xl text-[var(--text)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-15 text-[var(--text)] w-full h-full md:items-center md:justify-center text-[20px] max-lg:text-[18px] max-lg:gap-10 ">
          <li><Link href="about">عن حرفة</Link></li>
          <li><Link href="gallery">معرضنا</Link></li>
          <li><Link href="cats">الاقسام</Link></li>
          <li><Link href="offers">العروض</Link></li>
        </ul>

    </nav>

    
    
    </>
   
  );
}
