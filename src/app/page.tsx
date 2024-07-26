import Layout from '@/components/layout/index'
import Links from '@/components/links'
import Social from '@/components/social'

export default function page() {
  return (
    <Layout>
      <p className="font-semibold text-[16.5px] leading-7 text-neutral-800 dark:text-neutral-300 [&:not(:first-child)]:mt-6">
        Otoniel Emanuel
      </p>
      <div className="text-[15.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
        <p>
          Desenvolvedor front-end, entusiasta de código aberto e escritor.
          Actualmente, estou cursando Engenharia Informática em Luanda, e dedico
          boa parte do meu tempo à minha paixão pela programação.
        </p>
        <p>
          Pensei em criar uma sessão para postar algumas fotos e detalhar alguns
          eventos em que participo, felizmente o{' '}
          <Links olink="https://read.cv/euotiniel">Read.cv</Links> salvou-me
          disso. Pelo menos por agora!
        </p>
        <p>
          Sinta-se convidado para interagir comigo nas minhas redes sociais. É
          sempre bom conhecer pessoas novas e compartilhar experiências!
        </p>
      </div>
      <Social />
    </Layout>
  )
}
