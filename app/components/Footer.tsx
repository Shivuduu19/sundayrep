import React from 'react'

const Footer = () => {
    return (
        <footer className="relative bg-bg label-1">
            <div className="flex min-h-[40vh] flex-col justify-between">
                <div className="grid grid-cols-12 gap-6 p-4 pb-10 md:p-6 md:pb-60">
                    <div className="col-span-12 flex flex-col items-center py-20 md:col-span-6 md:items-start md:py-0">
                        <p className="text-center md:text-left">
                            Sunday, the helpful robotics company
                        </p>
                    </div>
                    <div className="col-span-12 grid grid-cols-6 gap-6 border-t border-secondary/20 pt-4 md:col-span-6 md:border-t-0 md:pt-0">
                        <ul className="col-span-3 flex flex-col gap-2 pb-4 md:col-span-2 md:gap-3">
                            <li>
                                <p className="text-primary">Explore</p>
                            </li>
                            <li>
                                <a
                                    className="cursor-pointer text-secondary transition-all hover:pl-2 hover:text-primary"
                                    href="/technology"
                                >
                                    Technology
                                </a>
                            </li>
                            <li>
                                <a
                                    className="cursor-pointer text-secondary transition-all hover:pl-2 hover:text-primary"
                                    href="/journal"
                                >
                                    Journal
                                </a>
                            </li>
                        </ul>
                        <ul className="col-span-3 flex flex-col gap-2 pb-4 md:col-span-2 md:gap-3">
                            <li>
                                <p className="text-primary">About</p>
                            </li>
                            <li>
                                <a
                                    className="cursor-pointer text-secondary transition-all hover:pl-2 hover:text-primary"
                                    href="/company"
                                >
                                    Company
                                </a>
                            </li>
                            <li>
                                <a
                                    className="cursor-pointer text-secondary transition-all hover:pl-2 hover:text-primary"
                                    href="/careers"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    className="cursor-pointer text-secondary transition-all hover:pl-2 hover:text-primary"
                                    href="/beta-program"
                                >
                                    Beta Program
                                </a>
                            </li>
                        </ul>
                        <ul className="col-span-3 flex flex-col gap-2 pb-4 md:col-span-2 md:gap-3">
                            <li>
                                <p className="text-primary">Social</p>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/sundayrobotics"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer text-secondary transition-all hover:pl-2 hover:text-primary"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://x.com/SundayRobotics"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer text-secondary transition-all hover:pl-2 hover:text-primary"
                                >
                                    X (Twitter)
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/@SundayRobotics"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer text-secondary transition-all hover:pl-2 hover:text-primary"
                                >
                                    YouTube
                                </a>
                            </li>
                        </ul>
                        <ul className="col-span-3 flex flex-col gap-2 pb-4 md:hidden md:gap-3">
                            <li>
                                <p className="text-primary">Legal</p>
                            </li>
                            <li>
                                <a
                                    className="cursor-pointer text-secondary transition-all hover:pl-2 hover:text-primary"
                                    href="/terms-of-service"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    className="cursor-pointer text-secondary transition-all hover:pl-2 hover:text-primary"
                                    href="/privacy-policy"
                                >
                                    Privacy and Cookies
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6 p-4 md:p-6">
                    <div className="col-span-6 self-end lg:col-span-8">
                        <p className="font-body-regular max-w-[16ch] text-secondary md:max-w-none">
                            © {/* */}2025{/* */} Sunday Inc
                        </p>
                    </div>
                    <ul className="col-span-6 hidden grid-cols-4 justify-end md:flex md:flex-row md:gap-6 lg:col-span-4 lg:grid lg:justify-start">
                        <li className="col-span-9 flex flex-col items-start self-end md:col-span-2">
                            <a
                                className="cursor-pointer text-secondary transition-all hover:pl-2 hover:text-primary"
                                href="/terms-of-service"
                            >
                                Terms of Service
                            </a>
                        </li>
                        <li className="col-span-9 flex flex-col items-start self-end md:col-span-2">
                            <a
                                className="cursor-pointer text-secondary transition-all hover:pl-2 hover:text-primary"
                                href="/privacy-policy"
                            >
                                Privacy and Cookies
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}

export default Footer