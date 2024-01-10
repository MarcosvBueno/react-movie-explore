"use client";
import {
  IoHome,
  IoPlay,
  IoFlame,
  IoStar,
  IoArrowForwardOutline,
} from "react-icons/io5";

import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";


function NavBar() {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Defina o ponto de corte para o tamanho desejado
    };

    handleResize(); // Chame a função para definir o estado inicial

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    { icon: <IoHome color="#fff" size={isMobile ? "18" : "22"} />, text: "Home", href: "/" },
    { icon: <IoPlay size={isMobile ? "18" : "22"} />, text: "Now Playing", href: "/now-playing" },
    {
      icon: <IoFlame color="#FF6C59" size={isMobile ? "18" : "22" } />,
      text: "Popular",
      href: "/popular",
    },
    {
      icon: <IoStar color="#FFDB3E" size={isMobile ? "18" : "22"}/>,
      text: "Top Rated",
      href: "/top-rated",
    },
    {
      icon: <IoArrowForwardOutline size={isMobile ? "18" : "22"} />,
      text: "Upcoming",
      href: "/upComing",
    },
  ];

  return (
    <>
      <nav
        className={`flex justify-center text-slate-950 fixed sm:bottom-1/3 bottom-0 sm:max-w-min w-full  rounded-2xl sm:p-5 p-3 sm:ml-5  bg-white bg-opacity-20 backdrop-blur-lg transition-opacity transform ${
          show && "opacity-100 translate-x-0"
        }`}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <section>
          <ul className="flex sm:flex-col sm:gap-10 gap-4 ">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-start gap-2  "
              >
                <Link
                  href={item.href}
                  className={`shadow-xl p-2 rounded-full bg-white/5 hover:scale-125 transition-all duration-300 ease-in-out ${
                    isMobile ? "w-full" : "text-sm" 
                  }`}
                >
                  {item.icon}
                </Link>
                <Link
                  className={`text-white transition-opacity duration-300 ease-in-out  ${
                    show && !isMobile ? "sm:opacity-100" : "opacity-0"
                  }`}
                  href={item.href}
                >
                  {!isMobile && show ? item.text : ""}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </>
  );
}

export default NavBar;