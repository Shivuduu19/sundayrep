import React from 'react'

const Subscribe = () => {
    return (
        <div className="relative m-4 grid h-[20vh] grid-cols-1 grid-rows-1 overflow-hidden rounded-xl md:m-6 md:h-[110px]">
            <div className="relative z-10 col-span-1 col-start-1 row-start-1 flex flex-col items-center justify-center gap-1 bg-surface p-6 md:flex-row md:gap-4 light">
                <h3 className="text-center label-1 text-primary">
                    Get the latest in your inbox
                </h3>
                <h3 className="pb-2 text-center label-1 text-secondary sm:pb-0">
                    Sign up to our newsletter
                </h3>
                <button
                    type="button"
                    className="inline-flex flex-nowrap items-center justify-center rounded-full label-1 leading-none transition-colors cursor-pointer gap-1 px-3.5 py-3 group/button max-md:h-9 md:h-auto gap-1.5! pr-2.5! border border-black/10 bg-transparent text-black hover:border-black hover:bg-black hover:text-white"
                    aria-disabled="false"
                >
                    <span>Subscribe</span>
                    <div className="flex h-4 w-4 items-center justify-center rounded-full p-1 backdrop-blur-xl transition-colors bg-off-black-10 group-hover/button:bg-white [&_svg]:stroke-black group-hover/button:text-black legal group-hover/button:[&_svg]:stroke-black">
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
                </button>
            </div>
        </div>

    )
}

export default Subscribe