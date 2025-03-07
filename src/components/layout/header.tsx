'use client'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Link from 'next/link'
import { ModeToggle } from '../mode-toggle'

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between">
      <Link href="/">
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
        <ul className="flex flex-row items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300 sm:text-[13.9px]">
          <li>
            <Link href="/projectos" className="p-1">
              projectos
            </Link>
          </li>
          <li>
            <Link href="/blog" className="p-1">
              blog
            </Link>
          </li>
          <li>
            <Link href="https://newsletter.euotiniel.com" className="p-1">
              news
            </Link>
          </li>
          <li data-cursor="block">
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}
