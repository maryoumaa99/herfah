"use client"

import Image from "next/image"
import{
    floating1,
    floating2,
    floating3,
    floating4,
    floating5,
    floating6,
    floating7,
    floating8,
    floating9
} from "../../../data/images"
import styles from "../../../style/page.module.scss"
import { RiAccountCircleFill } from "react-icons/ri"
import { useRef } from "react"
import gsap from "gsap"
import Link from "next/link"
import Navbar from "../../../components/navBar"


function Banner(){

    // REFS FOR PLANES
    const plane1 = useRef<HTMLDivElement | null>(null)
    const plane2 = useRef<HTMLDivElement | null>(null)
    const plane3 = useRef<HTMLDivElement | null>(null)

    // SPEED BASED ON SCREEN SIZE
    const speed =
    typeof window !== "undefined" && window.innerWidth < 768 ? 0.03 : 0.08

    // MOVEMENT FORCES
    let xForce = 0
    let yForce = 0

    // REQUEST ANIMATION FRAME ID
    let requestAnimationFrameId: number | null = null

    // SMOOTHING VALUE
    const easing = 0.08

    // MAIN ANIMATION LOOP
    const animate = () => {
    // SMOOTH FORCES
    xForce = lerp(xForce, 0, easing)
    yForce = lerp(yForce, 0, easing)

    // MOVE PLANES
    gsap.set(plane1.current, { x: xForce, y: yForce })
    gsap.set(plane2.current, { x: xForce * 0.5, y: yForce * 0.5 })
    gsap.set(plane3.current, { x: xForce * 0.25, y: yForce * 0.25 })

    // STOP SMALL MOVEMENTS
    if (Math.abs(xForce) < 0.1) yForce = 0
    if (Math.abs(yForce) < 0.1) xForce = 0

    // CONTINUE OR STOP ANIMATION
    if (Math.abs(xForce) > 0.01 || Math.abs(yForce) > 0.01) {
        requestAnimationFrame(animate)
    }

    // CANCEL FRAME WHEN DONE
    if (requestAnimationFrameId !== null) {
        cancelAnimationFrame(requestAnimationFrameId)
        requestAnimationFrameId = null
    }
    }

    // LINEAR INTERPOLATION FUNCTION
    const lerp = (start: number, end: number, amount: number) =>
    start * (1 - amount) + end * amount

    // HANDLE POINTER MOVE
    const handlePointerMove = (e: React.PointerEvent) => {
    xForce += e.movementX * speed
    yForce += e.movementY * speed

    // START ANIMATION IF NOT RUNNING
    if (!requestAnimationFrameId) {
        requestAnimationFrameId = requestAnimationFrame(animate)
    }
    }



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
                <h2 className=" text-canter text-[10px]  text-[var(--text)] md:text-[0.7em] md:bottom-[20vh] xl:text-[1.2em] lg:text-[1em] 
                                ">  اول مجتمع عربي للحرف اليدوية و المشاريع الصغيرة في مصر </h2>
            </div>

        </div>


        <main className={ ` max-sm:mb-[25vh] ${styles.main}`} onPointerMove={handlePointerMove}>
            
         {/* NAV BAR */}
            <div className="flex items-center  h-[10vh] fixed z-20 w-full px-4 py-5 ">

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

            <div className={styles.plane} ref={plane1}>
                <Image loading="lazy"  alt="image" src={floating1} width={310}/>
                <Image loading="lazy"  alt="image" src={floating2} width={300}/>
                <Image loading="lazy"  alt="image" src={floating3} width={300}/>
            </div>
            <div className={styles.plane} ref={plane2}>
                <Image loading="lazy"  alt="image" src={floating4} width={250}/>
                <Image loading="lazy"  alt="image" src={floating5} width={250}/>
                <Image loading="lazy"  alt="image" src={floating6} width={250} />
            </div>
            <div className={styles.plane} ref={plane3}>
                <Image loading="lazy"  alt="image" src={floating7} width={170}/>
                <Image loading="lazy"  alt="image" src={floating8} width={170}/>
                <Image  loading="lazy" alt="image" src={floating9} width={170} />
            </div>
        </main>
        </>
    )
}

export default Banner