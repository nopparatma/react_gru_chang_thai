"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "../navigation";
import LocalSwitcher from "./LocalSwitcher";
import { useTranslations } from "next-intl";
import {
  homePage,
  antiquePage,
  aboutUsPage,
  contactUsPage,
} from "@/constants/constants";

// Import MUI components
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";

// Define navigation links to avoid duplication
const navLinks = [
  { href: "/", labelKey: homePage },
  { href: "/antique", labelKey: antiquePage },
  { href: "/about-us", labelKey: aboutUsPage },
  { href: "/contact-us", labelKey: contactUsPage },
];

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations();
  const prevScrollPos = useRef<number>(
    typeof window !== "undefined" ? window.pageYOffset : 0
  );

  // Scroll handler using useRef to persist previous scroll position
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingDown = currentScrollPos > prevScrollPos.current;

    // Set visibility based on scroll direction
    if (isScrollingDown && currentScrollPos > 50) {
      // Scrolling down and past a threshold (e.g., 50px)
      setVisible(false); // Hide navbar
    } else {
      // Scrolling up or near the top
      setVisible(true); // Show navbar
    }

    // Update previous scroll position
    prevScrollPos.current = currentScrollPos;
  }, [prevScrollPos]);

  useEffect(() => {
    const debounce = (func: any, wait: any) => {
      let timeout: any;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(), wait);
      };
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);

    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [handleScroll]);

  // Toggle mobile menu state
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`navbar transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between h-full items-center px-4 my-auto md:px-8">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold">LOGO</h1>
        </div>

        {/* Navigation Links & Hamburger Icon */}
        <div className="flex items-center">
          {/* Desktop Navigation */}
          <nav className="hidden sm:block">
            <ul className="flex space-x-8">
              {navLinks.map(({ href, labelKey }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-yellow-600">
                    {t(labelKey)}
                  </Link>
                </li>
              ))}
              <li>
                <LocalSwitcher />
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger Icon */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open mobile menu"
            onClick={toggleMobileMenu}
            className="sm:hidden"
          >
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={closeMobileMenu}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div className="w-screen flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-bold">เมนู</h2>
            <IconButton
              onClick={closeMobileMenu}
              aria-label="close mobile menu"
            >
              <CloseIcon />
            </IconButton>
          </div>

          {/* Drawer Content */}
          <List component="nav" className="flex-grow">
            {navLinks.map(({ href, labelKey }) => (
              <ListItemButton
                key={href}
                component={Link}
                href={href}
                onClick={closeMobileMenu}
              >
                <ListItemText
                  primary={t(labelKey)}
                  primaryTypographyProps={{ className: "font-cloud" }}
                />
              </ListItemButton>
            ))}
            <ListItemButton>
              <LocalSwitcher />
            </ListItemButton>
          </List>
        </div>
      </Drawer>
    </nav>
  );
};

export default React.memo(Navbar);
