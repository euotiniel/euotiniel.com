import Link from 'next/link'
import { ArrowLeftIcon } from '@/icons/arrow-left'

type HeaderDetailsProps = {
  title: string
  date: string
}

export default function HeaderDetails({ title, date }: HeaderDetailsProps) {
  return (
    <header className="flex flex-col items-start gap-10">
      <Link href="/projectos">
      <div className="rounded-full border-transparent bg-neutral-500 opacity-20">
          <ArrowLeftIcon className="h-8 w-8" />
        </div>
      </Link>
      <div className="flex flex-col items-start">
        <h1 className="text-center text-lg leading-7 text-neutral-900 dark:text-neutral-200">
          {title}
        </h1>
        <p className="mt-2.5 select-none text-sm text-neutral-600">
          Publicado em {date}
        </p>
      </div>
    </header>
  )
}
