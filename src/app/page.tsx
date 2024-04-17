import Layout from '@/components/layout/index'
import Links from '@/components/links'
import Social from '@/components/social'

export default function page() {
  return (
    <Layout>
      <p>olá, sou o Otoniel Emanuel👋🏾</p>
      <div className='prose prose-zinc dark:prose-invert text-zinc-800 dark:text-zinc-200 text-justify'>
        <p>
        <b>Desenvolvedor front-end</b>, entusiasta de código aberto e escritor. Actualmente, estou cursando Engenharia Informática
        em Luanda, e dedico boa parte do meu tempo à minha paixão pela
        programação.
      </p>
      <p>
        Em tempos pensei em criar uma sessão para postar algumas
        fotos e detalhar alguns eventos em que participo, felizmente o{' '}
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
