import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import servicesTechImage from "@/assets/images/services-tech.png";
import Lazy3D from "@/components/three/Lazy3D";

const ServiceMini3D = () => import("@/components/three/ServiceMini3D");

export default function ServicesIndex() {
  const services = [
    {
      title: "Medical Billing",
      desc: "End-to-end management of the complete billing process with speed and accuracy.",
      variant: "billing" as const,
      link: "/services/medical-billing"
    },
    {
      title: "Medical Coding",
      desc: "Certified coders assign the correct medical codes for every service.",
      variant: "coding" as const,
      link: "/services/coding"
    },
    {
      title: "Credentialing",
      desc: "Enroll doctors with insurance networks quickly and correctly.",
      variant: "credentialing" as const,
      link: "/services/credentialing"
    },
    {
      title: "Prior Authorization",
      desc: "Get approval from insurance companies before treatment begins.",
      variant: "authorization" as const,
      link: "/services/prior-authorization"
    },
    {
      title: "Claim Management",
      desc: "Handle insurance claims from start to finish.",
      variant: "claims" as const,
      link: "/services/claim-management"
    },
    {
      title: "Patient Support",
      desc: "24/7 AI assistance handles patient inquiries, appointment changes, and follow-ups for a seamless experience.",
      variant: "support" as const,
      link: "/services/patient-support"
    }
  ];

  return (
    <>
      <SEO title="Our Services | Revenue Cycle Management" description="Comprehensive medical billing, coding, credentialing, and claim management services for U.S. healthcare providers." />
      
      <section className="relative bg-secondary py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={servicesTechImage} alt="Healthcare Technology" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-secondary/90 mix-blend-multiply" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            End-to-End <span className="text-primary">RCM Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto"
          >
            We manage the financial complexity so you can focus on clinical excellence.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 rounded-3xl border border-border bg-card hover:border-primary/30 hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative overflow-hidden"
              >
                <div className="w-24 h-24 mb-6 -ml-4 flex items-center justify-center">
                  <Lazy3D component={ServiceMini3D} variant={service.variant} />
                </div>
                <h2 className="font-heading text-2xl font-bold text-secondary mb-4">{service.title}</h2>
                <p className="text-muted-foreground text-lg mb-8 flex-grow">{service.desc}</p>
                <Link href={service.link} className="inline-flex items-center text-primary font-bold uppercase tracking-wide hover:text-secondary transition-colors">
                  Explore Service <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
