import { motion } from "framer-motion";
import { Award, ExternalLink, GraduationCap, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { skillGroups, education, certifications, credlyUrl, recognition } from "@/data/portfolio";

export function Recognition() {
  return (
    <section id="recognition" className="py-20 sm:py-28 bg-secondary/40" data-testid="section-recognition">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Skills & Recognition</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">Expertise, credentials & milestones</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="p-6 h-full rounded-2xl" data-testid={`card-skillgroup-${i}`}>
                <h3 className="font-display font-bold mb-4">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <Badge key={s} variant="secondary" className="font-normal">
                      {s}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <Card className="p-6 rounded-2xl" data-testid="card-education">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="font-display font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.degree}>
                  <p className="font-semibold text-sm">{e.degree}</p>
                  <p className="text-sm text-muted-foreground">{e.school}</p>
                  <p className="text-xs text-muted-foreground">{e.detail}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 rounded-2xl" data-testid="card-certifications">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <h3 className="font-display font-bold">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((c) => (
                <div key={c.name} className="flex items-center justify-between gap-3">
                  <p className="text-sm">{c.name}</p>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{c.date}</span>
                </div>
              ))}
            </div>
            <Separator className="my-4" />
            <a
              href={credlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              data-testid="link-credly"
            >
              View all badges on Credly
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Card>

          <Card className="p-6 rounded-2xl" data-testid="card-achievements">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="font-display font-bold">Patents & Achievements</h3>
            </div>
            <div className="space-y-4">
              {recognition.map((r) => (
                <div key={r.title}>
                  {r.url ? (
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-sm text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {r.title}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <p className="font-semibold text-sm">{r.title}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-0.5">{r.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
