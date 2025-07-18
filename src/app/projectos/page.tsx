import Layout from '@/components/layout/index'
import Links from '@/components/links'
import ProjectList from '@/components/projects'
import AllProjects from '@/data/projects'
import Experiments from '@/data/experiments'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import UI from '@/components/ui-components'

const meta = {
  title: 'Projectos',
  description: 'Explore alguns dos meus projectos',
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

export default function page() {
  return (
    <Layout>
      <div className='flex flex-col gap-14'>
        <div>
          <h1 className='font-semibold text-[16.5px] leading-7 text-neutral-800 dark:text-neutral-300 [&:not(:first-child)]:mt-6'>Projectos</h1>
          <p className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
           Alguns esboços e experimentos públicos de UI abertos no
            <Links olink="https://www.figma.com/design/xmqXqu3qyHJaee08kklN6S/UIs?node-id=0-1&t=kSLsHWoqxSTRkigO-1">Figma</Links>. 
          </p>
          <div>
            <ProjectList projectsData={AllProjects} />
          </div>
        </div>
        <div>
          <h2 className='font-semibold text-[16.5px] leading-7 text-neutral-800 dark:text-neutral-300 [&:not(:first-child)]:mt-6'>UI</h2>
          <div>
            <UI />
          </div>
        </div>
        <div>
          <h2 className='font-semibold text-[16.5px] leading-7 text-neutral-800 dark:text-neutral-300 [&:not(:first-child)]:mt-6'>Experimentos</h2>
          <div>
            <ProjectList projectsData={Experiments} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
