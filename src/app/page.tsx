import Layout from '@/components/layout/index'
import Craft from "@/components/last-craft"
import Works from '@/components/work'
import Links from '@/components/links'
import Social from '@/components/social'

export default function page() {
  return (
    <Layout>
      <h1 className="text-[16.5px] font-semibold leading-7 text-neutral-800 dark:text-neutral-300">
        Otoniel Emanuel
      </h1>
      <div className='mt-6'>
        <p className='text-[14.9px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6'>
          Desenvolvedor front-end na INOKRI, entusiasta de código aberto e
          escritor. Nos meus tempos livres gosto de fotografar, ler, ver animes
          e criar &apos;coisas bonitas&apos;.
        </p>
        <p className='text-[14.9px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6'>
          Pensei em criar uma sessão para postar algumas fotos e detalhar alguns
          eventos em que participo, mas o{' '}
          <Links olink="https://read.cv/euotiniel">Read.cv</Links> salvou-me
          disso (por agora).
        </p>
        <Works />
        <p className='text-[14.9px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6'>
          Tenho me divertido criando alguns componentes animados.
        </p>
        <Craft />
        <p className='text-[14.9px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6'>
          Sinta-se convidado para interagir comigo nas minhas redes sociais. É
          sempre bom conhecer pessoas novas e compartilhar experiências!
        </p>
        <Social />
      </div>
    </Layout>
  )
}
