import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { leadershipIntro, leadershipTimeline } from "@/data/portfolio";

export function Leadership() {
  return (
    <section id="leadership" className="py-20 sm:py-28 bg-secondary/40" data-testid="section-leadership">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Leadership Development</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-3">Learning leadership, one forum at a time</h2>
          <p className="text-muted-foreground leading-relaxed">{leadershipIntro}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
        >
          <Card className="rounded-2xl divide-y divide-border" data-testid="card-leadership-timeline">
            {leadershipTimeline.map((item) => (
              <div key={item.title} className="flex items-center justify-between gap-4 px-6 py-4">
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.org}</p>
                  {item.note && <p className="text-xs text-primary mt-0.5">{item.note}</p>}
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {item.source && (
                    <a
                      href={item.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.source.label}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">{item.period}</span>
                </div>
              </div>
            ))}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
