"use client";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "./ui/avatar";
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
          <Avatar data-cursor="block"  data-cursor-style="background: rgba(0, 0, 0, 0.295)">
            <AvatarImage src="https://github.com/euotiniel.png" />
            <AvatarFallback>OE</AvatarFallback>
          </Avatar>

          <div className="flex flex-col items-start justify-start">
            <span className="text-base font-extrabold tracking-tight lg:text-base" data-cursor="text">
              I&apos;am Oto
            </span>
            <span className="text-xs font-normal tracking-tight lg:text-sm" data-cursor="text">
              @euotiniel
            </span>
          </div>
        </div>

        <nav>
          <ul className="flex flex-row items-center gap-5 text-sm sm:text-base">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projectos</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/guestbook">GuestBook</Link>
            </li>
            <li data-cursor="block">
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </header>
      </IPadCursorProvider>
  )
}
