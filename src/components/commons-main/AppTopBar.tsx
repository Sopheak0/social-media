"use client";

import { Bell, MessageCircleMoreIcon, Moon, PlusIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";

export const AppTopBar = () => {
  const { setTheme } = useTheme();

  return (
    <header className="flex w-full sticky top-0 justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="flex items-center space-x-4">
        <Image
          src="/logo.svg"
          alt="Glosszy Social"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h3 className="text-xl font-serif">Glosszy Social</h3>
      </div>
      <Input placeholder="Search..." className="max-w-xs" />
      <div className="flex items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost" className="mr-2">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="default" className="mr-2">
          <PlusIcon className="h-6 w-6" />
          New Post
        </Button>
        <Button variant="outline" className="mr-2">
          <MessageCircleMoreIcon className="h-6 w-6" />
        </Button>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
