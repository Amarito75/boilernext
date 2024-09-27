"use client";

import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  BarChart,
  CircleUser,
  CreditCard,
  DollarSign,
  Home,
  LayoutDashboard,
  LineChart,
  Menu,
  Package,
  Package2,
  Plus,
  Search,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BorderBeam } from "../magicui/border-beam";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import Logo from "../logo";
import { BarChartComponent } from "../charts/bar-chart";

export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image.";

const navItems = [
  {
    label: "Overview",
    icon: <LayoutDashboard size={18} className="text-primary" />,
    variant: "selected",
  },
  {
    label: "Analytics",
    icon: <BarChart size={18} className="text-primary" />,
    variant: "unselected",
  },
  {
    label: "Customers",
    icon: <Users size={18} className="text-primary" />,
    variant: "unselected",
  },
  {},
];

export function PreviewDashboard() {
  return (
    <div className="relative flex justify-between items-start w-full h-[700px] border border-border rounded-lg">
      <nav className="flex flex-col items-start justify-between h-full text-sm font-medium p-6 border-r border-border">
        <div>
          <div className="ml-4 mb-8">
            <Logo />
          </div>
          <div className="flex flex-col space-y-2">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>

            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Package className="h-4 w-4" />
              Products
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <ShoppingCart className="h-4 w-4" />
              Orders
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Users className="h-4 w-4" />
              Customers
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <LineChart className="h-4 w-4" />
              Analytics
            </Link>
          </div>
        </div>

        <div>
          <Separator className="mb-4" />
          <div className="flex items-start space-x-4 ml-4">
            <div className="flex flex-col items-start">
              <h1 className="font-medium text-primary">John Doe</h1>
              <p className="text-muted-foreground">jdoe@mail.com</p>
            </div>
            <Avatar>
              <AvatarImage src="https://avatar.vercel.sh/rauchg" />
              <AvatarFallback>
                <CircleUser size={18} />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
      <div className="w-4/5">
        <header className="top-0 w-full flex justify-between items-center border-b border-border p-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
          <Card className="bg-background">
            <CardHeader className="flex flex-row items-center justify-between space-y-2 pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
              <div className="flex items-center space-x-1">
                <TrendingUp className="text-green-500" size={16} />
                <span className="text-sm text-green-500">+180.1%</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">+2350</p>
              <p className="text-sm text-muted-foreground">from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-background">
            <CardHeader className="flex flex-row items-center justify-between space-y-2 pb-2">
              <CardTitle className="text-sm font-medium">Fees</CardTitle>
              <div className="flex items-center space-x-1">
                <TrendingDown className="text-red-500" size={16} />
                <span className="text-sm text-red-500">-18.2%</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">- 432</p>
              <p className="text-sm text-muted-foreground">from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-background">
            <CardHeader className="flex flex-row items-center justify-between space-y-2 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <div className="flex items-center space-x-1">
                <TrendingUp className="text-green-500" size={16} />
                <span className="text-sm text-green-500">+24.2%</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">+ 4322</p>
              <p className="text-sm text-muted-foreground">from last month</p>
            </CardContent>
          </Card>
        </div>
        <div className="mx-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <BarChartComponent />
          <Card className="bg-background">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$1,999.00</div>
              </div>

              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Jackson Lee
                  </p>
                  <p className="text-sm text-muted-foreground">
                    jackson.lee@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/03.png" alt="Avatar" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Isabella Nguyen
                  </p>
                  <p className="text-sm text-muted-foreground">
                    isabella.nguyen@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$299.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/04.png" alt="Avatar" />
                  <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    William Kim
                  </p>
                  <p className="text-sm text-muted-foreground">
                    will@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$99.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/05.png" alt="Avatar" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Sofia Davis
                  </p>
                  <p className="text-sm text-muted-foreground">
                    sofia.davis@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
