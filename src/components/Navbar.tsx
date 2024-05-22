"use client";

import React, { useEffect, useState } from "react";
import { Link } from "../navigation";
import LocalSwitcher from "./LocalSwitcher";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav className={visible ? 'navbar show' : 'navbar hide'}>
      <div className="flex justify-between h-[100%] items-center mx-8">
        <div>
          <h1>LOGO</h1>
        </div>
        <div>
          <nav className="hidden sm:block">
            <ul className="flex gap-12">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/service">Service</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <LocalSwitcher />
              </li>
            </ul>
          </nav>
          <div className="sm:hidden">
            <LocalSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
