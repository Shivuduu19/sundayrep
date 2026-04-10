"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";


const Info = ({ text, children, className }: { text: string, children?: React.ReactNode, className?: string }) => {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
            }}
        >
            <span
                className="inline-flex flex-nowrap items-center justify-center rounded-full label-1 leading-none transition-colors cursor-pointer gap-1 px-3.5 py-3 group/button max-md:h-9 md:h-auto border border-black/10 bg-transparent text-black hover:border-black hover:bg-black hover:text-white"
                aria-disabled="false"
            >
                {children}
                <span>{text}</span>
            </span>
        </motion.div>
    )
}


const FooterReveal = () => {
    const containerRef = useRef(null);
    const inView = useInView(containerRef);
    return (
        <div ref={containerRef} className="flex h-[50vh] flex-col justify-end">
            <div className="flex min-h-[200vh] flex-col justify-end bg-accent">
                <div className="sticky bottom-0 min-h-[50vh]">
                    <div className="flex h-full min-h-[50vh] flex-col items-center justify-center gap-6 p-4 md:p-6">
                        <div className="flex flex-1 flex-col items-center justify-center gap-4">
                            <motion.p className="label-1" animate={{ y: inView ? 0 : 10, opacity: inView ? 1 : 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.25 }}>
                                Fog settles low, dreams rise high. Memo’s watching over the night
                                shift.
                            </motion.p>
                            <motion.div
                                className="pointer-events-none flex items-center justify-center gap-1.25"
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.1,
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 20,
                                            delay: 0.25,
                                        },
                                    },
                                }}
                            >
                                <Info text="Tue, Dec 9" className="md:hidden" />
                                <Info text="Tuesday, Dec 9" className="hidden md:block" />
                                <Info text="Mountain View, CA" />
                                <Info text="50°F" >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-cloud-fog w-3 h-3 transition-colors"
                                        aria-hidden="true"
                                    >
                                        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                                        <path d="M16 17H7" />
                                        <path d="M17 21H9" />
                                    </svg>
                                </Info>
                                {/* <div
                                    className="hidden md:block"
                                    style={{ opacity: 1, transform: "none" }}
                                >
                                    <span
                                        className="inline-flex flex-nowrap items-center justify-center rounded-full label-1 leading-none transition-colors cursor-pointer gap-1 px-3.5 py-3 group/button max-md:h-9 md:h-auto border border-black/10 bg-transparent text-black hover:border-black hover:bg-black hover:text-white"
                                        aria-disabled="false"
                                    >
                                        <span>Tuesday, Dec 9</span>
                                    </span>
                                </div>
                                <div style={{ opacity: 1, transform: "none" }}>
                                    <span
                                        className="inline-flex flex-nowrap items-center justify-center rounded-full label-1 leading-none transition-colors cursor-pointer gap-1 px-3.5 py-3 group/button max-md:h-9 md:h-auto border border-black/10 bg-transparent text-black hover:border-black hover:bg-black hover:text-white"
                                        aria-disabled="false"
                                    >
                                        <span>Mountain View, CA</span>
                                    </span>
                                </div>
                                <div style={{ opacity: 1, transform: "none" }}>
                                    <span
                                        className="inline-flex flex-nowrap items-center justify-center rounded-full label-1 leading-none transition-colors cursor-pointer gap-1 px-3.5 py-3 group/button max-md:h-9 md:h-auto gap-1.5! pl-2.5! border border-black/10 bg-transparent text-black hover:border-black hover:bg-black hover:text-white"
                                        aria-disabled="false"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-cloud-fog w-3 h-3 transition-colors"
                                            aria-hidden="true"
                                        >
                                            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                                            <path d="M16 17H7" />
                                            <path d="M17 21H9" />
                                        </svg>
                                        <span>50°F</span>
                                    </span>
                                </div> */}
                            </motion.div>
                        </div>
                        <motion.div
                            className="flex w-[50px] items-center justify-center"
                            animate={{
                                y: inView ? 0 : 10,
                                opacity: inView ? 1 : 0,
                                rotate: inView ? 0 : -90,
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                        >
                            <svg
                                width={41}
                                height={40}
                                viewBox="0 0 41 40"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-auto w-full"
                            >
                                <path d="M9.55566 0.0754395C12.3521 -0.246563 14.9502 0.48279 17.0459 1.94165C19.1415 3.40047 21.8783 3.38721 23.9541 1.94165C26.0299 0.495963 28.648 -0.246492 31.4443 0.0754395C36.3364 0.640582 40.2962 4.53727 40.9111 9.38696C41.4797 13.8753 39.2585 17.8908 35.748 20.0002H35.7422C39.2522 22.1097 41.4736 26.1246 40.9053 30.6125C40.2905 35.4687 36.3238 39.3663 31.4385 39.925C28.6422 40.247 26.0438 39.5175 23.9482 38.0588C21.8526 36.6 19.1149 36.6131 17.0391 38.0588C14.9633 39.5044 12.3451 40.247 9.54883 39.925C4.66349 39.3598 0.703671 35.4622 0.0888672 30.6125C-0.472836 26.1245 1.74177 22.1096 5.25195 20.0002C1.74155 17.8908 -0.479673 13.8753 0.0888672 9.38696C0.703727 4.5373 4.67029 0.640643 9.55566 0.0754395ZM20.4277 9.27954C14.4784 9.27975 9.65527 14.0799 9.65527 20.0002C9.65542 25.9205 14.4785 30.7198 20.4277 30.72C26.3771 30.72 31.2 25.9206 31.2002 20.0002C31.2002 14.0798 26.3772 9.27954 20.4277 9.27954Z" />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FooterReveal