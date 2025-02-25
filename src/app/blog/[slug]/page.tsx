import { WEBSITE_HOST_URL } from '@/lib/constants'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import type { MDXComponents } from 'mdx/types'
import type { Metadata } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import NextImage from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BsArrowBarLeft } from 'react-icons/bs'
import { icon } from '@/icons'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) {
    return
  }

  const { title, description, date, url } = post

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: date,
      url: `${WEBSITE_HOST_URL}/blog/${url}`,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${WEBSITE_HOST_URL}/blog/${url}`,
    },
  }
}

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  Image: (props) => <NextImage className="rounded-lg" {...props} />,
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) {
    notFound()
  }

  const MDXContent = useMDXComponent(post.body.code)

  return (
      <div className="container mt-12 flex max-w-[580px] flex-col gap-3 px-5">
        <div className="flex w-full flex-row items-center justify-between">
          <Link href="/blog" className='my-5'>
            <div className="rounded-full border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 opacity-40">
              <icon.ArrowLeftIcon />
            </div>
          </Link>
          <div></div>
        </div>
        <div className="mt-10 flex flex-col">
          <time className="text-sm text-neutral-400" dateTime={post.date}>
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
          <h2 className="text-[16.5px] mt-2 scroll-m-20 pb-1 text-xl font-bold tracking-tight transition-colors">
            {post.title}
          </h2>
        </div>
        <article className="mb-28 mt-14 w-full text-zinc-800 dark:prose-invert dark:text-zinc-200">
          <MDXContent components={mdxComponents} />
        </article>
      </div>
  )
}

export default PostLayout
