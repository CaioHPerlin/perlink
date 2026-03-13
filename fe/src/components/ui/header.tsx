import Link from "next/link";
import { Button } from "./button";

function Header() {
  return (
    <header className="flex items-center h-20">
      <nav className="flex items-center justify-between w-full">
        <div className="flex items-center gap-7.5">
          <Link href="/">
            <h1 className="text-5xl font-extrabold transition-all text-primary hover:text-green-500">
              <span className="text-foreground">Per</span>
              <em className="font-serif">Link</em>
            </h1>
          </Link>
          <div className="text-sm font-medium">
            <Link className="px-3 py-1.5" href="/plans">
              Planos
            </Link>
            <Link className="px-3 py-1.5" href="/resources">
              Recursos
            </Link>
          </div>
        </div>
        <div className="flex gap-7.5">
          <Button variant="outline">Login</Button>
          <Button>Cadastre-se</Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
