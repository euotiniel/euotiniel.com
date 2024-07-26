import Layout from '@/components/layout/index'
import Links from '@/components/links'
import ProjectList from '@/components/projects'
import AllProjects from '@/data/projects'
import Experiments from '@/data/experiments'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'

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
          <p className='font-semibold text-[16.5px] leading-7 text-neutral-800 dark:text-neutral-300 [&:not(:first-child)]:mt-6'>Projectos</p>
          <p className="text-[15.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
            Explore alguns dos meus projectos no{' '}
            <Links olink="https://github.com/euotiniel/">GitHub</Links>. 
          </p>
          <div>
            <ProjectList projectsData={AllProjects} />
          </div>
        </div>
        <div>
          <p className='font-semibold text-[16.5px] leading-7 text-neutral-800 dark:text-neutral-300 [&:not(:first-child)]:mt-6'>Experimentos 🧪</p>
          <div>
            <ProjectList projectsData={Experiments} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
