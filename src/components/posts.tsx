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
    <article className="">
      <Link
        href={post.url}
      >
       <time dateTime={post.date} className='opacity-60 text-sm'>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h4>
          <span className='text-[17px] border-b transition-all text-black dark:text-gray-300 duration-500 hover:border-gray-500'>{truncateText(post.title, 50)}</span>
        </h4>
      </Link>
    </article>
  )
}
