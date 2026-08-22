import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/portfolio/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/portfolio";

const quickFacts = [
  { label: "Experience", value: "22+ years" },
  { label: "Current Role", value: "VP, Platform Engineering" },
  { label: "Company", value: "State Street" },
  { label: "Based in", value: "Bengaluru, India" },
];

export default function Resume() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          data-testid="link-back-home"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </Link>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Resume</p>
          <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-4">{profile.name}</h1>
          <p className="text-muted-foreground text-lg max-w-xl mb-8">
            The full role-by-role history, with employers and dates, lives in the PDF below —
            download it or open it in a new tab.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Button asChild size="lg" data-testid="button-download-resume">
              <a href={profile.resumeUrl} download>
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" data-testid="button-open-resume">
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Open in New Tab
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {quickFacts.map((fact) => (
              <Card key={fact.label} className="p-4 rounded-xl text-center" data-testid={`card-fact-${fact.label}`}>
                <p className="text-xs text-muted-foreground mb-1">{fact.label}</p>
                <p className="text-sm font-semibold font-display">{fact.value}</p>
              </Card>
            ))}
          </div>

          <div className="hidden sm:block rounded-2xl overflow-hidden border border-border shadow-sm bg-card">
            <iframe
              src={`${profile.resumeUrl}#view=fitH`}
              title="Resume preview"
              className="w-full h-[80vh]"
              data-testid="iframe-resume-preview"
            />
          </div>
          <p className="sm:hidden text-sm text-muted-foreground text-center">
            PDF preview isn't available on small screens — use the buttons above to view or download.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
