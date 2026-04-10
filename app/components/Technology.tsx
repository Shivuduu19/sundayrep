'use client'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import VideoCOmp from './VideoCOmp'
import { MediaPlayButton } from 'media-chrome/react'

const Technology = () => {
    const ref = useRef(null)
    const secref = useRef<HTMLElement>(null)
    const clipref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start -20%"]
    })
    const { scrollYProgress: z } = useScroll({
        target: clipref,
        offset: ["end 80%", "end 40%"]
    })
    const val = useTransform(scrollYProgress, [0, .6], [1, 0])
    const exitval = useTransform(z, [0, 1], [0, 1])
    // useMotionValueEvent(exitval, 'change', (v) => {
    //     console.log(v);

    // })

    useEffect(() => {
        const section = secref.current
        if (section) {
            const controller = section?.querySelector("media-controller");
            const progressring = section?.querySelector(".progress-ring")?.parentElement;

            // console.log(section, controller, progressring);


            const update = () => {

                const current = Number(controller?.getAttribute("mediacurrenttime"));
                const duration = Number(controller?.getAttribute("mediaduration"));

                const progress = (current / duration);
                // console.log(progress);


                const variable = progressring?.style.setProperty('--p', progress.toString());
                requestAnimationFrame(update);
            };
            update()
        }
    }, [])
    return (


        <section ref={secref} className="section-block bg-bg text-primary transition-colors duration-300" id="technology" data-section-title="technology" data-toc-section="true">
            <div className="section-blocks relative bg-bg transition-colors duration-300">
                <section className="overflow-clip bg-white transition-colors duration-300 [--border-radius:12px] [--container-padding:16px] [--entry-progress:0] [--exit-progress:0] lg:pb-24 lg:[--container-padding:24px]">
                    <motion.div ref={ref} className="pointer-events-none absolute inset-0 z-20 h-full bg-black/80" style={{ opacity: val }}></motion.div>
                    <div className="flex h-[140vh] flex-col justify-end">
                        <div className="h-[240vh] min-h-[240vh] w-full">
                            <motion.div ref={clipref} className="mx-auto flex min-h-[calc(100vh-var(--spacing)*6)] w-full justify-center bg-linear-to-b from-green-tint from-33% to-warm-grey-dark" style={{ clipPath: 'inset(0px calc((var(--container-padding)) * var(--exit-progress)) round calc(var(--border-radius) * var(--exit-progress)))', '--exit-progress': exitval } as React.CSSProperties}>
                                <div className="relative flex min-h-[240vh] w-full flex-col">
                                    <h1 className="sticky top-0 mx-auto flex h-svh items-center justify-center px-4 pt-0 text-center heading-1 text-balance text-primary dark lg:px-20">From imitation to intuition</h1>
                                    <div className="absolute bottom-0 left-1/2 z-20 mx-auto my-0 flex h-[80vh] w-[140vw] -translate-x-1/2 flex-col justify-end lg:aspect-square xl:max-w-1/2">
                                        <Image src={'/handshoe.webp'} alt='' width={1080} height={1524} className='h-full w-full object-contain object-bottom!' style={{ color: 'transparent', objectPosition: '50% 50%' }} />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center py-16 lg:py-24">
                        <div className="mx-auto flex justify-center px-4 pb-16 lg:px-6 lg:pb-24">
                            <div className="max-w-[40ch] text-center subheading-2 text-primary lg:heading-3">
                                <p className="[&amp;+&amp;]:mt-[1em]">
                                    Our
                                    <span tabIndex={0} aria-describedby="91d1519d90ce">
                                        <span className="decoration-skip-ink-none cursor-help underline decoration-secondary decoration-dotted decoration-from-font underline-offset-[10%]">Skill Capture Glove</span>
                                    </span>
                                    ™ enables Memo to distill millions of human movements into its onboard AI, unlocking helpful home skills. What the glove does, Memo learns.
                                </p>
                            </div>
                        </div>
                        <div className="grid w-full grid-cols-12 gap-6 px-4 pb-16 lg:px-6 lg:pb-24">
                            <div className="group relative isolate grid aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-xl bg-black dark before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/0 before:content-[&#x27;&#x27;] col-span-12 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4">
                                <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-3 dark">
                                    <div className="flex items-start justify-between">
                                        <div className="flex flex-wrap gap-1 xl:items-center">
                                            <span className="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">Autonomous</span>
                                            <span className="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">1

                                                ×</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MediaPlayButton mediaController='id-tech1' className='group block [--media-button-icon-height:16px] [--media-control-background:none] [--media-control-hover-background:none]' noTooltip>
                                            <div slot="icon" className="relative grid cursor-pointer place-items-center rounded-full bg-white/20 backdrop-blur-lg transition-colors duration-200 hover:bg-white/35 text-primary after:absolute after:-inset-3 after:-right-38 after:bg-transparent after:content-['']" style={{ width: '16px', height: '16px', "--p": 0, '--thickness': '1px', '--ring-color': 'currentColor' } as React.CSSProperties}>
                                                <span className="progress-ring pointer-events-none absolute inset-0 rounded-full  after:content-[''] after:rounded-[inherit] after:[background:conic-gradient(var(--ring-color,currentColor)_calc(var(--p,0)*1turn),transparent_0)]  after:p-(--thickness,2px) after:absolute after:mask-exclude after:inset-0 after:mask-[linear-gradient(#000_0_0),linear-gradient(#000_0_0)] after:mask-position-[0_0,0_0]  after:[mask-clip:content-box,border-box] "></span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pause z-10 hidden h-[9px] w-[9px] group-aria-[label=pause]:block [&_polygon]:fill-current [&_rect]:fill-current" aria-hidden="true">
                                                    <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                                                    <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play z-10 hidden h-[9px] w-[9px] group-aria-[label=play]:block [&_polygon]:fill-current" aria-hidden="true">
                                                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                                                </svg>
                                            </div>
                                        </MediaPlayButton>
                                        <p className="label-1 text-primary">Skill Capture Glove in use</p>
                                    </div>
                                </div>
                                <VideoCOmp id='id-tech1' className='isolate overflow-hidden pointer-events-auto absolute h-full w-full rounded-sm object-cover' imageurl='/thumbnail3.webp' vdourl='/Sunday_Robotics___The_helpful_robotics_companyservice1.mp4' />

                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-12 px-6">
                            <div className="max-w-[40ch] text-center body-2 text-primary">
                                <p className="[&amp;+&amp;]:mt-[1em]">
                                    To date we’ve shipped over 2,000 gloves to our {''}
                                    <span tabIndex={0} aria-describedby="65576db50a4c">
                                        <span className="decoration-skip-ink-none cursor-help underline decoration-secondary decoration-dotted decoration-from-font underline-offset-[10%]">Memory Developers</span>
                                    </span>
                                    . They collect ‘memories’ in their homes to make Memo useful in yours.
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <a className="inline-flex flex-nowrap items-center justify-center rounded-full label-1 leading-none transition-colors cursor-pointer gap-1 px-3.5 py-3 group/button max-md:h-9 md:h-auto border border-black/10 bg-transparent text-black hover:border-black hover:bg-black hover:text-white" aria-disabled="false" href="/technology">
                                    <span>Explore Technology</span>
                                </a>
                                <a href="https://jobs.ashbyhq.com/sunday/f92adbe3-da24-4edd-8599-4f60dec7bd5f" target="_blank" rel="noopener noreferrer" className="inline-flex flex-nowrap items-center justify-center rounded-full label-1 leading-none transition-colors cursor-pointer gap-1 px-3.5 py-3 group/button max-md:h-9 md:h-auto border border-black/10 bg-transparent text-black hover:border-black hover:bg-black hover:text-white" aria-disabled="false">
                                    <span>Become a MemDev</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>


        // <section classNameName="overflow-clip bg-white transition-colors duration-300 [--border-radius:12px] [--container-padding:16px] [--entry-progress:0] [--exit-progress:0] lg:pb-24 lg:[--container-padding:24px]">
        //     <div classNameName="pointer-events-none absolute inset-0 z-20 h-full bg-black/80" />
        //     <div classNameName="flex h-[140vh] flex-col justify-end">
        //         <div classNameName="h-[240vh] min-h-[240vh] w-full">
        //             <div classNameName="mx-auto flex min-h-[calc(100vh-var(--spacing)*6)] w-full justify-center bg-linear-to-b from-green-tint from-33% to-warm-grey-dark">
        //                 <div classNameName="relative flex min-h-[240vh] w-full flex-col">
        //                     <h1 classNameName="sticky top-0 mx-auto flex h-svh items-center justify-center px-4 pt-0 text-center heading-1 text-balance text-primary dark lg:px-20">
        //                         From imitation to intuition
        //                     </h1>
        //                     <div classNameName="absolute bottom-0 left-1/2 z-20 mx-auto my-0 flex h-[80vh] w-[140vw] -translate-x-1/2 flex-col justify-end lg:aspect-square xl:max-w-1/2" />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div classNameName="flex w-full flex-col items-center justify-center py-16 lg:py-24">
        //         <div classNameName="mx-auto flex justify-center px-4 pb-16 lg:px-6 lg:pb-24">
        //             <div classNameName="max-w-[40ch] text-center subheading-2 text-primary lg:heading-3">
        //                 <p classNameName="[&+&]:mt-[1em]">
        //                     Our{" "}
        //                     <span tabIndex={0} aria-describedby="91d1519d90ce">
        //                         <span classNameName="decoration-skip-ink-none cursor-help underline decoration-secondary decoration-dotted decoration-from-font underline-offset-[10%]">
        //                             Skill Capture Glove
        //                         </span>
        //                     </span>
        //                     ™ enables Memo to distill millions of human movements into its onboard
        //                     AI, unlocking helpful home skills. What the glove does, Memo learns.
        //                 </p>
        //             </div>
        //         </div>
        //         <div classNameName="grid w-full grid-cols-12 gap-6 px-4 pb-16 lg:px-6 lg:pb-24">
        //             <div classNameName="group relative isolate grid aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-xl bg-black dark before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/0 before:content-[''] col-span-12 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4">
        //                 <div classNameName="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-3 dark">
        //                     <div classNameName="flex items-start justify-between">
        //                         <div classNameName="flex flex-wrap gap-1 xl:items-center">
        //                             <span classNameName="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">
        //                                 Autonomous
        //                             </span>
        //                             <span classNameName="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">
        //                                 1{/* */}×
        //                             </span>
        //                         </div>
        //                     </div>
        //                     <div classNameName="flex items-center gap-2">
        //                         <p classNameName="label-1 text-primary">Skill Capture Glove in use</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div classNameName="flex flex-col items-center gap-12 px-6">
        //             <div classNameName="max-w-[40ch] text-center body-2 text-primary">
        //                 <p classNameName="[&+&]:mt-[1em]">
        //                     To date we’ve shipped over 2,000 gloves to our{" "}
        //                     <span tabIndex={0} aria-describedby="65576db50a4c">
        //                         <span classNameName="decoration-skip-ink-none cursor-help underline decoration-secondary decoration-dotted decoration-from-font underline-offset-[10%]">
        //                             Memory Developers
        //                         </span>
        //                     </span>
        //                     . They collect ‘memories’ in their homes to make Memo useful in yours.
        //                 </p>
        //             </div>
        //             <div classNameName="flex items-center gap-2">
        //                 <a
        //                     classNameName="inline-flex flex-nowrap items-center justify-center rounded-full label-1 leading-none transition-colors cursor-pointer gap-1 px-3.5 py-3 group/button max-md:h-9 md:h-auto border border-black/10 bg-transparent text-black hover:border-black hover:bg-black hover:text-white"
        //                     aria-disabled="false"
        //                     href="/technology"
        //                 >
        //                     <span>Explore Technology</span>
        //                 </a>
        //                 <a
        //                     href="https://jobs.ashbyhq.com/sunday/f92adbe3-da24-4edd-8599-4f60dec7bd5f"
        //                     target="_blank"
        //                     rel="noopener noreferrer"
        //                     classNameName="inline-flex flex-nowrap items-center justify-center rounded-full label-1 leading-none transition-colors cursor-pointer gap-1 px-3.5 py-3 group/button max-md:h-9 md:h-auto border border-black/10 bg-transparent text-black hover:border-black hover:bg-black hover:text-white"
        //                     aria-disabled="false"
        //                 >
        //                     <span>Become a MemDev</span>
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </section>

    )
}

export default Technology