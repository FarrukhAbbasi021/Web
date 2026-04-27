import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import resourcesImage from "@/assets/images/resources-journals.png";
import { Link } from "wouter";

export default function Resources() {
  const articles = [
    {
      title: "What's the reason so many older adults aren't active?",
      category: "Patient Care",
      date: "October 12, 2023",
      author: "Christy Browning",
      excerpt: "Physical inactivity in older adults is a growing concern that impacts both long-term health outcomes and the healthcare system as a whole. We explore the systemic and clinical barriers preventing mobility in senior populations.",
      slug: "#"
    },
    {
      title: "The Most Important Ventilator Equipment Available",
      category: "Clinical Insights",
      date: "September 28, 2023",
      author: "Clinical Team",
      excerpt: "A comprehensive breakdown of modern ventilator technology, required accessories for critical care, and the specific billing codes associated with respiratory therapy interventions in acute settings.",
      slug: "#"
    },
    {
      title: "Blood Cancers: Early Signs, Symptoms, Institute",
      category: "Medical Research",
      date: "September 15, 2023",
      author: "Christy Browning",
      excerpt: "Early detection of hematologic malignancies dramatically improves patient prognosis. We review the subtle initial symptoms clinicians should monitor and the appropriate diagnostic coding protocols.",
      slug: "#"
    }
  ];

  return (
    <>
      <SEO title="Resources & Blog | IMDC Insights" description="Read the latest insights on medical billing, revenue cycle management, and clinical operations from the experts at IMDC." />
      
      <section className="relative bg-secondary py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={resourcesImage} alt="Medical Journals" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-secondary/90 mix-blend-multiply" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Insights & <span className="text-primary">Resources</span>
          </h1>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            Expert perspectives on revenue cycle management, clinical operations, and healthcare administration.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col border border-border rounded-2xl overflow-hidden bg-card hover:shadow-xl transition-shadow"
              >
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="font-heading text-xl font-bold text-secondary mb-4 leading-tight">
                    <Link href={article.slug} className="hover:text-primary transition-colors">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-6 flex-1 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-border mt-auto">
                    <div className="flex items-center text-sm text-muted-foreground gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> {article.date}
                      </div>
                    </div>
                    <Link href={article.slug} className="text-primary hover:text-primary/80 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
