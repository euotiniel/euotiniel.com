import { WEBSITE_HOST_URL } from '@/lib/constants'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import type { MDXComponents } from 'mdx/types'
import type { Metadata } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import NextImage from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Layout from '@/components/layout/index'
import { ArrowLeftIcon } from '@/icons/arrow-left'

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
    <div className="flex justify-center px-5 py-20">
      <div className="flex w-full max-w-[550px] flex-col">
        <div className="flex w-full flex-row items-center justify-between">
          <Link href="/blog" className="my-5">
            <div className="rounded-full border-transparent bg-neutral-500/70 opacity-20 ">
              <ArrowLeftIcon className="h-8 w-8" />
            </div>
          </Link>
          <div></div>
        </div>
        <div className="mt-10 flex flex-col">
          <time className="text-sm text-neutral-400" dateTime={post.date}>
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
          <h2 className="mt-2 scroll-m-20 pb-1 text-[16.5px] text-xl font-bold tracking-tight transition-colors">
            {post.title}
          </h2>
        </div>
        <article className="mb-28 mt-14 w-full text-zinc-800 dark:prose-invert dark:text-zinc-200">
          <MDXContent components={mdxComponents} />
        </article>
      </div>
    </div>
  )
}

export default PostLayout
