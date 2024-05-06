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
      <div className="flex w-[90%] justify-between m-auto py-8">
        <div className="logo">
          <h2>SoYacht</h2>
        </div>
        <div className="menu">
          <nav>
            <ul className="flex gap-8">
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
              <LocalSwitcher />
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
