'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'index' },
    { href: '/projects', label: 'projects' },
    { href: '/blog', label: 'blog' },
    // { href: '/about', label: 'about' },
  ]

  return (
    <header className="mb-12 flex items-center justify-between">
      {/* Espaço reservado para logo (vazio por enquanto) */}
      <div className="h-8 w-8" />

      <nav>
        <ul className="flex space-x-4">
          {links.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition-colors ${
                    isActive
                      ? 'font-medium text-neutral-900'
                      : 'text-gray-600 hover:text-neutral-900'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}