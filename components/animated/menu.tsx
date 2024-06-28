"use client";

import gsap from "gsap";
import { useState, useRef, useEffect } from "react";
import headerData from "@/components/json/header.json";

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
      duration: 0.75,
      ease: "power4.inOut",
    });

    timeline
      .to(overlayRef.current, {
        height: "50%",
        width: "50%",
        duration: 0.4,
        ease: "power2.inOut",
      })
      .to(overlayRef.current, {
        height: "100vh",
        width: "100vw",
        duration: 0.6,
        ease: "power2.inOut",
      })
      .to(".menu_logo", {
        bottom: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power4.inOut",
      }, "-=0.5")  // Overlap the logo animation with the overlay expanding
      .fromTo(
        ".menu_item",
        { top: "-96px", opacity: 0 },
        {
          top: "0",
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.5"  // Overlap the menu items animation with the logo and overlay
      );
  };

  const closeMenu = () => {

    const timeline = gsap.timeline({
      onComplete: () => {
        gsap.set(menuRef.current, { display: "none" });
      },
    });

    timeline
    .to(".menu_item", {
      top: "-96px",
      opacity: 0,
      stagger: 0.05,
      duration: 0.6,
      ease: "power2.inOut", // Smoother easing for hiding items
    })
    .to(".menu_logo", {
      bottom: "-32px",
      stagger: 0.05,
      duration: 0.6,
      ease: "power2.inOut", // Smoother easing for logo hiding
    }, "-=0.4")  // Overlap with the menu items hiding for smoother effect
    .to(overlayRef.current, {
      height: "50%",
      width: "50%",
      duration: 0.6,
      ease: "power2.inOut", // Start collapsing with a smoother ease
    })
    .to(overlayRef.current, {
      height: "0%",
      duration: 0.8,
      ease: "power2.inOut", // Finish collapsing with a smoother ease
    }, "-=0.3");  // Slight overlap with the first collapse step

  };

  return (
    <header>
      <div className="flex justify-between w-full fixed z-50">
        <div className="h-fit font-bold overflow-hidden pl-4 pt-4 flex gap-[2px] text-xl text-white">
          <span className="-bottom-32 relative duration-500 menu_logo">The&nbsp;</span>
          <span className="-bottom-32 relative duration-500 menu_logo">Star&nbsp;</span>
          <span className="-bottom-32 relative duration-500 menu_logo">Society&nbsp;</span>
          <span className="-bottom-32 relative duration-500 menu_logo">Foundation</span>
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
        <div ref={overlayRef} className="overlay_purple absolute bg-grainy bg-gradient-to-b from-sky-400 to-sky-200 w-1/2 h-0">
          <div className="absolute font-bold text-[9vw] bottom-0 left-0 overflow-hidden w-full">
            <div className="flex flex-col w-full">
              {headerData.header.map((item, index) => (
                <p key={index} className="flex flex-col overflow-hidden w-full">
                  <a href={item.href} className="px-4 pt-2 duration-150 -top-96 leading-none hover:bg-gray-900 hover:text-gray-100 w-full">
                    <span className="menu_item relative px-4 duration-150 -top-96 leading-none w-full">
                      {item.label}
                    </span>
                  </a>
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
