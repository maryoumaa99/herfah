"use client"
import LoginForm from "@/app/components/loginForm"
import RegisterForm from "@/app/components/registerForm"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"



export default function NewMember(){

    
    // TO SHOW & HIDE LOGIN , REGISTER FORMS
    const [isLogin, setIsLogin] = useState(true)


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
        },[ bgPics.length ])


    return(
        <>
        <div className="main flex w-[100vw] h-screen" id="account">

             <div className="picSlider hidden md:block md:w-1/2 bg-amber-300 relative overflow-hidden ">
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
                <div className="absolute top-0 left-0 w-full min-h-full bg-black opacity-40"></div>

            </div>

            <div className="form w-[100vw] bg-[var(--background)] md:w-1/2 ">
               <AnimatePresence mode="wait">
                    {isLogin ? (
                        <motion.div
                        key="login"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        >
                        <LoginForm onSwitch={() => setIsLogin(false)} />
                        </motion.div>
                    ) : (
                        <motion.div
                        key="register"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        >
                        <RegisterForm onSwitch={() => setIsLogin(true)} />
                        </motion.div>
                    )}
                </AnimatePresence>

                                        
            </div>
           
        </div>
            
        </>
    )
}