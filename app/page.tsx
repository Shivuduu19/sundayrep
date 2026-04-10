'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, easeInOut, motion, useInView, useMotionValueEvent, useScroll, useTransform, useVelocity } from "motion/react";
import { MediaController } from 'media-chrome/react';
import dynamic from "next/dynamic";
import VideoCOmp from "./components/VideoCOmp";
import { Introduction } from "./components/Introduction";
import { Services } from "./components/Services";
import Technology from "./components/Technology";
import Design from "./components/Design";
import Usetest from "./components/Usetest";
import CastVote from "./components/CastVote";
import Faqs from "./components/Faqs";
import Beta from "./components/Beta";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import FooterReveal from "./components/FooterReveal";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useMintab } from "./utils/util";

function clipInset(radius: number) {
  return `inset(0px 0px round ${radius}px)`;
}



export default function Home() {
  const [hide, setHide] = useState(false)
  const [isinview, setIsInview] = useState(0);
  // const [scrolval, sestScroval] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const { scrollYProgress: z } = useScroll({ target: ref, offset: ["start 320px", "start start"] });
  const entry = useTransform(z, [0, 1], [0, 1]);   // (roughly) (0,1) → (0,1) with easing
  const { scrollYProgress: L } = useScroll({ target: ref, offset: ["end 80%", "end 40%"] });
  const exit = useTransform(L, [0, 1], [0, 1]);
  // useMotionValueEvent(entry, 'change', (v) => {
  //   console.log(v);

  // })

  // const scrollprogval = useTransform(() => scrollYProgress.get())
  // useMotionValueEvent(scrollYProgress, 'change', (v) => {
  //   sestScroval(v)
  // })

  const yvel = useVelocity(scrollYProgress)

  useMotionValueEvent(yvel, 'change', (v) => {
    yvel.get() > .4 && !hide && setHide(true)
    yvel.get() < 0 && hide && setHide(false)
  })
  // useEffect(() => setIsClient(true), []);
  const inView = useInView(ref, {
    margin: "-95% 0px 0px 0px",
  });
  // console.log(inView);




  // wrapper anim 


  const wrapperref = useRef(null);
  const [scaleFactor, setScaleFactor] = useState(1);

  // Track scroll
  const { scrollYProgress: i } = useScroll({
    target: wrapperref,
    offset: ["end 60vh", "end 90%"],
  });

  // Track window size
  useLayoutEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setScaleFactor((w - 48) / w);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // media query (min-width: 768px)
  const isMD = useMintab()

  // scale animation
  const scale = useTransform(
    i,
    [1, 0],
    [1, isMD ? scaleFactor : 1],
    { ease: easeInOut }
  );

  // radius animation
  const radius = useTransform(
    i,
    [1, 0],
    [0, isMD ? 24 : 16],
    { ease: easeInOut }
  );

  // clip-path
  const clipPath = useTransform(radius, (v) => clipInset(v));





  return (
    <>
      <Navbar hide={hide} />
      <motion.div ref={wrapperref} className="content-wrapper relative z-10 flex-1 origin-bottom overflow-clip bg-bg" style={{ scale, clipPath }}>
        <main>
          <div className="content-blocks relative bg-bg transition-colors duration-300">
            <div className="fixed top-0 right-0 left-0 z-40 hidden h-full w-full bg-transparent sm:block invisible opacity-0"></div>


            {/* <div className="pointer-events-none fixed top-0 right-0 bottom-0 z-80 hidden items-center justify-center p-8 sm:flex">
              <div className="pointer-events-auto relative z-10 flex cursor-pointer flex-nowrap items-center gap-[5px] overflow-hidden rounded-xl backdrop-blur-lg [--toc-width-closed:40px] [--toc-width-open:100%] sm:[--toc-width-open:300px] justify-start bg-grey-dark/45" >
                <div className="absolute top-0 right-0 bottom-0 m-auto flex h-fit w-[40px] py-2">
                  <ul className="toc-indicators flex w-4 flex-1 flex-col items-center justify-between gap-1.5">
                    <li className="relative flex w-[5px] items-center gap-2 overflow-hidden rounded-full bg-secondary transition-all duration-300 h-[10px]">
                      <div className="absolute right-0 bottom-0 left-0 h-full origin-top rounded-full bg-transparent" ></div>
                    </li>
                    <li className="relative flex w-[5px] items-center gap-2 overflow-hidden rounded-full bg-secondary transition-all duration-300 h-[10px]">
                      <div className="absolute right-0 bottom-0 left-0 h-full origin-top rounded-full bg-transparent" ></div>
                    </li>
                    <li className="relative flex w-[5px] items-center gap-2 overflow-hidden rounded-full bg-secondary transition-all duration-300 h-[10px]">
                      <div className="absolute right-0 bottom-0 left-0 h-full origin-top rounded-full bg-transparent" ></div>
                    </li>
                    <li className="relative flex w-[5px] items-center gap-2 overflow-hidden rounded-full bg-secondary transition-all duration-300 h-[10px]">
                      <div className="absolute right-0 bottom-0 left-0 h-full origin-top rounded-full bg-transparent" ></div>
                    </li>
                    <li className="relative flex w-[5px] items-center gap-2 overflow-hidden rounded-full bg-secondary transition-all duration-300 h-[10px]">
                      <div className="absolute right-0 bottom-0 left-0 h-full origin-top rounded-full bg-transparent" ></div>
                    </li>
                  </ul>
                </div>

              </div>
            </div> */}





            <motion.section data-page-header="true" data-header-type="hero" className="[--border-radius:12px] [--container-padding:16px] [--entry-progress:0] [--exit-progress:0] lg:[--container-padding:24px]">
              <motion.div initial={{
                y: 0
              }}
                animate={{
                  y: hide ? -80 : 0
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: .5
                }} className="top-0 flex flex-col items-center gap-3 pt-35 pb-16 text-primary lg:gap-6 sticky">
                <div>
                  <p className="max-w-xl px-6 text-center font-mono text-xs leading-[1.2] md:text-sm">The helpful home robot</p>
                  <p className="max-w-xl px-6 text-center font-mono text-xs leading-[1.2] text-secondary md:text-sm">Beta launching late 2026</p>
                </div>
                <h1 className="max-w-[24ch] px-4 text-center display-2 font-heading">Say hello to Memo</h1>
              </motion.div>

              <motion.div ref={ref} className="aspect-square h-[80svh] w-full overflow-hidden bg-black dark md:h-[120svh]" style={{
                "--entry-progress": entry,
                "--exit-progress": exit,
                clipPath: "inset(0px calc(var(--container-padding) * (1 - var(--entry-progress))) round calc(var(--border-radius)  * (1 - var(--entry-progress))))"
              } as React.CSSProperties}>
                <motion.div initial={{
                  y: 0
                }}
                  animate={{
                    y: hide ? -80 : 0
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: .5
                  }} style={{
                    opacity: "calc(1 - var(--exit-progress))",
                    scale: "calc(1 - var(--exit-progress) / 40)"
                  }} className="top-0 flex flex-col items-center gap-3 pt-35 pb-16 text-primary lg:gap-6 fixed z-10 w-full" >
                  <div>
                    <p className="max-w-xl px-6 text-center font-mono text-xs leading-[1.2] md:text-sm">The helpful home robot</p>
                    <p className="max-w-xl px-6 text-center font-mono text-xs leading-[1.2] text-secondary md:text-sm">Beta launching late 2026</p>
                  </div>
                  <h1 className="max-w-[24ch] px-4 text-center display-2 font-heading">Say hello to Memo</h1>
                </motion.div>


                {/* {isClient && ( */}
                {/* <MediaController className="relative isolate overflow-hidden size-full"> */}
                <VideoCOmp imageurl='/thumbnail.webp' vdourl='/Sunday_Robotics___The_helpful_robotics_company.mp4' />
                {/* </MediaController> */}
                {/* // )} */}
              </motion.div>

              {
                <AnimatePresence>
                  inView && (
                  <motion.div
                    initial={{
                      y: "100%",
                      opacity: 1,
                    }}
                    animate={{
                      y: inView ? '0%' : "100%",
                      opacity: 1,
                    }}
                    exit={{
                      y: "100%",
                      opacity: 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      mass: .9
                    }}
                    className="fixed bottom-0 z-10 flex text-black w-full origin-top justify-center px-6 pb-4 md:pb-6" >
                    <a className="flex w-95 justify-between gap-1 rounded-full bg-accent px-4 py-4 label-1 leading-4 backdrop-blur-xl md:px-5 lg:w-100" href="/beta-program">
                      <p>Join the Founding Family</p>
                      <p className="text-right"><span className="pr-1.5 text-secondary">Apply to the beta</span><span className="inline-block h-2 w-2 animate-[blinking_0.75s_ease-in-out_infinite] rounded-full bg-black max-sm:hidden"></span>
                      </p>
                    </a>
                  </motion.div>
                  )
                </AnimatePresence>
              }





            </motion.section>

            <Introduction />
            <Services />
            <Technology />
            <Design />
            <CastVote />
            <Faqs />
            <Beta />
            <Subscribe />
            {/* <Usetest /> */}
          </div>

        </main >
        <Footer />
      </motion.div >
      <FooterReveal />

      {/* <div className="w-full h-[100vh]"></div> */}

    </>
  );
}
