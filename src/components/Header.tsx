"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-between sm:flex-row">
      <div className="flex gap-2 items-center my-5">
        <Avatar
          data-cursor="block"
          data-cursor-style="background: rgba(0, 0, 0, 0.295)"
        >
          <AvatarImage
            src="/image/euotiniel-avatar.png"
            alt="Logotipo Otoniel Emanuel"
          />
          <AvatarFallback>OE</AvatarFallback>
        </Avatar>
      </div>

      <nav>
        <ul className="flex flex-row items-center gap-2 text-sm sm:text-sm">
          <li data-cursor="block" data-cursor-style="border-radius: 5px">
            <Link href="/" className="p-1">
              Home
            </Link>
          </li>
          <li data-cursor="block" data-cursor-style="border-radius: 5px">
            <Link href="/projects" className="p-1">
              Projectos
            </Link>
          </li>
          <li data-cursor="block" data-cursor-style="border-radius: 5px">
            <Link href="/blog" className="p-1">
              Blog
            </Link>
          </li>
          <li data-cursor="block" data-cursor-style="border-radius: 5px">
            <Link href="/secretbook" className="p-1">
              SecretBook
            </Link>
          </li>
          <li data-cursor="block" data-cursor-style="border-radius: 5px">
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
