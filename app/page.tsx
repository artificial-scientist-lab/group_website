"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type TeamMember = {
  name: string;
  role: string;
  focus: string;
  image: string;
  links: { label: string; href: string }[];
};

type Paper = {
  date: string;
  title: string;
  venue: string;
  href: string;
};

type Project = {
  name: string;
  stars: number;
  description: string;
  href: string;
};

type CookieChoice = "essential" | "all";

type CookieConsentRecord = {
  choice: CookieChoice;
  updatedAt: string;
  version: 1;
};

const teamMembers: TeamMember[] = [
  {
    name: "Mario Krenn",
    role: "Professor",
    focus: "AI-augmented scientific discovery, quantum experiment design, and machine creativity in science.",
    image: "/team/mario-krenn.png",
    links: [
      { label: "Website", href: "https://mariokrenn.wordpress.com/" },
      { label: "GitHub", href: "https://github.com/MarioKrenn6240" },
    ],
  },
  {
    name: "Sören Arlt",
    role: "PhD student",
    focus: "Computer-inspired physics and interpretable approaches to AI-driven discovery.",
    image: "/team/soeren-arlt.jpeg",
    links: [
      { label: "GitHub", href: "https://github.com/soerenarlt" },
      { label: "X", href: "https://twitter.com/soerenarlt" },
    ],
  },
  {
    name: "Tareq Jaouni",
    role: "PhD student",
    focus: "Joint student with University of Ottawa, exploring novel AI-generated ideas in physics.",
    image: "/team/tareq-jaouni.jpg",
    links: [{ label: "GitHub", href: "https://github.com/TareqJ1000" }],
  },
  {
    name: "Jonathan Klimesch",
    role: "PhD student",
    focus: "Interpretable AI for scientific problem solving and structured knowledge systems.",
    image: "/team/jonathan-klimesch.jpg",
    links: [
      { label: "Website", href: "https://www.phylomatx.com/" },
      { label: "GitHub", href: "https://github.com/PhylomatX" },
    ],
  },
  {
    name: "Marcello Armezzani",
    role: "PhD student",
    focus: "AI methods for physics, with interest in experimental applications and scientific concepts.",
    image: "/team/marcello-armezzani.jpg",
    links: [],
  },
  {
    name: "Pontus Lindgren",
    role: "PhD student",
    focus: "Research on machine learning methods for scientific discovery workflows.",
    image: "/team/pontus-lindgren.svg",
    links: [],
  },
  {
    name: "Soham Basu",
    role: "PhD student",
    focus: "AI-assisted exploration and optimization in physics-inspired computational systems.",
    image: "/team/soham-basu.svg",
    links: [],
  },
  {
    name: "Carlo Wenig",
    role: "PhD student",
    focus: "Algorithmic tools for interpretable, high-impact scientific discovery.",
    image: "/team/carlo-wenig.svg",
    links: [],
  },
  {
    name: "Priya Kanagasabapathi",
    role: "Master student",
    focus: "Interpretable ML and deep learning for scientific applications.",
    image: "/team/priya-kanagasabapathi.jpeg",
    links: [{ label: "GitHub", href: "https://github.com/priya-ks1703" }],
  },
  {
    name: "Lalit Chaudhary",
    role: "Master student",
    focus: "Machine learning for scientific reasoning and discovery support systems.",
    image: "/team/lalit-chaudhary.svg",
    links: [],
  },
  {
    name: "Laurin Sefa",
    role: "Bachelor student",
    focus: "Undergraduate research support in AI-driven physics workflows.",
    image: "/team/laurin-sefa.svg",
    links: [],
  },
  {
    name: "Raphael Jontofsohn",
    role: "Bachelor student",
    focus: "Undergraduate contributor to computational tools for AI in science.",
    image: "/team/raphael-jontofsohn.svg",
    links: [],
  },
];

const recentPapers: Paper[] = [
  {
    date: "2026",
    title: "Meta-designing quantum experiments with language models",
    venue: "Nature Machine Intelligence",
    href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=jzG7GC8AAAAJ&citation_for_view=jzG7GC8AAAAJ:YlPif8NxrbYC",
  },
  {
    date: "2025-11",
    title: "Neural surrogates for designing gravitational wave detectors",
    venue: "arXiv",
    href: "https://arxiv.org/abs/2511.19364",
  },
  {
    date: "2025-11",
    title: "Analytical Fock Representation of Two-Mode Squeezing for Quantum Interference",
    venue: "arXiv",
    href: "https://arxiv.org/abs/2511.16529",
  },
  {
    date: "2025-11",
    title: "Towards autonomous quantum physics research using LLM agents with access to intelligent tools",
    venue: "arXiv",
    href: "https://arxiv.org/abs/2511.11752",
  },
  {
    date: "2025-11",
    title: "Automated Discovery of Non-local Photonic Gates",
    venue: "arXiv",
    href: "https://arxiv.org/abs/2511.04648",
  },
  {
    date: "2025-10",
    title: "Automated discovery of high-dimensional multipartite entanglement with photons that never interacted",
    venue: "arXiv",
    href: "https://arxiv.org/abs/2510.10707",
  },
  {
    date: "2025-08",
    title: "Violation of Bell inequality with unentangled photons",
    venue: "Science Advances",
    href: "https://www.science.org/doi/10.1126/sciadv.adr1794",
  },
  {
    date: "2025-05",
    title: "Quantum computing and artificial intelligence: status and perspectives",
    venue: "arXiv",
    href: "https://arxiv.org/abs/2505.23860",
  },
];

const githubProjects: Project[] = [
  {
    name: "PyTheus",
    stars: 194,
    description: "Inverse-design framework for quantum optical experiments.",
    href: "https://github.com/artificial-scientist-lab/PyTheus",
  },
  {
    name: "FutureOfAIviaAI",
    stars: 83,
    description: "Predicting the future of AI research using network prediction.",
    href: "https://github.com/artificial-scientist-lab/FutureOfAIviaAI",
  },
  {
    name: "XLuminA",
    stars: 57,
    description: "Auto-differentiating discovery framework for super-resolution microscopy.",
    href: "https://github.com/artificial-scientist-lab/XLuminA",
  },
  {
    name: "Impact4Cast",
    stars: 48,
    description: "Forecasting high-impact research topics from evolving knowledge graphs.",
    href: "https://github.com/artificial-scientist-lab/Impact4Cast",
  },
  {
    name: "SciMuse",
    stars: 33,
    description: "LLM + knowledge graph pipeline for scientific idea generation.",
    href: "https://github.com/artificial-scientist-lab/SciMuse",
  },
  {
    name: "GWDetectorZoo",
    stars: 25,
    description: "AI-driven exploration of gravitational wave detector designs.",
    href: "https://github.com/artificial-scientist-lab/GWDetectorZoo",
  },
  {
    name: "Differometor",
    stars: 14,
    description: "Differentiable interferometer simulator for detector design.",
    href: "https://github.com/artificial-scientist-lab/Differometor",
  },
  {
    name: "ai-mandel",
    stars: 11,
    description: "Prototype AI physicist with LLM agents and domain tools.",
    href: "https://github.com/artificial-scientist-lab/ai-mandel",
  },
];

const coreChallenges = [
  {
    title: "Search Spaces",
    text: "The engineering of expressive experiment search spaces, that host interesting experimental phenomena and can be efficiently explored by algorithms.",
  },
  {
    title: "Physics Simulators",
    text: "The implementation of high-performance physics simulators that efficiently map design candidates from the search space to experimental outcomes.",
  },
  {
    title: "Objective Functions",
    text: "The automated, creative formulation of new experiment ideas and objective functions.",
  },
  {
    title: "AI-Exploration",
    text: "The development of algorithms that navigate the search space and discover surprising, useful, and human-understandable designs.",
  },
];

const positionCallUrl = "https://mariokrenn.wordpress.com/wp-content/uploads/2025/05/callkrenn202505-1.pdf";
const cookieConsentStorageKey = "asl_cookie_consent_v1";
const cookieConsentMaxAgeMs = 1000 * 60 * 60 * 24 * 180;

export default function Home() {
  const [morph, setMorph] = useState(0);
  const [monthYear, setMonthYear] = useState("");
  const [cookieChoice, setCookieChoice] = useState<CookieChoice | null>(null);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const siteRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    });

    const updateMonthYear = () => {
      setMonthYear(formatter.format(new Date()));
    };

    updateMonthYear();
    const intervalId = window.setInterval(updateMonthYear, 60 * 60 * 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem(cookieConsentStorageKey);
    let nextChoice: CookieChoice | null = null;
    let nextShowCookieBanner = true;

    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Partial<CookieConsentRecord>;
        const choice = parsed.choice;
        const hasValidChoice = choice === "essential" || choice === "all";
        const updatedAtMs = typeof parsed.updatedAt === "string" ? Date.parse(parsed.updatedAt) : Number.NaN;
        const isFresh = Number.isFinite(updatedAtMs) && Date.now() - updatedAtMs <= cookieConsentMaxAgeMs;

        if (hasValidChoice && isFresh) {
          nextChoice = choice;
          nextShowCookieBanner = false;
        } else {
          window.localStorage.removeItem(cookieConsentStorageKey);
        }
      } catch {
        // Ignore malformed storage and request a fresh choice.
        window.localStorage.removeItem(cookieConsentStorageKey);
      }
    }

    const frameId = window.requestAnimationFrame(() => {
      setCookieChoice(nextChoice);
      setShowCookieBanner(nextShowCookieBanner);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const clamp01 = (value: number) => Math.min(Math.max(value, 0), 1);
    const easeOut = (value: number) => 1 - Math.pow(1 - value, 2.4);

    const onScroll = () => {
      const teamSection = document.getElementById("team");

      if (teamSection) {
        const teamBottom = teamSection.getBoundingClientRect().bottom + window.scrollY;
        const start = teamBottom - window.innerHeight * 0.44;
        const transitionDistance = Math.max(window.innerHeight * 0.46, 280);
        const rawProgress = (window.scrollY - start) / transitionDistance;
        setMorph(easeOut(clamp01(rawProgress)));
        return;
      }

      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      setMorph(easeOut(clamp01(window.scrollY / (maxScroll * 0.75))));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const root = siteRef.current;
    if (!root) {
      return;
    }

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

    const layers = [
      { key: "--net1-pos", baseX: -30, baseY: 18, jitterX: 140, jitterY: 110 },
      { key: "--net2-pos", baseX: 140, baseY: -70, jitterX: 170, jitterY: 130 },
      { key: "--net3-pos", baseX: 54, baseY: 92, jitterX: 150, jitterY: 120 },
      { key: "--net4-pos", baseX: 12, baseY: 16, jitterX: 90, jitterY: 80 },
    ].map((layer) => ({
      ...layer,
      x: layer.baseX + randomInRange(-layer.jitterX * 0.45, layer.jitterX * 0.45),
      y: layer.baseY + randomInRange(-layer.jitterY * 0.45, layer.jitterY * 0.45),
      angle: randomInRange(0, Math.PI * 2),
      speed: randomInRange(5, 11),
      minSpeed: randomInRange(3, 5),
      maxSpeed: randomInRange(10, 14),
      turnRate: randomInRange(0.7, 1.5),
    }));

    const writePositions = () => {
      for (const layer of layers) {
        root.style.setProperty(layer.key, `${layer.x.toFixed(1)}px ${layer.y.toFixed(1)}px`);
      }
    };

    writePositions();

    let frameId = 0;
    let lastFrameTime = performance.now();

    const step = (now: number) => {
      const dt = Math.min((now - lastFrameTime) / 1000, 0.045);
      lastFrameTime = now;

      for (const layer of layers) {
        layer.angle += randomInRange(-1, 1) * layer.turnRate * dt;
        layer.speed = clamp(layer.speed + randomInRange(-2.2, 2.2) * dt, layer.minSpeed, layer.maxSpeed);

        layer.x += Math.cos(layer.angle) * layer.speed * dt;
        layer.y += Math.sin(layer.angle) * layer.speed * dt;

        const minX = layer.baseX - layer.jitterX;
        const maxX = layer.baseX + layer.jitterX;
        const minY = layer.baseY - layer.jitterY;
        const maxY = layer.baseY + layer.jitterY;

        if (layer.x < minX || layer.x > maxX) {
          layer.x = clamp(layer.x, minX, maxX);
          layer.angle = Math.PI - layer.angle + randomInRange(-0.28, 0.28);
        }

        if (layer.y < minY || layer.y > maxY) {
          layer.y = clamp(layer.y, minY, maxY);
          layer.angle = -layer.angle + randomInRange(-0.28, 0.28);
        }
      }

      writePositions();
      frameId = window.requestAnimationFrame(step);
    };

    frameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const saveCookieChoice = (choice: CookieChoice) => {
    const record: CookieConsentRecord = {
      choice,
      updatedAt: new Date().toISOString(),
      version: 1,
    };

    window.localStorage.setItem(cookieConsentStorageKey, JSON.stringify(record));
    setCookieChoice(choice);
    setShowCookieBanner(false);
  };

  return (
    <div ref={siteRef} className="group-site" style={{ "--morph": morph.toFixed(4) } as CSSProperties}>
      <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <header className="journal-surface journal-hero">
          <p className="text-center text-[10px] font-medium uppercase tracking-[0.3em] sm:text-xs">
            Proceedings of Machine Learning in Science II • Tübingen
            {monthYear ? ` • ${monthYear}` : ""}
          </p>
          <h1 className="mt-4 text-center font-journal text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            Artificial Scientist Lab
          </h1>
          <p className="mt-4 text-center font-journal text-xl italic sm:text-2xl">
            AI for Conceptual Advances in Physics
          </p>
          <div className="hero-focus mt-8">
            <p className="section-lede">
              We are a research group at the University of Tübingen, working on intelligent algorithms that design powerful physics experiments outside of human experience
              and intuition. Our work is organized around four frontiers:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {coreChallenges.map((challenge) => (
                <article key={challenge.title} className="modern-card frontier-card p-5">
                  <h3 className="text-lg font-semibold">{challenge.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-90">{challenge.text}</p>
                </article>
              ))}
            </div>
          </div>
        </header>

        <main className="mt-10 space-y-10">
          <section className="journal-surface p-6 sm:p-8" id="team">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-kicker">Who are we?</p>
                <h2 className="section-title">Team Members</h2>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <article key={member.name} className="modern-card team-card flex h-full flex-col overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className={`team-card-image h-56 w-full ${
                      member.image.endsWith(".svg")
                        ? "team-card-image-placeholder object-contain p-5"
                        : "object-cover"
                    }`}
                  />
                  <div className="flex grow flex-col p-4">
                    <h3 className="text-base font-semibold leading-tight">{member.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] opacity-70">{member.role}</p>
                    <p className="mt-3 text-sm leading-relaxed opacity-90">{member.focus}</p>
                    {member.links.length > 0 ? (
                      <div className="mt-auto flex flex-wrap gap-2 pt-3 text-xs">
                        {member.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="chip-link"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="journal-surface p-6 sm:p-8" aria-label="Transition">
            <h2 className="section-title text-center">Towards De-novo Design of Physics Experiments with AI</h2>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <article className="journal-surface p-6 sm:p-8">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="section-kicker">Papers</p>
                  <h2 className="section-title">Recent Publications</h2>
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {recentPapers.map((paper) => (
                  <li key={`${paper.date}-${paper.title}`} className="modern-card interactive-card overflow-hidden">
                    <a href={paper.href} target="_blank" rel="noreferrer" className="interactive-card-link block p-4">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] opacity-70">
                        {paper.date} • {paper.venue}
                      </p>
                      <p className="interactive-card-title mt-2 text-base leading-snug underline-offset-4">{paper.title}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </article>

            <article className="journal-surface p-6 sm:p-8">
              <p className="section-kicker">Code</p>
              <h2 className="section-title">GitHub Projects</h2>
              <ul className="mt-5 space-y-3">
                {githubProjects.map((project) => (
                  <li key={project.name} className="modern-card interactive-card overflow-hidden">
                    <a href={project.href} target="_blank" rel="noreferrer" className="interactive-card-link block p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="interactive-card-title text-base font-semibold underline-offset-4">{project.name}</p>
                        <span className="rounded-full border border-current/25 px-2 py-0.5 font-mono text-xs">
                          ★ {project.stars}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed opacity-90">{project.description}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section className="journal-surface p-6 sm:p-8" id="positions">
            <div>
              <p className="section-kicker">Join Us</p>
              <h2 className="section-title">Post-doc, PhD, Master, and Bachelor Positions</h2>
            </div>
            <p className="section-lede">
              We welcome applicants and students who want to work on AI for physics discovery. Feel free to reach out to any of our team members if you are interested in a specific topic.
            </p>
            <a
              href={positionCallUrl}
              target="_blank"
              rel="noreferrer"
              className="chip-link mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.14em]"
            >
              Open Position Call
            </a>
          </section>
        </main>
      </div>
      {showCookieBanner ? (
        <aside className="cookie-banner" aria-label="Cookie preferences" aria-live="polite">
          <p className="cookie-banner-copy">
            We use essential cookies to keep this site working. Optional analytics and third-party cookies remain off unless you explicitly accept them. You can
            change this choice at any time.
          </p>
          <div className="cookie-banner-actions">
            <button type="button" className="cookie-banner-button" onClick={() => saveCookieChoice("essential")}>
              Essential only
            </button>
            <button type="button" className="cookie-banner-button cookie-banner-button-primary" onClick={() => saveCookieChoice("all")}>
              Accept all
            </button>
          </div>
        </aside>
      ) : cookieChoice ? (
        <button type="button" className="cookie-settings-toggle" onClick={() => setShowCookieBanner(true)}>
          Cookie settings
        </button>
      ) : null}
    </div>
  );
}
