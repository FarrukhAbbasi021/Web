import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
  { name: "About", path: "/about" },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" },
];

const SERVICES = [
  { name: "Overview", path: "/services" },
  { name: "Medical Billing", path: "/services/medical-billing" },
  { name: "Medical Coding", path: "/services/coding" },
  { name: "Credentialing", path: "/services/credentialing" },
  { name: "Prior Authorization", path: "/services/prior-authorization" },
  { name: "Claim Management", path: "/services/claim-management" },
  { name: "Patient Support", path: "/services/patient-support" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-heading text-2xl font-bold tracking-tight text-secondary">
              IMDC
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === "/" ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary focus:outline-none data-[state=open]:text-primary flex items-center">
                Services
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-card border-border">
                {SERVICES.map((service) => (
                  <DropdownMenuItem key={service.path} asChild>
                    <Link
                      href={service.path}
                      className="w-full cursor-pointer"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {NAV_LINKS.slice(1).map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.path ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-medium">
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-transparent">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`block px-2 py-1 text-lg font-medium transition-colors hover:text-primary ${
                      location === link.path ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="py-2">
                  <p className="px-2 text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Services</p>
                  {SERVICES.map((service) => (
                    <Link
                      key={service.path}
                      href={service.path}
                      className={`block px-2 py-1 text-base font-medium transition-colors hover:text-primary ${
                        location === service.path ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-4">
                  <Button asChild className="w-full rounded-full bg-primary hover:bg-primary/90 text-white">
                    <Link href="/contact">Request a Demo</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <span className="font-heading text-3xl font-bold tracking-tight text-white">
                  IMDC
                </span>
              </Link>
              <p className="text-secondary-foreground/80 max-w-xs leading-relaxed">
                Precision medical billing and revenue cycle management, built by clinicians for healthcare providers.
              </p>
              <div className="flex gap-4 pt-4">
                {/* Trust Badges placeholder */}
                <div className="bg-white/10 px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider border border-white/20">HIPAA Compliant</div>
                <div className="bg-white/10 px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider border border-white/20">SOC 2</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold text-lg mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                {SERVICES.slice(1).map((service) => (
                  <li key={service.path}>
                    <Link href={service.path} className="text-secondary-foreground/80 hover:text-white transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-secondary-foreground/80 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/industries" className="text-secondary-foreground/80 hover:text-white transition-colors">Industries</Link></li>
                <li><Link href="/resources" className="text-secondary-foreground/80 hover:text-white transition-colors">Resources & Blog</Link></li>
                <li><Link href="/contact" className="text-secondary-foreground/80 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-6 text-white">Contact</h3>
              <ul className="space-y-3 text-secondary-foreground/80">
                <li>contact@imdc.us</li>
                <li>1-800-555-IMDC</li>
                <li className="pt-4">
                  <Button asChild variant="outline" className="w-full bg-transparent border-white/20 hover:bg-white/10 text-white">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>© {new Date().getFullYear()} International Medical and Dental Council. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
