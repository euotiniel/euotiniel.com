import Layout from '@/components/layout/index'
import Form from '@/components/form'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'

const meta = {
  title: 'Secretbook',
  description: 'Olá, daqui fala o Otoniel. Deixe mensagem...',
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
      <h4>Secretbook</h4>
      <p className='my-5 text-zinc-800 dark:text-zinc-200'>
        {' '}
        Aqui você pode deixar mensagens, pensamentos e feedback. Divirta-se!
      </p>
      <Form />
    </Layout>
  )
}
