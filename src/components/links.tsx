type LinkProps = {
    children: React.ReactNode;
    olink?: string;
  };
  
  export default function Links({ children, olink }: LinkProps) {
    return (
      <a
        href={olink}
        className="transition-all border-b text-neutral-500 duration-500 hover:border-gray-300"
        target="_blank"
        data-cursor="block"
      >
        <span className="p-1">{children}</span>
      </a>
    );
  }