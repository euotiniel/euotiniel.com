type LinkProps = {
  children: React.ReactNode;
  olink?: string;
};

export default function Links({ children, olink }: LinkProps) {
  return (
    <a
      href={olink}
      className="border-b transition-all text-gray-500 duration-500 hover:border-gray-500"
      target="_blank"
    >
      {children}
    </a>
  );
}
