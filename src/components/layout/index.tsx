import Header from '../header';
import Footer from '../footer';

type LayoutProp = {
  children: React.ReactNode;
}

export default function Index({ children }: LayoutProp) {
  return (
    <div className="container max-w-[585px] mt-12 px-4">
      <Header />
      <main className="pt-10">{children}</main>
      <Footer />
    </div>
  );
}

