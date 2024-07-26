import Layout from '@/components/layout/index'
import Link from "next/link"

export default function page() {
  return (
    <Layout>
        <p className='font-semibold text-[16.5px] leading-7 text-neutral-800 dark:text-neutral-300 [&:not(:first-child)]:mt-6'>404</p>
        <p className='mb-8 text-[15.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6'>
            A página solicitada não foi enocntrada! Clique no link para voltar.
        </p>
        <Link href="/" className='transition-all border-b text-gray-500 duration-500 hover:border-gray-500'>
            euotiniel-@euotiniel-navegador-web:~$ cd ..</Link>
    </Layout>
  )
}
