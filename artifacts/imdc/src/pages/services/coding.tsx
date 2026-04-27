import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import codingImage from "@/assets/images/service-coding.png";

export default function Coding() {
  return (
    <>
      <SEO title="Medical Coding Services" description="Certified coders assign the correct medical codes for every service to ensure compliance and maximum reimbursement." />
      
      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Certified <span className="text-primary">Medical Coding</span>
            </h1>
            <p className="text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
              Certified coders assign the correct medical codes for every service. Minimize audit risk and ensure you get paid exactly what you've earned.
            </p>
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90">
              <Link href="/contact">Request Coding Audit</Link>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <img src={codingImage} alt="Medical Coding" className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-video" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl font-bold text-secondary mb-4">Precision in Every Chart</h2>
            <p className="text-muted-foreground text-lg">Incorrect coding leads to claim denials and compliance risks. Our AAPC and AHIMA certified coders ensure 98%+ accuracy across all specialties.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "ICD-10-CM Coding", desc: "Expert diagnosis coding capturing accurate patient severity and risk." },
              { title: "CPT & HCPCS", desc: "Precise procedural coding to ensure full reimbursement for services rendered." },
              { title: "Chart Auditing", desc: "Proactive review of provider documentation to catch errors before billing." },
              { title: "Provider Education", desc: "Feedback loops and training to help your clinical staff document better." },
              { title: "Specialty Specific", desc: "Coders matched to your specific medical specialty for deep domain knowledge." },
              { title: "Compliance Monitored", desc: "Strict adherence to OIG, CMS, and commercial payer coding guidelines." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-border rounded-2xl bg-card hover:border-primary/30 transition-colors">
                <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading text-xl font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-border text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-secondary mb-6">Protect your revenue and your practice.</h2>
          <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold px-8">
            <Link href="/contact">Talk to a Coding Specialist</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
