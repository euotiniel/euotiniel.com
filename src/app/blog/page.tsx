import PostCard from '@/components/posts'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Layout from '@/components/layout/index'
import Links from '@/components/links'

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <Layout>
      <h4>Blog</h4>
      <p className='my-5 text-zinc-800 dark:text-zinc-200'>
      “Devs e as Barreiras na Criação de um Portfólio” ganhou um react (não js) no
        canal do Lucas Montano. Leia o{' '}
        <Links olink="https://euotiniel.com/blog/portfolios">artigo</Links> e
        assista ao{' '}
        <Links olink="https://www.youtube.com/watch?v=teU_RL7QOT4&t=15s">
          vídeo
        </Links>
        . 
        Você também pode encontrar alguns trabalhos como redator de texto na{' '}
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
