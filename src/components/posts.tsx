import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text
  }
  return text.slice(0, maxLength) + '...'
}

export default function PostCard(post: Post) {
  return (
    <article className="w-full">
      <Link href={post.url}>
        <div className="flex w-full flex-row items-center text-zinc-800 dark:text-zinc-200">
          <span className="whitespace-nowrap text-[15px] tracking-tight text-black dark:text-neutral-300">
            {truncateText(post.title, 35)}
          </span>
          <span className="mx-4 h-[1px] flex-grow border-t border-dashed border-neutral-800 opacity-50 dark:border-neutral-400"></span>
          <time
            dateTime={post.date}
            className="select-none text-xs text-neutral-400 dark:text-neutral-500"
            aria-label={`${format(parseISO(post.date), 'dd/MM/yyyy')}`}
          >
            {format(parseISO(post.date), 'dd/MM/yyyy')}
          </time>
        </div>
      </Link>
    </article>
  )
}
