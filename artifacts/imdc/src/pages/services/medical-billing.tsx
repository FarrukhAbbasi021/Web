import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import billingImage from "@/assets/images/service-billing.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MedicalBilling() {
  return (
    <>
      <SEO title="Medical Billing Services" description="End-to-end management of the complete billing process with speed and accuracy." />
      
      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Precision <span className="text-primary">Medical Billing</span>
            </h1>
            <p className="text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
              End-to-end management of the complete billing process with speed and accuracy. Maximize your collections and reduce days in A/R.
            </p>
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90">
              <Link href="/contact">Get a Free Revenue Analysis</Link>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <img src={billingImage} alt="Medical Billing" className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-video" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-3xl font-bold text-secondary mb-6">What's Included</h2>
              <ul className="space-y-4">
                {[
                  "Charge Entry & Payment Posting",
                  "Denial Management & Appeal Resolution",
                  "Accounts Receivable (A/R) Follow-Up",
                  "Patient Statement Generation",
                  "Financial Reporting & Analytics Dashboard",
                  "Dedicated Account Manager"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-border">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="font-medium text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="font-heading text-3xl font-bold text-secondary mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-bold text-lg">Do I have to change my EHR system?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    No. IMDC integrates directly with all major EHR systems including Epic, Cerner, AthenaHealth, eClinicalWorks, and many more. We adapt to your workflow, not the other way around.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-bold text-lg">How quickly will we see an impact on our revenue?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    Most clients see an improvement in clean claim rates within the first 30 days, and a significant drop in A/R days within 60-90 days of implementation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-bold text-lg">Are your billers certified?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    Yes. All IMDC billing specialists undergo rigorous training and many hold specific AAPC or AHIMA certifications depending on your specialty.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-6">Stop leaving money on the table.</h2>
          <Button asChild size="lg" variant="secondary" className="rounded-full bg-white text-primary font-bold px-8">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
