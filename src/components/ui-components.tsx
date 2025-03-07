'use client'
import Link from 'next/link'
import DecryptedText from '@/components/decrypted-text'
import { components } from '@/config/components'

export default function Components() {
  return (
    <div className="mt-8 flex flex-col gap-4">
      {components.map((item) => (
        <Link
          key={item.slug}
          href={`/ui/${item.slug}`}
          className="flex w-full items-center"
        >
          <div className="group my-1 flex w-full flex-row items-center text-zinc-800 dark:text-zinc-200">
            <p className="whitespace-nowrap text-[14.5px] leading-7 text-neutral-700 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
              <DecryptedText text={item.title} />
            </p>
            <span className="mx-4 h-[1px] flex-grow bg-neutral-600 opacity-5 dark:bg-neutral-400"></span>
            <span className="whitespace-nowrap text-sm text-neutral-400 dark:text-neutral-500">
              {item.date}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
