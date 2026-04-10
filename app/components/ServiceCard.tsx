'use client'
import React, { useEffect } from 'react'
import VideoCOmp from './VideoCOmp'
import { MediaPlayButton } from 'media-chrome/react'

const ServiceCard = () => {
    useEffect(() => {

        //  const video = document.getElementById("services")?.getElementsByTagName("media-controller")[0] as HTMLElement | null;

        //     if (!video) return;

        // controllerRef.current = video;

        const section = document.querySelector('.service-card');
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
        const update2 = () => {
            const controller = section?.querySelectorAll("media-controller")[1];
            const progressring = section?.querySelectorAll(".progress-ring")[1]?.parentElement;
            // console.log(controller, progressring);

            const current = Number(controller?.getAttribute("mediacurrenttime"));
            const duration = Number(controller?.getAttribute("mediaduration"));

            const progress = (current / duration);
            // console.log(progress);


            const variable = progressring?.style.setProperty('--p', progress.toString());
            requestAnimationFrame(update2);
        };

        update();
        update2();


    }, [])
    return (
        <div className="service-card isolate col-span-2 grid grid-cols-6 gap-4 pb-30 md:gap-2 md:px-6 md:pb-40">
            {/* {mounted && ( */}
            <div className="relative col-span-6 grid aspect-3/4 flex-none grid-cols-2 gap-2 overflow-hidden bg-black md:aspect-3/4 md:rounded-xl lg:aspect-video pointer-events-none before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/3 before:content-['']">
                <div className="pointer-events-none relative z-10 col-span-2 flex flex-col items-center justify-center gap-2 p-3 dark">
                    <h2 className="text-center heading-1 text-balance text-primary">Memo works in the kitchen</h2>
                    <div className="absolute bottom-3 left-3">
                        <MediaPlayButton mediaController="id-service1" className="group block [--media-button-icon-height:16px] [--media-control-background:none] [--media-control-hover-background:none]" noTooltip>

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
                    </div>
                </div>
                <VideoCOmp id="id-service1" className='isolate overflow-hidden pointer-events-auto absolute h-full w-full object-cover' imageurl='/thumbnail3.webp' vdourl='/Sunday_Robotics___The_helpful_robotics_companyservice1.mp4' />
            </div>
            {/* )} */}
            <div className="col-span-full grid grid-cols-6 gap-2">
                <div className="col-span-6 flex flex-col justify-between rounded-xl border border-border p-3 max-md:mx-4 max-md:mt-4 max-md:aspect-video md:col-span-3 md:min-h-48">
                    <p className="flex-1 pb-12 label-1 text-primary md:pb-0">Lightening the load</p>
                    <p className="pr-4 body-1 text-primary lg:max-w-full">Memo can quietly and autonomously clear tables of plates and delicate glasses, throw out food scraps, and load up your dishwasher before running it.

                        Let Memo take care of the table, so you can go take care of the things only you can do.

                    </p>
                </div>
                <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:w-full col-span-6 max-md:pl-4 md:col-span-3 md:flex-1">
                    <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-xl bg-black dark before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/0 before:content-[&#x27;&#x27;] grid w-full">
                        <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-3 dark bg-black/3">
                            <div className="flex items-start justify-between">
                                <div className="flex flex-wrap gap-1 xl:items-center">
                                    <span className="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">Autonomous</span>
                                    <span className="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">5
                                        ×</span>
                                </div>
                                <button className="transition-color pointer-events-auto flex h-4 w-4 cursor-pointer items-center duration-300 ease-in-out group-[&:hover]:opacity-100 lg:opacity-0" aria-label="Enlarge media" name="Enlarge media">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fullscreen [&amp;_*]:text-primary" aria-hidden="true">
                                        <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                                        <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                                        <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                                        <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                                        <rect width="10" height="8" x="7" y="8" rx="1"></rect>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex items-center gap-2">

                                <MediaPlayButton mediaController="id-hcv6rkjxakmmiwrkrgj" className='group block [--media-button-icon-height:16px] [--media-control-background:none] [--media-control-hover-background:none]' noTooltip>
                                    <div slot="icon" className="relative grid cursor-pointer place-items-center rounded-full bg-white/20 backdrop-blur-lg transition-colors duration-200 hover:bg-white/35 text-primary after:absolute after:-inset-3 after:-right-38 after:bg-transparent after:content-['']" style={{ width: '16px', height: '16px', '--p': 0, '--thickness': '1px', '--ring-color': 'currentColor' } as React.CSSProperties}>
                                        <span className="progress-ring pointer-events-none absolute inset-0 rounded-full after:content-[''] after:rounded-[inherit] after:[background:conic-gradient(var(--ring-color,currentColor)_calc(var(--p,0)*1turn),transparent_0)]  after:p-(--thickness,2px) after:absolute after:mask-exclude after:inset-0 after:mask-[linear-gradient(#000_0_0),linear-gradient(#000_0_0)] after:mask-position-[0_0,0_0]  after:[mask-clip:content-box,border-box]"></span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pause z-10 hidden h-[9px] w-[9px] group-aria-[label=pause]:block [&amp;_polygon]:fill-current [&amp;_rect]:fill-current" aria-hidden="true">
                                            <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                                            <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play z-10 hidden h-[9px] w-[9px] group-aria-[label=play]:block [&amp;_polygon]:fill-current" aria-hidden="true">
                                            <polygon points="6 3 20 12 6 21 6 3"></polygon>
                                        </svg>
                                    </div>
                                </MediaPlayButton>
                                <p className="label-1 text-primary">Uncut video of Memo cleaning up</p>
                            </div>
                        </div>

                        <VideoCOmp id="id-hcv6rkjxakmmiwrkrgj" className='isolate overflow-hidden pointer-events-auto absolute h-full w-full rounded-sm object-cover' imageurl='/thumbnail_cleaingup.webp' vdourl='/Sunday_Robotics___The_helpful_robotics_company_cleaingup.mp4' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard