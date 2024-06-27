"use client";

import gsap from "gsap";
import { useState } from "react";
import { header } from "@/components/json/header.json"

const Menu = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const timeline = gsap.timeline();

    const closeMenu = () => {
        const context = gsap.context(() => {});
    };

    const openMenu = () => {
        const context = gsap.context(() => {});

        gsap.to(".main_menu", {
            display: "flex",
        });

        gsap.to(".menu_logo", {
            delay: 1,
            bottom: 0,
            stagger: 0.05,
            duration: 1,
            ease: "power4.inOut"
        });

        timeline.to(".overlay", {
            height: "50%",
            duration: 0.4,
            ease: "power2.inOut"
        })
    };

    return ( 
        <header>
            <div className="flex justify-between  w-full fixed z-20">
                <div className="h-fit font-bold overflow-hidden pl-4 pt-4 flex gap-[2px] text-xl text-white">
                    <span className="-bottom-32 relative duration-500 menu_logo">Build</span>
                    <span className="-bottom-32 relative duration-500 menu_logo">With</span>
                    <span className="-bottom-32 relative duration-500 menu_logo">Exprays</span>
                </div>
                <div>
                    <button onClick={() => openMenu()} className={`text-white font-bold absolute z-10 text-xl duration-500 top-0 p-4 ${toggleMenu === false ? "right-0 " : "-right-96"}`}>Menu</button>
                    <button onClick={() => closeMenu()} className={`text-white font-bold absolute z-10 text-xl duration-500 top-0 p-4 ${toggleMenu === true ? "right-0 " : "-right-96"}`}>Close</button>
                </div>
            </div>
            <div className="main_menu absolute h-screen w-screen flex justify-center items-center">
                <div className="overlay absolute bg-purple-400 w-1/2 h-0">
                    <div className="absolute font-bold text-[9vw] bottom-0 left-0 overflow-hidden w-full">
                        <div className="flex flex-col w-full">
                            {header.map((item, index) => {
                                return (
                                    <>
                                        <p className="flex flex-col overflow-hidden w-full">
                                            <span className="menu_item relative px-4 pt-2 duration-150 -top-96 leading-none hover:bg-black hover:text-purple-400 w-full">
                                                {item.label}
                                            </span>
                                        </p>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Menu;