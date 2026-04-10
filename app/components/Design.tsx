"use client"
import React, { use, useCallback, useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, cubicBezier, useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react';
import { useMediaQuery } from '@uidotdev/usehooks';
import { useIsDesktop } from '../utils/util';

const Design = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const [containerWidth, setContainerWidth] = useState(0);
    const [scrollWidth, setScrollWidth] = useState(0);
    const isDesktop = useIsDesktop();

    // Measure width on mount
    useLayoutEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.clientWidth);
        }
        if (scrollRef.current) {
            setScrollWidth(scrollRef.current.scrollWidth);
        }
    }, []);
    // Observe container width changes
    const onContainerResize = useCallback((entries: ResizeObserverEntry[]) => {
        for (const entry of entries) {
            setContainerWidth(entry.contentRect.width);
        }
    }, []);

    // Observe scrollable width
    const onScrollResize = useCallback((entries: ResizeObserverEntry[]) => {
        for (const entry of entries) {
            setScrollWidth(entry.target.scrollWidth);
        }
    }, []);
    // Attach resize observers
    useLayoutEffect(() => {
        const cObserver = new ResizeObserver(onContainerResize);
        const sObserver = new ResizeObserver(onScrollResize);

        if (containerRef.current) cObserver.observe(containerRef.current);
        if (scrollRef.current) sObserver.observe(scrollRef.current);

        return () => {
            cObserver.disconnect();
            sObserver.disconnect();
        };
    }, [onContainerResize, onScrollResize]);

    // Scroll progress for vertical scrolling
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Horizontal translation distance
    const maxTranslate = containerWidth && scrollWidth ? containerWidth - scrollWidth : 0;

    const rawTranslate = useTransform(scrollYProgress, [0, 1], ['0px', `${maxTranslate}px`], {
        ease: cubicBezier(0.2, 0, 0.7, 1),
    });
    // useMotionValueEvent(rawTranslate, 'change', (v) => {
    //     console.log(v);
    // })

    const tx = useSpring(rawTranslate);

    const extraHeight = Math.max(0, scrollWidth - containerWidth);
    return (
        <section className="section-block bg-bg text-primary transition-colors duration-300" id="design" data-section-title="design" data-toc-section="true">
            <div className="section-blocks relative bg-bg transition-colors duration-300">
                <section className="text-text-primary bg-surface pt-12 pb-[var(--header-height)] md:scale-(--scale) md:rounded-(--borderRadius) md:pt-6" style={{ '--scale': 1, '--borderRadius': '24px' } as React.CSSProperties}>
                    <h2 className="px-4 pb-[calc(var(--header-height)+(var(--spacing)*12))] text-center heading-1 lg:px-6 lg:display-1">Designed for real use</h2>
                    <div className="scroll-mt-[calc(var(--header-height)+(var(--spacing)*3))]">
                        <div >
                            <div ref={containerRef}
                                style={{
                                    height: isDesktop ? `calc(100vh + ${extraHeight}px)` : "100vh",
                                }}>
                                <div className="sticky top-[calc((var(--header-height)+(var(--spacing)*3)))] overflow-hidden">
                                    <motion.div ref={scrollRef} className="no-scrollbar flex h-[calc(100svh-(var(--header-height)*2))] translate-x-0 snap-x snap-mandatory [scroll-padding:calc(var(--spacing)*4)] items-center gap-2 overflow-x-auto px-4 lg:w-max lg:translate-x-[var(--tx)] lg:transform-gpu lg:px-6 lg:will-change-transform" style={{ '--tx': tx } as React.CSSProperties}>
                                        <article className="relative grid aspect-2/3 h-[calc(100svh-(var(--header-height)*2))] max-h-[540px] max-w-[calc(100vw-2rem)] flex-none snap-start grid-rows-2 gap-6 overflow-hidden rounded-xl bg-black p-3 body-2 md:aspect-3/4 2xl:max-h-[600px] 2xl:p-4 before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-linear-to-b before:from-black/30 before:to-black/0 before:content-[&#x27;&#x27;] dark">
                                            <div className="z-10">
                                                <h3 className="text-primary">Your privacy is protected</h3>
                                                <p className="text-secondary">Memo is an autonomous robot that does not need to learn through human tele-operation. Instead, we obtain training data from our Memory Developers wearing our Skill Capture Glove™.

                                                </p>
                                            </div>
                                            <Image src={'/privacy.webp'} alt='' width={1000} height={1500} className='h-full w-full rounded-sm object-cover absolute' style={{ color: 'transparent', objectPosition: '50% 50%' }} />

                                        </article>
                                        <article style={{
                                            backgroundColor: '#eadcce'
                                        }} className="relative grid aspect-2/3 h-[calc(100svh-(var(--header-height)*2))] max-h-[540px] max-w-[calc(100vw-2rem)] flex-none snap-start grid-rows-2 gap-6 overflow-hidden rounded-xl bg-black p-3 body-2 md:aspect-3/4 2xl:max-h-[600px] 2xl:p-4 lg:aspect-3/2 lg:grid-cols-2 lg:grid-rows-1 light" >
                                            <div className="z-10">
                                                <h3 className="text-primary">Safety for the whole family</h3>
                                                <p className="text-secondary">With a low center of gravity, stable wheelbase, and a lightweight body, Memo is safe for small members of the home.</p>
                                            </div>
                                            <Image src={'/familysafety.jpg'} alt='' width={1800} height={2400} className='h-full w-full rounded-sm object-cover ' style={{ color: 'transparent', objectPosition: '50% 50%' }} />
                                        </article>
                                        <article className="relative grid aspect-2/3 h-[calc(100svh-(var(--header-height)*2))] max-h-[540px] max-w-[calc(100vw-2rem)] flex-none snap-start grid-rows-2 gap-6 overflow-hidden rounded-xl bg-black p-3 body-2 md:aspect-3/4 2xl:max-h-[600px] 2xl:p-4 before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-linear-to-b before:from-black/30 before:to-black/0 before:content-[&#x27;&#x27;] dark">
                                            <div className="z-10">
                                                <h3 className="text-primary">Tailored to your home</h3>
                                                <p className="text-secondary">Customize Memo to fit your aesthetic with a selection of color-ways and personalized hats.</p>
                                            </div>
                                            <Image src={'/tailoredhome.webp'} alt='' width={1800} height={2400} className='h-full w-full rounded-sm object-cover absolute' style={{ color: 'transparent', objectPosition: '50% 50%' }} />
                                        </article>
                                        <article style={{ backgroundColor: '#aec2b8' }} className="relative grid aspect-2/3 h-[calc(100svh-(var(--header-height)*2))] max-h-[540px] max-w-[calc(100vw-2rem)] flex-none snap-start grid-rows-2 gap-6 overflow-hidden rounded-xl bg-black p-3 body-2 md:aspect-3/4 2xl:max-h-[600px] 2xl:p-4 lg:aspect-3/2 lg:grid-cols-2 lg:grid-rows-1 light" >
                                            <div className="z-10">
                                                <h3 className="text-primary">Simple, soft and easy to clean</h3>
                                                <p className="text-secondary">Memo has a soft-to-the-touch silicone shell, with no sharp corners and can be wiped down with any household cleaning product.</p>
                                            </div>
                                            <Image src={'/easytoclean.jpg'} alt='' width={1800} height={2400} className='h-full w-full rounded-sm object-cover ' style={{ color: 'transparent', objectPosition: '50% 50%' }} />

                                        </article>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Design