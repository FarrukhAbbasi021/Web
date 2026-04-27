import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Bot, MessageSquare, CalendarCheck, PhoneCall } from "lucide-react";

export default function PatientSupport() {
  return (
    <>
      <SEO title="Virtual Patient Support | 24/7 AI" description="24/7 AI assistance handles patient inquiries, appointment changes, and follow-ups for a seamless experience." />
      
      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Bot className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Virtual <span className="text-primary">Patient Support</span>
            </h1>
            <p className="text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
              24/7 AI-driven assistance that handles routine patient inquiries, appointment changes, and basic follow-ups. Relieve your front desk and improve patient satisfaction.
            </p>
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90">
              <Link href="/contact">See AI Demo</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl border border-border text-center">
              <CalendarCheck className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl text-secondary mb-3">Smart Scheduling</h3>
              <p className="text-muted-foreground">Patients can schedule, reschedule, or cancel appointments 24/7 without waiting on hold, automatically syncing to your EHR.</p>
            </div>
            
            <div className="p-8 bg-slate-50 rounded-2xl border border-border text-center">
              <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl text-secondary mb-3">FAQ Resolution</h3>
              <p className="text-muted-foreground">Instantly answer common questions about hours, location, accepted insurances, and prep instructions for procedures.</p>
            </div>

            <div className="p-8 bg-slate-50 rounded-2xl border border-border text-center">
              <PhoneCall className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl text-secondary mb-3">Seamless Handoff</h3>
              <p className="text-muted-foreground">When an inquiry is complex or requires human empathy, the system seamlessly routes the conversation to your clinical staff.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
