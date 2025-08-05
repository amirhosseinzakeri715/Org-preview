"use client"

import React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export const Header: React.FC= () =>{
    const list= [
        {
            title: "about",
            content: [
                "our story",
                "our mission",
                "our values"
            ]
        },
        {
            title: "our team",
            content: [
                "leadership",
                "team members",
                "careers"
            ]
        },
        {
            title: "contact",
            content: [
                "get in touch",
                "support",
                "partnership"
            ]
        }
    ]

    // Removed: const [click, setClick] = React.useState<boolean>(false);
    const [scroll, setScroll] = React.useState<boolean>(false);
    const [hover, setHover] = React.useState<{ title: string, content: string[] } | null>(null);
    const [selectedItem, setSelectedItem] = React.useState<{ title: string, content: string[] } | null>(null);

    React.useEffect(() =>{
        const scrollHandler= () =>{
          const isScrolled= window.scrollY> 60
          if (isScrolled !== scroll) setScroll(isScrolled)
        }

        window.addEventListener("scroll", scrollHandler)
        return () =>{
          window.removeEventListener("scroll", scrollHandler)
        }
    }, [scroll])

    // For the menu, use selectedItem to determine if the menu is open
    const menuOpen = Boolean(selectedItem);

    return(
        <header
            className={`h-16 flex w-full justify-between items-center z-40 text-sm text-white font-semibold px-6 2xl:px-40 ${scroll ? "fixed bg-blue-900 shadow-md shadow-blue-500" : "absolute top-0"}`}
        >
            <ul className="items-center gap-x-6 hidden lg:flex">
                {list.map((item, index) => (
                    <li
                        key={index}
                        className="relative group space-y-0.5 z-50"
                        onMouseEnter={() => setHover(item)}
                        onMouseLeave={() => setHover(null)}
                    >
                        <Link href={item.title === "about" ? "/about" : item.title === "our team" ? "/ourteam" : item.title === "contact" ? "/contact" : "#"}>
                          {item.title}
                        </Link>
                        <div className="h-px w-full bg-gray-400 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left origin-right"/>
                    </li>
                ))}
            </ul>
            {/* Hamburger menu icon removed */}
            {/* Logo image removed */}
            <div className="flex items-center gap-x-6">
                {/* Additional navigation items removed to match actual routes */}
            </div>
            {hover && (
                <AnimatePresence>
                    <motion.div 
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="h-screen w-full absolute top-0 left-0 flex"
                    >
                        <div
                            onMouseLeave={() => setHover(null)}
                            onMouseEnter={() => setHover(hover)}
                            className="w-1/2 bg-blue-900 space-y-10 content-center px-10 2xl:px-40"
                        >
                            {hover.content.map((text, index) => (
                                <Link
                                    href={text === "our story" || text === "our mission" || text === "our values" ? "/about" : 
                                          text === "leadership" || text === "team members" || text === "careers" ? "/ourteam" :
                                          text === "get in touch" || text === "support" || text === "partnership" ? "/contact" : "#"}
                                    key={index}
                                    className="text-4xl block hover:text-blue-500"
                                >
                                    {text}
                                </Link>
                            ))}
                        </div>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            className="w-1/2 bg-black"
                            transition={{ delay: 0.1, duration: 0.5 }}
                        >
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            )}
            {/* The menuOpen logic is now based on selectedItem only */}
            {menuOpen && (
                <div className="h-screen w-full absolute top-0 left-0 bg-blue-900 content-center text-3xl px-6">
                    {selectedItem ? (
                        <div className="absolute top-5 right-6 left-6 flex justify-between">
                            {/* Back arrow icon removed */}
                            {/* Close icon removed */}
                        </div>
                    ) : (
                        // Close icon removed
                        <></>
                    )}
                    {selectedItem ? (
                        <ul className="space-y-10">
                            {selectedItem.content.map((contentItem, index) =>(
                                <li
                                    key={index}
                                    className="cursor-pointer hover:text-blue-500"
                                >
                                    {contentItem}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <ul className="space-y-10">
                            {list.map((item, index) =>(
                                <li
                                    key={index}
                                    onClick={() => setSelectedItem(item)}
                                    className="flex justify-between items-center cursor-pointer hover:text-blue-500"
                                >
                                    {item.title}
                                    {/* Right arrow icon removed */}
                                </li>
                            ))}
                            {/* Removed newsroom and careers from mobile menu to match actual routes */}
                        </ul>
                    )}
                </div>
            )}
        </header>
    )
}