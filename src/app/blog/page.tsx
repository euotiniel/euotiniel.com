import PostCard from '@/components/posts'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Layout from '@/components/layout/index'
import Links from '@/components/links'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'

const meta = {
  title: 'Blog',
  description: 'Leia os meus artigos',
  url: `${WEBSITE_HOST_URL}/blog`,
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: meta.url,
  },
}

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <Layout>
      <h1 className="text-[16.5px] font-semibold leading-7 text-neutral-800 dark:text-neutral-300 [&:not(:first-child)]:mt-6">
        Blog
      </h1>
      <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
        Assista ao{' '}
        <Links olink="https://www.youtube.com/watch?v=teU_RL7QOT4&t=15s">
          vídeo
        </Links>
        do Lucas Montano ao fazer um react (não js) do meu artigo.
        Você também pode encontrar outros artigos na{' '}
        <Links olink="https://blog.aosc.social/">aosc</Links> e{' '}
        <Links olink="https://web.facebook.com/artigosemanal">
          Artigo Semanal
        </Links>
        .
      </p>

      <div className="mt-8 flex flex-col items-start gap-10 dark:border-gray-700">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </Layout>
  )
}
