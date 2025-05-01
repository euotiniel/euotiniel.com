'use client'
import { LinkPreview } from '@/components/ui/link-preview'
import DecryptedText from '@/components/decrypted-text'

type ProjectData = {
  id: number
  name: string
  description: string
  link: string
  tech?: string
  data?: string
}

type ProjectsProps = {
  projectsData: ProjectData[]
}

export default function Projects({ projectsData }: ProjectsProps) {
  return (
    <div className="mt-8 flex flex-col gap-4">
      {projectsData.map((proj) => (
        <LinkPreview url={proj.link} key={proj.id} target="_blank">
          <div className="group my-1 flex w-full flex-row items-center text-zinc-800 dark:text-zinc-200">
            <span className="whitespace-nowrap text-[15px] tracking-tight text-black dark:text-neutral-300">
              <DecryptedText text={proj.name} />
            </span>
            <span className="mx-4 h-[1px] flex-grow border-t border-dashed border-neutral-800 opacity-50 dark:border-neutral-400"></span>
            <span className="whitespace-nowrap text-sm text-neutral-400 dark:text-neutral-500">
              {proj.tech}
            </span>
          </div>
        </LinkPreview>
      ))}
    </div>
  )
}
