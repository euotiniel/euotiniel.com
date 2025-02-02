"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between flex-row">
      <Link href="/" className="flex gap-2 items-center my-5 ml-1">
        <Avatar className="h-9 w-9">
          <AvatarImage
            src="https://github.com/euotiniel.png"
            alt="Logotipo Otoniel Emanuel"
            className="select-none dark:invert"
          />
          <AvatarFallback>OE</AvatarFallback>
        </Avatar>
      </Link>

      <nav>
        <ul className="flex flex-row items-center gap-2 text-sm sm:text-[13.9px] text-neutral-700 dark:text-neutral-300">
          <li data-cursor="block" data-cursor-style="border-radius: 6px">
            <Link href="/projectos" className="p-1">
              projectos
            </Link>
          </li>
          <li data-cursor="block" data-cursor-style="border-radius: 6px">
            <Link href="/blog" className="p-1">
              blog
            </Link>
          </li>
          <li data-cursor="block" data-cursor-style="border-radius: 6px">
            <Link href="/secretbook" className="p-1">
              secret
            </Link>
          </li>
          <li data-cursor="block">
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}