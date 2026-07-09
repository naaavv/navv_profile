"use client"

import { ArrowLeft, Printer } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  const handlePrint = () => window.print()

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-foreground selection:text-background print:bg-white print:text-black transition-colors duration-300">

      {/* Header */}
      <header className="max-w-5xl mx-auto px-6 lg:px-8 py-10 border-b border-border print:hidden">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </Link>
          <Button onClick={handlePrint} variant="outline"
            className="bg-transparent border-border text-xs uppercase tracking-[0.2em] font-medium text-foreground hover:bg-foreground hover:text-background rounded-xl h-10 px-5 transition-all">
            <Printer className="w-3.5 h-3.5 mr-2" /> Print / PDF
          </Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 lg:px-8 py-14 print:py-0 print:px-0">

        {/* Name Block */}
        <div className="pb-12 border-b border-border space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <h1 className="text-4xl sm:text-6xl font-thin tracking-tight text-foreground print:text-black leading-none">
              NAV RAJ BASNET
            </h1>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground print:text-zinc-500 font-medium">
              Curriculum Vitae
            </span>
          </div>

          <h2 className="text-lg text-muted-foreground font-light print:text-zinc-600">
            Software Engineer & Game Developer
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed font-light print:text-zinc-600 max-w-2xl">
            CSIT undergraduate specializing in clean system designs, high-performance modular scripting, and interactive software architectures. 5+ years of active engineering experience spanning game engines, desktop utilities, and full-stack web applications.
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-1 pt-1 text-sm text-muted-foreground font-light print:text-zinc-600">
            <span>basnetnavraj4@gmail.com</span>
            <span>+977 9864726814</span>
            <span>Nepalgunj, Nepal</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-12 gap-14 pt-12 print:grid-cols-12 print:gap-8 print:pt-8">

          {/* Left Column */}
          <div className="md:col-span-4 space-y-10 print:col-span-4">

            {/* Skills */}
            <div className="space-y-5">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-foreground pb-2 border-b border-border print:text-black print:border-zinc-200">
                Skills
              </h3>
              <div className="space-y-4 text-sm">
                {[
                  { label: "Languages", value: "C, C++, Python, PHP, Dart, HTML5 / CSS3" },
                  { label: "Frameworks", value: "Flutter, OpenGL, React, Next.js, TypeScript" },
                  { label: "Backend & Cloud", value: "Supabase, Firebase, Node.js, Express" },
                  { label: "Tools", value: "Vercel, Git, GitHub, Docker" },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-0.5 print:text-zinc-500">{s.label}</p>
                    <p className="text-foreground font-light print:text-black">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-5">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-foreground pb-2 border-b border-border print:text-black print:border-zinc-200">
                Certifications
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  { name: "AWS Certified Developer", org: "Amazon Web Services · 2022" },
                  { name: "Best Game Developer Award", org: "GameDev Conference · 2029" },
                ].map((c, i) => (
                  <div key={i}>
                    <p className="font-medium text-foreground print:text-black">{c.name}</p>
                    <p className="text-xs text-muted-foreground font-light print:text-zinc-500">{c.org}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-5">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-foreground pb-2 border-b border-border print:text-black print:border-zinc-200">
                Languages
              </h3>
              <div className="space-y-2 text-sm">
                {[
                  { lang: "Nepali", level: "Native" },
                  { lang: "English", level: "Fluent" },
                ].map((l, i) => (
                  <div key={i} className="flex justify-between items-baseline">
                    <span className="text-foreground font-light print:text-black">{l.lang}</span>
                    <span className="text-xs text-muted-foreground print:text-zinc-500">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="md:col-span-8 space-y-10 print:col-span-8">

            {/* Experience */}
            <div className="space-y-7">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-foreground pb-2 border-b border-border print:text-black print:border-zinc-200">
                Experience
              </h3>

              <div className="space-y-8">
                {[
                  {
                    role: "Senior Game Developer",
                    company: "MYYanI Technology · Kathmandu, Nepal",
                    period: "2021 — Present",
                    desc: "Led layout and UI configuration using clean hooks. Optimized rendering parameters, improving benchmarks by 30%. Mentored teammates on Git workflows.",
                  },
                  {
                    role: "Full-Stack Engineer",
                    company: "Freelance Clients · Self-Employed",
                    period: "2019 — 2021",
                    desc: "Built custom WPF desktop tools and SQLite database storage setups for concurrent client workflows.",
                  },
                ].map((exp, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex flex-wrap justify-between items-baseline gap-2">
                      <h4 className="text-base font-semibold text-foreground print:text-black">{exp.role}</h4>
                      <span className="text-xs text-muted-foreground font-light print:text-zinc-500">{exp.period}</span>
                    </div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium print:text-zinc-400">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light print:text-zinc-600 pt-1">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-7">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-foreground pb-2 border-b border-border print:text-black print:border-zinc-200">
                Education
              </h3>
              <div className="space-y-1.5">
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h4 className="text-base font-semibold text-foreground print:text-black">B.Sc. Computer Science & IT</h4>
                  <span className="text-xs text-muted-foreground font-light print:text-zinc-500">2024 — Running</span>
                </div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium print:text-zinc-400">
                  Tribhuvan University · Kathmandu, Nepal
                </p>
              </div>
            </div>

            {/* References */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-foreground pb-2 border-b border-border print:text-black print:border-zinc-200">
                References
              </h3>
              <p className="text-sm text-muted-foreground font-light italic print:text-zinc-500">
                Available upon request.
              </p>
            </div>

          </div>

        </div>
      </main>

      <footer className="max-w-5xl mx-auto px-6 lg:px-8 py-10 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground border-t border-border mt-12 print:hidden">
        <p>© {new Date().getFullYear()} Nav Raj Basnet</p>
      </footer>

    </div>
  )
}
