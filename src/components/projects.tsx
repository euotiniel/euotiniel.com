"use client";
import { LinkPreview } from "@/components/ui/link-preview";

type ProjectData = {
  id: number;
  name: string;
  description: string;
  link: string;
  tech: string;
};

type ProjectsProps = {
  projectsData: ProjectData[];
};

export default function Projects({ projectsData }: ProjectsProps) {
  return (
    <div className="mt-8 flex flex-col gap-4">
      {projectsData.map((proj) => (
        <LinkPreview url={proj.link} key={proj.id} target="_blank">
          <div className="my-1 flex flex-row items-center w-full text-zinc-800 dark:text-zinc-200 group">
            <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-300 tracking-tight whitespace-nowrap">
              {proj.name}
            </span>
            <span className="flex-grow h-[1.5px] bg-neutral-700 dark:bg-neutral-400 mx-4 opacity-10"></span>
            <span className="text-sm text-neutral-400 dark:text-neutral-500 whitespace-nowrap">
              {proj.tech}
            </span>
          </div>
        </LinkPreview>
      ))}
    </div>
  );
}
