'use client'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Link from 'next/link'
import { ModeToggle } from '../mode-toggle'

export default function Header() {
  return (
    <header className="mb-12 flex flex-row items-center justify-between">
      <Avatar className="h-8 w-8">
        <AvatarImage
          src="https://github.com/euotiniel.png"
          alt="Logotipo Otoniel Emanuel"
          className="select-none dark:opacity-70 dark:invert"
        />
        <AvatarFallback>OE</AvatarFallback>
      </Avatar>

      <nav>
        <ul className="flex flex-row items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300 sm:text-[13.9px]">
          <li>
            <Link href="/" className="p-1">
              index
            </Link>
          </li>
          <li>
            <Link href="/projects" className="p-1">
              projectos
            </Link>
          </li>
          <li>
            <Link href="/blog" className="p-1">
              blog
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
