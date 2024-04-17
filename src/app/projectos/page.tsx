import Layout from '@/components/layout/index'
import Links from '@/components/links'
import ProjectList from "@/components/projects"
import AllProjects from '@/data/projects'

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
