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
  url: `${WEBSITE_HOST_URL}/about`,
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
      <p className='font-semibold text-[16.5px] leading-7 text-neutral-800 dark:text-neutral-300 [&:not(:first-child)]:mt-6'>Blog</p>
      <p className='text-[15.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6'>
      Meu artigo ganhou um react (não js) no
        canal do Lucas Montano. Leia o{' '}
        <Links olink="https://euotiniel.com/blog/portfolios">artigo</Links> e
        assista ao{' '}
        <Links olink="https://www.youtube.com/watch?v=teU_RL7QOT4&t=15s">
          vídeo
        </Links>
        . 
        Você também pode encontrar outros artigos na{' '}
        <Links olink="https://blog.aosc.social/">aosc</Links> e{' '}
        <Links olink="https://web.facebook.com/artigosemanal">
          Artigo Semanal
        </Links>
        .
      </p>

      <div className="flex flex-col items-start gap-10 mt-8 dark:border-gray-700">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </Layout>
  )
}
