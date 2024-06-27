"use client";

import gsap from "gsap";
import { useState, useRef, useEffect } from "react";
import { header } from "@/components/json/header.json";

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (toggleMenu) {
      openMenu();
    } else {
      closeMenu();
    }
  }, [toggleMenu]);

  const openMenu = () => {
    const timeline = gsap.timeline();

    gsap.to(menuRef.current, {
      display: "flex",
      zIndex: 30,
    });

    gsap.to(".menu_logo", {
      bottom: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power4.inOut",
    });

    timeline.to(overlayRef.current, {
      height: "50%",
      duration: 0.4,
      ease: "power2.inOut",
    }).to(overlayRef.current, {
        height: "100vh",
        width: "100vw",
        ease: "power2.inOut",
    })
  };

  const closeMenu = () => {
    gsap.to(".menu_logo", {
      bottom: "-32px",
      stagger: 0.05,
      duration: 1,
      ease: "power4.inOut",
    });

    gsap.to(overlayRef.current, {
      height: "0%",
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(menuRef.current, {
          display: "none",
        });
      },
    });
  };

  return (
    <header>
      <div className="flex justify-between w-full fixed z-30">
        <div className="h-fit font-bold overflow-hidden pl-4 pt-4 flex gap-[2px] text-xl text-white">
          <span className="-bottom-32 relative duration-500 menu_logo">Build</span>
          <span className="-bottom-32 relative duration-500 menu_logo">With</span>
          <span className="-bottom-32 relative duration-500 menu_logo">Exprays</span>
        </div>
        <div>
          <button
            onClick={() => setToggleMenu(true)}
            className={`text-white font-bold absolute z-30 text-xl duration-500 top-0 p-4 ${!toggleMenu ? "right-0" : "-right-96"}`}
          >
            Menu
          </button>
          <button
            onClick={() => setToggleMenu(false)}
            className={`text-white font-bold absolute z-30 text-xl duration-500 top-0 p-4 ${toggleMenu ? "right-0" : "-right-96"}`}
          >
            Close
          </button>
        </div>
      </div>
      <div ref={menuRef} className="main_menu fixed h-screen w-screen hidden justify-center items-center">
        <div ref={overlayRef} className="overlay_purple absolute bg-purple-400 w-1/2 h-0">
          <div className="absolute font-bold text-[9vw] bottom-0 left-0 overflow-hidden w-full">
            <div className="flex flex-col w-full">
              {header.map((item, index) => (
                <p key={index} className="flex flex-col overflow-hidden w-full">
                  <span className="menu_item relative px-4 pt-2 duration-150 -top-96 leading-none hover:bg-black hover:text-purple-400 w-full">
                    {item.label}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;
