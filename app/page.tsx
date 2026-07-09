"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Twitter, Menu, X, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const sections = ["home", "about", "tech-stack", "projects", "experience", "contact"]
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [formStatus, setFormStatus] = useState("")

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("Sending...")
    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setFormStatus("Message sent successfully.")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setFormStatus("Failed to send. Please contact via email directly.")
      }
    } catch {
      setFormStatus("Error sending. Please reach out via email directly.")
    }
  }

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background antialiased transition-colors duration-300">

      {/* ─── Navigation ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/30 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

          <button onClick={() => scrollToSection("home")}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground hover:opacity-70 transition-opacity">
            NAV RAJ BASNET
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map(s => (
              <button key={s} onClick={() => scrollToSection(s)}
                className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-colors ${
                  activeSection === s ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}>
                {s.replace("-", " ")}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-5">
            {mounted && (
              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Toggle theme">
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            )}
            <Link href="/resume">
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground hover:text-foreground border-b border-transparent hover:border-foreground pb-0.5 transition-all">
                Resume
              </span>
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-4">
            {mounted && (
              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Toggle theme">
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            )}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-foreground" aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="fixed top-20 left-0 right-0 z-40 bg-background border-b border-border px-6 py-8 md:hidden flex flex-col gap-5">
            {sections.map(s => (
              <button key={s} onClick={() => scrollToSection(s)}
                className={`text-left text-sm uppercase tracking-[0.2em] font-medium py-1 transition-colors ${
                  activeSection === s ? "text-foreground" : "text-muted-foreground"
                }`}>
                {s.replace("-", " ")}
              </button>
            ))}
            <div className="pt-4 border-t border-border">
              <Link href="/resume" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-sm uppercase tracking-[0.2em] font-medium text-foreground">Resume</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-5xl mx-auto px-6 lg:px-8 pt-20">

        {/* ─── Hero ─── */}
        <section id="home" className="min-h-[calc(100vh-80px)] flex items-center py-20">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center w-full">

            {/* Text */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="md:col-span-8 space-y-7">

              <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground font-medium">
                Available for Projects
              </span>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-thin tracking-tight text-foreground leading-[0.95]">
                NAV RAJ<br />
                <span className="font-light">BASNET</span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
                Software Engineer & Game Developer building high-performance systems, web apps, and interactive game modules.
              </p>

              <div className="flex flex-wrap gap-6 pt-2">
                <button onClick={() => scrollToSection("projects")}
                  className="text-sm font-medium uppercase tracking-[0.15em] text-foreground border-b-2 border-foreground pb-0.5 hover:opacity-70 transition-opacity">
                  View Projects
                </button>
                <button onClick={() => scrollToSection("contact")}
                  className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground border-b-2 border-transparent hover:border-muted-foreground pb-0.5 hover:text-foreground transition-all">
                  Get In Touch
                </button>
              </div>

              {/* Social row */}
              <div className="flex items-center gap-5 pt-2">
                {[
                  { label: "GitHub", url: "https://github.com/Nav0077", icon: <Github size={16} /> },
                  { label: "LinkedIn", url: "https://www.linkedin.com/in/nav-b-9310b9312", icon: <Linkedin size={16} /> },
                  { label: "Twitter", url: "https://x.com/Nav0777777", icon: <Twitter size={16} /> },
                ].map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" title={s.label}
                    className="text-muted-foreground hover:text-foreground transition-colors">{s.icon}</a>
                ))}
              </div>
            </motion.div>

            {/* Profile photo */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="md:col-span-4 flex justify-start md:justify-end">
              <div className="relative w-52 h-52 sm:w-72 sm:h-72 rounded-2xl overflow-hidden bg-card border border-border">
                <img src="/profile.jpg" alt="Nav Raj Basnet"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-[1.02] transition-all duration-500"
                  onError={e => { e.currentTarget.src = "/placeholder.svg" }} />
              </div>
            </motion.div>

          </div>
        </section>

        {/* ─── About ─── */}
        <section id="about" className="py-28 border-t border-border">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">

            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">01 / About</p>
            </div>

            <div className="md:col-span-9 space-y-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground leading-snug">
                CSIT undergraduate at Tribhuvan University, balancing computer science research with engineering production code.
              </h2>

              <p className="text-base text-muted-foreground leading-relaxed font-light">
                My approach centers on extreme simplification — stripping out bloat to focus on high-performance logic, clean spacing, and structural coherence. I believe the most robust solutions are also the most minimal.
              </p>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                {[
                  { label: "Experience", value: "5+ Years" },
                  { label: "Projects", value: "25+ Done" },
                  { label: "Role", value: "Freelancer" },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium mb-1">{s.label}</p>
                    <p className="text-xl font-medium text-foreground">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ─── Tech Stack ─── */}
        <section id="tech-stack" className="py-28 border-t border-border">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">

            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">02 / Stack</p>
            </div>

            <div className="md:col-span-9 space-y-8">
              {[
                { category: "Languages", items: "C, C++, Python, PHP, Dart, HTML5 / CSS3" },
                { category: "Frameworks & Native", items: "Flutter, OpenGL, React, Next.js, TypeScript, Tailwind CSS" },
                { category: "Backend & Services", items: "Supabase, Firebase, Node.js, Express, RESTful APIs" },
                { category: "Deployment & Tools", items: "Vercel, Git, GitHub, Docker" },
              ].map((g, i) => (
                <div key={i} className="grid sm:grid-cols-12 gap-3 sm:gap-8 pb-7 border-b border-border/40 last:border-b-0 last:pb-0">
                  <p className="sm:col-span-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold pt-0.5">{g.category}</p>
                  <p className="sm:col-span-8 text-base text-foreground font-light leading-relaxed">{g.items}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ─── Projects ─── */}
        <section id="projects" className="py-28 border-t border-border">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">

            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">03 / Projects</p>
            </div>

            <div className="md:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12">
                {[
                  { title: "SecurePassPro", category: "Desktop Utility", desc: "Encrypted desktop credentials vault built with C++ and Qt framework.", tags: ["C++", "Qt", "Crypto"], image: "/mockup.png", download: "/SecurePassPro_Setup.exe" },
                  { title: "CalcX", category: "Desktop Utility", desc: "Advanced developer utility and math compilation engine.", tags: ["C#", "WPF", "Math Engine"], image: "/calcx_image.png" },
                  { title: "Car Portal", category: "Game Dev", desc: "Open world modular physics sandbox environment built in Unity.", tags: ["Unity", "C#", "3D Physics"], image: "/xyz.jpg" },
                  { title: "AnyX App", category: "Mobile", desc: "Cross-platform mobile state management dashboard.", tags: ["React Native", "Expo"], image: "/placeholder.svg" },
                  { title: "Task Management", category: "Web App", desc: "Streamlined workflow sprint client for distributed teams.", tags: ["Next.js", "TypeScript", "Tailwind"], image: "/placeholder.svg" },
                  { title: "Elite Social Club", category: "Web App", desc: "High-end landing platform with premium visual design.", tags: ["React", "CSS3"], image: "/placeholder.svg" },
                ].map((proj, i) => (
                  <div key={i} className="group space-y-4">
                    <div className="aspect-[16/10] w-full bg-card overflow-hidden rounded-2xl border border-border group-hover:border-foreground/20 transition-all duration-300">
                      <img src={proj.image} alt={proj.title}
                        className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                        onError={e => { e.currentTarget.src = "/placeholder.svg" }} />
                    </div>

                    <div className="space-y-2 px-1">
                      <div className="flex justify-between items-baseline gap-2">
                        <h3 className="text-base font-semibold text-foreground">{proj.title}</h3>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground shrink-0">{proj.category}</span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed font-light">{proj.desc}</p>

                      <div className="flex items-center justify-between pt-2 border-t border-border/30">
                        <div className="flex gap-2 flex-wrap">
                          {proj.tags.map((t, idx) => (
                            <span key={idx} className="text-[10px] uppercase tracking-wider text-muted-foreground/70">#{t}</span>
                          ))}
                        </div>
                        {proj.download ? (
                          <a href={proj.download} download
                            className="text-xs font-medium uppercase tracking-wider text-foreground hover:underline flex items-center gap-1">
                            Download <ArrowUpRight size={11} />
                          </a>
                        ) : (
                          <span className="text-xs font-medium uppercase tracking-wider text-foreground flex items-center gap-1 cursor-pointer hover:underline">
                            Demo <ArrowUpRight size={11} />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ─── Experience ─── */}
        <section id="experience" className="py-28 border-t border-border">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">

            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">04 / Experience</p>
            </div>

            <div className="md:col-span-9 space-y-10">
              {[
                {
                  role: "Senior Game Developer",
                  company: "MYYanI Technology",
                  location: "Kathmandu, Nepal",
                  period: "2021 — Present",
                  desc: "Led interface optimizations and viewport modular layouts. Enhanced startup loading metrics by 30% and configured clean state protocols.",
                },
                {
                  role: "Full-Stack Engineer",
                  company: "Freelance",
                  location: "Remote",
                  period: "2019 — 2021",
                  desc: "Structured desktop databases and native UI applications using modular backend packages and robust local pipelines.",
                },
                {
                  role: "CSIT Researcher",
                  company: "Tribhuvan University",
                  location: "Kathmandu, Nepal",
                  period: "2024 — Running",
                  desc: "Researching systems architecture, modular coding procedures, and interface design hierarchies.",
                },
              ].map((exp, i) => (
                <div key={i} className="space-y-2 pb-10 border-b border-border/40 last:border-b-0 last:pb-0">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground font-light">{exp.period}</span>
                  </div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                    {exp.company} — {exp.location}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light pt-1">{exp.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ─── Contact ─── */}
        <section id="contact" className="py-28 border-t border-border">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">

            <div className="md:col-span-4 space-y-7">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-4">05 / Contact</p>
                <h2 className="text-2xl sm:text-3xl font-light text-foreground leading-snug">
                  Let's build something great together.
                </h2>
              </div>

              <div className="space-y-1.5 text-sm text-muted-foreground font-light">
                <p>basnetnavraj4@gmail.com</p>
                <p>+977 9864726814</p>
                <p>Nepalgunj, Nepal</p>
              </div>

              <div className="flex items-center gap-5 pt-1">
                {[
                  { label: "GitHub", url: "https://github.com/Nav0077", icon: <Github size={16} /> },
                  { label: "LinkedIn", url: "https://www.linkedin.com/in/nav-b-9310b9312", icon: <Linkedin size={16} /> },
                  { label: "Twitter", url: "https://x.com/Nav0777777", icon: <Twitter size={16} /> },
                ].map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" title={s.label}
                    className="text-muted-foreground hover:text-foreground transition-colors">{s.icon}</a>
                ))}
              </div>
            </div>

            <div className="md:col-span-8">
              <form onSubmit={handleFormSubmit} className="space-y-7">
                <div className="grid sm:grid-cols-2 gap-7">
                  {[
                    { label: "Name", name: "name", type: "text", placeholder: "Your Name" },
                    { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
                  ].map((f) => (
                    <div key={f.name} className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{f.label}</label>
                      <input type={f.type} name={f.name} required
                        value={formData[f.name as keyof typeof formData]}
                        onChange={handleInputChange} placeholder={f.placeholder}
                        className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/40" />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Subject</label>
                  <input type="text" name="subject" required value={formData.subject} onChange={handleInputChange}
                    placeholder="Project Inquiry"
                    className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/40" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Message</label>
                  <textarea name="message" required rows={4} value={formData.message} onChange={handleInputChange}
                    placeholder="Describe your inquiry..."
                    className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/40 resize-none" />
                </div>

                <Button type="submit"
                  className="w-full h-12 bg-foreground text-background hover:opacity-85 text-xs font-semibold uppercase tracking-[0.2em] rounded-xl transition-all duration-300">
                  Send Message
                </Button>

                {formStatus && <p className="text-sm text-muted-foreground text-center">{formStatus}</p>}
              </form>
            </div>

          </div>
        </section>

      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border bg-background py-10 mt-12 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
          <p>© {new Date().getFullYear()} Nav Raj Basnet. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/resume" className="hover:text-foreground transition-colors">Resume</Link>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-foreground transition-colors">Top ↑</button>
          </div>
        </div>
      </footer>

    </div>
  )
}
