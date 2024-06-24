"use client"
import { LinkPreview } from "@/components/ui/link-preview";

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
    <div className="mt-8 flex flex-col gap-4">
      {projectsData.map((proj) => (
        <LinkPreview
          url={proj.link}
          className="border-b pb-2"
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
        </LinkPreview>
      ))}
    </div>
  )
}
