import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Quote } from "lucide-react";
import { journey, careerMilestoneQuote } from "@/data/portfolio";

export function Journey() {
  return (
    <section id="journey" className="py-20 sm:py-28 bg-secondary/40" data-testid="section-journey">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Journey</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">Not just a career timeline</h2>
        </motion.div>

        <div className="space-y-8">
          {journey.map((chapter, i) => (
            <motion.div
              key={chapter.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-8"
              data-testid={`item-journey-${i}`}
            >
              <p className="text-sm font-semibold text-primary sm:pt-1">{chapter.era}</p>
              <div>
                <h3 className="text-xl font-display font-bold mb-2">{chapter.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{chapter.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="mt-12 border-l-2 border-primary pl-6"
          data-testid="quote-career-milestone"
        >
          <Quote className="w-5 h-5 text-primary mb-2" />
          <p className="text-lg font-display italic leading-relaxed">{careerMilestoneQuote}</p>
          <p className="text-sm text-muted-foreground mt-2">— from a LinkedIn post his network showed up for</p>
        </motion.blockquote>

        <div className="mt-12">
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            data-testid="link-full-resume"
          >
            Want the role-by-role resume instead?
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
