import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  // Cursor follower
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate3d(${e.clientX - 8}px, ${e.clientY - 8}px, 0)`;
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest("a, button, [role='button'], input, textarea, [data-cursor]");
      setCursorActive(!!interactive);
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  const isHome = location === "/";

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60]"
      />

      {/* Custom cursor (desktop only) */}
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed top-0 left-0 z-[70] hidden md:block transition-[width,height,background,opacity] duration-200 ${
          cursorActive ? "w-6 h-6 -ml-1.5 -mt-1.5 bg-primary/80" : "w-4 h-4 bg-primary/40"
        } rounded-full mix-blend-difference`}
        style={{ willChange: "transform" }}
      />

      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-black/5"
            : isHome
            ? "bg-transparent"
            : "bg-white"
        }`}
      >
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-8 lg:px-12">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center bg-primary text-white font-heading font-bold text-sm group-hover:rotate-12 transition-transform duration-300">
              I
            </div>
            <span className={`font-heading text-xl font-bold tracking-tight transition-colors ${
              scrolled || !isHome ? "text-black" : "text-white"
            }`}>
              IMDC
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="/" label="Home" current={location} dark={!scrolled && isHome} />

            <DropdownMenu>
              <DropdownMenuTrigger className={`px-3 py-2 text-sm font-medium transition-colors focus:outline-none ${
                scrolled || !isHome ? "text-black hover:text-primary" : "text-white/90 hover:text-white"
              }`}>
                Services
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white border-black/10 rounded-none mt-2">
                {SERVICES.map((service) => (
                  <DropdownMenuItem key={service.path} asChild>
                    <Link href={service.path} className="w-full cursor-pointer text-sm rounded-none">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {NAV_LINKS.slice(1).map((link) => (
              <NavLink key={link.path} href={link.path} label={link.name} current={location} dark={!scrolled && isHome} />
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="rounded-none bg-primary hover:bg-primary/90 text-white font-medium h-10 px-5 text-sm">
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[5px] bg-black" : scrolled || !isHome ? "bg-black" : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-[2px] my-1 transition-all duration-300 ${
                menuOpen ? "opacity-0" : scrolled || !isHome ? "bg-black" : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[5px] bg-black" : scrolled || !isHome ? "bg-black" : "bg-white"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: menuOpen ? "100vh" : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden overflow-hidden bg-white"
        >
          <div className="container mx-auto px-6 py-8 flex flex-col h-full">
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : -20 }}
                  transition={{ delay: menuOpen ? i * 0.05 + 0.1 : 0 }}
                >
                  <Link
                    href={link.path}
                    className={`block py-3 font-heading text-3xl font-bold border-b border-black/5 ${
                      location === link.path ? "text-primary" : "text-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-4">Services</p>
              <div className="grid grid-cols-1 gap-2">
                {SERVICES.map((service) => (
                  <Link
                    key={service.path}
                    href={service.path}
                    className={`block py-2 text-base font-medium ${
                      location === service.path ? "text-primary" : "text-black/70"
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-auto pt-8">
              <Button asChild className="w-full rounded-none bg-primary hover:bg-primary/90 text-white h-14">
                <Link href="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </header>

      <main className={`flex-1 ${isHome ? "" : "pt-16 md:pt-20"}`}>{children}</main>

      <footer className="bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none" />
        <div className="container relative mx-auto px-4 md:px-8 lg:px-12 pt-24 pb-12">
          {/* Big wordmark */}
          <div className="border-b border-white/10 pb-16 mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <h2 className="font-heading font-bold tracking-[-0.04em] leading-[0.9]" style={{ fontSize: "clamp(3rem, 12vw, 11rem)" }}>
                IMDC<span className="text-primary">.</span>
              </h2>
              <div className="max-w-md">
                <p className="text-white/60 leading-relaxed mb-6">
                  Precision medical billing and revenue cycle management, built by clinicians for the healthcare providers who actually treat patients.
                </p>
                <Button asChild className="rounded-none bg-primary hover:bg-primary/90 text-white h-12 px-6">
                  <Link href="/contact">Start the conversation →</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-3">
              <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Services</h3>
              <ul className="space-y-3">
                {SERVICES.slice(1).map((s) => (
                  <li key={s.path}>
                    <Link href={s.path} className="text-white/80 hover:text-primary transition-colors text-sm">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-white/80 hover:text-primary transition-colors text-sm">About</Link></li>
                <li><Link href="/industries" className="text-white/80 hover:text-primary transition-colors text-sm">Industries</Link></li>
                <li><Link href="/resources" className="text-white/80 hover:text-primary transition-colors text-sm">Resources</Link></li>
                <li><Link href="/contact" className="text-white/80 hover:text-primary transition-colors text-sm">Contact</Link></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="text-white/80">contact@imdc.us</li>
                <li className="text-white/80">1-800-555-IMDC</li>
                <li className="text-white/60">Stafford, TX</li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Compliance</h3>
              <div className="flex flex-wrap gap-2">
                {["HIPAA", "SOC 2", "HITECH", "NIST", "HL7"].map((c) => (
                  <span key={c} className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] border border-white/15 text-white/70">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>© {new Date().getFullYear()} International Medical and Dental Council. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
              <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, label, current, dark }: { href: string; label: string; current: string; dark: boolean }) {
  const active = current === href;
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
        dark ? "text-white/90 hover:text-white" : "text-black hover:text-primary"
      } ${active ? "text-primary" : ""}`}
    >
      {label}
      <span className={`absolute left-3 right-3 -bottom-px h-px transform origin-left transition-transform duration-300 bg-primary ${
        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`} />
    </Link>
  );
}
