import Link from "next/link";
import React from "react";

interface NavItemProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

const NavItem = ({ href, label, icon }: NavItemProps) => {
  return (
    <Link
      href={href}
      className="flex items-center text-lg font-medium text-primary hover:bg-secondary px-4 py-2 rounded-lg"
    >
      {icon}
      {label}
    </Link>
  );
};

export default NavItem;
