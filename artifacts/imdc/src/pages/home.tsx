import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Lazy3D from "@/components/three/Lazy3D";

const HeroScene = () => import("@/components/three/HeroScene");
const EdgeScene = () => import("@/components/three/EdgeScene");
const ServiceMini3D = () => import("@/components/three/ServiceMini3D");

// Animated counter
function Counter({ to, suffix = "", prefix = "", decimals = 0 }: { to: number; suffix?: string; prefix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (v) => `${prefix}${v.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${suffix}`);
  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);
  return <motion.span ref={ref}>{display}</motion.span>;
}

const SERVICES = [
  { num: "01", title: "Medical Billing", desc: "End-to-end management of the complete billing process with clinical-grade precision.", variant: "billing" as const, link: "/services/medical-billing" },
  { num: "02", title: "Medical Coding", desc: "Certified coders assign every CPT, ICD-10, and HCPCS code with full compliance.", variant: "coding" as const, link: "/services/coding" },
  { num: "03", title: "Credentialing", desc: "Enroll providers across payer networks quickly and without administrative friction.", variant: "credentialing" as const, link: "/services/credentialing" },
  { num: "04", title: "Prior Authorization", desc: "Win approvals faster with proactive payer communication and clinical documentation.", variant: "authorization" as const, link: "/services/prior-authorization" },
  { num: "05", title: "Claim Management", desc: "Submit, track, and appeal claims with denial rates measured in fractions of a percent.", variant: "claims" as const, link: "/services/claim-management" },
  { num: "06", title: "Patient Support", desc: "24/7 AI-augmented patient support handling inquiries, scheduling, and follow-ups.", variant: "support" as const, link: "/services/patient-support" },
];

const PROCESS = [
  { step: "01", title: "Onboard", desc: "Two-week white-glove integration with your EHR, clearinghouse, and existing workflows." },
  { step: "02", title: "Audit", desc: "Comprehensive A/R analysis, denial pattern review, and revenue leak identification." },
  { step: "03", title: "Optimize", desc: "Coding precision, payer-specific submission rules, and denial-prevention playbooks deployed." },
  { step: "04", title: "Scale", desc: "Continuous monitoring, monthly executive reporting, and proactive revenue recovery." },
];

const CERTS = ["HIPAA COMPLIANT", "HITECH ALIGNED", "SOC 2 TYPE II", "NIST CYBERSECURITY", "HL7 INTEROPERABLE", "ICD-10 / CPT CERTIFIED", "AAPC ACCREDITED"];

const INSIGHTS = [
  { tag: "Revenue Cycle", title: "Why your clean-claim rate is the only KPI that matters", read: "6 min read" },
  { tag: "Compliance", title: "What HIPAA enforcement looks like in 2026 — and how to stay ahead", read: "8 min read" },
  { tag: "Operations", title: "The hidden cost of in-house billing for sub-50-provider practices", read: "5 min read" },
];

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <SEO
        title="Revenue Cycle Management & Medical Billing"
        description="IMDC provides precision medical billing, coding, and credentialing services to help healthcare providers increase revenue and focus on patient care."
      />

      {/* HERO */}
      <section
        ref={heroRef}
        onMouseMove={(e) => {
          const r = heroRef.current?.getBoundingClientRect();
          if (!r) return;
          setMouse({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
        }}
        className="relative overflow-hidden bg-black text-white min-h-screen flex flex-col"
      >
        {/* 3D scene */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <Lazy3D component={HeroScene} />
          </div>
          {/* gradient masks for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
          <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay pointer-events-none" />
        </div>

        {/* Eyebrow rail (left vertical) */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-6">
          <div className="h-24 w-px bg-white/30" />
          <span className="rotate-180 [writing-mode:vertical-rl] text-[10px] font-medium tracking-[0.4em] text-white/50 uppercase">EST. 2014 — Stafford, TX</span>
          <div className="h-24 w-px bg-white/30" />
        </div>

        {/* Corner badge */}
        <div className="absolute top-28 right-8 z-10 hidden md:flex items-center gap-3">
          <div className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs uppercase tracking-[0.3em] text-white/60">Now accepting Q3 onboarding</span>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-12 flex-1 flex items-center pt-32 pb-24">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-3 mb-8 border-l-2 border-primary pl-4"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-white/70">U.S.-based revenue cycle partners</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-heading tracking-[-0.04em] leading-[0.92] text-white"
              style={{ fontSize: "clamp(3rem, 9vw, 8.5rem)" }}
            >
              <span className="block font-extralight">Focus on</span>
              <span className="block font-bold">patient care.</span>
              <span className="block">
                <span className="font-extralight italic text-white/70">We handle</span>
                <span className="font-bold text-primary"> the rest.</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
            >
              Precision medical billing, coding, and credentialing run by clinicians who understand both sides of the chart.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <Button asChild size="lg" className="group rounded-none bg-primary hover:bg-primary text-white font-medium h-14 px-8 text-base relative overflow-hidden">
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    Request a Demo
                    <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-none text-white hover:bg-white/5 hover:text-white h-14 px-8 text-base group">
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            {/* Number tickers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-20 grid grid-cols-3 gap-6 md:gap-12 max-w-2xl border-t border-white/15 pt-8"
            >
              <div>
                <div className="font-heading text-2xl md:text-4xl font-bold text-white">
                  $<Counter to={2.4} decimals={1} />B+
                </div>
                <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Claims processed</div>
              </div>
              <div>
                <div className="font-heading text-2xl md:text-4xl font-bold text-white">
                  <Counter to={98.2} decimals={1} />%
                </div>
                <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Clean claim rate</div>
              </div>
              <div>
                <div className="font-heading text-2xl md:text-4xl font-bold text-primary">
                  <Counter to={30} />%
                </div>
                <div className="text-xs uppercase tracking-wider text-white/50 mt-1">A/R reduction</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom marquee */}
        <div className="relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-sm overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...CERTS, ...CERTS].map((c, i) => (
              <span key={i} className="mx-8 text-xs uppercase tracking-[0.4em] text-white/40 inline-flex items-center gap-8">
                {c}
                <span className="text-primary">●</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MASSIVE STATS BAND */}
      <section className="relative bg-black text-white overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-24 md:py-32">
          <div className="max-w-2xl mb-20">
            <span className="text-xs uppercase tracking-[0.4em] text-primary mb-4 block">By the numbers</span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Performance that pays for itself,
              <span className="text-white/40"> often in the first quarter.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              { value: 98.2, suffix: "%", decimals: 1, label: "First-pass clean claim rate", sub: "Industry average: 75-85%" },
              { value: 30, suffix: "%", decimals: 0, label: "Average A/R day reduction", sub: "Within first 90 days" },
              { value: 24, suffix: "/7", decimals: 0, label: "U.S.-based expert support", sub: "Real humans. No outsourcing." },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="border-t border-white/15 pt-8"
              >
                <div className="font-heading text-7xl md:text-8xl font-bold tracking-tight leading-none">
                  <Counter to={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <div className="mt-6 text-base font-medium text-white">{stat.label}</div>
                <div className="mt-1 text-sm text-white/50">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative bg-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.4em] text-primary mb-4 block">What we do</span>
              <h2 className="font-heading text-4xl md:text-6xl font-bold text-black tracking-tight leading-[1.05]">
                A complete revenue cycle,
                <span className="text-black/40"> engineered end-to-end.</span>
              </h2>
            </div>
            <Link href="/services" className="group inline-flex items-center text-sm font-medium text-black hover:text-primary transition-colors whitespace-nowrap">
              View all services
              <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/10">
            {SERVICES.map((service, idx) => (
              <Link
                key={idx}
                href={service.link}
                className="group relative p-8 md:p-10 border-r border-b border-black/10 bg-white hover:bg-black transition-colors duration-500 overflow-hidden"
              >
                {/* number chip */}
                <div className="flex items-start justify-between mb-12">
                  <span className="font-heading text-sm font-light text-black/40 group-hover:text-primary transition-colors">{service.num}</span>
                  <ArrowUpRight className="w-5 h-5 text-black/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                <div className="w-24 h-24 mb-8 -mx-2">
                  <Lazy3D component={ServiceMini3D} variant={service.variant} />
                </div>

                <h3 className="font-heading text-2xl md:text-3xl font-bold text-black group-hover:text-white transition-colors mb-3">{service.title}</h3>
                <p className="text-sm text-black/60 group-hover:text-white/70 transition-colors leading-relaxed">{service.desc}</p>

                {/* hover red line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK — process timeline */}
      <section className="relative bg-[#0a0a0a] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <span className="text-xs uppercase tracking-[0.4em] text-primary mb-4 block">How we work</span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-6">
                  A four-step partnership,
                  <span className="text-white/40"> not a vendor relationship.</span>
                </h2>
                <p className="text-white/60 leading-relaxed">
                  From discovery to optimization, every phase has named owners on our team and a measurable outcome on yours.
                </p>
              </div>
            </div>
            <div className="lg:col-span-8 relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-white/15 hidden md:block">
                <motion.div
                  initial={{ height: "0%" }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: "easeOut" }}
                  className="absolute top-0 left-0 w-full bg-primary"
                />
              </div>
              <div className="space-y-12 md:space-y-16">
                {PROCESS.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="md:pl-20 relative"
                  >
                    <div className="absolute left-0 top-0 hidden md:flex w-12 h-12 rounded-full bg-black border-2 border-primary items-center justify-center text-primary font-heading text-sm font-bold">
                      {p.step}
                    </div>
                    <div className="md:hidden text-primary font-heading text-sm font-bold mb-2">{p.step}</div>
                    <h3 className="font-heading text-3xl md:text-4xl font-bold mb-3">{p.title}</h3>
                    <p className="text-white/60 text-lg leading-relaxed max-w-xl">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMDC EDGE — 3D shield split */}
      <section className="relative bg-white py-24 md:py-32 border-t border-black/5">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-square max-w-xl mx-auto lg:mx-0 w-full">
              <div className="absolute inset-0">
                <Lazy3D component={EdgeScene} />
              </div>
              {/* corner ticks */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-black/20" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-black/20" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-black/20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-black/20" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-primary mb-4 block">The IMDC edge</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[1.05] mb-8">
                Built by clinicians.
                <br />
                <span className="text-black/40">Run like a Fortune-500 finance team.</span>
              </h2>
              <p className="text-lg text-black/60 mb-10 leading-relaxed max-w-xl">
                Unlike generic billing factories, our leadership has 20+ years of clinical experience. We build financial systems that support care, not bureaucracy that hinders it.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-12">
                {[
                  "Reduce operational costs",
                  "Increase practice revenue",
                  "Save time and resources",
                  "Improve collection rates",
                  "Streamline clinical workflows",
                  "Bank-grade compliance & security",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-black font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Button asChild size="lg" className="rounded-none bg-black hover:bg-black/90 text-white h-14 px-8">
                <Link href="/about">
                  Meet our leadership
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAND — slow horizontal cert scroll */}
      <section className="relative bg-black py-12 border-y border-white/10 overflow-hidden">
        <div className="flex animate-marquee-slow whitespace-nowrap">
          {[...CERTS, ...CERTS, ...CERTS].map((c, i) => (
            <div key={i} className="mx-12 inline-flex items-center gap-6">
              <span className="font-heading text-2xl md:text-3xl font-light text-white/30 tracking-tight">{c}</span>
              <span className="text-primary text-2xl">+</span>
            </div>
          ))}
        </div>
      </section>

      {/* CEO QUOTE */}
      <section className="relative bg-white py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <Quote className="w-12 h-12 text-primary mb-8" />
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[1.1] mb-10"
            >
              "As a clinician, I built IMDC because I watched too many practices go under chasing claims instead of treating patients.
              <span className="text-black/40"> We exist to make that disappear."</span>
            </motion.blockquote>
            <div className="flex items-center gap-4 pt-8 border-t border-black/10">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-heading font-bold">CB</div>
              <div>
                <div className="font-heading font-bold text-black">Christy Browning, RN, BSN</div>
                <div className="text-sm text-black/50">Founder & Chief Executive Officer, IMDC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS PREVIEW */}
      <section className="relative bg-[#fafafa] py-24 md:py-32 border-y border-black/5">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-primary mb-4 block">Recent insights</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-black tracking-tight leading-[1.05]">
                Field notes from the
                <span className="text-black/40"> revenue front lines.</span>
              </h2>
            </div>
            <Link href="/resources" className="group inline-flex items-center text-sm font-medium text-black hover:text-primary transition-colors whitespace-nowrap">
              All resources
              <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSIGHTS.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-white border border-black/10 p-8 md:p-10 hover:border-primary/40 transition-colors duration-300"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">{post.tag}</span>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-black mt-6 mb-8 leading-snug group-hover:text-primary transition-colors min-h-[5rem]">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between pt-6 border-t border-black/10">
                  <span className="text-xs text-black/50">{post.read}</span>
                  <ArrowUpRight className="w-4 h-4 text-black/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-black text-white py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.06] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${50 + mouse.x * 30}% 50%, rgba(252, 58, 58, 0.25), transparent 60%)`,
          }}
        />
        <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading font-bold tracking-[-0.04em] leading-[0.95] mx-auto max-w-5xl"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)" }}
          >
            Stop chasing claims.
            <br />
            <span className="text-white/40">Start scaling</span>
            <span className="text-primary"> your practice.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
          >
            Schedule a 30-minute consultation. We'll audit your last 90 days of denials at no cost — then show you exactly what you're leaving on the table.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <Button asChild size="lg" className="group rounded-none bg-primary hover:bg-primary text-white h-16 px-12 text-lg font-medium relative overflow-hidden">
              <Link href="/contact">
                <span className="relative z-10 flex items-center">
                  Book your free audit
                  <ArrowUpRight className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="absolute inset-0 z-0 group-hover:text-black transition-colors" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
