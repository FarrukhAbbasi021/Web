import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import industriesImage from "@/assets/images/industries-healthcare.png";
import { Stethoscope, Activity, Building, BriefcaseMedical, HeartPulse, ScanHeart } from "lucide-react";

export default function Industries() {
  const industries = [
    { name: "Physicians", icon: Stethoscope, desc: "Solo practitioners and small group practices across all medical specialties." },
    { name: "Dental Practices", icon: Activity, desc: "General dentistry, orthodontics, oral surgery, and specialized dental clinics." },
    { name: "Hospitals", icon: Building, desc: "Critical access hospitals, regional medical centers, and surgical hospitals." },
    { name: "Specialty Clinics", icon: BriefcaseMedical, desc: "Cardiology, orthopedics, dermatology, and other specialized outpatient centers." },
    { name: "Multi-Specialty Groups", icon: ScanHeart, desc: "Large practices with diverse provider types and complex billing requirements." },
    { name: "Telehealth", icon: HeartPulse, desc: "Virtual care platforms and remote monitoring service providers." }
  ];

  return (
    <>
      <SEO title="Who We Serve | Healthcare Industries" description="IMDC serves physicians, dental practices, hospitals, specialty clinics, multi-specialty groups, and telehealth organizations across the U.S." />
      
      <section className="relative bg-secondary py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={industriesImage} alt="Healthcare Facility" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-secondary/90 mix-blend-multiply" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Tailored RCM For <br/><span className="text-primary">Every Specialty</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto"
          >
            From solo practitioners to regional hospitals, our solutions are customized to the unique billing complexities of your organization.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group border border-border rounded-2xl p-8 bg-card hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <ind.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-secondary mb-3">{ind.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{ind.desc}</p>
                <div className="h-1 w-12 bg-primary rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-secondary mb-6">Don't see your specialty listed?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our expert coders and billers have experience across dozens of medical specialties. Contact us to discuss your specific practice needs.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full">
            <Link href="/contact">Speak with a Specialist</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
