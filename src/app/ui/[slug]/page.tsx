import Link from 'next/link'
import { icon } from '@/icons'
import { components } from '@/config/components'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import { ComponentPreview } from './component-preview'

export default function ComponentPage({
  params,
}: {
  params: { slug: string }
}) {
  const component = components.find((c) => c.slug === params.slug)

  if (!component) {
    notFound()
  }

  // const mdxContent = await import(`@/content/craft/${component.mdxPath}`)

  return (
    <div className="flex justify-center px-5 py-20">
      <div className="flex w-full max-w-[530px] flex-col bg-background">
      <header className="flex flex-col items-start">
          <Link href="/" className='my-5'>
            <div className="rounded-full border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 opacity-40">
              <icon.ArrowLeftIcon />
            </div>
          </Link>
          <div className="pt-10">
            <h1 className="text-[16.5px] font-semibold leading-7 text-neutral-800 dark:text-neutral-300">
              {component.title}
            </h1>
          </div>
      </header>

      <main>
        <article className="prose prose-gray max-w-none dark:prose-invert">
          <p className='text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-6'>{component.description}</p>

            <div className="border rounded-lg p-6 flex h-[500px] items-center justify-center">
              <ComponentPreview component={component} />
            </div>

          <div className="mt-8">
            {/* {mdxContent && <mdxContent.default />} */}
          </div>
        </article>
      </main>
    </div>
    </div>

  )
}
