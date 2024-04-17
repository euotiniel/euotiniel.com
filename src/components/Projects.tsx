import Link from "next/link";

interface ProjectData {
  id: number;
  name: string;
  description: string;
  link: string;
  tech: string;
}

interface ProjectsProps {
  projectsData: ProjectData[];
}

export default function Projects({ projectsData }: ProjectsProps) {
  return (
    <div className="flex flex-col gap-8">
      {projectsData.map((data) => (
        <Link
          href={data.link}
          key={data.id}
          target="_blank"
        >
          <div className="flex flex-row items-center justify-between">
            <div>
              <h4 className="scroll-m-20 text-base font-semibold tracking-tight">
                {data.name}
              </h4>
              <p className="text-sm text-muted-foreground">
                {data.description}
              </p>
            </div>

            <div className="">
              <p className="leading-7 text-sm [&:not(:first-child)]:mt-6">{data.tech}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
