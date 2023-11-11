import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { BsStar } from "react-icons/bs";

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
    <div className="flex flex-wrap gap-3 py-5">
      {projectsData.map((data) => (
        <Link
          href={data.link}
          key={data.id}
          target="_blank"
          data-cursor="block"
        >
          <Card className="p-4">
            <CardHeader>
              <CardTitle>{data.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{data.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-row justify-between items-center">
              <small>
                <span className="text-gray-500">tech:</span> {data.tech}
              </small>
              <small className="flex flex-row items-center gap-2">
                <BsStar size="15" />
              </small>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
