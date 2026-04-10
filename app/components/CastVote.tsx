import React from 'react'

const CastVote = () => {
    return (
        <section className="section-block relative scroll-mt-[calc(100vh/4)]">
            <div className="absolute top-0 right-0 left-0 z-50 w-full hidden">
                <div className="h-1 w-full bg-off-black-10">
                    <div className="h-1 bg-primary" style={{ width: "0%" }} />
                </div>
            </div>
            <div
                className="absolute top-0 left-0 z-50 p-4 lg:p-6"
                style={{ visibility: "visible", opacity: 0 }}
            >
                <button
                    type="button"
                    className="inline-flex flex-nowrap items-center justify-center label-1 leading-none transition-colors gap-1 px-3.5 py-3 group/button max-md:h-9 md:h-auto px-0! py-0! max-md:w-9 border border-border bg-transparent h-[32px]! w-[32px]! rounded-full cursor-pointer hover:border-black"
                    aria-label="Go back to previous step"
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
                        className="lucide lucide-arrow-left w-4 h-4 transition-colors"
                        aria-hidden="true"
                    >
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>
                </button>
            </div>
            <div
                className="absolute top-0 right-0 z-50 p-4 lg:p-6"
                style={{ visibility: "visible", opacity: 0 }}
            >
                <button
                    type="button"
                    className="inline-flex flex-nowrap items-center justify-center label-1 leading-none transition-colors gap-1 px-3.5 py-3 group/button max-md:h-9 md:h-auto px-0! py-0! max-md:w-9 border border-border bg-transparent h-[32px]! w-[32px]! rounded-full cursor-pointer hover:border-black"
                    aria-label="Close poll"
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
                        className="lucide lucide-x w-4 h-4 transition-colors"
                        aria-hidden="true"
                    >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </button>
            </div>
            <div
                className="flex min-h-[600px] scroll-mt-[calc(100vh/4)] flex-col items-center justify-center bg-blue-tint will-change-[height]"
                style={{ height: "50vh" }}
            >
                <div className="relative flex h-full w-full items-center justify-between gap-6 p-4 lg:p-6">
                    <div
                        className="flex h-full w-full flex-col items-center justify-center gap-6 p-4 md:flex-row md:px-18 lg:p-6 xl:px-26"
                        style={{ opacity: 1 }}
                    >
                        <div className="md:flex-1">
                            <h3 className="text-center subheading-2 md:text-left">
                                Memo wears many hats.
                            </h3>
                            <h3 className="subheading-2 text-secondary md:hidden md:text-primary">
                                Which should it wear next?
                            </h3>
                        </div>
                        <div className="flex h-full flex-1 flex-col items-center justify-center max-md:gap-6">
                            <div className="flex w-[96px] flex-1 items-center justify-center md:w-[160px]">
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
                            </div>
                            <div className="z-10">
                                <button
                                    type="button"
                                    className="inline-flex flex-nowrap items-center justify-center rounded-full label-1 leading-none transition-colors cursor-pointer gap-1 px-3.5 py-3 group/button max-md:h-9 md:h-auto bg-black text-white border border-transparent hover:border-border hover:bg-transparent hover:text-black"
                                    aria-disabled="false"
                                >
                                    <span>Cast your vote now</span>
                                </button>
                            </div>
                        </div>
                        <div className="hidden flex-1 md:block">
                            <h3 className="text-right subheading-2">
                                Which should it wear next?
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default CastVote