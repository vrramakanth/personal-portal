import {
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: LucideIcon;
}

export const profile = {
  name: "Ramakanth V R",
  title: "VP, Platform Software Engineering",
  company: "State Street",
  location: "Bengaluru, India",
  tagline: "Engineering Leader · Mentor · Community Builder",
  email: "vrramakanth@gmail.com",
  phone: "+91 9880766321",
  whatsapp: "https://wa.me/919880766321",
  linkedin: "https://www.linkedin.com/in/vrramakanth/",
  resumeUrl: "/Ramakanth_VR_Resume.pdf",
};

export const socials: SocialLink[] = [
  { id: "linkedin", label: "LinkedIn", url: profile.linkedin, icon: Linkedin },
  { id: "email", label: "Email", url: `mailto:${profile.email}`, icon: Mail },
  { id: "whatsapp", label: "WhatsApp", url: profile.whatsapp, icon: MessageCircle },
  { id: "facebook", label: "Facebook", url: "https://www.facebook.com/vrramakanth", icon: Facebook },
  { id: "instagram", label: "Instagram", url: "https://www.instagram.com/vrramakanth/", icon: Instagram },
  { id: "twitter", label: "Twitter / X", url: "https://x.com/ramakanth_vr?s=11", icon: Twitter },
];

export const aboutParagraphs = [
  "Ramakanth V.R. is an engineering and technology leader with over two decades of experience in software systems, working at the intersection of hardware, software, and emerging technologies. He has led global cross-functional teams, driven digital transformation, and contributed to innovation through patented work — combining technical depth with a practical, people-first approach to leadership, on the job and in the community he calls home.",
  "Outside work, he's the kind of person who believes in giving back to the places that shaped him — his alma mater, and the community he lives in (more on that below). He values independent thinking, enjoys meaningful conversations, treats change as a chance to learn, and — with friends — turns into the goofy, fun-loving prankster of the group.",
  "When he's not building platforms, you will find him working on next initiative or celebration at his community, scouting a good long drive, traveling with family, or buried in his Kindle — Partition-era history for the next political debate, a coaching book for the next mentoring session, or the odd DevOps classic for old times' sake. Above all, he's a family person who takes great joy in supporting his daughter's interests and being present for the moments that matter most.",
];

export const aboutQuote = "Give me a point of support and I will move the earth.";
export const aboutQuoteAttribution = "— Archimedes, his favorite quote";

export interface JourneyChapter {
  era: string;
  title: string;
  summary: string;
}

export const journey: JourneyChapter[] = [
  {
    era: "2023 — Present",
    title: "Building platforms at State Street",
    summary:
      "Now VP of Platform Software Engineering, running the global org behind the Enterprise Foundation Platform — the infrastructure 100+ teams build on. A shift from shipping products to building what other builders use.",
  },
  {
    era: "2004 — 2023",
    title: "Two decades at GE Healthcare",
    summary:
      "Started as a software engineer building medical imaging apps for PET/CT and MR scanners, and worked up to Director over the next 19 years — picking up a patent, a 50-person global team, and a habit of being the person people called when something needed to ship.",
  },
  {
    era: "Throughout",
    title: "What runs alongside the career",
    summary: "Two decades in, plenty else has mattered just as much — see what fills the weekends below.",
  },
];

export const careerMilestoneQuote =
  "Today I complete 20 years of professional career! Reflecting on the past two decades, I am filled with gratitude for the support and opportunities I've received.";

export interface InitiativeDetail {
  label: string;
  source?: { label: string; url: string };
  caption?: string;
}

export interface Initiative {
  title: string;
  description: string;
  details?: InitiativeDetail[];
}

export const initiativesIntro =
  "Most weekends go to community leadership — running community initiatives, building industry networks, and staying connected with his alma mater and its students along the way.";

export const initiatives: Initiative[] = [
  {
    title: "Community Initiatives",
    description:
      "Over the years, turning everyday challenges into structured, sustainable initiatives spanning governance, smart utilities, solar and EV infrastructure, and resident life. It's community leadership, operational transformation, sustainability, and civic engagement, all at once — work that saw the team he's part of earn wider recognitions. A closer look at a few of those projects:",
    details: [
      {
        label: "Rooftop Solar Adoption",
        source: { label: "Watch: Smart Solar Adoption in Gated Communities", url: "https://youtu.be/bBf_KQBu5p8" },
      },
      {
        label: "Smart Water Metering",
        source: { label: "Watch: How to Install IoT Water Meters in a Society", url: "https://youtu.be/aDK61PGKxIY" },
      },
      {
        label: "Community Waste Management",
        source: { label: "Watch: Setting Up an Effective Waste Management System", url: "https://youtu.be/MqDwm5mUWGU" },
      },
      {
        label: "Championing Community Celebrations",
        caption: "The right culture gets built when people come together, celebrate, and truly know each other.",
      },
      {
        label: "Kannada Kaliyona",
        caption: "With Anvaya Foundation — 100 residents, two batches, now confident to try speaking Kannada.",
      },
    ],
  },
  {
    title: "BVRIT Governing Body & Mentoring",
    description:
      "20+ year association with alma mater BVRIT Narsapur; now a board member, and returns to campus to mentor students and speak on thriving in a changing industry.",
  },
];

export const skillGroups = [
  {
    label: "Leadership",
    skills: [
      "Strategic Planning & Roadmapping",
      "People Leadership & Mentoring",
      "Vendor & Partner Management",
      "Program & Operations Leadership",
      "Stakeholder Alignment & Change Management",
      "Community & Civic Leadership",
    ],
  },
  {
    label: "Technology",
    skills: [
      "Digital Transformation",
      "Java · Microservices · REST APIs",
      "AWS · Azure · Edge",
      "Agile (SAFe, Scrum)",
      "CI/CD · DevSecOps · GitOps",
      "Kubernetes · Docker · Jenkins",
    ],
  },
  {
    label: "Regulated Domains",
    skills: ["Medical Imaging", "FDA · IEC · SFDA · 510(k) Submissions", "Quality & Audit Readiness"],
  },
];

export const education = [
  {
    degree: "MBA, PGCBM-20",
    school: "XLRI Jamshedpur",
    detail: "Gold Medalist — topped the batch",
  },
  {
    degree: "M.S. in Medical Software",
    school: "Manipal University",
    detail: "Focus in Medical Imaging",
  },
  {
    degree: "B.Tech, Biomedical Engineering",
    school: "JNTU",
    detail: "1998 — 2002",
  },
];

export const certifications = [
  { name: "AWS Certified AI Practitioner", date: "Dec 2025" },
  { name: "Data Science & AI Programme", date: "Sep 2025" },
  { name: "AWS Certified Cloud Practitioner", date: "Mar 2024" },
  { name: "Microsoft Certified: Azure Fundamentals", date: "May 2023" },
  { name: "Introduction to Platform Engineering", date: "Feb 2026" },
  { name: "Certified Scrum Master", date: "Apr 2013" },
];

export const credlyUrl = "https://www.credly.com/users/ramakanth-vr/badges";

export const recognition = [
  {
    title: "US Patent · US20090257628",
    description:
      "Standardized Normal Database Having Anatomical Phase Information — a PET Cardiology innovation for detecting disease states.",
    url: "https://patents.google.com/patent/US20090257628",
  },
  {
    title: "Lead Presenter, GE Global Technology Symposium",
    description: "GE Healthcare's first Global Technology Symposium, Milwaukee, WI.",
  },
  {
    title: "XLRI Gold Medal",
    description: "Topped XLRI's MBA (PGCBM-20) batch.",
  },
  {
    title: "Featured Voice, Mygate Dispatch Spotlight",
    description: "Invited across three episodes to share his RWA's approach with other communities.",
    url: "https://youtu.be/bBf_KQBu5p8",
  },
];

export interface LeadershipMilestone {
  title: string;
  org: string;
  period: string;
  note?: string;
  source?: { label: string; url: string };
}

export const leadershipTimeline: LeadershipMilestone[] = [
  { title: "Foundations of GE Leadership", org: "GE Crotonville", period: "2007" },
  { title: "Building Essential Leadership Skills", org: "GE Global Learning", period: "2011" },
  {
    title: "Accelerated Learning Program, Functional Management",
    org: "GE Healthcare, Global Technology Organization – India",
    period: "2014",
  },
  { title: "India Frontline Leaders Academy", org: "GE India", period: "2015" },
  { title: "Managing at GE", org: "GE Crotonville", period: "2015" },
  {
    title: "Mentor, Edison Engineering Development Program",
    org: "GE Global Leadership Programs",
    period: "2019 — 2021",
  },
  {
    title: "Leadership Training Facilitator",
    org: "State Street, GTS India",
    period: "2024",
    source: {
      label: "View the LinkedIn post",
      url: "https://www.linkedin.com/posts/vrramakanth_leadershipdevelopment-futureleaders-continuouslearning-activity-7276979173724725248-CL1E/",
    },
  },
  { title: "NASSCOM Technology & Leadership Forum (NTLF)", org: "NASSCOM", period: "2024" },
];

export interface Talk {
  label: string;
  url: string;
  videoId?: string;
}

export const talks: Talk[] = [
  {
    label: "Smart Solar Adoption in Gated Communities",
    url: "https://youtu.be/bBf_KQBu5p8",
    videoId: "bBf_KQBu5p8",
  },
  {
    label: "How to Install IoT Water Meters in a Society",
    url: "https://www.youtube.com/watch?v=aDK61PGKxIY&t=10s",
    videoId: "aDK61PGKxIY",
  },
  {
    label: "Setting Up an Effective Community Waste Management System",
    url: "https://youtu.be/MqDwm5mUWGU?si=KqLYFUtm1ZxwtcOQ",
    videoId: "MqDwm5mUWGU",
  },
];

export const talksIntro = "Mygate's Dispatch Spotlight featured Ramakanth across three episodes on the RWA work covered above.";

export const talkArticle = {
  label: "Read: Talk on Thriving in the Age of AI",
  url: "https://alumni.srivishnu.edu.in/newsroom/news/Talk-on-Thriving-in-the-Age-of-AI-by-BVRIT-Alumnus-Mr-Ramakanth-V-R",
};

export const pressImages = ["/media-1.jpg", "/media-2.jpg", "/media-3.jpg", "/media-4.jpg", "/media-5.jpg"];

export const eventPhotos = [
  { src: "/bvrit_talk.jpg", caption: "BVRIT Alumni Talk — Thriving in the Age of AI" },
  { src: "/talk_physics_1.jpg", caption: "Guest Lecture: Physics in Medicine, MVJ Engineering College" },
  { src: "/poster_1.jpg", caption: "HCT-I Tech Symposium — Medical Imaging & Diagnostics" },
  { src: "/poster_2.jpg", caption: "MR/AW Design Transfers — Process Simplification" },
  { src: "/gold_medal.jpg", caption: "XLRI Gold Medalist, 2013" },
  { src: "/convo.jpg", caption: "XLRI Convocation Ceremony" },
];
