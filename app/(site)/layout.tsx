import Navbar from "@/components/navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="antialiased max-w-[560px] mx-auto px-6 py-12">
      <Navbar />
      <main className="mt-8">{children}</main>
    </div>
  );
}