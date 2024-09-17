"use client";

import React, { useEffect, useState } from "react";
import { Link } from "../navigation";
import LocalSwitcher from "./LocalSwitcher";
import { useTranslations } from "next-intl";
import {
  homePage,
  antiquePage,
  aboutUsPage,
  contactUsPage,
} from "@/constants/constants";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const t = useTranslations();

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
    <nav className={visible ? "navbar show" : "navbar hide"}>
      <div className="flex justify-between h-[100%] items-center mx-8">
        <div>
          <h1>LOGO</h1>
        </div>
        <div>
          <nav className="hidden sm:block">
            <ul className="flex gap-12">
              <li>
                <Link href="/">{t(homePage)}</Link>
              </li>
              <li>
                <Link href="/antique">{t(antiquePage)}</Link>
              </li>
              <li>
                <Link href="/about-us">{t(aboutUsPage)}</Link>
              </li>
              <li>
                <Link href="/contact-us">{t(contactUsPage)}</Link>
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
