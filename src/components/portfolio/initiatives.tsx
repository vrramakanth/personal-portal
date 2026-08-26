import { motion } from "framer-motion";
import { Users, Landmark, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { initiatives, initiativesIntro } from "@/data/portfolio";

const icons = [Users, Landmark];

export function Initiatives() {
  return (
    <section id="initiatives" className="py-20 sm:py-28" data-testid="section-initiatives">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Leadership & Community Impact</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-4">
            Where the weekends go
          </h2>
          <p className="text-muted-foreground leading-relaxed">{initiativesIntro}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 items-start">
          {initiatives.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="p-6 h-full glass-card rounded-2xl flex flex-col" data-testid={`card-initiative-${i}`}>
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>

                  {item.details && (
                    <ul className="mt-5 space-y-3 border-t border-border pt-5">
                      {item.details.map((detail) => (
                        <li key={detail.label}>
                          <p className="text-sm font-medium mb-1">{detail.label}</p>
                          {detail.source ? (
                            <a
                              href={detail.source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                            >
                              {detail.source.label}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            detail.caption && <p className="text-xs text-muted-foreground">{detail.caption}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
