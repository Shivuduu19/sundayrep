import React from 'react'

const Beta = () => {
    return (
        <div className="relative m-4 grid h-[488px] grid-cols-1 grid-rows-1 overflow-hidden rounded-xl md:m-6 lg:h-[40vh] xl:h-[50vh]">
            <div className="relative z-10 col-span-1 col-start-1 row-start-1 flex flex-col items-center justify-center gap-1 p-6 dark md:flex-row md:gap-4 bg-surface">
                <h3 className="text-center label-1 text-primary">
                    Be one of our Founding Families.
                </h3>
                <h3 className="pb-2 text-center label-1 sm:pb-0 text-accent">
                    Insider access. Exclusive perks. Design input.
                </h3>
                <a
                    className="inline-flex flex-nowrap items-center justify-center rounded-full label-1 leading-none transition-colors cursor-pointer gap-1 px-3.5 py-3 group/button max-md:h-9 md:h-auto gap-1.5! pr-2.5! border border-white/20 bg-transparent text-white hover:border-white hover:bg-white hover:text-black"
                    aria-disabled="false"
                    href="/beta-program"
                >
                    <span>Beta program</span>
                    <div className="flex h-4 w-4 items-center justify-center rounded-full p-1 backdrop-blur-xl transition-colors bg-white-20 group-hover/button:bg-black [&_svg]:stroke-white group-hover/button:[&_svg]:stroke-white">
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
                            className="lucide lucide-arrow-right w-3 h-3 transition-colors"
                            aria-hidden="true"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </div>
                </a>
            </div>
        </div>

    )
}

export default Beta