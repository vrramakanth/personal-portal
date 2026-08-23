import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose } from "@/components/ui/sheet";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#initiatives", label: "Initiatives" },
  { href: "#recognition", label: "Recognition" },
  { href: "#talks", label: "Talks" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const onHome = location === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-lg tracking-tight" data-testid="link-home">
          Ramakanth V R
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {onHome &&
            navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild size="sm" variant="outline" data-testid="button-nav-resume">
            <Link href="/resume">
              <FileDown className="w-4 h-4" />
              Resume
            </Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost" className="md:hidden" data-testid="button-mobile-menu">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-xs">
            <SheetTitle className="font-display">Menu</SheetTitle>
            <nav className="mt-6 flex flex-col gap-1">
              {onHome &&
                navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="py-3 text-base font-medium border-b border-border/60 text-foreground/90"
                      data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              <SheetClose asChild>
                <Link
                  href="/resume"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground py-3 font-medium"
                  data-testid="link-mobile-resume"
                >
                  <FileDown className="w-4 h-4" />
                  View Resume
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
