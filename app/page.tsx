"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Menu, 
  X,
  Sun,
  Moon,
  Smartphone,
  Phone
} from "lucide-react"
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

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Active section tracking hook
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250 // offset for navigation highlight

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
    } catch (error) {
      setFormStatus("Error sending. Please reach out via email directly.")
    }
  }

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // header height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background antialiased font-sans transition-colors duration-300">
      
      {/* Premium Sticky Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 h-24 flex justify-between items-center">
          
          {/* Logo / Name */}
          <button 
            onClick={() => scrollToSection("home")}
            className="text-[11px] uppercase tracking-[0.3em] font-medium text-foreground hover:opacity-80 transition-opacity"
          >
            NAV RAJ BASNET
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-[10px] uppercase tracking-[0.25em] font-medium transition-colors duration-200 ${
                  activeSection === section 
                    ? "text-foreground font-semibold" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {section.replace("-", " ")}
              </button>
            ))}
          </div>

          {/* Theme Switcher & Resume */}
          <div className="hidden md:flex items-center space-x-6">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            )}

            <Link href="/resume">
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground border-b border-transparent hover:border-foreground pb-1 transition-all duration-300">
                Resume
              </span>
            </Link>
          </div>

          {/* Mobile Navigation Interface */}
          <div className="flex items-center space-x-4 md:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            )}

            <button 
              className="text-foreground focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed top-24 left-0 right-0 z-40 bg-background border-b border-border py-8 px-6 md:hidden flex flex-col space-y-4"
          >
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-left text-[11px] uppercase tracking-[0.25em] py-2 transition-colors ${
                  activeSection === section ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                {section.replace("-", " ")}
              </button>
            ))}
            <div className="pt-4 border-t border-border">
              <Link href="/resume" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-[11px] uppercase tracking-[0.25em] text-foreground block py-2">
                  Resume
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive Main Container */}
      <main className="max-w-5xl mx-auto px-6 lg:px-8 pt-24">

        {/* 1. Hero Section (Typographic Layout with Split Picture) */}
        <section 
          id="home" 
          className="min-h-[calc(100vh-96px)] flex items-center py-16 md:py-24"
        >
          <div className="grid md:grid-cols-12 gap-12 items-center w-full">
            
            {/* Left Content Column */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-8 space-y-6 sm:space-y-8"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-semibold block">
                Available for Projects
              </span>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-[1.1] md:leading-none">
                NAV RAJ BASNET
              </h1>
              
              <h2 className="text-base sm:text-lg md:text-xl text-muted-foreground font-light">
                Software Engineer & Game Developer
              </h2>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light max-w-xl">
                Designing and constructing high-fidelity system applications, client-side web infrastructures, and interactive game modules. Focused on strict minimalist design principles and precise, performant codebases.
              </p>

              <div className="flex gap-8 pt-4">
                <button 
                  onClick={() => scrollToSection("projects")}
                  className="text-xs uppercase tracking-[0.2em] text-foreground border-b border-foreground pb-1 hover:opacity-85 transition-opacity"
                >
                  View Projects
                </button>
                
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-xs uppercase tracking-[0.2em] text-muted-foreground border-b border-transparent hover:border-foreground pb-1 hover:text-foreground transition-all"
                >
                  Get In Touch
                </button>
              </div>
            </motion.div>

            {/* Right Profile Picture Column */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-4 flex justify-start md:justify-end"
            >
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-xl overflow-hidden bg-card border border-border p-2 transition-transform duration-500 hover:scale-[1.01]">
                <img 
                  src="/profile.jpg" 
                  alt="Nav Raj Basnet" 
                  className="w-full h-full object-cover rounded-xl filter grayscale contrast-110 opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg"
                  }}
                />
              </div>
            </motion.div>

          </div>
        </section>

        {/* 2. About Section (Responsive Split Layout) */}
        <section id="about" className="py-24 md:py-32 border-t border-border">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* Section Tag */}
            <div className="md:col-span-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-semibold block">
                [01] About
              </span>
            </div>

            {/* Content Details */}
            <div className="md:col-span-9 space-y-8 md:space-y-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-foreground leading-relaxed">
                I am a CSIT undergraduate at Tribhuvan University, actively balancing advanced computer science research with engineering production code for client systems.
              </h3>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                My approach to development centers on extreme simplification. I strip out unnecessary design bloat and focus entirely on high-performance logic, clean spacing, and structural coherence. I believe the most robust solutions are also the most minimal.
              </p>

              {/* Minimal Stats Row (Borderless, just text and space) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t border-border">
                <div>
                  <span className="text-[10px] text-muted-foreground block font-light uppercase tracking-wider">Experience</span>
                  <span className="text-base sm:text-lg text-foreground font-medium mt-1 block">5+ Years</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground block font-light uppercase tracking-wider">Completed</span>
                  <span className="text-base sm:text-lg text-foreground font-medium mt-1 block">25+ Projects</span>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground block font-light uppercase tracking-wider">Role</span>
                  <span className="text-base sm:text-lg text-foreground font-medium mt-1 block">Freelancer</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. Tech Stack Section (Split Category Lists) */}
        <section id="tech-stack" className="py-24 md:py-32 border-t border-border">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* Section Tag */}
            <div className="md:col-span-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-semibold block">
                [02] Stack
              </span>
            </div>

            {/* Categorized Tech list */}
            <div className="md:col-span-9 space-y-10">
              {[
                { category: "Languages", items: "C, C++, Python, PHP, Dart, HTML5/CSS3" },
                { category: "Frameworks & Native", items: "Flutter, OpenGL, React, Next.js, TypeScript, Tailwind CSS" },
                { category: "Backend & Services", items: "Supabase, Firebase, Node.js, Express, RESTful APIs" },
                { category: "Deployment & Tools", items: "Vercel, Git, GitHub, Docker" }
              ].map((group, idx) => (
                <div key={idx} className="grid sm:grid-cols-12 gap-2 sm:gap-6 items-baseline pb-6 border-b border-border/40 last:border-b-0">
                  <span className="sm:col-span-4 text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                    {group.category}
                  </span>
                  <span className="sm:col-span-8 text-sm sm:text-base text-foreground font-light leading-relaxed">
                    {group.items}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. Projects Section (Split Project Grid) */}
        <section id="projects" className="py-24 md:py-32 border-t border-border">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* Section Tag */}
            <div className="md:col-span-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-semibold block">
                [03] Projects
              </span>
            </div>

            {/* Project grid display */}
            <div className="md:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                {[
                  {
                    title: "SecurePassPro",
                    category: "Desktop Utility",
                    desc: "Encrypted desktop credentials vault designed with clean C++ logic.",
                    tags: ["C++", "Qt", "Crypto"],
                    image: "/mockup.png",
                    download: "/SecurePassPro_Setup.exe"
                  },
                  {
                    title: "CalcX",
                    category: "Desktop Utility",
                    desc: "Advanced developer utility and math compilation engine.",
                    tags: ["C#", "WPF", "Math Engine"],
                    image: "/calcx_image.png"
                  },
                  {
                    title: "Car Portal",
                    category: "Game Dev",
                    desc: "Open world modular physics sandbox environment.",
                    tags: ["Unity", "C#", "3D Rendering"],
                    image: "/xyz.jpg"
                  },
                  {
                    title: "AnyX App",
                    category: "Mobile Utility",
                    desc: "Cross-platform mobile state dashboard.",
                    tags: ["React Native", "Expo"],
                    image: "/placeholder.svg"
                  },
                  {
                    title: "Task Management",
                    category: "Web Application",
                    desc: "Streamlined workflow sprint client for teams.",
                    tags: ["Next.js", "TypeScript", "Tailwind"],
                    image: "/placeholder.svg"
                  },
                  {
                    title: "Elite Social Club",
                    category: "Web Application",
                    desc: "High-end landing web platform with visual focus.",
                    tags: ["React", "CSS3"],
                    image: "/placeholder.svg"
                  }
                ].map((proj, i) => (
                  <div key={i} className="group space-y-4">
                    
                    {/* Image frame */}
                    <div className="aspect-[16/10] w-full bg-card overflow-hidden rounded-xl border border-border transition-all duration-300 group-hover:border-foreground/30">
                      <img 
                        src={proj.image} 
                        alt={proj.title}
                        className="w-full h-full object-cover filter grayscale contrast-110 opacity-60 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-500"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg"
                        }}
                      />
                    </div>

                    {/* Metadata */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-baseline">
                        <h4 className="text-sm sm:text-base font-normal text-foreground">
                          {proj.title}
                        </h4>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          {proj.category}
                        </span>
                      </div>

                      <p className="text-xs text-muted-foreground leading-relaxed font-light">
                        {proj.desc}
                      </p>

                      {/* Tags and Links */}
                      <div className="flex items-center justify-between pt-3 border-t border-border/40">
                        <div className="flex gap-2">
                          {proj.tags.map((t, idx) => (
                            <span key={idx} className="text-[9px] uppercase tracking-wider text-muted-foreground">
                              #{t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-3">
                          {proj.download ? (
                            <a 
                              href={proj.download}
                              download
                              className="text-[10px] uppercase tracking-wider text-foreground hover:underline flex items-center gap-1"
                            >
                              Download <ArrowUpRight size={10} />
                            </a>
                          ) : (
                            <span className="text-[10px] uppercase tracking-wider text-foreground flex items-center gap-1 cursor-pointer hover:underline">
                              Demo <ArrowUpRight size={10} />
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 5. Experience Section (Editorial Timeline, Clean Grid structure) */}
        <section id="experience" className="py-24 md:py-32 border-t border-border">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* Section Tag */}
            <div className="md:col-span-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-semibold block">
                [04] Experience
              </span>
            </div>

            {/* Timeline Rows */}
            <div className="md:col-span-9 space-y-12">
              {[
                {
                  role: "Senior Game Developer",
                  company: "AnyX Inc.",
                  location: "Kathmandu, Nepal",
                  period: "2021 — Present",
                  desc: "Led interface optimizations and viewport modular layouts. Enhanced startup loading metrics by 30% and configured clean state protocols."
                },
                {
                  role: "Full-Stack Engineer",
                  company: "Freelance",
                  location: "Remote",
                  period: "2019 — 2021",
                  desc: "Structured desktop databases and native UI applications using modular backend packages and robust local pipelines."
                },
                {
                  role: "CSIT Undergraduate researcher",
                  company: "Tribhuvan University",
                  location: "Kathmandu, Nepal",
                  period: "2024 — Running",
                  desc: "Researching systems architecture, modular coding procedures, and interface design hierarchies."
                }
              ].map((exp, idx) => (
                <div key={idx} className="space-y-2 pb-8 border-b border-border/40 last:border-b-0 last:pb-0">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <h4 className="text-base font-normal text-foreground">
                      {exp.role}
                    </h4>
                    <span className="text-xs text-muted-foreground font-light">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-[10px] text-muted-foreground font-light uppercase tracking-wider">
                    {exp.company} — {exp.location}
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light pt-2">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 6. Contact Section (Minimal Flat Input Layout) */}
        <section id="contact" className="py-24 md:py-32 border-t border-border">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* Left Contact Info */}
            <div className="md:col-span-4 space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-semibold block">
                  [05] Contact
                </span>
                <h3 className="text-lg font-light text-foreground mt-4 leading-relaxed">
                  Let's construct something together.
                </h3>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-muted-foreground font-light">
                <p>basnetnavraj4@gmail.com</p>
                <p>+977 9864726814</p>
                <p>Nepalgunj, Nepal</p>
              </div>

              {/* Minimal social links */}
              <div className="flex gap-4 pt-2">
                {[
                  { name: "GitHub", url: "https://github.com/Nav0077", icon: <Github size={14} /> },
                  { name: "LinkedIn", url: "https://www.linkedin.com/in/nav-b-9310b9312", icon: <Linkedin size={14} /> },
                  { name: "Twitter", url: "https://x.com/Nav0777777", icon: <Twitter size={14} /> }
                ].map((soc, sIdx) => (
                  <a
                    key={sIdx}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={soc.name}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {soc.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Contact Form (Flat lines, no full boxes) */}
            <div className="md:col-span-8">
              <form onSubmit={handleFormSubmit} className="space-y-8">
                
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest text-muted-foreground font-medium">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full bg-transparent border-t-0 border-x-0 border-b border-border rounded-none px-0 py-3 text-xs text-foreground focus:outline-none focus:border-foreground transition-colors placeholder-muted-foreground/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest text-muted-foreground font-medium">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className="w-full bg-transparent border-t-0 border-x-0 border-b border-border rounded-none px-0 py-3 text-xs text-foreground focus:outline-none focus:border-foreground transition-colors placeholder-muted-foreground/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-muted-foreground font-medium">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry"
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-border rounded-none px-0 py-3 text-xs text-foreground focus:outline-none focus:border-foreground transition-colors placeholder-muted-foreground/30"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-muted-foreground font-medium">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your inquiry..."
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-border rounded-none px-0 py-3 text-xs text-foreground focus:outline-none focus:border-foreground transition-colors placeholder-muted-foreground/30 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-foreground text-background hover:opacity-85 text-[10px] uppercase tracking-[0.2em] font-semibold rounded-xl transition-all duration-300"
                >
                  Send Message
                </Button>

                {formStatus && (
                  <p className="text-xs text-muted-foreground text-center pt-2">{formStatus}</p>
                )}

              </form>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12 mt-12 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <p>© {new Date().getFullYear()} NAV RAJ BASNET. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/resume" className="hover:text-foreground transition-colors">Resume</Link>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-foreground transition-colors">Back to Top</button>
          </div>
        </div>
      </footer>

    </div>
  )
}
