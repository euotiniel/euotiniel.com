import Layout from '@/components/layout/index'
import Form from '@/components/form'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'

const meta = {
  title: 'Secret',
  description: 'Olá, daqui fala o Otoniel. Deixe mensagem...',
  url: `${WEBSITE_HOST_URL}/secretbook`,
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
      <h1 className="text-[16.5px] font-semibold leading-7 text-neutral-800 dark:text-neutral-300 [&:not(:first-child)]:mt-6">
        Secret
      </h1>
      <p className="mb-8 text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
        Aqui você pode deixar mensagens, pensamentos e feedback. Divirta-se!
      </p>
      <Form />
    </Layout>
  )
}
