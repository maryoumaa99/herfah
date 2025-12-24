
"use client"
import Navbar from "@/app/(pages)/Home/components/navBar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { cats } from "@/app/data/cats";
import Link from "next/link";




export default function SetBanner() {

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
            } , 3000)

            return () => clearInterval(interval)
        },[])


    
    // SCROLL ANIMATION

    const [ scroll , setScroll ] = useState(false)
    useEffect(()=>{
        const onScroll = () => {
            setScroll(window.scrollY > 5)
        }
        window.addEventListener("scroll" , onScroll)
        return () => window.removeEventListener("scroll" , onScroll)
    },[])

    const { scrollYProgress } = useScroll()

    const visibleCats = scroll ? cats : cats.slice(0, 3)
    
    

    // CHANGING CATS FROM COL TO ROW 

    // "when INITAIL IN MAX-MD MAKE => IT'S ALSO ROW , KEEP IT ROW IN MAX-MD"
    const [ isMobile , setIsMobile ] = useState(false)   // TO HOLD THE MD VALUE 
    useEffect(()=>{
        const check = () => { setIsMobile(window.innerWidth < 768)}
        check(); 
        window.addEventListener("resize" , check) // TO CHECK IF WE REACHED THE MD SIZE
        return () => window.removeEventListener("resize" , check)
    },[])


    const [ show , setShow ] = useState(false)
    useMotionValueEvent( scrollYProgress , "change", (v) => {
        setShow( v >= 0.25)
    })

    const scale = useTransform(scrollYProgress , [0 , 0.3] , [1 , 2.3])

    const cardWidth = useTransform(scrollYProgress , [0 , 0.3] , isMobile? ["230px" , "320px" ] :  ["40%" , "40%" ])
    const CatCardWidth = useTransform(scrollYProgress , [0 , 0.3] ,isMobile?  ["50%" , "40%" ] :  ["50%" , "300px" ])
    
    
    const cardContHeight = useTransform(scrollYProgress , [0 , 0.3] , isMobile? ["12vh" , "21vh" ] : ["18vh" , "22vh" ])
    
    const picHeight = useTransform(scrollYProgress , [0 , 0.3] , ["100%" , "70%" ])
    const y = useTransform(
        scrollYProgress,
        [0, 0.3],
        [0, -20] 
        )
    


    


    return(
        <>

        <div className=" relative w-full z-0 h-[110vh] overflow-x-hidden">

            {/* MAIN CONTAINER */}
            <div className="bgLayout relative w-full mx-auto ">

                <div className="bgFixed fixed inset-0 z-0">

                    {/* PIC FADE EFFECT */}
                    {bgPics.map((pic, i) => (
                        <div
                        key={i}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                            i === index ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ backgroundImage: `url(${encodeURI(pic)})` }}
                        ></div>
                    ))}

                    <div className="absolute top-0 left-0 w-full min-h-full bg-black opacity-70"></div>

                </div>
                
                {/* CONTAINER */}
                <div className="contaiiner relative w-full z-10 p-4 h-screen mx-auto ">

                    {/* NAV BAR */}
                    <div className="flex items-center sticky w-full h-[10vh]  relative 
                        ">

                        {/* MINI Logo */}
                        <div className="w-[10%] h-[7vh] ">
                            <img
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
                                        <div className=" text-3xl text-[var(--text)] my-auto   ">
                                        <RiAccountCircleFill />
                                        </div>
                                    </div>
                        
                        </div>


                    <div className="h-[20vh] xl:h-[17vh]"></div>

                    {/* PAGE CONTENT */}
                    <motion.div className="pageContent 
                    
                                    relative
                                    flex
                                    flex-col
                                    w-[100%]
                                    h-[55%]
                                    lg:h-[65%]
                                    gap-5"
                                    >
                            

                              {/* BIG LOGO CONTAINER */}
                            <motion.div className="logoCont  min-[1463px]:w-[85%] mx-auto z-10 min-[1971px]:w-[60%]  "
                                initial={{ opacity: 1 }}
                                animate={{ opacity: scroll ? 0 : 1  }} >
                                    <div  className="
                                            w-[50%] 
                                            mb-5
                                            mx-auto
                                            myMotion
                                            lg:w-[40%]
                                            
                                           
                                            " >
                                    <img
                                            src="/logo/wBigLogo.png"
                                            alt="logo"
                                            className="object-contain w-full h-full"
                                        />

                                
                                </div>
                                {/* BIG TEXT */}
                                <div className="bigText w-[70%] mx-auto  text-center  ">
                                    <h2 className=" text-canter text-[12px]  text-[var(--text)]  md:bottom-[20vh] xl:text-[1.5em] lg:text-[1.2em] 
                                                    ">  اول مجتمع عربي للحرف اليدوية و المشاريع الصغيرة في مصر </h2>
                                </div>

                            </motion.div>


                            <motion.div className={` w-[100%] h-auto items-center  flex 

                                                `} 
                                
                                >

                                  {/* CATS CONTAINER1 */}
                                <motion.div className= {
                                    `catsContainer
                                                absolute
                                                z-10
                                                h-[15vh]
                                                top-[35vh]
                                                 w-[60%]
                                                
                                                max-sm:h-[9vh]
                                                sm:top-[32vh]
                                                md:top-[40vh]
                                               
                                                xl:h-[18vh]
                                                
                                                flex 
                                                text-center 
                                                gap-2
                                                justify-center
                                                
                                                left-1/2
                                                -translate-x-1/2
                                                
                                                
                                                
                                                
                                               
                                                ${scroll
  ? "overflow-x-auto justify-start snap-x snap-mandatory touch-pan-x scrollbar-hide"
  : "justify-center"}
`
                                }
                                                
                                            style={{ scale,y , height : cardContHeight , width : cardWidth , overflowY: "visible" }}
                                            
                                                >

                                            {/* GETTING CATS FROM ARRAY */}
                                            {visibleCats.map( (category , id) => (

                                                // CATS CONTAINER
                                                <motion.div key={id} className="catPic min-w-[40%] h-[100%] text-[var(--background)] p-1  bg-[var(--text)] rounded"  
                                                            style={{width : CatCardWidth  }} whileHover={{ y: -8, boxShadow: "0px 8px 20px rgba(0,0,0,0.25)" }}
                                                                transition={{ type: "spring", stiffness: 300 }}
                                                            
                                                            
                                                            >

                                                    {/* CAT IMAGE CONTAINER */}
                                                    <motion.div className="div w-full h-[100%] " style={{height:picHeight }}    >
                                                        {/* CAT IMAGE */}
                                                         <img src={category.catImages[0]} alt={category.catName}
                                                              className="object-cover w-full h-full rounded " />

                                                    </motion.div>
                                                   
                                                {/*CAT TITLE & DESCRIPTION */}
                                                <AnimatePresence >
                                                {show && (
                                                    <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                                    >
                                                    <h2 className="text-[16px]  mt-2 ">{category.catName}</h2>
                                                    <p className="text-[7px]">{category.describtion}</p>
                                                    </motion.div>
                                                )}
                                                </AnimatePresence>
                                                </motion.div>
                                                )
                                            )}


                                        </motion.div>

                                       
                                
                            </motion.div>
                             <motion.div className="  items-end h-[10vh] bottom-0 absolute w-full flex  text-center  "
                                                    initial={{ opacity :1}}
                                                    animate={{opacity: scroll? 0: 1}}
                                             
                                            >
                                            <button className=" flex items-center text-[var(--text)] w-full text-center text-2xl justify-center ">
                                            
                                                <MdOutlineKeyboardDoubleArrowDown  />
                                            </button>

                                        </motion.div>
                              
                                    </motion.div>
                        
                               

                                    
                            

                          
                        
                    </div>

            </div>

        </div>
        

        </>
    )
}