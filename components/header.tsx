import React from "react";
import NavItem from "./ui/nav-item";
import { Button } from "./ui/button";
import Link from "next/link";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  return (
    <nav className="top-0 w-full justify-around flex items-center py-6 border-b border-border">
      {navItems.map((item, index) => (
        <NavItem key={index} href={item.href} label={item.label} />
      ))}
      <Link href={"/sign-in"}>
        <Button>Sign In</Button>
      </Link>
    </nav>
  );
};

export default Header;
