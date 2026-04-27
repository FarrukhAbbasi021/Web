import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import cliniciansImage from "@/assets/images/clinicians-charts.png";
import handsImage from "@/assets/images/hands-keyboard-claims.png";
import Lazy3D from "@/components/three/Lazy3D";

const HeroScene = () => import("@/components/three/HeroScene");
const EdgeScene = () => import("@/components/three/EdgeScene");
const ServiceMini3D = () => import("@/components/three/ServiceMini3D");

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <>
      <SEO 
        title="Revenue Cycle Management & Medical Billing" 
        description="IMDC provides precision medical billing, coding, and credentialing services to help healthcare providers increase revenue and focus on patient care."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary pt-24 pb-32 md:pt-32 md:pb-48 lg:pt-40 lg:pb-56">
        <div className="absolute inset-0 z-0">
          <Lazy3D component={HeroScene} />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent pointer-events-none" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 pointer-events-none">
          <div className="max-w-3xl pointer-events-auto">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white mb-6 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                U.S. Based Healthcare Revenue Partners
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Focus on patient care. <br/><span className="text-primary">We handle the rest.</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-secondary-foreground/80 mb-10 max-w-2xl leading-relaxed">
                Precision medical billing, coding, and credentialing run by clinicians who understand both sides of the chart. Increase revenue, reduce denials, and streamline your practice.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-medium h-14 px-8 text-lg">
                  <Link href="/contact">Request a Demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white h-14 px-8 text-lg">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust/Stats Section */}
      <section className="relative -mt-16 z-20 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="flex flex-col items-center text-center px-4">
              <span className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-2">98%</span>
              <span className="text-muted-foreground font-medium">First-Pass Clean Claim Rate</span>
            </div>
            <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
              <span className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-2">30%</span>
              <span className="text-muted-foreground font-medium">Average Decrease in A/R Days</span>
            </div>
            <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
              <span className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-2">24/7</span>
              <span className="text-muted-foreground font-medium">U.S. Based Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">Comprehensive Revenue Cycle Solutions</h2>
            <p className="text-muted-foreground text-lg">
              End-to-end management of your financial operations, designed to maximize revenue and minimize compliance risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Medical Billing",
                desc: "End-to-end management of the complete billing process with speed and accuracy.",
                variant: "billing" as const,
                link: "/services/medical-billing"
              },
              {
                title: "Medical Coding",
                desc: "Certified coders assign the correct medical codes for every service to ensure compliance.",
                variant: "coding" as const,
                link: "/services/coding"
              },
              {
                title: "Credentialing",
                desc: "Enroll doctors with insurance networks quickly and correctly without administrative headaches.",
                variant: "credentialing" as const,
                link: "/services/credentialing"
              },
              {
                title: "Prior Authorization",
                desc: "Get approval from insurance companies efficiently before treatment begins.",
                variant: "authorization" as const,
                link: "/services/prior-authorization"
              },
              {
                title: "Claim Management",
                desc: "Handle insurance claims from start to finish, significantly reducing denial rates.",
                variant: "claims" as const,
                link: "/services/claim-management"
              },
              {
                title: "Patient Support",
                desc: "24/7 AI assistance handles patient inquiries, appointment changes, and follow-ups.",
                variant: "support" as const,
                link: "/services/patient-support"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="group p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/20"
              >
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <Lazy3D component={ServiceMini3D} variant={service.variant} />
                </div>
                <h3 className="font-heading text-xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">{service.desc}</p>
                <Link href={service.link} className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section: The IMDC Edge */}
      <section className="py-24 bg-slate-50 border-y border-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <Lazy3D component={EdgeScene} />
              </div>
              <img 
                src={cliniciansImage} 
                alt="Clinicians reviewing charts" 
                className="rounded-2xl shadow-2xl object-cover w-full h-[500px] opacity-20 relative z-0"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
                The IMDC Edge: Built by Clinicians
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Unlike generic billing factories, our leadership has over 20 years of clinical experience. We understand the reality of patient care and build financial solutions that support your clinical workflows, not hinder them.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Reduce Operational Costs",
                  "Increase Practice Revenue",
                  "Save Time and Resources",
                  "Improve Collection Rates",
                  "Streamline Clinical Procedures",
                  "Ensure Compliance & Data Safety"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-secondary font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-white">
                  <Link href="/about">Meet Our Leadership</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0">
           <img 
            src={handsImage} 
            alt="Billing processes" 
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
            Ready to optimize your practice's financial health?
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Schedule a consultation today to see how IMDC can streamline your revenue cycle and boost your bottom line.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full bg-white text-primary hover:bg-gray-100 h-14 px-8 text-lg font-bold">
            <Link href="/contact">Request Your Demo</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
