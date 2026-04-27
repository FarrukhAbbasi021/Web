import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ClaimManagement() {
  return (
    <>
      <SEO title="Claim Management Services" description="Handle insurance claims from start to finish, significantly reducing denial rates." />
      
      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Claim <span className="text-primary">Management</span>
            </h1>
            <p className="text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
              Handle insurance claims from start to finish. We scrub, submit, track, and relentlessly pursue unpaid claims so you get paid for what you do.
            </p>
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90">
              <Link href="/contact">Optimize Your Claims</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-secondary mb-6">Denial Management is Our Specialty</h2>
          <p className="text-lg text-muted-foreground mb-12">
            A denied claim isn't a lost cause—it's just a claim that requires expertise. Our dedicated denial management team analyzes patterns, writes custom appeals, and fights for every dollar.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-8 border border-border rounded-xl shadow-sm">
              <h3 className="font-bold text-xl text-secondary mb-3">Claim Scrubbing</h3>
              <p className="text-muted-foreground">Every claim runs through our proprietary rules engine to catch demographic, coding, and authorization errors before it ever hits the clearinghouse.</p>
            </div>
            <div className="p-8 border border-border rounded-xl shadow-sm">
              <h3 className="font-bold text-xl text-secondary mb-3">Aggressive A/R Follow-up</h3>
              <p className="text-muted-foreground">We don't wait for 90 days. Claims are worked actively starting at day 30, with systematic follow-up protocols for every major payer.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
