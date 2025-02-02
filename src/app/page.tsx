import Layout from '@/components/layout/index'
import Craft from '@/components/last-craft'
import UI from '@/components/ui-components'
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
          Combino codificação e design para criar produtos atraentes e funcionais. Aqui, design não é apenas o que se vê, mas também o que se sente.
          
        </p>
        <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
          Vamos construir algo extraordinário juntos.  <VaulDrawer />
        </p>
        <Works />
        <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
          Tenho me divertido criando alguns componentes animados.
        </p>
        <Craft />
        <UI />
        <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
          Sinta-se convidado para interagir comigo nas minhas redes sociais. É
          sempre bom conhecer pessoas novas e compartilhar experiências!
        </p>
        <Social />
      </div>
    </Layout>
  )
}
