import Footer from "@/src/components/Footer";

import Container from "@/src/components/Container";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import Link from "next/link";
import {ModeToggle} from "@/src/components/ModeToggle"

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <Container>
          <header className="flex flex-col items-center justify-between sm:flex-row">
            <div className="flex gap-4 items-center my-5">
              <Avatar>
                <AvatarImage src="https://github.com/euotiniel.png" />
                <AvatarFallback>OE</AvatarFallback>
              </Avatar>

              <div className="flex flex-col items-start justify-start">
                <span className="text-base font-extrabold tracking-tight lg:text-base">
                  I&apos;am Oto
                </span>
                <span className="text-xs font-normal tracking-tight lg:text-sm">
                  @euotiniel
                </span>
              </div>
            </div>

            <nav>
              <ul className="flex flex-row items-center gap-5 text-sm sm:text-base">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/projects">Projectos</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/guestbook">GuestBook</Link>
                </li>
                <li>
                  <Link href="/gallery">Galeria</Link>
                </li>
                <li>
                  <ModeToggle />
                </li>
              </ul>
            </nav>
          </header>
          <div className="my-12">{children}</div>

          <Footer />
        </Container>
  );
}
