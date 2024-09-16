"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import NavgiationLinks from "../ui/NavigationLinks";

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`border-b-1 sticky top-0 z-20 w-full border-b border-slate-200 ${
        isScrolled
          ? "bg-slate-100 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-600 lg:border-slate-600 lg:backdrop-blur-sm lg:after:hidden text-xl px-4"
          : "bg-transparent"
      }`}
    >
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
              width={64}
              height={64}
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
