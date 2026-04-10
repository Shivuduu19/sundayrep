'use client'
import React, { useEffect, useState } from 'react'
import VideoCOmp from './VideoCOmp'
// import dynamic from 'next/dynamic';
import { MediaController, MediaPlayButton } from 'media-chrome/react'
import Image from 'next/image'
import ServiceCard from './ServiceCard'
import ServiceCard2 from './ServiceCard2'
// const NoSSRMedia = dynamic(
//     () => import('media-chrome/react').then(m => m.MediaPlayButton),
//     { ssr: false }
// );


export const Services = () => {
    // const [mounted, setMounted] = useState<boolean>(true);

    // useEffect(() => {

    //     //  const video = document.getElementById("services")?.getElementsByTagName("media-controller")[0] as HTMLElement | null;

    //     //     if (!video) return;

    //     // controllerRef.current = video;

    //     const section = document.querySelector("#services");
    //     const controller = section?.querySelector("media-controller");
    //     const progressring = section?.querySelector(".progress-ring")?.parentElement;

    //     // console.log(section, controller, progressring);


    //     const update = () => {

    //         const current = Number(controller?.getAttribute("mediacurrenttime"));
    //         const duration = Number(controller?.getAttribute("mediaduration"));

    //         const progress = (current / duration);
    //         // console.log(progress);


    //         const variable = progressring?.style.setProperty('--p', progress.toString());
    //         requestAnimationFrame(update);
    //     };
    //     const update2 = () => {
    //         const controller = section?.querySelectorAll("media-controller")[1];
    //         const progressring = section?.querySelectorAll(".progress-ring")[1]?.parentElement;
    //         // console.log(controller, progressring);

    //         const current = Number(controller?.getAttribute("mediacurrenttime"));
    //         const duration = Number(controller?.getAttribute("mediaduration"));

    //         const progress = (current / duration);
    //         // console.log(progress);


    //         const variable = progressring?.style.setProperty('--p', progress.toString());
    //         requestAnimationFrame(update2);
    //     };

    //     update();
    //     update2();


    // }, [])


    return (
        <section className="section-block bg-bg text-primary transition-colors duration-300" id="services" data-section-title="services" data-toc-section="true">
            <div className="section-blocks relative bg-bg transition-colors duration-300">
                <section className="relative bg-bg pb-30 transition-colors duration-300 lg:pb-6">
                    <div className="pointer-events-none absolute top-0 h-full w-full"></div>
                    <div className="flex flex-col items-center gap-2 pt-40 md:pt-60 lg:pt-0">
                        <div className="flex w-full flex-col items-center justify-start gap-2 pb-24 lg:min-h-[120svh] lg:flex-row lg:justify-center lg:gap-0">
                            <h2 className="sr-only">Mundane made magic</h2>
                            <div className="sticky top-[30vh] self-start max-lg:mx-auto lg:top-0" style={{ marginTop: '0vh', paddingTop: '30vh', paddingBottom: 0 }}>
                                <span className="block max-w-[19ch] text-center font-heading text-9xl leading-none text-primary md:text-11xl lg:mx-[0.1em] lg:text-11xl xl:text-12xl 2xl:text-14xl" aria-hidden="true">Mundane</span>
                            </div>
                            <div className="sticky top-[30vh] self-start max-lg:mx-auto lg:top-0" style={{ marginTop: '20vh', paddingTop: '30vh', paddingBottom: 0 }}>
                                <span className="block max-w-[19ch] text-center font-heading text-9xl leading-none text-primary md:text-11xl lg:mx-[0.1em] lg:text-11xl xl:text-12xl 2xl:text-14xl" aria-hidden="true">made</span>
                            </div>
                            <div className="sticky top-[30vh] self-start max-lg:mx-auto lg:top-0" style={{ marginTop: '40vh', paddingTop: '30vh', paddingBottom: 0 }}>
                                <span className="block max-w-[19ch] text-center font-heading text-9xl leading-none text-primary md:text-11xl lg:mx-[0.1em] lg:text-11xl xl:text-12xl 2xl:text-14xl" aria-hidden="true">magic</span>
                            </div>
                        </div>
                        <div className="px-6 py-6 pb-24">
                            <p className="max-w-[40ch] text-center subheading-2 text-primary lg:heading-3">
                                Powered by state-of-the-art AI models and an ever-expanding {''}
                                <span tabIndex={0} aria-describedby="41607f7276ba">
                                    <span className="decoration-skip-ink-none cursor-help underline decoration-secondary decoration-dotted decoration-from-font underline-offset-[10%]">Skill Library</span>
                                </span>
                                , Memo doesn&#x27;t just know how to do a few tasks—Memo improves its skills faster than any robot that has come before it.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                        <ServiceCard />
                        <ServiceCard2 />
                        <ServiceCard2 />
                        {/* <div className="service-card isolate col-span-2 grid grid-cols-6 gap-4 pb-30 md:gap-2 md:px-6 md:pb-40">
                                        <div className="relative col-span-6 grid aspect-3/4 flex-none grid-cols-2 gap-2 overflow-hidden bg-black md:aspect-3/4 md:rounded-xl lg:aspect-video pointer-events-none before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/3 before:content-[&#x27;&#x27;]">
                                            <div className="pointer-events-none relative z-10 col-span-2 flex flex-col items-center justify-center gap-2 p-3 dark">
                                                <h2 className="text-center heading-1 text-balance text-primary">Memo is always learning</h2>
                                                <div className="absolute bottom-3 left-3">
                                                    <media-play-button mediacontroller="id-ux8ov3f5c1miwrkrgk" className="group block [--media-button-icon-height:16px] [--media-control-background:none] [--media-control-hover-background:none]" notooltip="">
                                                        <template shadowrootmode="open">
                                                            <style>
                                                                :host {
                                                                    position: relative;
                                                                    font: var(--media-font, var(--media-font-weight, bold) var(--media-font-size, 14px) / var(--media-text-content-height, var(--media-control-height, 24px)) var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
                                                                    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
                                                                    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
                                                                    padding: var(--media-button-padding, var(--media-control-padding, 10px));
                                                                    justify-content: var(--media-button-justify-content, center);
                                                                    display: inline-flex;
                                                                    align-items: center;
                                                                    vertical-align: middle;
                                                                    box-sizing: border-box;
                                                                    transition: background .15s linear;
                                                                    pointer-events: auto;
                                                                    cursor: var(--media-cursor, pointer);
                                                                    -webkit-tap-highlight-color: transparent;
                                                                }

                                                                :host(:focus-visible) {
                                                                    box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
                                                                    outline: 0;
                                                                }

                                                                :host(:where(:focus)) {
                                                                    box-shadow: none;
                                                                    outline: 0;
                                                                }

                                                                :host(:hover) {
                                                                    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
                                                                }

                                                                svg, img, ::slotted(svg), ::slotted(img) {
                                                                    width: var(--media-button-icon-width);
                                                                    height: var(--media-button-icon-height, var(--media-control-height, 24px));
                                                                    transform: var(--media-button-icon-transform);
                                                                    transition: var(--media-button-icon-transition);
                                                                    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
                                                                    vertical-align: middle;
                                                                    max-width: 100%;
                                                                    max-height: 100%;
                                                                    min-width: 100%;
                                                                }

                                                                media-tooltip {
                                                                    max-width: 0;
                                                                    overflow-x: clip;
                                                                    opacity: 0;
                                                                    transition: opacity .3s, max-width 0s 9s;
                                                                }

                                                                :host(:hover) media-tooltip, :host(:focus-visible) media-tooltip {
                                                                    max-width: 100vw;
                                                                    opacity: 1;
                                                                    transition: opacity .3s;
                                                                }

                                                                :host([notooltip]) slot[name="tooltip"] {
                                                                    display: none;
                                                                }
                                                            </style>
                                                            <style>
                                                                :host([mediapaused]) slot[name=pause], :host(:not([mediapaused])) slot[name=play] {
                                                                    display: none !important;
                                                                }

                                                                :host([mediapaused]) slot[name=tooltip-pause], :host(:not([mediapaused])) slot[name=tooltip-play] {
                                                                    display: none;
                                                                }
                                                            </style>
                                                            <slot name="icon">
                                                                <slot name="play">
                                                                    <svg aria-hidden="true" viewBox="0 0 24 24">
                                                                        <path d="m6 21 15-9L6 3v18Z"/>
                                                                    </svg>
                                                                </slot>
                                                                <slot name="pause">
                                                                    <svg aria-hidden="true" viewBox="0 0 24 24">
                                                                        <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
                                                                    </svg>
                                                                </slot>
                                                            </slot>
                                                            <slot name="tooltip">
                                                                <media-tooltip part="tooltip" aria-hidden="true">
                                                                    <template shadowrootmode="open">
                                                                        <style>
                                                                            :host {
                                                                                --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
                                                                                --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
                                                                                --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
                                                                                --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
                                                                                --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
                                                                                position: relative;
                                                                                pointer-events: none;
                                                                                display: var(--media-tooltip-display, inline-flex);
                                                                                justify-content: center;
                                                                                align-items: center;
                                                                                box-sizing: border-box;
                                                                                z-index: var(--media-tooltip-z-index, 1);
                                                                                background: var(--_tooltip-background);
                                                                                color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
                                                                                font: var(--media-font, var(--media-font-weight, 400) var(--media-font-size, 13px) / var(--media-text-content-height, var(--media-control-height, 18px)) var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
                                                                                padding: var(--media-tooltip-padding, .35em .7em);
                                                                                border: var(--media-tooltip-border, none);
                                                                                border-radius: var(--media-tooltip-border-radius, 5px);
                                                                                filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
                                                                                white-space: var(--media-tooltip-white-space, nowrap);
                                                                            }

                                                                            :host([hidden]) {
                                                                                display: none;
                                                                            }

                                                                            img, svg {
                                                                                display: inline-block;
                                                                            }

                                                                            #arrow {
                                                                                position: absolute;
                                                                                width: 0px;
                                                                                height: 0px;
                                                                                border-style: solid;
                                                                                display: var(--media-tooltip-arrow-display, block);
                                                                            }

                                                                            :host(:not([placement])), :host([placement="top"]) {
                                                                                position: absolute;
                                                                                bottom: calc(100% + var(--media-tooltip-distance, 12px));
                                                                                left: 50%;
                                                                                transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
                                                                            }

                                                                            :host(:not([placement])) #arrow, :host([placement="top"]) #arrow {
                                                                                top: 100%;
                                                                                left: 50%;
                                                                                border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
                                                                                border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
                                                                                transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
                                                                            }

                                                                            :host([placement="right"]) {
                                                                                position: absolute;
                                                                                left: calc(100% + var(--media-tooltip-distance, 12px));
                                                                                top: 50%;
                                                                                transform: translate(0, -50%);
                                                                            }

                                                                            :host([placement="right"]) #arrow {
                                                                                top: 50%;
                                                                                right: 100%;
                                                                                border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
                                                                                border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
                                                                                transform: translate(0, -50%);
                                                                            }

                                                                            :host([placement="bottom"]) {
                                                                                position: absolute;
                                                                                top: calc(100% + var(--media-tooltip-distance, 12px));
                                                                                left: 50%;
                                                                                transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
                                                                            }

                                                                            :host([placement="bottom"]) #arrow {
                                                                                bottom: 100%;
                                                                                left: 50%;
                                                                                border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
                                                                                border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
                                                                                transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
                                                                            }

                                                                            :host([placement="left"]) {
                                                                                position: absolute;
                                                                                right: calc(100% + var(--media-tooltip-distance, 12px));
                                                                                top: 50%;
                                                                                transform: translate(0, -50%);
                                                                            }

                                                                            :host([placement="left"]) #arrow {
                                                                                top: 50%;
                                                                                left: 100%;
                                                                                border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
                                                                                border-color: transparent transparent transparent var(--_tooltip-arrow-background);
                                                                                transform: translate(0, -50%);
                                                                            }

                                                                            :host([placement="none"]) #arrow {
                                                                                display: none;
                                                                            }
                                                                        </style>
                                                                        <slot></slot>
                                                                        <div id="arrow"></div>
                                                                    </template>
                                                                    <slot name="tooltip-content">
                                                                        <slot name="tooltip-play">Play</slot>
                                                                        <slot name="tooltip-pause">Pause</slot>
                                                                    </slot>
                                                                </media-tooltip>
                                                            </slot>
                                                        </template>
                                                        <div slot="icon" className="relative grid cursor-pointer place-items-center rounded-full bg-white/20 backdrop-blur-lg transition-colors duration-200 hover:bg-white/35 text-primary after:absolute after:-inset-3 after:-right-38 after:bg-transparent after:content-[&quot;&quot;]" style="width:16px;height:16px;--p:0;--thickness:1px;--ring-color:currentColor">
                                                            <span className="progress-ring pointer-events-none absolute inset-0 rounded-full"></span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pause z-10 hidden h-[9px] w-[9px] group-aria-[label=pause]:block [&amp;_polygon]:fill-current [&amp;_rect]:fill-current" aria-hidden="true">
                                                                <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                                                                <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play z-10 hidden h-[9px] w-[9px] group-aria-[label=play]:block [&amp;_polygon]:fill-current" aria-hidden="true">
                                                                <polygon points="6 3 20 12 6 21 6 3"></polygon>
                                                            </svg>
                                                        </div>
                                                    </media-play-button>
                                                </div>
                                            </div>
                                            <media-controller id="id-ux8ov3f5c1miwrkrgk" className="isolate overflow-hidden pointer-events-auto absolute h-full w-full object-cover">
                                                <template shadowrootmode="open">
                                                    <style>
                                                        :host([mediaisfullscreen]) ::slotted([slot=media]) {
                                                            outline: none;
                                                        }

                                                        :host {
                                                            box-sizing: border-box;
                                                            position: relative;
                                                            display: inline-block;
                                                            line-height: 0;
                                                            background-color: var(--media-background-color, #000);
                                                            overflow: hidden;
                                                        }

                                                        :host(:not([audio])) [part~=layer]:not([part~=media-layer]) {
                                                            position: absolute;
                                                            top: 0;
                                                            left: 0;
                                                            bottom: 0;
                                                            right: 0;
                                                            display: flex;
                                                            flex-flow: column nowrap;
                                                            align-items: start;
                                                            pointer-events: none;
                                                            background: none;
                                                        }

                                                        slot[name=media] {
                                                            display: var(--media-slot-display, contents);
                                                        }

                                                        :host([audio]) slot[name=media] {
                                                            display: var(--media-slot-display, none);
                                                        }

                                                        :host([audio]) [part~=layer][part~=gesture-layer] {
                                                            height: 0;
                                                            display: block;
                                                        }

                                                        :host(:not([audio])[gesturesdisabled]) ::slotted([slot=gestures-chrome]), :host(:not([audio])[gesturesdisabled]) media-gesture-receiver[slot=gestures-chrome] {
                                                            display: none;
                                                        }

                                                        ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
                                                            pointer-events: auto;
                                                        }

                                                        :host(:not([audio])) *[part~=layer][part~=centered-layer] {
                                                            align-items: center;
                                                            justify-content: center;
                                                        }

                                                        :host(:not([audio])) ::slotted(media-gesture-receiver[slot=gestures-chrome]), :host(:not([audio])) media-gesture-receiver[slot=gestures-chrome] {
                                                            align-self: stretch;
                                                            flex-grow: 1;
                                                        }

                                                        slot[name=middle-chrome] {
                                                            display: inline;
                                                            flex-grow: 1;
                                                            pointer-events: none;
                                                            background: none;
                                                        }

                                                        ::slotted([slot=media]), ::slotted([slot=poster]) {
                                                            width: 100%;
                                                            height: 100%;
                                                        }

                                                        :host(:not([audio])) .spacer {
                                                            flex-grow: 1;
                                                        }

                                                        :host(:-webkit-full-screen) {
                                                            width: 100% !important;
                                                            height: 100% !important;
                                                        }

                                                        ::slotted(:not([slot=media]):not([slot=poster]):not([noautohide]):not([hidden]):not([role=dialog])) {
                                                            opacity: 1;
                                                            transition: var(--media-control-transition-in, opacity 0.25s);
                                                        }

                                                        :host([userinactive]:not([mediapaused]):not([mediaisairplaying]):not([mediaiscasting]):not([audio])) ::slotted(:not([slot=media]):not([slot=poster]):not([noautohide]):not([role=dialog])) {
                                                            opacity: 0;
                                                            transition: var(--media-control-transition-out, opacity 1s);
                                                        }

                                                        :host([userinactive]:not([noautohide]):not([mediapaused]):not([mediaiscasting]):not([audio])) ::slotted([slot=media]) {
                                                            cursor: none;
                                                        }

                                                        :host([userinactive][autohideovercontrols]:not([noautohide]):not([mediapaused]):not([mediaiscasting]):not([audio])) * {
                                                            --media-cursor: none;
                                                            cursor: none;
                                                        }

                                                        ::slotted(media-control-bar) {
                                                            align-self: stretch;
                                                        }

                                                        :host(:not([audio])[mediahasplayed]) slot[name=poster] {
                                                            display: none;
                                                        }

                                                        ::slotted([role=dialog]) {
                                                            width: 100%;
                                                            height: 100%;
                                                            align-self: center;
                                                        }

                                                        ::slotted([role=menu]) {
                                                            align-self: end;
                                                        }
                                                    </style>
                                                    <slot name="media" part="layer media-layer"></slot>
                                                    <slot name="poster" part="layer poster-layer"></slot>
                                                    <slot name="gestures-chrome" part="layer gesture-layer">
                                                        <media-gesture-receiver slot="gestures-chrome">
                                                            <template shadowrootmode="open">
                                                                <style>
                                                                    :host {
                                                                        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
                                                                        box-sizing: border-box;
                                                                    }
                                                                </style>
                                                            </template>
                                                        </media-gesture-receiver>
                                                    </slot>
                                                    <span part="layer vertical-layer">
                                                        <slot name="top-chrome" part="top chrome"></slot>
                                                        <slot name="middle-chrome" part="middle chrome"></slot>
                                                        <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
                                                        <slot part="bottom chrome"></slot>
                                                    </span>
                                                    <slot name="dialog" part="layer dialog-layer"></slot>
                                                </template>
                                                <img alt="" fetchPriority="auto" loading="lazy" decoding="async" data-nimg="fill" className="pointer-events-none absolute inset-0 z-10 h-full w-full object-cover transition-none duration-0 opacity-100" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="(max-width: 768px) 100vw, 760px" srcSet="/_next/image?url=https%3A%2F%2Fimage.mux.com%2FqONaNfbAttQQA02IDKgj7LueTxfka7TcfsJ5lNBlaVCE%2Fthumbnail.webp%3Ftime%3D0&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2FqONaNfbAttQQA02IDKgj7LueTxfka7TcfsJ5lNBlaVCE%2Fthumbnail.webp%3Ftime%3D0&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2FqONaNfbAttQQA02IDKgj7LueTxfka7TcfsJ5lNBlaVCE%2Fthumbnail.webp%3Ftime%3D0&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2FqONaNfbAttQQA02IDKgj7LueTxfka7TcfsJ5lNBlaVCE%2Fthumbnail.webp%3Ftime%3D0&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2FqONaNfbAttQQA02IDKgj7LueTxfka7TcfsJ5lNBlaVCE%2Fthumbnail.webp%3Ftime%3D0&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2FqONaNfbAttQQA02IDKgj7LueTxfka7TcfsJ5lNBlaVCE%2Fthumbnail.webp%3Ftime%3D0&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2FqONaNfbAttQQA02IDKgj7LueTxfka7TcfsJ5lNBlaVCE%2Fthumbnail.webp%3Ftime%3D0&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2FqONaNfbAttQQA02IDKgj7LueTxfka7TcfsJ5lNBlaVCE%2Fthumbnail.webp%3Ftime%3D0&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=https%3A%2F%2Fimage.mux.com%2FqONaNfbAttQQA02IDKgj7LueTxfka7TcfsJ5lNBlaVCE%2Fthumbnail.webp%3Ftime%3D0&amp;w=3840&amp;q=75"/>
                                                <video slot="media" muted="" loop="" draggable="false" playsInline="" crossorigin="true" className="h-full w-full cursor-pointer object-cover" tabindex="-1"></video>
                                            </media-controller>
                                        </div>
                                        <div className="col-span-full grid grid-cols-6 gap-2">
                                            <div className="col-span-6 flex flex-col justify-between rounded-xl border border-border p-3 max-md:mx-4 max-md:mt-4 max-md:aspect-video md:min-h-48 lg:col-span-2">
                                                <p className="flex-1 pb-12 label-1 text-primary md:pb-0">New skills every month</p>
                                                <p className="body-2 text-primary md:max-w-[50%] lg:max-w-full">In December 2024, Memo had only one arm and learned its first task: arranging shoes. Today, Memo is trained on multiple skills in parallel. In October 2025, Memo learned to fold piles of socks, handle glassware, and pull a shot of espresso.</p>
                                            </div>
                                            <div className="col-span-6 no-scrollbar flex snap-x snap-mandatory gap-2 max-md:overflow-x-auto md:grid md:grid-cols-4 md:gap-2 lg:col-span-4">
                                                <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:col-span-2 md:w-full max-md:last-of-type:pr-4">
                                                    <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-xl bg-black dark before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/0 before:content-[&#x27;&#x27;] grid w-full">
                                                        <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-3 dark bg-black/3">
                                                            <div className="flex items-start justify-between">
                                                                <div className="flex flex-wrap gap-1 xl:items-center">
                                                                    <span className="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">Autonomous</span>
                                                                    <span className="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">1
                                                                    <!-- -->
                                                                    ×</span>
                                                                </div>
                                                                <button className="transition-color pointer-events-auto flex h-4 w-4 cursor-pointer items-center duration-300 ease-in-out group-[&amp;:hover]:opacity-100 lg:opacity-0" aria-label="Enlarge media" name="Enlarge media">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-fullscreen [&amp;_*]:text-primary" aria-hidden="true">
                                                                        <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                                                                        <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                                                                        <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                                                                        <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                                                                        <rect width="10" height="8" x="7" y="8" rx="1"></rect>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <media-play-button mediacontroller="id-9iu25ggv0qmiwrkrgl" className="group block [--media-button-icon-height:16px] [--media-control-background:none] [--media-control-hover-background:none]" notooltip="">
                                                                    <template shadowrootmode="open">
                                                                        <style>
                                                                            :host {
                                                                                position: relative;
                                                                                font: var(--media-font, var(--media-font-weight, bold) var(--media-font-size, 14px) / var(--media-text-content-height, var(--media-control-height, 24px)) var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
                                                                                color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
                                                                                background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
                                                                                padding: var(--media-button-padding, var(--media-control-padding, 10px));
                                                                                justify-content: var(--media-button-justify-content, center);
                                                                                display: inline-flex;
                                                                                align-items: center;
                                                                                vertical-align: middle;
                                                                                box-sizing: border-box;
                                                                                transition: background .15s linear;
                                                                                pointer-events: auto;
                                                                                cursor: var(--media-cursor, pointer);
                                                                                -webkit-tap-highlight-color: transparent;
                                                                            }

                                                                            :host(:focus-visible) {
                                                                                box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
                                                                                outline: 0;
                                                                            }

                                                                            :host(:where(:focus)) {
                                                                                box-shadow: none;
                                                                                outline: 0;
                                                                            }

                                                                            :host(:hover) {
                                                                                background: var(--media-control-hover-background, rgba(50 50 70 / .7));
                                                                            }

                                                                            svg, img, ::slotted(svg), ::slotted(img) {
                                                                                width: var(--media-button-icon-width);
                                                                                height: var(--media-button-icon-height, var(--media-control-height, 24px));
                                                                                transform: var(--media-button-icon-transform);
                                                                                transition: var(--media-button-icon-transition);
                                                                                fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
                                                                                vertical-align: middle;
                                                                                max-width: 100%;
                                                                                max-height: 100%;
                                                                                min-width: 100%;
                                                                            }

                                                                            media-tooltip {
                                                                                max-width: 0;
                                                                                overflow-x: clip;
                                                                                opacity: 0;
                                                                                transition: opacity .3s, max-width 0s 9s;
                                                                            }

                                                                            :host(:hover) media-tooltip, :host(:focus-visible) media-tooltip {
                                                                                max-width: 100vw;
                                                                                opacity: 1;
                                                                                transition: opacity .3s;
                                                                            }

                                                                            :host([notooltip]) slot[name="tooltip"] {
                                                                                display: none;
                                                                            }
                                                                        </style>
                                                                        <style>
                                                                            :host([mediapaused]) slot[name=pause], :host(:not([mediapaused])) slot[name=play] {
                                                                                display: none !important;
                                                                            }

                                                                            :host([mediapaused]) slot[name=tooltip-pause], :host(:not([mediapaused])) slot[name=tooltip-play] {
                                                                                display: none;
                                                                            }
                                                                        </style>
                                                                        <slot name="icon">
                                                                            <slot name="play">
                                                                                <svg aria-hidden="true" viewBox="0 0 24 24">
                                                                                    <path d="m6 21 15-9L6 3v18Z"/>
                                                                                </svg>
                                                                            </slot>
                                                                            <slot name="pause">
                                                                                <svg aria-hidden="true" viewBox="0 0 24 24">
                                                                                    <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
                                                                                </svg>
                                                                            </slot>
                                                                        </slot>
                                                                        <slot name="tooltip">
                                                                            <media-tooltip part="tooltip" aria-hidden="true">
                                                                                <template shadowrootmode="open">
                                                                                    <style>
                                                                                        :host {
                                                                                            --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
                                                                                            --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
                                                                                            --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
                                                                                            --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
                                                                                            --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
                                                                                            position: relative;
                                                                                            pointer-events: none;
                                                                                            display: var(--media-tooltip-display, inline-flex);
                                                                                            justify-content: center;
                                                                                            align-items: center;
                                                                                            box-sizing: border-box;
                                                                                            z-index: var(--media-tooltip-z-index, 1);
                                                                                            background: var(--_tooltip-background);
                                                                                            color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
                                                                                            font: var(--media-font, var(--media-font-weight, 400) var(--media-font-size, 13px) / var(--media-text-content-height, var(--media-control-height, 18px)) var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
                                                                                            padding: var(--media-tooltip-padding, .35em .7em);
                                                                                            border: var(--media-tooltip-border, none);
                                                                                            border-radius: var(--media-tooltip-border-radius, 5px);
                                                                                            filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
                                                                                            white-space: var(--media-tooltip-white-space, nowrap);
                                                                                        }

                                                                                        :host([hidden]) {
                                                                                            display: none;
                                                                                        }

                                                                                        img, svg {
                                                                                            display: inline-block;
                                                                                        }

                                                                                        #arrow {
                                                                                            position: absolute;
                                                                                            width: 0px;
                                                                                            height: 0px;
                                                                                            border-style: solid;
                                                                                            display: var(--media-tooltip-arrow-display, block);
                                                                                        }

                                                                                        :host(:not([placement])), :host([placement="top"]) {
                                                                                            position: absolute;
                                                                                            bottom: calc(100% + var(--media-tooltip-distance, 12px));
                                                                                            left: 50%;
                                                                                            transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
                                                                                        }

                                                                                        :host(:not([placement])) #arrow, :host([placement="top"]) #arrow {
                                                                                            top: 100%;
                                                                                            left: 50%;
                                                                                            border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
                                                                                            border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
                                                                                            transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
                                                                                        }

                                                                                        :host([placement="right"]) {
                                                                                            position: absolute;
                                                                                            left: calc(100% + var(--media-tooltip-distance, 12px));
                                                                                            top: 50%;
                                                                                            transform: translate(0, -50%);
                                                                                        }

                                                                                        :host([placement="right"]) #arrow {
                                                                                            top: 50%;
                                                                                            right: 100%;
                                                                                            border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
                                                                                            border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
                                                                                            transform: translate(0, -50%);
                                                                                        }

                                                                                        :host([placement="bottom"]) {
                                                                                            position: absolute;
                                                                                            top: calc(100% + var(--media-tooltip-distance, 12px));
                                                                                            left: 50%;
                                                                                            transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
                                                                                        }

                                                                                        :host([placement="bottom"]) #arrow {
                                                                                            bottom: 100%;
                                                                                            left: 50%;
                                                                                            border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
                                                                                            border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
                                                                                            transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
                                                                                        }

                                                                                        :host([placement="left"]) {
                                                                                            position: absolute;
                                                                                            right: calc(100% + var(--media-tooltip-distance, 12px));
                                                                                            top: 50%;
                                                                                            transform: translate(0, -50%);
                                                                                        }

                                                                                        :host([placement="left"]) #arrow {
                                                                                            top: 50%;
                                                                                            left: 100%;
                                                                                            border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
                                                                                            border-color: transparent transparent transparent var(--_tooltip-arrow-background);
                                                                                            transform: translate(0, -50%);
                                                                                        }

                                                                                        :host([placement="none"]) #arrow {
                                                                                            display: none;
                                                                                        }
                                                                                    </style>
                                                                                    <slot></slot>
                                                                                    <div id="arrow"></div>
                                                                                </template>
                                                                                <slot name="tooltip-content">
                                                                                    <slot name="tooltip-play">Play</slot>
                                                                                    <slot name="tooltip-pause">Pause</slot>
                                                                                </slot>
                                                                            </media-tooltip>
                                                                        </slot>
                                                                    </template>
                                                                    <div slot="icon" className="relative grid cursor-pointer place-items-center rounded-full bg-white/20 backdrop-blur-lg transition-colors duration-200 hover:bg-white/35 text-primary after:absolute after:-inset-3 after:-right-38 after:bg-transparent after:content-[&quot;&quot;]" style="width:16px;height:16px;--p:0;--thickness:1px;--ring-color:currentColor">
                                                                        <span className="progress-ring pointer-events-none absolute inset-0 rounded-full"></span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pause z-10 hidden h-[9px] w-[9px] group-aria-[label=pause]:block [&amp;_polygon]:fill-current [&amp;_rect]:fill-current" aria-hidden="true">
                                                                            <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                                                                            <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                                                                        </svg>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play z-10 hidden h-[9px] w-[9px] group-aria-[label=play]:block [&amp;_polygon]:fill-current" aria-hidden="true">
                                                                            <polygon points="6 3 20 12 6 21 6 3"></polygon>
                                                                        </svg>
                                                                    </div>
                                                                </media-play-button>
                                                                <p className="label-1 text-primary">Memo making an espresso</p>
                                                            </div>
                                                        </div>
                                                        <media-controller id="id-9iu25ggv0qmiwrkrgl" className="isolate overflow-hidden pointer-events-auto absolute h-full w-full rounded-sm object-cover">
                                                            <template shadowrootmode="open">
                                                                <style>
                                                                    :host([mediaisfullscreen]) ::slotted([slot=media]) {
                                                                        outline: none;
                                                                    }

                                                                    :host {
                                                                        box-sizing: border-box;
                                                                        position: relative;
                                                                        display: inline-block;
                                                                        line-height: 0;
                                                                        background-color: var(--media-background-color, #000);
                                                                        overflow: hidden;
                                                                    }

                                                                    :host(:not([audio])) [part~=layer]:not([part~=media-layer]) {
                                                                        position: absolute;
                                                                        top: 0;
                                                                        left: 0;
                                                                        bottom: 0;
                                                                        right: 0;
                                                                        display: flex;
                                                                        flex-flow: column nowrap;
                                                                        align-items: start;
                                                                        pointer-events: none;
                                                                        background: none;
                                                                    }

                                                                    slot[name=media] {
                                                                        display: var(--media-slot-display, contents);
                                                                    }

                                                                    :host([audio]) slot[name=media] {
                                                                        display: var(--media-slot-display, none);
                                                                    }

                                                                    :host([audio]) [part~=layer][part~=gesture-layer] {
                                                                        height: 0;
                                                                        display: block;
                                                                    }

                                                                    :host(:not([audio])[gesturesdisabled]) ::slotted([slot=gestures-chrome]), :host(:not([audio])[gesturesdisabled]) media-gesture-receiver[slot=gestures-chrome] {
                                                                        display: none;
                                                                    }

                                                                    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
                                                                        pointer-events: auto;
                                                                    }

                                                                    :host(:not([audio])) *[part~=layer][part~=centered-layer] {
                                                                        align-items: center;
                                                                        justify-content: center;
                                                                    }

                                                                    :host(:not([audio])) ::slotted(media-gesture-receiver[slot=gestures-chrome]), :host(:not([audio])) media-gesture-receiver[slot=gestures-chrome] {
                                                                        align-self: stretch;
                                                                        flex-grow: 1;
                                                                    }

                                                                    slot[name=middle-chrome] {
                                                                        display: inline;
                                                                        flex-grow: 1;
                                                                        pointer-events: none;
                                                                        background: none;
                                                                    }

                                                                    ::slotted([slot=media]), ::slotted([slot=poster]) {
                                                                        width: 100%;
                                                                        height: 100%;
                                                                    }

                                                                    :host(:not([audio])) .spacer {
                                                                        flex-grow: 1;
                                                                    }

                                                                    :host(:-webkit-full-screen) {
                                                                        width: 100% !important;
                                                                        height: 100% !important;
                                                                    }

                                                                    ::slotted(:not([slot=media]):not([slot=poster]):not([noautohide]):not([hidden]):not([role=dialog])) {
                                                                        opacity: 1;
                                                                        transition: var(--media-control-transition-in, opacity 0.25s);
                                                                    }

                                                                    :host([userinactive]:not([mediapaused]):not([mediaisairplaying]):not([mediaiscasting]):not([audio])) ::slotted(:not([slot=media]):not([slot=poster]):not([noautohide]):not([role=dialog])) {
                                                                        opacity: 0;
                                                                        transition: var(--media-control-transition-out, opacity 1s);
                                                                    }

                                                                    :host([userinactive]:not([noautohide]):not([mediapaused]):not([mediaiscasting]):not([audio])) ::slotted([slot=media]) {
                                                                        cursor: none;
                                                                    }

                                                                    :host([userinactive][autohideovercontrols]:not([noautohide]):not([mediapaused]):not([mediaiscasting]):not([audio])) * {
                                                                        --media-cursor: none;
                                                                        cursor: none;
                                                                    }

                                                                    ::slotted(media-control-bar) {
                                                                        align-self: stretch;
                                                                    }

                                                                    :host(:not([audio])[mediahasplayed]) slot[name=poster] {
                                                                        display: none;
                                                                    }

                                                                    ::slotted([role=dialog]) {
                                                                        width: 100%;
                                                                        height: 100%;
                                                                        align-self: center;
                                                                    }

                                                                    ::slotted([role=menu]) {
                                                                        align-self: end;
                                                                    }
                                                                </style>
                                                                <slot name="media" part="layer media-layer"></slot>
                                                                <slot name="poster" part="layer poster-layer"></slot>
                                                                <slot name="gestures-chrome" part="layer gesture-layer">
                                                                    <media-gesture-receiver slot="gestures-chrome">
                                                                        <template shadowrootmode="open">
                                                                            <style>
                                                                                :host {
                                                                                    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
                                                                                    box-sizing: border-box;
                                                                                }
                                                                            </style>
                                                                        </template>
                                                                    </media-gesture-receiver>
                                                                </slot>
                                                                <span part="layer vertical-layer">
                                                                    <slot name="top-chrome" part="top chrome"></slot>
                                                                    <slot name="middle-chrome" part="middle chrome"></slot>
                                                                    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
                                                                    <slot part="bottom chrome"></slot>
                                                                </span>
                                                                <slot name="dialog" part="layer dialog-layer"></slot>
                                                            </template>
                                                            <img alt="" fetchPriority="auto" loading="lazy" decoding="async" data-nimg="fill" className="pointer-events-none absolute inset-0 z-10 h-full w-full object-cover transition-none duration-0 opacity-100" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="(max-width: 768px) 100vw, 760px" srcSet="/_next/image?url=https%3A%2F%2Fimage.mux.com%2F1mZKYbW8PpvoTmbgMRdsaTm007g54KNlRqlVHibfdHRk%2Fthumbnail.webp%3Ftime%3D0&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2F1mZKYbW8PpvoTmbgMRdsaTm007g54KNlRqlVHibfdHRk%2Fthumbnail.webp%3Ftime%3D0&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2F1mZKYbW8PpvoTmbgMRdsaTm007g54KNlRqlVHibfdHRk%2Fthumbnail.webp%3Ftime%3D0&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2F1mZKYbW8PpvoTmbgMRdsaTm007g54KNlRqlVHibfdHRk%2Fthumbnail.webp%3Ftime%3D0&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2F1mZKYbW8PpvoTmbgMRdsaTm007g54KNlRqlVHibfdHRk%2Fthumbnail.webp%3Ftime%3D0&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2F1mZKYbW8PpvoTmbgMRdsaTm007g54KNlRqlVHibfdHRk%2Fthumbnail.webp%3Ftime%3D0&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2F1mZKYbW8PpvoTmbgMRdsaTm007g54KNlRqlVHibfdHRk%2Fthumbnail.webp%3Ftime%3D0&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2F1mZKYbW8PpvoTmbgMRdsaTm007g54KNlRqlVHibfdHRk%2Fthumbnail.webp%3Ftime%3D0&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=https%3A%2F%2Fimage.mux.com%2F1mZKYbW8PpvoTmbgMRdsaTm007g54KNlRqlVHibfdHRk%2Fthumbnail.webp%3Ftime%3D0&amp;w=3840&amp;q=75"/>
                                                            <video slot="media" muted="" draggable="false" playsInline="" crossorigin="true" className="h-full w-full cursor-pointer object-cover" tabindex="-1"></video>
                                                        </media-controller>
                                                    </div>
                                                </div>
                                                <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:col-span-2 md:w-full max-md:last-of-type:pr-4">
                                                    <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-xl bg-black dark before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/0 before:content-[&#x27;&#x27;] grid w-full">
                                                        <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-3 dark bg-black/3">
                                                            <div className="flex items-start justify-between">
                                                                <div className="flex flex-wrap gap-1 xl:items-center">
                                                                    <span className="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">Autonomous</span>
                                                                    <span className="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">5
                                                                    <!-- -->
                                                                    ×</span>
                                                                </div>
                                                                <button className="transition-color pointer-events-auto flex h-4 w-4 cursor-pointer items-center duration-300 ease-in-out group-[&amp;:hover]:opacity-100 lg:opacity-0" aria-label="Enlarge media" name="Enlarge media">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-fullscreen [&amp;_*]:text-primary" aria-hidden="true">
                                                                        <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                                                                        <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                                                                        <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                                                                        <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                                                                        <rect width="10" height="8" x="7" y="8" rx="1"></rect>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <media-play-button mediacontroller="id-8lr3pc4kxe2miwrkrgl" className="group block [--media-button-icon-height:16px] [--media-control-background:none] [--media-control-hover-background:none]" notooltip="">
                                                                    <template shadowrootmode="open">
                                                                        <style>
                                                                            :host {
                                                                                position: relative;
                                                                                font: var(--media-font, var(--media-font-weight, bold) var(--media-font-size, 14px) / var(--media-text-content-height, var(--media-control-height, 24px)) var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
                                                                                color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
                                                                                background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
                                                                                padding: var(--media-button-padding, var(--media-control-padding, 10px));
                                                                                justify-content: var(--media-button-justify-content, center);
                                                                                display: inline-flex;
                                                                                align-items: center;
                                                                                vertical-align: middle;
                                                                                box-sizing: border-box;
                                                                                transition: background .15s linear;
                                                                                pointer-events: auto;
                                                                                cursor: var(--media-cursor, pointer);
                                                                                -webkit-tap-highlight-color: transparent;
                                                                            }

                                                                            :host(:focus-visible) {
                                                                                box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
                                                                                outline: 0;
                                                                            }

                                                                            :host(:where(:focus)) {
                                                                                box-shadow: none;
                                                                                outline: 0;
                                                                            }

                                                                            :host(:hover) {
                                                                                background: var(--media-control-hover-background, rgba(50 50 70 / .7));
                                                                            }

                                                                            svg, img, ::slotted(svg), ::slotted(img) {
                                                                                width: var(--media-button-icon-width);
                                                                                height: var(--media-button-icon-height, var(--media-control-height, 24px));
                                                                                transform: var(--media-button-icon-transform);
                                                                                transition: var(--media-button-icon-transition);
                                                                                fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
                                                                                vertical-align: middle;
                                                                                max-width: 100%;
                                                                                max-height: 100%;
                                                                                min-width: 100%;
                                                                            }

                                                                            media-tooltip {
                                                                                max-width: 0;
                                                                                overflow-x: clip;
                                                                                opacity: 0;
                                                                                transition: opacity .3s, max-width 0s 9s;
                                                                            }

                                                                            :host(:hover) media-tooltip, :host(:focus-visible) media-tooltip {
                                                                                max-width: 100vw;
                                                                                opacity: 1;
                                                                                transition: opacity .3s;
                                                                            }

                                                                            :host([notooltip]) slot[name="tooltip"] {
                                                                                display: none;
                                                                            }
                                                                        </style>
                                                                        <style>
                                                                            :host([mediapaused]) slot[name=pause], :host(:not([mediapaused])) slot[name=play] {
                                                                                display: none !important;
                                                                            }

                                                                            :host([mediapaused]) slot[name=tooltip-pause], :host(:not([mediapaused])) slot[name=tooltip-play] {
                                                                                display: none;
                                                                            }
                                                                        </style>
                                                                        <slot name="icon">
                                                                            <slot name="play">
                                                                                <svg aria-hidden="true" viewBox="0 0 24 24">
                                                                                    <path d="m6 21 15-9L6 3v18Z"/>
                                                                                </svg>
                                                                            </slot>
                                                                            <slot name="pause">
                                                                                <svg aria-hidden="true" viewBox="0 0 24 24">
                                                                                    <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
                                                                                </svg>
                                                                            </slot>
                                                                        </slot>
                                                                        <slot name="tooltip">
                                                                            <media-tooltip part="tooltip" aria-hidden="true">
                                                                                <template shadowrootmode="open">
                                                                                    <style>
                                                                                        :host {
                                                                                            --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
                                                                                            --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
                                                                                            --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
                                                                                            --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
                                                                                            --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
                                                                                            position: relative;
                                                                                            pointer-events: none;
                                                                                            display: var(--media-tooltip-display, inline-flex);
                                                                                            justify-content: center;
                                                                                            align-items: center;
                                                                                            box-sizing: border-box;
                                                                                            z-index: var(--media-tooltip-z-index, 1);
                                                                                            background: var(--_tooltip-background);
                                                                                            color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
                                                                                            font: var(--media-font, var(--media-font-weight, 400) var(--media-font-size, 13px) / var(--media-text-content-height, var(--media-control-height, 18px)) var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
                                                                                            padding: var(--media-tooltip-padding, .35em .7em);
                                                                                            border: var(--media-tooltip-border, none);
                                                                                            border-radius: var(--media-tooltip-border-radius, 5px);
                                                                                            filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
                                                                                            white-space: var(--media-tooltip-white-space, nowrap);
                                                                                        }

                                                                                        :host([hidden]) {
                                                                                            display: none;
                                                                                        }

                                                                                        img, svg {
                                                                                            display: inline-block;
                                                                                        }

                                                                                        #arrow {
                                                                                            position: absolute;
                                                                                            width: 0px;
                                                                                            height: 0px;
                                                                                            border-style: solid;
                                                                                            display: var(--media-tooltip-arrow-display, block);
                                                                                        }

                                                                                        :host(:not([placement])), :host([placement="top"]) {
                                                                                            position: absolute;
                                                                                            bottom: calc(100% + var(--media-tooltip-distance, 12px));
                                                                                            left: 50%;
                                                                                            transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
                                                                                        }

                                                                                        :host(:not([placement])) #arrow, :host([placement="top"]) #arrow {
                                                                                            top: 100%;
                                                                                            left: 50%;
                                                                                            border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
                                                                                            border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
                                                                                            transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
                                                                                        }

                                                                                        :host([placement="right"]) {
                                                                                            position: absolute;
                                                                                            left: calc(100% + var(--media-tooltip-distance, 12px));
                                                                                            top: 50%;
                                                                                            transform: translate(0, -50%);
                                                                                        }

                                                                                        :host([placement="right"]) #arrow {
                                                                                            top: 50%;
                                                                                            right: 100%;
                                                                                            border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
                                                                                            border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
                                                                                            transform: translate(0, -50%);
                                                                                        }

                                                                                        :host([placement="bottom"]) {
                                                                                            position: absolute;
                                                                                            top: calc(100% + var(--media-tooltip-distance, 12px));
                                                                                            left: 50%;
                                                                                            transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
                                                                                        }

                                                                                        :host([placement="bottom"]) #arrow {
                                                                                            bottom: 100%;
                                                                                            left: 50%;
                                                                                            border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
                                                                                            border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
                                                                                            transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
                                                                                        }

                                                                                        :host([placement="left"]) {
                                                                                            position: absolute;
                                                                                            right: calc(100% + var(--media-tooltip-distance, 12px));
                                                                                            top: 50%;
                                                                                            transform: translate(0, -50%);
                                                                                        }

                                                                                        :host([placement="left"]) #arrow {
                                                                                            top: 50%;
                                                                                            left: 100%;
                                                                                            border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
                                                                                            border-color: transparent transparent transparent var(--_tooltip-arrow-background);
                                                                                            transform: translate(0, -50%);
                                                                                        }

                                                                                        :host([placement="none"]) #arrow {
                                                                                            display: none;
                                                                                        }
                                                                                    </style>
                                                                                    <slot></slot>
                                                                                    <div id="arrow"></div>
                                                                                </template>
                                                                                <slot name="tooltip-content">
                                                                                    <slot name="tooltip-play">Play</slot>
                                                                                    <slot name="tooltip-pause">Pause</slot>
                                                                                </slot>
                                                                            </media-tooltip>
                                                                        </slot>
                                                                    </template>
                                                                    <div slot="icon" className="relative grid cursor-pointer place-items-center rounded-full bg-white/20 backdrop-blur-lg transition-colors duration-200 hover:bg-white/35 text-primary after:absolute after:-inset-3 after:-right-38 after:bg-transparent after:content-[&quot;&quot;]" style="width:16px;height:16px;--p:0;--thickness:1px;--ring-color:currentColor">
                                                                        <span className="progress-ring pointer-events-none absolute inset-0 rounded-full"></span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pause z-10 hidden h-[9px] w-[9px] group-aria-[label=pause]:block [&amp;_polygon]:fill-current [&amp;_rect]:fill-current" aria-hidden="true">
                                                                            <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                                                                            <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                                                                        </svg>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play z-10 hidden h-[9px] w-[9px] group-aria-[label=play]:block [&amp;_polygon]:fill-current" aria-hidden="true">
                                                                            <polygon points="6 3 20 12 6 21 6 3"></polygon>
                                                                        </svg>
                                                                    </div>
                                                                </media-play-button>
                                                                <p className="label-1 text-primary">Memo folding six pairs of socks in a row</p>
                                                            </div>
                                                        </div>
                                                        <media-controller id="id-8lr3pc4kxe2miwrkrgl" className="isolate overflow-hidden pointer-events-auto absolute h-full w-full rounded-sm object-cover">
                                                            <template shadowrootmode="open">
                                                                <style>
                                                                    :host([mediaisfullscreen]) ::slotted([slot=media]) {
                                                                        outline: none;
                                                                    }

                                                                    :host {
                                                                        box-sizing: border-box;
                                                                        position: relative;
                                                                        display: inline-block;
                                                                        line-height: 0;
                                                                        background-color: var(--media-background-color, #000);
                                                                        overflow: hidden;
                                                                    }

                                                                    :host(:not([audio])) [part~=layer]:not([part~=media-layer]) {
                                                                        position: absolute;
                                                                        top: 0;
                                                                        left: 0;
                                                                        bottom: 0;
                                                                        right: 0;
                                                                        display: flex;
                                                                        flex-flow: column nowrap;
                                                                        align-items: start;
                                                                        pointer-events: none;
                                                                        background: none;
                                                                    }

                                                                    slot[name=media] {
                                                                        display: var(--media-slot-display, contents);
                                                                    }

                                                                    :host([audio]) slot[name=media] {
                                                                        display: var(--media-slot-display, none);
                                                                    }

                                                                    :host([audio]) [part~=layer][part~=gesture-layer] {
                                                                        height: 0;
                                                                        display: block;
                                                                    }

                                                                    :host(:not([audio])[gesturesdisabled]) ::slotted([slot=gestures-chrome]), :host(:not([audio])[gesturesdisabled]) media-gesture-receiver[slot=gestures-chrome] {
                                                                        display: none;
                                                                    }

                                                                    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
                                                                        pointer-events: auto;
                                                                    }

                                                                    :host(:not([audio])) *[part~=layer][part~=centered-layer] {
                                                                        align-items: center;
                                                                        justify-content: center;
                                                                    }

                                                                    :host(:not([audio])) ::slotted(media-gesture-receiver[slot=gestures-chrome]), :host(:not([audio])) media-gesture-receiver[slot=gestures-chrome] {
                                                                        align-self: stretch;
                                                                        flex-grow: 1;
                                                                    }

                                                                    slot[name=middle-chrome] {
                                                                        display: inline;
                                                                        flex-grow: 1;
                                                                        pointer-events: none;
                                                                        background: none;
                                                                    }

                                                                    ::slotted([slot=media]), ::slotted([slot=poster]) {
                                                                        width: 100%;
                                                                        height: 100%;
                                                                    }

                                                                    :host(:not([audio])) .spacer {
                                                                        flex-grow: 1;
                                                                    }

                                                                    :host(:-webkit-full-screen) {
                                                                        width: 100% !important;
                                                                        height: 100% !important;
                                                                    }

                                                                    ::slotted(:not([slot=media]):not([slot=poster]):not([noautohide]):not([hidden]):not([role=dialog])) {
                                                                        opacity: 1;
                                                                        transition: var(--media-control-transition-in, opacity 0.25s);
                                                                    }

                                                                    :host([userinactive]:not([mediapaused]):not([mediaisairplaying]):not([mediaiscasting]):not([audio])) ::slotted(:not([slot=media]):not([slot=poster]):not([noautohide]):not([role=dialog])) {
                                                                        opacity: 0;
                                                                        transition: var(--media-control-transition-out, opacity 1s);
                                                                    }

                                                                    :host([userinactive]:not([noautohide]):not([mediapaused]):not([mediaiscasting]):not([audio])) ::slotted([slot=media]) {
                                                                        cursor: none;
                                                                    }

                                                                    :host([userinactive][autohideovercontrols]:not([noautohide]):not([mediapaused]):not([mediaiscasting]):not([audio])) * {
                                                                        --media-cursor: none;
                                                                        cursor: none;
                                                                    }

                                                                    ::slotted(media-control-bar) {
                                                                        align-self: stretch;
                                                                    }

                                                                    :host(:not([audio])[mediahasplayed]) slot[name=poster] {
                                                                        display: none;
                                                                    }

                                                                    ::slotted([role=dialog]) {
                                                                        width: 100%;
                                                                        height: 100%;
                                                                        align-self: center;
                                                                    }

                                                                    ::slotted([role=menu]) {
                                                                        align-self: end;
                                                                    }
                                                                </style>
                                                                <slot name="media" part="layer media-layer"></slot>
                                                                <slot name="poster" part="layer poster-layer"></slot>
                                                                <slot name="gestures-chrome" part="layer gesture-layer">
                                                                    <media-gesture-receiver slot="gestures-chrome">
                                                                        <template shadowrootmode="open">
                                                                            <style>
                                                                                :host {
                                                                                    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
                                                                                    box-sizing: border-box;
                                                                                }
                                                                            </style>
                                                                        </template>
                                                                    </media-gesture-receiver>
                                                                </slot>
                                                                <span part="layer vertical-layer">
                                                                    <slot name="top-chrome" part="top chrome"></slot>
                                                                    <slot name="middle-chrome" part="middle chrome"></slot>
                                                                    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
                                                                    <slot part="bottom chrome"></slot>
                                                                </span>
                                                                <slot name="dialog" part="layer dialog-layer"></slot>
                                                            </template>
                                                            <img alt="" fetchPriority="auto" loading="lazy" decoding="async" data-nimg="fill" className="pointer-events-none absolute inset-0 z-10 h-full w-full object-cover transition-none duration-0 opacity-100" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="(max-width: 768px) 100vw, 760px" srcSet="/_next/image?url=https%3A%2F%2Fimage.mux.com%2FjM6QGCAnRqLBhfn009kbC02OSyYRyH1wkPX5woDp6D5xg%2Fthumbnail.webp%3Ftime%3D0&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2FjM6QGCAnRqLBhfn009kbC02OSyYRyH1wkPX5woDp6D5xg%2Fthumbnail.webp%3Ftime%3D0&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2FjM6QGCAnRqLBhfn009kbC02OSyYRyH1wkPX5woDp6D5xg%2Fthumbnail.webp%3Ftime%3D0&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2FjM6QGCAnRqLBhfn009kbC02OSyYRyH1wkPX5woDp6D5xg%2Fthumbnail.webp%3Ftime%3D0&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2FjM6QGCAnRqLBhfn009kbC02OSyYRyH1wkPX5woDp6D5xg%2Fthumbnail.webp%3Ftime%3D0&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2FjM6QGCAnRqLBhfn009kbC02OSyYRyH1wkPX5woDp6D5xg%2Fthumbnail.webp%3Ftime%3D0&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2FjM6QGCAnRqLBhfn009kbC02OSyYRyH1wkPX5woDp6D5xg%2Fthumbnail.webp%3Ftime%3D0&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fimage.mux.com%2FjM6QGCAnRqLBhfn009kbC02OSyYRyH1wkPX5woDp6D5xg%2Fthumbnail.webp%3Ftime%3D0&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=https%3A%2F%2Fimage.mux.com%2FjM6QGCAnRqLBhfn009kbC02OSyYRyH1wkPX5woDp6D5xg%2Fthumbnail.webp%3Ftime%3D0&amp;w=3840&amp;q=75"/>
                                                            <video slot="media" muted="" draggable="false" playsInline="" crossorigin="true" className="h-full w-full cursor-pointer object-cover" tabindex="-1"></video>
                                                        </media-controller>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-full py-4 md:hidden">
                                            <div className="flex h-full justify-center gap-2">
                                                <button type="button" aria-label="Go to question 1" aria-current="true" className="transition-bg aspect-square w-2 cursor-pointer overflow-hidden rounded-full duration-300 bg-primary"></button>
                                                <button type="button" aria-label="Go to question 2" aria-current="false" className="transition-bg aspect-square w-2 cursor-pointer overflow-hidden rounded-full duration-300 bg-secondary/10"></button>
                                            </div>
                                        </div>
                                    </div> */}
                    </div>
                </section>
            </div>
        </section>
    )
}
