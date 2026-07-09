"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Menu, 
  X 
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const sections = ["home", "about", "tech-stack", "projects", "experience", "contact"]
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [formStatus, setFormStatus] = useState("")

  // Active section tracking hook
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200 // offset for navigation highlight

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
    <div className="relative min-h-screen bg-[#000000] text-[#FFFFFF] selection:bg-white selection:text-black antialiased font-sans">
      
      {/* Premium Sticky Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/80 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 h-24 flex justify-between items-center">
          
          {/* Logo / Name */}
          <button 
            onClick={() => scrollToSection("home")}
            className="text-[11px] uppercase tracking-[0.3em] font-medium text-white hover:opacity-85 transition-opacity"
          >
            NAV RAJ BASNET
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-[10px] uppercase tracking-[0.25em] font-medium transition-colors duration-200 ${
                  activeSection === section 
                    ? "text-white font-semibold" 
                    : "text-[#737373] hover:text-white"
                }`}
              >
                {section.replace("-", " ")}
              </button>
            ))}
          </div>

          {/* Desktop Resume */}
          <div className="hidden md:block">
            <Link href="/resume">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#737373] hover:text-white border-b border-transparent hover:border-white pb-1 transition-all duration-300">
                Resume
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

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
            className="fixed top-24 left-0 right-0 z-40 bg-[#000000] border-b border-[#1C1C1C] py-8 px-6 md:hidden flex flex-col space-y-4"
          >
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-left text-[11px] uppercase tracking-[0.25em] py-2 transition-colors ${
                  activeSection === section ? "text-white font-medium" : "text-[#737373]"
                }`}
              >
                {section.replace("-", " ")}
              </button>
            ))}
            <div className="pt-4 border-t border-[#1C1C1C]">
              <Link href="/resume" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-[11px] uppercase tracking-[0.25em] text-white block py-2">
                  Resume
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content (Centered and spaced out) */}
      <main className="max-w-3xl mx-auto px-6 pt-24">

        {/* 1. Hero Section (Ultra Minimal Typography Focus) */}
        <section 
          id="home" 
          className="min-h-[calc(100vh-96px)] flex flex-col justify-center py-16"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-8"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#737373] font-semibold">
              Software Engineer & Game Developer
            </span>
            
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white leading-tight">
              NAV RAJ BASNET
            </h1>
            
            <p className="text-sm sm:text-base text-[#737373] leading-relaxed font-light">
              Designing and constructing high-fidelity system applications, client-side web infrastructures, and interactive game modules. Focused on strict minimalist design principles and precise, performant codebases.
            </p>

            <div className="flex gap-8 pt-4">
              <button 
                onClick={() => scrollToSection("projects")}
                className="text-xs uppercase tracking-[0.2em] text-white border-b border-white pb-1 hover:opacity-80 transition-opacity"
              >
                View Projects
              </button>
              
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-xs uppercase tracking-[0.2em] text-[#737373] border-b border-transparent hover:border-white pb-1 hover:text-white transition-all"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        </section>

        {/* 2. About Section (Editorial Layout, No Cards) */}
        <section id="about" className="py-24 border-t border-[#1C1C1C]">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            <div className="md:col-span-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#737373]">
                01 / About
              </span>
            </div>

            <div className="md:col-span-8 space-y-12">
              <h3 className="text-xl sm:text-2xl font-light text-white leading-relaxed">
                I am a CSIT undergraduate at Tribhuvan University, actively balancing advanced computer science research with engineering production code for client systems.
              </h3>
              
              <p className="text-sm text-[#737373] leading-relaxed font-light">
                My approach to development centers on extreme simplification. I strip out unnecessary design bloat and focus entirely on high-performance logic, clean spacing, and structural coherence. I believe the most robust solutions are also the most minimal.
              </p>

              {/* Minimal Stats Row (Borderless, just text and space) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t border-[#1C1C1C]">
                <div>
                  <span className="text-[10px] text-[#737373] block font-light uppercase tracking-wider">Experience</span>
                  <span className="text-base text-white font-medium mt-1 block">5+ Years</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#737373] block font-light uppercase tracking-wider">Completed</span>
                  <span className="text-base text-white font-medium mt-1 block">25+ Projects</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#737373] block font-light uppercase tracking-wider">Role</span>
                  <span className="text-base text-white font-medium mt-1 block">Freelancer</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. Tech Stack Section (Minimalist Categorized Text, No Box Outlines) */}
        <section id="tech-stack" className="py-24 border-t border-[#1C1C1C]">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            <div className="md:col-span-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#737373]">
                02 / Stack
              </span>
            </div>

            <div className="md:col-span-8 space-y-10">
              
              {[
                { category: "Languages", items: "C, C++, Python, PHP, Dart, HTML5/CSS3" },
                { category: "Frameworks & Native", items: "Flutter, OpenGL, React, Next.js, TypeScript, Tailwind CSS" },
                { category: "Backend & Services", items: "Supabase, Firebase, Node.js, Express, RESTful APIs" },
                { category: "Deployment & Tools", items: "Vercel, Git, GitHub, Docker" }
              ].map((group, idx) => (
                <div key={idx} className="grid sm:grid-cols-12 gap-2 sm:gap-6 items-baseline pb-6 border-b border-[#1C1C1C]/40 last:border-b-0">
                  <span className="sm:col-span-4 text-[10px] uppercase tracking-wider text-[#737373] font-medium">
                    {group.category}
                  </span>
                  <span className="sm:col-span-8 text-sm text-white font-light leading-relaxed">
                    {group.items}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* 4. Projects Section (Clean Typography & Flat Image Hover Layout) */}
        <section id="projects" className="py-24 border-t border-[#1C1C1C]">
          <div className="space-y-16">
            
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#737373]">
                03 / Projects
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
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
                  {/* Image wrapper */}
                  <div className="aspect-[16/10] w-full bg-[#0A0A0A] overflow-hidden rounded-xl border border-[#1C1C1C] transition-all duration-300 group-hover:border-white/30">
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
                      <h4 className="text-base font-normal text-white">
                        {proj.title}
                      </h4>
                      <span className="text-[10px] uppercase tracking-wider text-[#737373]">
                        {proj.category}
                      </span>
                    </div>

                    <p className="text-xs text-[#737373] leading-relaxed font-light">
                      {proj.desc}
                    </p>

                    {/* Tags and Links */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#1C1C1C]/40">
                      <div className="flex gap-2">
                        {proj.tags.map((t, idx) => (
                          <span key={idx} className="text-[9px] uppercase tracking-wider text-[#737373]">
                            #{t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        {proj.download ? (
                          <a 
                            href={proj.download}
                            download
                            className="text-[10px] uppercase tracking-wider text-white hover:underline flex items-center gap-1"
                          >
                            Download <ArrowUpRight size={10} />
                          </a>
                        ) : (
                          <span className="text-[10px] uppercase tracking-wider text-white flex items-center gap-1 cursor-pointer hover:underline">
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
        </section>

        {/* 5. Experience Section (Editorial Timeline, Clean Grid structure) */}
        <section id="experience" className="py-24 border-t border-[#1C1C1C]">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            <div className="md:col-span-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#737373]">
                04 / Experience
              </span>
            </div>

            <div className="md:col-span-8 space-y-12">
              
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
                <div key={idx} className="space-y-2 pb-8 border-b border-[#1C1C1C]/40 last:border-b-0 last:pb-0">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <h4 className="text-base font-normal text-white">
                      {exp.role}
                    </h4>
                    <span className="text-xs text-[#737373] font-light">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-[10px] text-[#737373] font-light uppercase tracking-wider">
                    {exp.company} — {exp.location}
                  </div>

                  <p className="text-xs text-[#737373] leading-relaxed font-light pt-2">
                    {exp.desc}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* 6. Contact Section (Minimal Flat Input Layout) */}
        <section id="contact" className="py-24 border-t border-[#1C1C1C]">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            {/* Left Contact Info */}
            <div className="md:col-span-4 space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#737373]">
                  05 / Contact
                </span>
                <h3 className="text-lg font-light text-white mt-4 leading-relaxed">
                  Let's construct something together.
                </h3>
              </div>

              <div className="space-y-2 text-xs text-[#737373] font-light">
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
                    className="text-[#737373] hover:text-white transition-colors"
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
                    <label className="text-[9px] uppercase tracking-widest text-[#737373]">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full bg-transparent border-t-0 border-x-0 border-b border-[#1C1C1C] rounded-none px-0 py-3 text-xs text-white focus:outline-none focus:border-white transition-colors placeholder-[#444444]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest text-[#737373]">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className="w-full bg-transparent border-t-0 border-x-0 border-b border-[#1C1C1C] rounded-none px-0 py-3 text-xs text-white focus:outline-none focus:border-white transition-colors placeholder-[#444444]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-[#737373]">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry"
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-[#1C1C1C] rounded-none px-0 py-3 text-xs text-white focus:outline-none focus:border-white transition-colors placeholder-[#444444]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-[#737373]">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your inquiry..."
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-[#1C1C1C] rounded-none px-0 py-3 text-xs text-white focus:outline-none focus:border-white transition-colors placeholder-[#444444] resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-white text-black hover:bg-[#E5E5E5] text-[10px] uppercase tracking-[0.2em] font-semibold rounded-xl transition-all duration-300"
                >
                  Send Message
                </Button>

                {formStatus && (
                  <p className="text-xs text-[#737373] text-center pt-2">{formStatus}</p>
                )}

              </form>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#1C1C1C] bg-[#000000] py-12 mt-12">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-[#737373]">
          <p>© {new Date().getFullYear()} NAV RAJ BASNET. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/resume" className="hover:text-white transition-colors">Resume</Link>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white transition-colors">Back to Top</button>
          </div>
        </div>
      </footer>

    </div>
  )
}
