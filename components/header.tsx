"use client";

import React, { useState, useEffect } from "react";
import NavItem from "./ui/nav-item";
import { Button } from "./ui/button";
import Link from "next/link";
import Logo from "./logo";
import { DarkModeToggle } from "./ui/darkmode-toggle";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Documentation",
    href: "/documentation",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0  w-full justify-around flex items-center py-6 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Logo />
      <nav className="flex items-center bg-background/50 backdrop-blur-xl justify-between space-x-8 border border-border rounded-full px-2">
        {navItems.map((item, index) => (
          <NavItem key={index} href={item.href} label={item.label} />
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        <Link href={"/sign-in"}>
          <Button>Sign In</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
