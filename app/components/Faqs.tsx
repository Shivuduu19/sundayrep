import React, { MouseEvent, useEffect, useRef, useState } from 'react'

const Faqs = () => {
    const [active, setActive] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null)
    const handleClick = ({ e, i }: { e: MouseEvent<HTMLButtonElement>, i: boolean }) => {
        // setActive(i)
        console.log(active, e.currentTarget);

        const answer = e.currentTarget.nextElementSibling as HTMLElement
        const answerparent = answer?.children[0] as HTMLDivElement
        // console.log(answerparent.offsetHeight)
        // console.log(answer);
        if (i) {
            answer.style.height = answerparent.offsetHeight + 'px'
            answer.style.opacity = '1'
            answer.style.transitionDuration = '300ms'

        } else {
            answer.style.height = 0 + 'px'
            answer.style.opacity = '.6'
            answer.style.transitionDuration = '300ms'
        }

        // const conateinrer = e.currentTarget.parentElement?.parentElement as HTMLDivElement
        // const children = conateinrer.children
        // const childrenarray = Array.from(children)
        // childrenarray.map((child, i) => {

        //     if (i + 1 === active) return
        //     (child.children[1] as HTMLElement).style.height = '0px';
        //     (child.children[1] as HTMLElement).style.opacity = '0.6';
        //     (child.children[1] as HTMLElement).style.transitionDuration = '300ms'

        // })



    }

    useEffect(() => {
        if (active) {
            const handleremaining = () => {
                const conateinrer = ref.current
                const children = conateinrer?.children
                if (!children) return
                const childrenarray = Array.from(children)
                childrenarray.map((child, i) => {

                    if (!(i + 1 === active)) {

                        (child.children[1] as HTMLElement).style.height = '0px';
                        (child.children[1] as HTMLElement).style.opacity = '0.6';
                        (child.children[1] as HTMLElement).style.transitionDuration = '300ms'
                    }

                })

            }
            handleremaining()
        }
    }, [active])

    return (
        <section
            className="section-block bg-bg text-primary transition-colors duration-300"
            id="faqs"
            data-section-title="faqs"
            data-toc-section="true"
        >
            <div className="section-blocks relative bg-bg transition-colors duration-300">
                <section className="bg-bg pt-10 pb-30 text-primary lg:pt-24 lg:pb-40">
                    <div className="grid grid-cols-12 gap-3 p-4 lg:p-6">
                        <div className="col-span-full pb-10 lg:col-span-6">
                            <h3 className="subheading-2 lg:body-2">Frequently asked questions</h3>
                        </div>
                        <div className="col-span-full lg:col-span-6">
                            <div ref={ref} className="w-full flex flex-col gap-2" role="presentation">
                                <div className="overflow-hidden border-t border-border not-first:mt-6">
                                    <button
                                        id="315a0d0b039d-6f322203574f-btn"
                                        aria-controls="315a0d0b039d-6f322203574f-panel"
                                        aria-expanded="false"
                                        type="button"
                                        onClick={(e) => {
                                            if (active === 1) {
                                                setActive(0)
                                                handleClick({ e, i: false })
                                            } else {
                                                setActive(1)
                                                handleClick({ e, i: true }
                                                )
                                            }
                                        }}
                                        className="flex w-full cursor-pointer items-start justify-between text-left pt-4"
                                    >
                                        <span className="max-w-[60ch] flex-1">
                                            <p className="body-2">What can Memo do? </p>
                                        </span>
                                        <span
                                            className="inline-flex shrink-0"
                                            aria-hidden="true"
                                            style={{ transform: active === 1 ? "rotate(180deg)" : "none" }}
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
                                                className="lucide lucide-chevron-down h-4 w-4 opacity-70"
                                                aria-hidden="true"
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </span>
                                    </button>
                                    <div
                                        id="315a0d0b039d-6f322203574f-panel"
                                        role="region"
                                        aria-labelledby="315a0d0b039d-6f322203574f-btn"
                                        className="overflow-hidden"
                                        style={{ height: 0, opacity: "0.6" }}
                                    >
                                        <div>
                                            <div className="pb-6 body-2 text-secondary">
                                                <p className="[&+&]:mt-[1em]">
                                                    The Sunday team is developing two things: first: a
                                                    <em> robot with skills</em>, and second:{" "}
                                                    <em>the robot’s capability to acquire new skills.</em>{" "}
                                                </p>
                                                <p className="[&+&]:mt-[1em]">
                                                    Think of it like the difference between cooking a few good
                                                    home-made dishes versus developing a whole restaurant
                                                    operation with great chefs who will source better
                                                    ingredients, produce new menus, and run a kitchen that
                                                    makes more dishes, all of which adds up to a great dining
                                                    experience.
                                                </p>
                                                <p className="[&+&]:mt-[1em]">
                                                    Today, Memo (*the robot with skills*) can do the following
                                                    things:{" "}
                                                </p>
                                                <ul className="list-dash relative mb-[1em] list-outside pl-[1em] last-of-type:mb-0 [p+&]:mt-[1em]">
                                                    <li className="pl-3">
                                                        Dishes: Memo can collect utensils, baby plates, cups,
                                                        and delicate wine glasses. Memo will also clear used
                                                        napkins, and dump food scraps into the trash bin.
                                                        Finally Memo will load up your dishwasher and run it.
                                                    </li>
                                                    <li className="pl-3">
                                                        Coffee: Memo can pull a shot from an espresso machine
                                                        with a nice crema on top.{" "}
                                                    </li>
                                                    <li className="pl-3">
                                                        Laundry: This is a new skill for Memo, who is very proud
                                                        of being able to handle piles of socks now.
                                                    </li>
                                                </ul>
                                                <p className="[&+&]:mt-[1em]" />
                                                <p className="[&+&]:mt-[1em]">
                                                    We are still actively improving the reliability and
                                                    generalization of these skills, so Memo can do them in
                                                    your home out-of-the-box.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-hidden border-t border-border not-first:mt-6">
                                    <button
                                        id="315a0d0b039d-a007ce95ef3cb79f0615a0908f52287d-btn"
                                        aria-controls="315a0d0b039d-a007ce95ef3cb79f0615a0908f52287d-panel"
                                        aria-expanded="false"
                                        type="button"
                                        onClick={(e) => {

                                            if (active === 2) {
                                                setActive(0)
                                                handleClick({ e, i: false })
                                            } else {
                                                setActive(2)
                                                handleClick({ e, i: true }
                                                )
                                            }
                                        }}
                                        className="flex w-full cursor-pointer items-start justify-between text-left pt-4"
                                    >
                                        <span className="max-w-[60ch] flex-1">
                                            <p className="body-2">Is Memo available for purchase? </p>
                                        </span>
                                        <span
                                            className="inline-flex shrink-0"
                                            aria-hidden="true"
                                            style={{ transform: "none" }}
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
                                                className="lucide lucide-chevron-down h-4 w-4 opacity-70"
                                                aria-hidden="true"
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </span>
                                    </button>
                                    <div
                                        id="315a0d0b039d-a007ce95ef3cb79f0615a0908f52287d-panel"
                                        role="region"
                                        aria-labelledby="315a0d0b039d-a007ce95ef3cb79f0615a0908f52287d-btn"
                                        className="overflow-hidden"
                                        style={{ height: 0, opacity: "0.6" }}
                                    >
                                        <div>
                                            <div className="pb-6 body-2 text-secondary">
                                                <p className="[&+&]:mt-[1em]">
                                                    Not yet — but you <em>can</em> apply to become a Founding
                                                    Family in our 2026 beta program. Memo will not be
                                                    available for purchase until after we complete our beta
                                                    testing in 2026 and incorporate everything we learn into
                                                    the production of Memo at scale.{" "}
                                                </p>
                                                <p className="[&+&]:mt-[1em]">
                                                    During the beta, we’re focused on making Memo
                                                    exceptionally good at helping you—prioritizing safety,
                                                    hygiene, maintenance, durability, interaction quality, and
                                                    real-life usefulness inside a messy home.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-hidden border-t border-border not-first:mt-6">
                                    <button
                                        id="315a0d0b039d-bfd92fc15acb8881160fbb1bce46bd87-btn"
                                        aria-controls="315a0d0b039d-bfd92fc15acb8881160fbb1bce46bd87-panel"
                                        aria-expanded="false"
                                        type="button"
                                        onClick={(e) => {
                                            if (active === 3) {
                                                setActive(0)
                                                handleClick({ e, i: false })
                                            } else {
                                                setActive(3)
                                                handleClick({ e, i: true }
                                                )
                                            }
                                        }}
                                        className="flex w-full cursor-pointer items-start justify-between text-left pt-4"
                                    >
                                        <span className="max-w-[60ch] flex-1">
                                            <p className="body-2">How much will a Memo cost? </p>
                                        </span>
                                        <span
                                            className="inline-flex shrink-0"
                                            aria-hidden="true"
                                            style={{ transform: "none" }}
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
                                                className="lucide lucide-chevron-down h-4 w-4 opacity-70"
                                                aria-hidden="true"
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </span>
                                    </button>
                                    <div
                                        id="315a0d0b039d-bfd92fc15acb8881160fbb1bce46bd87-panel"
                                        role="region"
                                        aria-labelledby="315a0d0b039d-bfd92fc15acb8881160fbb1bce46bd87-btn"
                                        className="overflow-hidden"
                                        style={{ height: 0, opacity: "0.6" }}
                                    >
                                        <div>
                                            <div className="pb-6 body-2 text-secondary">
                                                <p className="[&+&]:mt-[1em]">
                                                    Building a single Memo today — by hand, with custom
                                                    components and no economies of scale — costs approximately
                                                    $20,000.
                                                </p>
                                                <p className="[&+&]:mt-[1em]">
                                                    We don’t expect that to be the retail price. Large-scale
                                                    manufacturing in our next phase will meaningfully reduce
                                                    costs by at least 50%, and exact pricing will be announced
                                                    closer to launch.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-hidden border-t border-border not-first:mt-6">
                                    <button
                                        id="315a0d0b039d-1b5fe36f304a62d6d8f4df31475b8a0e-btn"
                                        aria-controls="315a0d0b039d-1b5fe36f304a62d6d8f4df31475b8a0e-panel"
                                        aria-expanded="false"
                                        type="button"
                                        onClick={(e) => {
                                            if (active === 4) {
                                                setActive(0)
                                                handleClick({ e, i: false })
                                            } else {
                                                setActive(4)
                                                handleClick({ e, i: true }
                                                )
                                            }
                                        }}
                                        className="flex w-full cursor-pointer items-start justify-between text-left pt-4"
                                    >
                                        <span className="max-w-[60ch] flex-1">
                                            <p className="body-2">
                                                How big is Memo? How fast can Memo move?{" "}
                                            </p>
                                        </span>
                                        <span
                                            className="inline-flex shrink-0"
                                            aria-hidden="true"
                                            style={{ transform: "none" }}
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
                                                className="lucide lucide-chevron-down h-4 w-4 opacity-70"
                                                aria-hidden="true"
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </span>
                                    </button>
                                    <div
                                        id="315a0d0b039d-1b5fe36f304a62d6d8f4df31475b8a0e-panel"
                                        role="region"
                                        aria-labelledby="315a0d0b039d-1b5fe36f304a62d6d8f4df31475b8a0e-btn"
                                        className="overflow-hidden"
                                        style={{ height: 0, opacity: "0.6" }}
                                    >
                                        <div>
                                            <div className="pb-6 body-2 text-secondary">
                                                <p className="[&+&]:mt-[1em]">
                                                    Memo can lower to touch the ground or reach as tall as 7
                                                    feet with its arms. For most tasks, Memo rests at 4 feet.{" "}
                                                </p>
                                                <p className="[&+&]:mt-[1em]">
                                                    Memo’s hardware is powerful, but the software sets hard
                                                    limits on Memo’s speed. It helps Memo avoid collisions in
                                                    unseen environments to go at a meandering pace.{" "}
                                                </p>
                                                <p className="[&+&]:mt-[1em]">
                                                    For most tasks today, we train Memo to move at 50% of a
                                                    human’s natural pace. This feels safer and makes it easier
                                                    for our team to see and critique the precision of
                                                    movements (we’re picky, down to a few millimeters). Please
                                                    refer to specs on our Technology page for more details.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-hidden border-t border-border not-first:mt-6">
                                    <button
                                        id="315a0d0b039d-3470fef818a6-btn"
                                        aria-controls="315a0d0b039d-3470fef818a6-panel"
                                        aria-expanded="false"
                                        type="button"
                                        onClick={(e) => {
                                            if (active === 5) {
                                                setActive(0)
                                                handleClick({ e, i: false })
                                            } else {
                                                setActive(5)
                                                handleClick({ e, i: true }
                                                )
                                            }
                                        }}
                                        className="flex w-full cursor-pointer items-start justify-between text-left pt-4"
                                    >
                                        <span className="max-w-[60ch] flex-1">
                                            <p className="body-2">Is Memo safe?</p>
                                        </span>
                                        <span
                                            className="inline-flex shrink-0"
                                            aria-hidden="true"
                                            style={{ transform: "none" }}
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
                                                className="lucide lucide-chevron-down h-4 w-4 opacity-70"
                                                aria-hidden="true"
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </span>
                                    </button>
                                    <div
                                        id="315a0d0b039d-3470fef818a6-panel"
                                        role="region"
                                        aria-labelledby="315a0d0b039d-3470fef818a6-btn"
                                        className="overflow-hidden"
                                        style={{ height: 0, opacity: "0.6" }}
                                    >
                                        <div>
                                            <div className="pb-6 body-2 text-secondary">
                                                <p className="[&+&]:mt-[1em]">
                                                    Yes, Memo is uniquely engineered with strict standards for
                                                    safety and privacy. Memo has{" "}
                                                    <span tabIndex={0} aria-describedby="f72fce608190">
                                                        <span className="decoration-skip-ink-none cursor-help underline decoration-secondary decoration-dotted decoration-from-font underline-offset-[10%]">
                                                            <em>compliant control</em>
                                                        </span>
                                                    </span>
                                                    , which means you can safely push the robot limbs around
                                                    while it’s in the middle of manipulation tasks, and it not
                                                    resist or be stiff to your touch.{" "}
                                                </p>
                                                <p className="[&+&]:mt-[1em]">
                                                    Unlike humanoids which require power to constantly
                                                    maintain balance, Memo also has{" "}
                                                    <span tabIndex={0} aria-describedby="82806cd6eede">
                                                        <span className="decoration-skip-ink-none cursor-help underline decoration-secondary decoration-dotted decoration-from-font underline-offset-[10%]">
                                                            <em>passive stability</em>
                                                        </span>
                                                    </span>
                                                    , meaning that you can cut power to the robot in any state
                                                    and it will not suddenly drop its weight or fall down.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-hidden border-t border-border not-first:mt-6">
                                    <button
                                        id="315a0d0b039d-3bfd54740226-btn"
                                        aria-controls="315a0d0b039d-3bfd54740226-panel"
                                        aria-expanded="false"
                                        type="button"
                                        onClick={(e) => {
                                            if (active === 6) {
                                                setActive(0)
                                                handleClick({ e, i: false })
                                            } else {
                                                setActive(6)
                                                handleClick({ e, i: true }
                                                )
                                            }
                                        }}
                                        className="flex w-full cursor-pointer items-start justify-between text-left pt-4"
                                    >
                                        <span className="max-w-[60ch] flex-1">
                                            <p className="body-2">What is the Sunday Beta program? </p>
                                        </span>
                                        <span
                                            className="inline-flex shrink-0"
                                            aria-hidden="true"
                                            style={{ transform: "none" }}
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
                                                className="lucide lucide-chevron-down h-4 w-4 opacity-70"
                                                aria-hidden="true"
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </span>
                                    </button>
                                    <div
                                        id="315a0d0b039d-3bfd54740226-panel"
                                        role="region"
                                        aria-labelledby="315a0d0b039d-3bfd54740226-btn"
                                        className="overflow-hidden"
                                        style={{ height: 0, opacity: "0.6" }}
                                    >
                                        <div>
                                            <div className="pb-6 body-2 text-secondary">
                                                <p className="[&+&]:mt-[1em]">
                                                    Find an overview of our{" "}
                                                    <a
                                                        className="underline underline-offset-[20%]"
                                                        href="/beta-program"
                                                    >
                                                        Beta Program here
                                                    </a>
                                                    . More details of the Beta Program will be released in
                                                    early 2026. Subscribe to our newsletter and follow us at{" "}
                                                    <a
                                                        href="https://x.com/sundayrobotics"
                                                        className="underline underline-offset-[20%]"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        @sundayrobotics
                                                    </a>{" "}
                                                    on X for updates.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>

    )
}

export default Faqs