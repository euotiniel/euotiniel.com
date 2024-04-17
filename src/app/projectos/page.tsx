import Layout from '@/components/layout/index'
import Links from '@/components/links'
import ProjectList from "@/components/projects"
import AllProjects from '@/data/projects'
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
      <h4>Projectos</h4>
      <p className='my-5 text-zinc-800 dark:text-zinc-200'>
        Explore alguns dos meus projectos. Dê uma olhada no{' '}
        <Links olink="https://github.com/euotiniel/">GitHub</Links>. outros
        projecto de código aberto.
      </p>
      <div>
       <ProjectList projectsData={AllProjects} />
      </div>
    </Layout>
  )
}
