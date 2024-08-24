import Header from '../header';
import Footer from '../footer';

type LayoutProp = {
  children: React.ReactNode;
}

export default function Index({ children }: LayoutProp) {
  return (
    <div className="flex justify-center py-20 px-5">
         <div className="flex flex-col max-w-[530px] w-full">
      <Header />
      <main className="pt-10">{children}</main>
      <Footer />
    </div> 
    </div>

  );
}

