import Layout from '@/components/layout/index'
import Works from '@/components/work'
import Social from '@/components/social'
import VaulDrawer from '@/components/vaul'

export default function page() {
  return (
    <Layout>
      <h1 className="text-[16.5px] font-semibold leading-7 text-neutral-800 dark:text-neutral-300">
        Otoniel Emanuel
      </h1>
      <span className="text-sm font-medium text-neutral-500">
        Design Engineer
      </span>
      <div className="mt-6">
        <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
        Combino código e design para criar experiências intuitivas e minimalistas. Para mim, design não é só o que se vê, mas também como cada detalhe faz você se sentir.          
        </p>
        <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
          Vamos construir algo extraordinário juntos.  <VaulDrawer />
        </p>
        <Works />
        <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
          Sinta-se convidado para interagir comigo nas minhas redes sociais. É
          sempre bom conhecer pessoas novas e compartilhar experiências!
        </p>
        <Social />
      </div>
    </Layout>
  )
}
