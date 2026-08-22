import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowDown, FileDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, socials } from "@/data/portfolio";
import profileImage from "@/assets/images/profile.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-16 overflow-hidden" data-testid="section-hero">
      <div className="absolute top-[-15%] right-[-10%] w-[55%] h-[55%] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[45%] h-[45%] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4" data-testid="text-eyebrow">
            {profile.title} · {profile.company}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.05] mb-6" data-testid="text-name">
            {profile.name}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8" data-testid="text-tagline">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Button asChild size="lg" data-testid="button-view-resume">
              <Link href="/resume">
                <FileDown className="w-4 h-4" />
                View Resume
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" data-testid="button-get-in-touch">
              <a href="#contact">
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                data-testid={`link-social-${s.id}`}
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-400 rounded-[2rem] blur-2xl opacity-25 scale-95" />
            <img
              src={profileImage}
              alt={profile.name}
              className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-[2rem] object-cover border-4 border-white shadow-2xl"
              data-testid="img-profile"
            />
            <div className="absolute -bottom-4 -left-4 glass-panel rounded-2xl px-4 py-3 shadow-lg">
              <p className="text-xs text-muted-foreground font-medium">Based in</p>
              <p className="text-sm font-semibold">{profile.location}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll to about section"
        data-testid="link-scroll-down"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
}
