import Link from "next/link";
import { components } from "@/config/components";
import { notFound } from "next/navigation";
import { ComponentPreview } from "./component-preview";
import { ArrowLeftIcon } from "@/icons/arrow-left";
import { ArrowRightIcon } from "@/icons/arrow-right";

export default function ComponentPage({
  params,
}: {
  params: { slug: any };
}) {
  const componentIndex = components.findIndex((c) => c.slug === params.slug);

  if (componentIndex === -1) {
    notFound();
  }

  const component = components[componentIndex];
  const prevComponent =
    componentIndex > 0 ? components[componentIndex - 1] : null;
  const nextComponent =
    componentIndex < components.length - 1
      ? components[componentIndex + 1]
      : null;

  return (
    <div className="container mx-auto min-h-screen max-w-[550px] bg-background px-4 py-20 font-sans">
      <ComponentPreview component={component} />
      <div className="flex justify-between items-center mt-10">
        {prevComponent ? (
          <Link
            href={`/ui/${prevComponent.slug}`}
            className="flex items-center justify-end text-sm text-neutral-500 ease-in-out duration-200 hover:text-neutral-700 p-0"
          >
            <ArrowLeftIcon className="h-8 w-8" />
            {prevComponent.title}
          </Link>
        ) : (
          <div />
        )}

        {nextComponent ? (
          <Link
            href={`/ui/${nextComponent.slug}`}
            className="flex items-center justify-end text-sm text-neutral-500 ease-in-out duration-200 hover:text-neutral-700 p-0"
          >
            {nextComponent.title} <ArrowRightIcon className="h-8 w-8" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}