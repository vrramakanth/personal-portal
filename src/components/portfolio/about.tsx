import { motion } from "framer-motion";
import { aboutParagraphs } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28" data-testid="section-about">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">About</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-8">Beyond the job title</h2>
          <div className="space-y-5">
            {aboutParagraphs.map((para, i) => (
              <p
                key={i}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                data-testid={`text-about-para-${i}`}
              >
                {para}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
