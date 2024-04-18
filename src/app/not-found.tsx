import Layout from '@/components/layout/index'
import Link from "next/link"

export default function page() {
  return (
    <Layout>
        <h4>404</h4>
        <p className='my-5 text-zinc-800 dark:text-zinc-200'>
            A página solicitada não foi enocntrada! Clique no link para voltar.
        </p>
        <Link href="/" className='transition-all border-b text-gray-500 duration-500 hover:border-gray-500'>
            euotiniel-@euotiniel-navegador-web:~$ cd ..</Link>
    </Layout>
  )
}
