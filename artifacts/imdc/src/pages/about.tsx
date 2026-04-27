import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import { Award, Target, Eye, Users } from "lucide-react";
import ceoImage from "@/assets/images/ceo-portrait.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function About() {
  return (
    <>
      <SEO title="About Us | Leadership & Mission" description="Learn about IMDC's clinical leadership and our mission to provide precision medical billing and RCM solutions for U.S. healthcare providers." />
      
      {/* Hero Section */}
      <section className="bg-secondary py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Built by Clinicians, <br/><span className="text-primary">For Clinicians.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto"
          >
            We understand the reality of patient care and build financial solutions that support your clinical workflows.
          </motion.p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img 
                src={ceoImage} 
                alt="Christy Browning, CEO" 
                className="rounded-2xl shadow-xl w-full max-w-md mx-auto lg:mx-0 object-cover aspect-[3/4]"
              />
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-2">Christy Browning, RN, NREMT</motion.h2>
              <motion.p variants={fadeInUp} className="text-primary font-bold tracking-wider uppercase mb-6">Chief Executive Officer</motion.p>
              
              <motion.div variants={fadeInUp} className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Christy is a healthcare executive with over 20 years of experience in the U.S. healthcare system. Her deep clinical background includes serving as an ICU/Med-Surg RN, ER nurse, Disaster Coordinator, Safety Director, Wound Care Case Manager, Hyperbaric Oxygen Therapy Tech, and Clinical Instructor.
                </p>
                <p>
                  She holds both a Bachelor's and Master's degree in Disaster Preparedness, Emergency Management, and Health Science from Arkansas State University.
                </p>
                <p>
                  As CEO of IMDC, Christy leads the strategic delivery of compliant, efficient medical billing and RCM solutions for U.S. healthcare providers. Her clinical background ensures that IMDC's operations align perfectly with the realities of modern medical practice.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-slate-50 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">Mission, Vision & Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Mission",
                desc: "To empower healthcare providers by removing the administrative burden of revenue cycle management, allowing them to focus entirely on patient care.",
                icon: Target
              },
              {
                title: "Our Vision",
                desc: "To be the most trusted, clinician-led RCM partner in the United States, known for precision, compliance, and technological innovation.",
                icon: Eye
              },
              {
                title: "Core Values",
                desc: "Integrity in every claim. Precision in every code. Partnership with every practice. Dedication to the providers we serve.",
                icon: Award
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-secondary mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Why Choose IMDC?</h2>
            <p className="text-secondary-foreground/80 text-lg">We deliver results through expertise, technology, and dedicated partnership.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Expert Team", desc: "Highly trained healthcare IT specialists deliver accurate, reliable, efficient solutions." },
              { title: "Proven Results", desc: "Technology consistently improves revenue, reduces denials, and strengthens operations." },
              { title: "Advanced Technology", desc: "Modern, secure, intuitive systems that streamline workflows." },
              { title: "Seamless Integration", desc: "Solutions integrate with major EHRs, labs, and billing platforms." },
              { title: "Dedicated Support", desc: "Responsive support team ensures quick issue resolution." },
              { title: "Trusted Partnership", desc: "Long-term relationships through transparency, reliability, and customized solutions." }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
              >
                <h3 className="font-heading text-lg font-bold mb-3">{pillar.title}</h3>
                <p className="text-secondary-foreground/70">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
