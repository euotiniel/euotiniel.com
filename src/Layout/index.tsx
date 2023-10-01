import Container from "@/src/components/Container";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header />
      <div className="my-12">{children}</div>
      <Footer />
    </Container>
  );
}
