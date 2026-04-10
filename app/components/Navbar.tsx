'use client'
import React, { useEffect, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { useVelocity } from "motion/react"
import { MediaController } from 'media-chrome/react'
import VideoCOmp from './VideoCOmp'




const Navbar = ({ hide }: { hide: boolean }) => {
    const [open, setOpen] = useState(false)

    // const yvelval = useTransform(() => yvel.get() > .2 ? -100 : 0)
    // console.log(yvelval.get());
    useEffect(() => {
        const html = document.querySelector('html')
        if (html) {

            if (open) {
                html.style.overflow = 'hidden'
                html.style.scrollbarGutter = 'stable'
            } else {
                html.style.overflow = ''
                html.style.scrollbarGutter = ''
            }
        }
    }, [open])


    return (
        <>
            <div className={`fixed top-0 right-0 left-0 z-40 h-full w-full bg-black/50 transition-opacity duration-300 visible ${open ? 'opacity-100' : 'opacity-0'} `}></div>
            <motion.header initial={{
                y: 0
            }}
                animate={{
                    y: hide ? -100 : 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: .5
                }} className="pointer-events-none fixed top-0 right-0 left-0 z-50 mx-auto p-4 md:p-6" >
                <motion.div className="pointer-events-auto relative mx-auto overflow-hidden rounded-xl border border-nav-border bg-nav-bg text-nav-primary backdrop-blur-2xl transition-colors duration-200 [--menu-width-closed:100%] [--menu-width-open:100%] sm:[--menu-width-closed:330px] sm:[--menu-width-open:50vw] md:[--menu-width-open:70vw] xl:[--menu-width-open:50vw]" initial={{
                    width: "var(--menu-width-closed)",
                    height: 60
                }}
                    animate={{
                        width: open ? "var(--menu-width-open)" : "var(--menu-width-closed)",
                        height: open ? 'min-content' : 60
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        mass: .9
                    }}>
                    <div className="flex h-[60px] w-full items-center justify-between">
                        <motion.a animate={{
                            rotate: open ? -180 : 0
                        }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 25,
                                mass: .9
                            }}
                            whileHover={{
                                rotate: 180,
                                scale: .9
                            }} aria-label="Home" href="/">
                            <div className="flex h-[60px] w-[60px] items-center justify-center" >
                                <svg width="41" height="40" viewBox="0 0 41 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="p-2">
                                    <path d="M9.55566 0.0754395C12.3521 -0.246563 14.9502 0.48279 17.0459 1.94165C19.1415 3.40047 21.8783 3.38721 23.9541 1.94165C26.0299 0.495963 28.648 -0.246492 31.4443 0.0754395C36.3364 0.640582 40.2962 4.53727 40.9111 9.38696C41.4797 13.8753 39.2585 17.8908 35.748 20.0002H35.7422C39.2522 22.1097 41.4736 26.1246 40.9053 30.6125C40.2905 35.4687 36.3238 39.3663 31.4385 39.925C28.6422 40.247 26.0438 39.5175 23.9482 38.0588C21.8526 36.6 19.1149 36.6131 17.0391 38.0588C14.9633 39.5044 12.3451 40.247 9.54883 39.925C4.66349 39.3598 0.703671 35.4622 0.0888672 30.6125C-0.472836 26.1245 1.74177 22.1096 5.25195 20.0002C1.74155 17.8908 -0.479673 13.8753 0.0888672 9.38696C0.703727 4.5373 4.67029 0.640643 9.55566 0.0754395ZM20.4277 9.27954C14.4784 9.27975 9.65527 14.0799 9.65527 20.0002C9.65542 25.9205 14.4785 30.7198 20.4277 30.72C26.3771 30.72 31.2 25.9206 31.2002 20.0002C31.2002 14.0798 26.3772 9.27954 20.4277 9.27954Z"></path>
                                </svg>
                            </div>
                        </motion.a>
                        <a className="flex h-[60px] items-center p-5" aria-label="Home" href="/">
                            <svg width="982" height="145" viewBox="0 0 982 145" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-[14px] w-auto">
                                <path d="M888.8 142.4H922.2V90L981.2 2.4H943.2L906.4 57.8H906.2L869.4 2.4H829.8L888.8 90.2V142.4ZM769.8 82C769.8 101.4 756.8 116 735.6 116C712.6 116 698.4 98.8 698.4 72.4C698.4 46 712.6 28.8 735.6 28.8C756.8 28.8 769.8 43.4 769.8 62.8V82ZM769.2 124.6H770V142.4H803.4V2.4H770V20.2H769.2C761.8 7.8 746.6 0 727.4 0C689.6 0 663.6 29.4 663.6 72.4C663.6 115.4 689.6 144.8 727.4 144.8C746.6 144.8 761.8 137 769.2 124.6ZM536.8 113.4V31.4H560C584.4 31.4 598.8 43.4 598.8 72.4C598.8 101.4 584.4 113.4 560 113.4H536.8ZM503.2 142.4H560.6C606 142.4 633.6 117.8 633.6 72.2C633.6 26.6 606 2.4 560.6 2.4H503.2V142.4ZM364.6 20.2H363.8V2.4H330.4V142.4H364V64.8C364 41.4 377.8 28.8 397 28.8C416.2 28.8 429.2 41.4 429.2 64.8V142.4H462.8V65.8C462.8 25.8 443 0 407.2 0C387.6 0 372 7.8 364.6 20.2ZM224.6 144.8C265.2 144.8 289.6 119 289.6 79V2.4H256.2V80C256.2 103.4 242.8 115.2 224.4 115.2C206 115.2 193 103.4 193 80V2.4H159.4V79C159.4 119 183.6 144.8 224.6 144.8ZM2.2 127.8C20.2 140 40.4 144.8 61.2 144.8C99.8 144.8 125.8 127.6 125.8 99.2C125.8 70.8 104.4 58.2 78.2 56.8L54.4 55.2C41.6 54.4 33.6 51 33.6 42.2C33.6 32.8 44.2 27.8 62 27.8C79.8 27.8 97.6 33.2 113.4 44.4V12.6C99.4 3.8 80.2 0 62.6 0C24.2 0 0 18.4 0 44.8C0 72.6 20.8 85 46.6 86.6L70.4 88.4C83.4 89.2 92.2 92.8 92.2 101.8C92.2 112 80.2 117 62.6 117C39.4 117 18 107.2 2.2 95V127.8Z">
                                </path>
                            </svg>
                        </a>
                        <div className="flex items-center">
                            <motion.button onClick={() => setOpen(!open)} animate={open ? "open" : "closed"} className="group relative h-[60px] w-[60px] cursor-pointer p-5">
                                <div className="absolute inset-0 m-2.5 flex items-center justify-center rounded-lg transition-colors duration-200 group-hover:bg-nav-button-hover">
                                </div>
                                <motion.span variants={{
                                    open: {
                                        rotate: "45deg",
                                        top: "50%"
                                    },
                                    closed: {
                                        rotate: "0deg",
                                        top: "42%"
                                    }
                                }
                                } className="absolute h-[2px] w-[20px] rounded-full bg-nav-primary" style={{
                                    left: "50%",
                                    top: "42%",
                                    x: "-50%",
                                    y: "-50%"
                                }} ></motion.span>
                                <motion.span variants={{
                                    open: {
                                        rotate: "-45deg",
                                        bottom: "50%"
                                    },
                                    closed: {
                                        rotate: "0deg",
                                        bottom: "42%"
                                    }
                                }
                                } className="absolute h-[2px] w-[20px] rounded-full bg-nav-primary" style={{
                                    left: "50%",
                                    bottom: "42%",
                                    x: "-50%",
                                    y: "50%"
                                }}></motion.span>
                            </motion.button>
                        </div>
                    </div>
                    <div className="flex w-full flex-col justify-between gap-8 p-6" >
                        <div className="grid grid-cols-4">
                            <div className="col-span-4 flex flex-col lg:col-span-2">
                                <nav className="col-auto flex flex-col items-start gap-2 pb-8 text-primary lg:pb-0">
                                    <a className="font-heading text-2xl transition-colors duration-200 hover:text-secondary" href="/technology">Technology</a>
                                    <a className="font-heading text-2xl transition-colors duration-200 hover:text-secondary" href="/company">Company</a>
                                    <a className="font-heading text-2xl transition-colors duration-200 hover:text-secondary" href="/careers">Careers</a><a className="font-heading text-2xl transition-colors duration-200 hover:text-secondary" href="/journal">Journal</a><a className="font-heading text-2xl transition-colors duration-200 hover:text-secondary" href="/beta-program">Beta</a>
                                </nav>
                            </div>
                            <div className="col-span-4 lg:col-span-2">
                                <button className="group flex cursor-pointer items-center justify-center overflow-hidden rounded-md bg-black dark">
                                    <span className="inline-flex flex-nowrap items-center justify-center rounded-full label-1 leading-none transition-colors cursor-pointer px-3.5 py-3 group/button max-md:h-9 md:h-auto gap-1.5! pl-2.5! bg-white/20 backdrop-blur-xl text-white border border-transparent hover:bg-white hover:text-black absolute z-10 group-hover/button:bg-white group-hover/button:text-black [&amp;_svg]:fill-current" aria-disabled="false">
                                        <div className="flex h-4 w-4 items-center justify-center rounded-full p-1 backdrop-blur-xl transition-colors [&amp;_svg]:fill-white group-hover:[&amp;_svg]:fill-white bg-white/20 group-hover/button:bg-black [&amp;_svg]:stroke-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play w-3 h-3 transition-colors" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg></div><span>Our story</span>
                                    </span>

                                    <VideoCOmp imageurl='/thumbnail.webp' vdourl='/Sunday_Robotics___The_helpful_robotics_company (1).mp4' />

                                </button>
                            </div>
                        </div>
                        <div className="grid w-full grid-cols-4">
                            <div className="hidden lg:col-span-2 lg:block">
                                <p className="font-detail text-sm text-neutral-500">The helpful robotics company</p>
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <p className="font-detail text-sm text-neutral-500">Launching 2026</p>
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <a className="align-center flex items-center justify-end text-right font-detail text-sm text-neutral-500" href="/beta-program">
                                    <span className="pr-1">Beta Application</span> <span className="inline-block h-2 w-2 animate-[blinking_0.75s_ease-in-out_infinite] rounded-full bg-accent"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </motion.header >
        </>
    )
}

export default Navbar

