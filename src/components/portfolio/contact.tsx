import { motion } from "framer-motion";
import { Mail, MessageCircle, FileDown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { profile, socials } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-secondary/40" data-testid="section-contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-4">Let's talk</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Open to conversations on engineering leadership, platform strategy, and mentoring.
            Reach out directly, or connect on socials below.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <Button asChild size="lg" data-testid="button-contact-email">
              <a href={`mailto:${profile.email}`}>
                <Mail className="w-4 h-4" />
                {profile.email}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" data-testid="button-contact-whatsapp">
              <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" data-testid="button-contact-resume">
              <Link href="/resume">
                <FileDown className="w-4 h-4" />
                Resume
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                data-testid={`link-contact-social-${s.id}`}
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <p className="text-center text-sm text-muted-foreground mt-16">© {new Date().getFullYear()} Ramakanth V R</p>
    </section>
  );
}
