"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavItemProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

const NavItem = ({ href, label, icon }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center text-lg font-medium text-primary px-4 py-2 rounded-lg w-48 ${
        isActive ? "bg-secondary" : "hover:bg-secondary"
      }`}
    >
      {icon}
      <h1>{label}</h1>
    </Link>
  );
};

export default NavItem;
