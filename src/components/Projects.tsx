import Link from 'next/link'

type ProjectData = {
  id: number
  name: string
  description: string
  link: string
  tech: string
}

type ProjectsProps = {
  projectsData: ProjectData[]
}

export default function projects({ projectsData }: ProjectsProps) {
  return (
    <div className="mt-8 flex flex-col gap-8">
      {projectsData.map((proj) => (
        <Link
          href={proj.link}
          target="_blank"
          className="border-b pb-3"
          title={proj.description}
          key={proj.id}
        >
          <div className="flex flex-row items-center justify-between text-zinc-800 dark:text-zinc-200">
            <div className="flex flex-col">
              <h4 className="scroll-m-20 text-base font-semibold tracking-tight">
                {proj.name}
              </h4>
            </div>

            <div className="">
              <p className="text-sm leading-7 [&:not(:first-child)]:mt-6">
                {proj.tech}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
