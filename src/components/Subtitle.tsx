type SubtitleProps = {
  children: React.ReactNode;
};

export default function Subtitle({ children }: SubtitleProps) {
  return (
    <h2 className="mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 pb-2 font-semibold text-base sm:text-base md:text-base lg:text-lg xl:text-lg tracking-tight first:mt-0">
      {children}
    </h2>
  );
}
