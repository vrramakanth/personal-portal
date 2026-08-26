import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { aboutParagraphs, aboutQuote, aboutQuoteAttribution } from "@/data/portfolio";

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

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="mt-8 border-l-2 border-primary pl-6"
            data-testid="quote-about"
          >
            <Quote className="w-5 h-5 text-primary mb-2" />
            <p className="text-lg font-display italic leading-relaxed">"{aboutQuote}"</p>
            <p className="text-sm text-muted-foreground mt-2">{aboutQuoteAttribution}</p>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}
