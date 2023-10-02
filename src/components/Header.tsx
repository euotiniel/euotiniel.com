"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";
import type { IpadCursorConfig } from "ipad-cursor";

export default function Header() {
  const config: IpadCursorConfig = {};
  useIPadCursor();

  return (
    <IPadCursorProvider config={config}>
      <header className="flex flex-col items-center justify-between sm:flex-row">
        <div className="flex gap-4 items-center my-5">
          <Avatar
            data-cursor="block"
            data-cursor-style="background: rgba(0, 0, 0, 0.295)"
          >
            <AvatarImage src="https://github.com/euotiniel.png" />
            <AvatarFallback>OE</AvatarFallback>
          </Avatar>

          <div className="flex flex-col items-start justify-start">
            <span
              className="text-base font-extrabold tracking-tight lg:text-base"
              data-cursor="text"
            >
              I&apos;am Oto
            </span>
            <span
              className="text-xs font-normal tracking-tight lg:text-sm"
              data-cursor="text"
            >
              @euotiniel
            </span>
          </div>
        </div>

        <nav>
          <ul className="flex flex-row items-center gap-5 text-sm sm:text-base">
            <li data-cursor="block" data-cursor-style="border-radius: 5px">
              <Link href="/" className="p-1">
                Home
              </Link>
            </li>
            <li data-cursor="block" data-cursor-style="border-radius: 5px">
              <Link href="/projects" className="p-1">Projectos</Link>
            </li>
            <li data-cursor="block" data-cursor-style="border-radius: 5px">
              <Link href="/blog" className="p-1">Blog</Link>
            </li>
            <li data-cursor="block" data-cursor-style="border-radius: 5px">
              <Link href="/guestbook" className="p-1">GuestBook</Link>
            </li>
            <li data-cursor="block" data-cursor-style="border-radius: 5px">
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </header>
    </IPadCursorProvider>
  );
}
