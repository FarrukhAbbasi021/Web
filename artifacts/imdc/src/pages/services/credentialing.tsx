import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FileCheck, Building2, UserPlus, Clock } from "lucide-react";

export default function Credentialing() {
  return (
    <>
      <SEO title="Physician Credentialing Services" description="Enroll doctors with insurance networks quickly and correctly with IMDC's credentialing services." />
      
      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Building2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Provider <span className="text-primary">Credentialing</span>
            </h1>
            <p className="text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
              Enroll doctors with insurance networks quickly and correctly. Eliminate the paperwork bottleneck that delays provider start dates and revenue generation.
            </p>
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90">
              <Link href="/contact">Start Credentialing Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-10 rounded-2xl border border-border">
              <UserPlus className="w-10 h-10 text-primary mb-6" />
              <h2 className="font-heading text-2xl font-bold text-secondary mb-4">Initial Provider Enrollment</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Bringing on a new provider? We handle the entire commercial and government (Medicare/Medicaid) enrollment process from CAQH setup to final network approval.
              </p>
              <ul className="space-y-3 text-secondary font-medium">
                <li>• CAQH Profile Creation & Maintenance</li>
                <li>• Medicare PECOS Enrollment</li>
                <li>• Commercial Payer Contracting</li>
                <li>• Hospital Privileging Support</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-10 rounded-2xl border border-border">
              <Clock className="w-10 h-10 text-primary mb-6" />
              <h2 className="font-heading text-2xl font-bold text-secondary mb-4">Re-credentialing & Maintenance</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Never miss a deadline. We proactively manage expiries to ensure your providers never experience a lapse in network participation.
              </p>
              <ul className="space-y-3 text-secondary font-medium">
                <li>• Expirables Tracking (License, DEA, Malpractice)</li>
                <li>• Routine CAQH Re-attestations</li>
                <li>• Payer Re-credentialing Applications</li>
                <li>• Directory Updates & Address Changes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
