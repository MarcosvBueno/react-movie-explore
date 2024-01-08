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

const navItems = [
  { icon: <IoHome color="#fff" size="25" />, text: "Home", href: "/" },
  { icon: <IoPlay size="22" />, text: "Now Playing", href: "/now-playing" },
  {
    icon: <IoFlame color="#FF6C59" size="22" />,
    text: "Popular",
    href: "/popular",
  },
  {
    icon: <IoStar color="#FFDB3E" size="22" />,
    text: "Top Rated",
    href: "/top-rated",
  },
  {
    icon: <IoArrowForwardOutline size="22" />,
    text: "Upcoming",
    href: "/upcoming",
  },
];

function NavBar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav
        className={`flex justify-center text-slate-950 fixed top-1/3 rounded-2xl p-5 ml-5 bg-white bg-opacity-20 backdrop-blur-lg transition-opacity transform ${
                   show && "opacity-100 translate-x-0"
                 }`}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
          <section>
            <ul className="flex flex-col gap-10">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-start gap-2  "
                  >
                       <Link href={item.href} className="shadow-xl p-2 rounded-full bg-white/5">
                        {item.icon}
                      </Link>
                  <Link className={`text-white font- transition-opacity duration-300 ease-in-out  ${show ? 'opacity-100' : 'opacity-0'}`} href={item.href}>{show ? item.text : ""}</Link>
                </li>
              ))}
            </ul>
          </section>
      </nav>
    </>
  );
}

export default NavBar;
