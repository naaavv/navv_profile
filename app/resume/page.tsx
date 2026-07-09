"use client"

import { ArrowLeft, Printer } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans selection:bg-foreground selection:text-background print:bg-white print:text-black transition-colors duration-300">
      
      {/* Header (Hidden in Print) */}
      <header className="max-w-3xl mx-auto px-6 py-12 border-b border-border print:hidden">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </Link>
          <Button 
            onClick={handlePrint}
            variant="outline" 
            className="bg-transparent border-border text-[10px] uppercase tracking-[0.25em] text-foreground hover:bg-foreground hover:text-background hover:border-foreground rounded-xl h-10 px-5 transition-all duration-300"
          >
            <Printer className="w-3.5 h-3.5 mr-2" /> Print / PDF
          </Button>
        </div>
      </header>

      {/* Main Resume Container */}
      <main className="max-w-3xl mx-auto px-6 py-16 print:py-0 print:px-0">
        
        {/* Name and Tagline */}
        <div className="space-y-6 pb-12 border-b border-border print:mb-8 print:pb-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-foreground leading-none print:text-black">
              NAV RAJ BASNET
            </h1>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground print:text-zinc-500">
              Curriculum Vitae
            </span>
          </div>

          <h2 className="text-base text-muted-foreground font-light print:text-zinc-600">
            Software Engineer & Game Developer
          </h2>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light print:text-zinc-600 max-w-2xl">
            CSIT undergraduate specializing in clean system designs, high-performance modular scripting, and interactive software architectures. Over 5 years of active coding experience spanning game engines, desktop modules, and client-side applications.
          </p>

          {/* Contact details row */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs text-muted-foreground print:text-zinc-600 font-light">
            <span>basnetnavraj4@gmail.com</span>
            <span>+977 9864726814</span>
            <span>Nepalgunj, Nepal</span>
          </div>
        </div>

        {/* Sections */}
        <div className="grid md:grid-cols-12 gap-12 pt-12 print:grid-cols-12 print:gap-8 print:pt-6">
          
          {/* Left Column */}
          <div className="md:col-span-4 space-y-10 print:col-span-4">
            
            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.25em] text-foreground font-bold pb-1 border-b border-border print:text-black print:border-zinc-200">
                Skills
              </h3>
              <div className="space-y-3 text-xs font-light">
                <div>
                  <span className="text-muted-foreground block print:text-zinc-500">Languages</span>
                  <span className="text-foreground print:text-black mt-0.5 block">C, C++, Python, PHP, Dart, HTML5/CSS3</span>
                </div>
                <div>
                  <span className="text-muted-foreground block print:text-zinc-500">Frameworks & Native</span>
                  <span className="text-foreground print:text-black mt-0.5 block">Flutter, OpenGL, React, Next.js</span>
                </div>
                <div>
                  <span className="text-muted-foreground block print:text-zinc-500">Backend & Cloud</span>
                  <span className="text-foreground print:text-black mt-0.5 block">Supabase, Firebase, Node.js, Express</span>
                </div>
                <div>
                  <span className="text-muted-foreground block print:text-zinc-500">Tools</span>
                  <span className="text-foreground print:text-black mt-0.5 block">Vercel, Git, GitHub, Docker</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.25em] text-foreground font-bold pb-1 border-b border-border print:text-black print:border-zinc-200">
                Certs
              </h3>
              <div className="space-y-3 text-xs font-light">
                <div>
                  <span className="text-foreground print:text-black block">AWS Certified Developer</span>
                  <span className="text-muted-foreground print:text-zinc-500">Amazon Web Services • 2022</span>
                </div>
                <div>
                  <span className="text-foreground print:text-black block">Best Game Developer Award</span>
                  <span className="text-muted-foreground print:text-zinc-500">GameDev Conference • 2029</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.25em] text-foreground font-bold pb-1 border-b border-border print:text-black print:border-zinc-200">
                Languages
              </h3>
              <div className="space-y-2 text-xs font-light">
                <div className="flex justify-between">
                  <span className="text-foreground print:text-black">Nepali</span>
                  <span className="text-muted-foreground print:text-zinc-500">Native</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground print:text-black">English</span>
                  <span className="text-muted-foreground print:text-zinc-500">Fluent</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="md:col-span-8 space-y-10 print:col-span-8">
            
            {/* Experience */}
            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-[0.25em] text-foreground font-bold pb-1 border-b border-border print:text-black print:border-zinc-200">
                Experience
              </h3>

              <div className="space-y-6">
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-medium text-foreground print:text-black text-sm">Senior Game Developer</h4>
                    <span className="text-muted-foreground print:text-zinc-500">2021 — Present</span>
                  </div>
                  <p className="text-muted-foreground print:text-zinc-400 font-light">AnyX Inc. • Kathmandu, Nepal</p>
                  <p className="text-muted-foreground print:text-zinc-600 font-light pt-1 leading-relaxed">
                    Led layout and UI configuration using clean hooks. Optimized rendering parameters, improving static and interactive response benchmarks. Mentored teammates on Git structure guidelines.
                  </p>
                </div>

                <div className="space-y-1 text-xs">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-medium text-foreground print:text-black text-sm">Full-Stack Engineer</h4>
                    <span className="text-muted-foreground print:text-zinc-500">2019 — 2021</span>
                  </div>
                  <p className="text-muted-foreground print:text-zinc-400 font-light">Freelance Clients • Self-Employed</p>
                  <p className="text-muted-foreground print:text-zinc-600 font-light pt-1 leading-relaxed">
                    Built custom WPF desktop tools and localized SQLite database storage setups for concurrent workflows.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-[0.25em] text-foreground font-bold pb-1 border-b border-border print:text-black print:border-zinc-200">
                Education
              </h3>

              <div className="space-y-4">
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-medium text-foreground print:text-black">B.Sc. in Computer Science & IT</h4>
                    <span className="text-muted-foreground print:text-zinc-500">2024 — Running</span>
                  </div>
                  <p className="text-muted-foreground print:text-zinc-400 font-light">Tribhuvan University • Kathmandu, Nepal</p>
                </div>
              </div>
            </div>

            {/* References */}
            <div className="space-y-2">
              <h3 className="text-[10px] uppercase tracking-[0.25em] text-foreground font-bold pb-1 border-b border-border print:text-black print:border-zinc-200">
                References
              </h3>
              <p className="text-xs text-muted-foreground italic font-light print:text-zinc-500">
                Available upon request.
              </p>
            </div>

          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 py-12 text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground border-t border-border mt-12 print:hidden">
        <p>© {new Date().getFullYear()} NAV RAJ BASNET. All rights reserved.</p>
      </footer>

    </div>
  )
}
