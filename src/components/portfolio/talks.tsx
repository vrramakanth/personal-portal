import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { talks, talksIntro, talkArticle, pressImages, eventPhotos } from "@/data/portfolio";
import { LiteYouTube } from "./lite-youtube";

export function Talks() {
  return (
    <section id="talks" className="py-20 sm:py-28" data-testid="section-talks">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Talks & Media</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">On stage & in the press</h2>
        </motion.div>

        <p className="text-sm text-muted-foreground max-w-2xl mb-6">{talksIntro}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {talks.map((talk, i) => (
            <motion.div
              key={talk.videoId ?? talk.url}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="rounded-2xl overflow-hidden border border-border shadow-sm" data-testid={`card-talk-${i}`}>
                <div className="relative aspect-video bg-black/5">
                  <LiteYouTube videoId={talk.videoId!} title={talk.label} />
                </div>
                <p className="text-sm font-medium p-4">{talk.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <a
          href={talkArticle.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline mb-16"
          data-testid="link-talk-article"
        >
          {talkArticle.label}
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        <div className="mb-10">
          <h3 className="font-display font-bold text-xl mb-6">Moments</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {eventPhotos.map((photo) => (
              <div key={photo.src} className="relative group rounded-xl overflow-hidden aspect-[4/3]" data-testid={`img-event-${photo.src}`}>
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2.5">
                  <p className="text-white text-[11px] font-medium leading-tight">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-xl mb-6">Press Coverage</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {pressImages.map((src) => (
              <img
                key={src}
                src={src}
                alt="Press coverage"
                loading="lazy"
                decoding="async"
                className="w-full rounded-xl border border-border shadow-sm object-cover aspect-[3/4]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
