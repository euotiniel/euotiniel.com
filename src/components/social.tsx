import Link from 'next/link'
import socialLinks from "@/data/social"

export default function Social() {
  return (
    <ul className="flex gap-3 pt-5">
      {socialLinks.map((link, index) => (
        <li key={index} data-cursor="block">
          {link.download ? (
            <a
              href={link.href}
              className="text-[14.5px] border-b text-neutral-600 dark:text-neutral-400 transition-all duration-500"
              download
            >
              {link.label}
            </a>
          ) : (
            <Link
              href={link.href}
              className="text-[14.5px] border-b text-neutral-600 dark:text-neutral-400 transition-all duration-500"
              target={link.target}
            >
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}