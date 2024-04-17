import Layout from '@/components/layout/index'
import Form from '@/components/form'

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
