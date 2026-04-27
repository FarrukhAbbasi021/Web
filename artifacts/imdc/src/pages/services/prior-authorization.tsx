import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function PriorAuth() {
  return (
    <>
      <SEO title="Prior Authorization Services" description="Get approval from insurance companies before treatment begins with our dedicated authorization services." />
      
      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Prior <span className="text-primary">Authorization</span>
            </h1>
            <p className="text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
              Get approval from insurance companies before treatment begins. Stop delaying patient care and wasting clinical staff time on hold with payers.
            </p>
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90">
              <Link href="/contact">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-secondary mb-8 text-center">The IMDC Authorization Workflow</h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {[
                { step: "1", title: "Intake & Verification", desc: "We receive the order from your clinic and instantly verify patient benefits and whether authorization is required." },
                { step: "2", title: "Clinical Documentation Gather", desc: "Our team compiles all necessary medical records, lab results, and physician notes required by the specific payer's clinical guidelines." },
                { step: "3", title: "Submission & Tracking", desc: "We submit the request via payer portals or fax, then persistently track the status every 24-48 hours." },
                { step: "4", title: "Peer-to-Peer Support", desc: "If a peer-to-peer review is required, we schedule it and prepare your provider with the exact clinical criteria the medical director will ask for." },
                { step: "5", title: "Approval & Notification", desc: "Upon approval, auth numbers and date ranges are immediately entered into your EHR so scheduling can proceed." }
              ].map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm">
                    {item.step}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-xl border border-border shadow-sm">
                    <h3 className="font-bold text-secondary text-xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
