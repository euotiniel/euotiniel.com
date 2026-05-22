import Link from 'next/link'
import socialLinks from "@/data/social"

export default function Social() {
  return (
    <ul className="w-full items-center justify-end flex gap-3 pt-5">
      {socialLinks.map((link, index) => (
        <li key={index} data-cursor="block">
          {link.download ? (
            <a
              href={link.href}
              className="text-[14px] border-b text-[#0000EE] transition-all duration-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ) : (
            <Link
              href={link.href}
              className="text-[14px] border-b text-[#0000EE] transition-all duration-500"
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