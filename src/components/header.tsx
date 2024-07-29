"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-between sm:flex-row">
      <div className="flex gap-2 items-center my-5">
        <Avatar className="h-10 w-10">
          <AvatarImage
            src="https://github.com/euotiniel.png"
            alt="Logotipo Otoniel Emanuel"
            className="select-none dark:invert"
          />
          <AvatarFallback>OE</AvatarFallback>
        </Avatar>
      </div>

      <nav>
        <ul className="flex flex-row items-center gap-2 text-sm sm:text-[15px] text-neutral-700 dark:text-neutral-300">
          <li data-cursor="block" data-cursor-style="border-radius: 6px">
            <Link href="/" className="p-1">
              home
            </Link>
          </li>
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