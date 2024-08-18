import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
}

export default function PostCard(post: Post) {
  return (
    <article>
      <Link
        href={post.url}
      >
       <time dateTime={post.date} className='text-neutral-400 dark:text-neutral-500 text-sm select-none'>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <p>
          <span className='font-semibold text-[15.5px] leading-none text-neutral-800 dark:text-neutral-300 border-b transition-all duration-500 hover:border-gray-500'>{truncateText(post.title, 50)}</span>
        </p>
      </Link>
    </article>
  )
}
