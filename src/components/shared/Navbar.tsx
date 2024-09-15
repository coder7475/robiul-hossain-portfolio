"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";

const NavgiationLinks = (props: any) => {
  return (
    <ul
      role="menubar"
      aria-label="Select page"
      className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-slate-100 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
        props.isToggleOpen
          ? "visible opacity-100 backdrop-blur-sm"
          : "invisible opacity-0"
      }`}
    >
      <li role="none" className="flex items-stretch">
        <Link
          role="menuitem"
          aria-haspopup="false"
          className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
          href="#projects"
        >
          <span>Projects</span>
        </Link>
      </li>
      <li role="none" className="flex items-stretch">
        <Link
          role="menuitem"
          aria-current="page"
          aria-haspopup="false"
          className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
          href="#education"
        >
          <span>Education</span>
        </Link>
      </li>
      <li role="none" className="flex items-stretch">
        <Link
          role="menuitem"
          aria-haspopup="false"
          className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
          href="#about"
        >
          <span>About me</span>
        </Link>
      </li>
      <li role="none" className="flex items-stretch">
        <Link
          role="menuitem"
          aria-haspopup="false"
          className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
          href="#contact"
        >
          <span>Contact</span>
        </Link>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <header className="border-b-1 sticky top-0 z-20 w-full border-b border-slate-200 bg-slate-100  shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-600 lg:border-slate-600 lg:backdrop-blur-sm lg:after:hidden text-xl px-4">
      <div className="relative max-w-7xl mx-auto">
        <nav
          aria-label="main navigation"
          className="flex h-[5.5rem] items-center justify-between font-medium text-slate-700 mx-4"
          role="navigation"
        >
          <Link href="/">
            <Image
              src="/image/www.png"
              alt="Portfolio icon"
              className="w-12 h-12 lg:w-16 lg:h-16"
            />
          </Link>

          {/*      <!-- Mobile trigger --> */}
          <button
            className={`relative order-10 block self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible  [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
              }
            `}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            aria-expanded={isToggleOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <div className="absolute text-2xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <AiOutlineMenuFold />
            </div>
          </button>
          <NavgiationLinks isToggleOpen={isToggleOpen}></NavgiationLinks>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
