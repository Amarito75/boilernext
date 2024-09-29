import React from "react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Play } from "lucide-react";
import NavItem from "@/components/ui/nav-item";

const sidebarItems = [
  {
    title: {
      label: "Getting Started",
      icon: (
        <Play
          size={16}
          className="text-sm font-medium text-muted-foreground mb-2"
        />
      ),
    },
    items: [
      { label: "Installation", href: "/docs" },
      { label: "Accounts", href: "/docs/accounts" },
    ],
  },
  {
    title: {
      label: "Core Concepts",
      icon: (
        <Play
          size={16}
          className="text-sm font-medium text-muted-foreground mb-2"
        />
      ),
    },
    items: [
      { label: "Routing", href: "/docs/routing" },
      { label: "Data Fetching", href: "/docs/data-fetching" },
      { label: "Styling", href: "/docs/styling" },
    ],
  },
  // Add more sections as needed
];

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-20 bottom-0 w-64 bg-card border-r border-border overflow-hidden">
      <ScrollArea className="h-full">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Documentation</h2>
          {sidebarItems.map((section, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center space-x-2">
                {section.title?.icon}
                <h3 className="text-sm font-medium text-muted-foreground mb-2">
                  {section.title?.label}
                </h3>
              </div>
              <ul className="space-y-2 ml-4">
                {section.items.map((item, itemIndex) => (
                  <NavItem
                    key={itemIndex}
                    href={item.href}
                    label={item.label}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
