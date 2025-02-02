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
    <article className='w-full'>
      <Link href={post.url}>
        <div className="flex w-full flex-row items-center text-zinc-800 dark:text-zinc-200">
          <span className="text-[15px] text-black dark:text-neutral-300 tracking-tight whitespace-nowrap">
          {truncateText(post.title, 35)}
            </span>
          <span className="mx-4 h-[1.5px] flex-grow bg-neutral-700 opacity-10 dark:bg-neutral-400"></span>
          <time
            dateTime={post.date}
            className="text-xs text-neutral-400 dark:text-neutral-500 select-none"
            aria-label={`${format(parseISO(post.date), 'dd/MM/yyyy')}`}
          >
            {format(parseISO(post.date), 'dd/MM/yyyy')}
          </time>
        </div>
      </Link>
    </article>
  )
}
