"use client"

import { useState } from "react"



import { useEffect, useRef } from "react"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Code, ExternalLink, Github, InstagramIcon, Linkedin, LinkedinIcon, Mail, TwitchIcon, TwitterIcon, User, X } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
          >
            NAV
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            {["Home", "About", "Projects", "Skills", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-white/80 hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/resume">
              <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-500/20">
                Resume
              </Button>
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-40 h-40 rounded-full border-4 border-purple-500 overflow-hidden mb-8"
          >
            <img src="/profile.jpg?height=160&width=160" alt="NAV" className="w-full h-full object-cover" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
              NAV
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl"
          >
            <TypewriterEffect text="A passionate Game Developer and Software Developer" delay={50} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/contactsection">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Get in Touch
              </Button>
            </Link>

            <Link href="/resume">
              <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-500/20">
                View Resume
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            >
              <ArrowDown className="w-6 h-6 text-white/60" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection id="about">
        <div className="container mx-auto px-4 py-20">
          <SectionTitle>About Me</SectionTitle>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transform rotate-3"></div>
              <img
                src="/xyz.jpg?height=400&width=500"
                alt="About NAV"
                className="relative rounded-lg w-full h-auto z-10"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
              <p className="text-white/80 mb-6">
                I'm a passionate developer with a keen eye for design and a love for creating seamless user experiences.
                With expertise in modern web technologies, I bring ideas to life through clean code and creative
                solutions.
              </p>
              <p className="text-white/80 mb-6">
                My journey in tech began with a curiosity about how things work, which evolved into a career building
                digital products that make a difference. I believe in continuous learning and pushing the boundaries of
                what's possible in web development.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">Name:</h4>
                  <p className="text-white/80">Nav Raj Basnet</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Email:</h4>
                  <p className="text-white/80">basnetnavraj4@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Location:</h4>
                  <p className="text-white/80">Nepalgunj, Nepal</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Availability:</h4>
                  <p className="text-white/80"> Part Time Dev and Student</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" className="bg-zinc-900/50">
        <div className="container mx-auto px-4 py-20">
          <SectionTitle>My Projects</SectionTitle>
          <Tabs defaultValue="all" className="w-full mb-10">
            <TabsList className="mx-auto bg-zinc-800/50">
              {["All", "Web", "Mobile", "Desktop", "Games"].map((category) => (
                <TabsTrigger key={category} value={category.toLowerCase()}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[

                  {
                    title: "AnyX App",
                    category: "Mobile Development",
                    image: "/placeholder.svg?height=300&width=400",
                  },

                  {
                    title: "Task Management",
                    category: "Web Development",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    title: "Fitness Tracker",
                    category: "Mobile Development",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    title: "Car Portal",
                    category: "Open World Game",
                    image: "/placeholder.svg?height=300&width=400",
                  },

                ].map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </TabsContent>

            {/* This is The Game Section */}
            <TabsContent value="games" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Car Portal",
                    category: "Open World Game",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                ].map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </TabsContent>

            {/* Mobile projects would be filtered here */}
            <TabsContent value="mobile" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Fitness Tracker",
                    category: "Mobile Development",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                  {
                    title: "AnyX App",
                    category: "Mobile Development",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                ].map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </TabsContent>

            {/* Web projects would be filtered here */}
            <TabsContent value="web" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Elite Social Club Website",
                    category: "Web Development",
                    image: "/placeholder.svg?height=300&width=400",
                  },
                ].map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </TabsContent>


            {/* Other tabs would have filtered content */}
            <TabsContent value="web" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Web projects would be filtered here */}


              </div>
            </TabsContent>

            <TabsContent value="desktop" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Desktop projects would be filtered here */}
                {[
                  {
                    title: "CalcX",
                    category: "Desktop Development",
                    image: "/calcx_image.png?height=250&width=350",
                  },
                  {
                    title: "SecurePassPro",
                    category: "Desktop Development",
                    image: "/mockup.png?height=250&width=350",
                    download: "/SecurePassPro_Setup.exe",
                  },
                ].map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills">
        <div className="container mx-auto px-4 py-20">
          <SectionTitle>My Skills</SectionTitle>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              {[
                { name: "HTML/CSS", percentage: 75, value: 75 },
                { name: "JavaScript", percentage: 40, value: 40 },
                { name: "React", percentage: 45, value: 45 },
                { name: "Node.js", percentage: 50, value: 50 },
                { name: "Unreal Engine", percentage: 40, value: 40 },
                { name: "Unity", percentage: 85, value: 85 },
              ].map((skill, index) => (
                <SkillBar key={index} skill={skill} index={index} />
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Professional Skills</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: "Communication", value: 90 },
                  { name: "Teamwork", value: 85 },
                  { name: "Problem Solving", value: 95 },
                  { name: "Creativity", value: 80 },
                ].map((skill, index) => (
                  <CircularSkill
                    key={index}
                    skill={{ ...skill, percentage: skill.value }}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="bg-zinc-900/50">
        <div className="container mx-auto px-4 py-20">
          <SectionTitle>Get In Touch</SectionTitle>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-white/80 mb-8">
                Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new
                projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Mail className="w-5 h-5" />, title: "Email", value: "basnetnavraj4@gmail.com" },
                  { icon: <User className="w-5 h-5" />, title: "Phone", value: "+977 9864726814" },
                  { icon: <Github className="w-5 h-5" />, title: "Github", value: "github.com/Nav0077" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-white/80">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-zinc-800/50 p-6 rounded-lg border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-zinc-700/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-zinc-700/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 bg-zinc-700/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-zinc-700/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mb-4"
          >
            NAV
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-6"
          >
            {[
              { name: "github", href: "https://github.com/Nav0077", icon: <Github className="w-5 h-5" /> },
              { name: "twitter", href: "https://x.com/Nav0777777", icon: <TwitterIcon className="w-5 h-5" /> },
              { name: "linkedin", href: "https://www.linkedin.com/in/nav-b-9310b9312", icon: <LinkedinIcon className="w-5 h-5" /> },
              { name: "instagram", href: "https://www.instagram.com/nav7777x", icon: <InstagramIcon className="w-5 h-5" /> },
              { name: "own-logo", href: "/", icon: <img src="/profile.jpg" alt="Own Logo" className="w-5 h-5" /> },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white/80 hover:bg-purple-500 hover:text-white transition-colors"
              >
                <span className="sr-only">{social.name}</span>
                {social.icon}
              </a>
            ))}

          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white/60"
          >
            © {new Date().getFullYear()} NAV. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  )
}

// Helper Components
function AnimatedSection({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id={id} ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
      >
        {children}
      </motion.div>
    </section>
  )
}

import { ReactNode } from "react";

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold inline-block relative">
        {children}
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
        ></motion.span>
      </h2>
    </motion.div>
  )
}

interface Project {
  title: string;
  category: string;
  image: string;
  download?: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-lg"
    >
      <div className="aspect-video overflow-hidden rounded-lg">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 rounded-2xl">
        <h3 className="text-2xl font-semibold text-white drop-shadow-md">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.category}</p>

        <div className="flex gap-3">
          <Button
            size="sm"
            variant="outline"
            className="flex items-center gap-2 rounded-xl border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:scale-105 transition-transform duration-300"
          >
            <Github className="w-4 h-4" /> Code
          </Button>

          <Button
            size="sm"
            variant="outline"
            className="flex items-center gap-2 rounded-xl border-pink-400/40 bg-pink-500/10 backdrop-blur-md text-white hover:bg-pink-500/20 hover:scale-105 transition-transform duration-300"
          >
            <ExternalLink className="w-4 h-4" /> Demo
          </Button>
          {project.download && (
            <a
              href={project.download}
              download
              className="flex items-center gap-2 rounded-xl border-green-400/40 bg-green-500/10 backdrop-blur-md text-white hover:bg-green-500/20 hover:scale-105 transition-transform duration-300 px-4 py-2 text-sm border outline-none"
              style={{ textDecoration: "none" }}
            >
              <ArrowDown className="w-4 h-4" /> Download
            </a>
          )}
        </div>
      </div>

    </motion.div>
  )
}

interface Skill {
  name: string;
  percentage: number;
  value: number; // Added the 'value' property
}

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span>{skill.percentage}%</span>
      </div>
      <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
        ></motion.div>
      </div>
    </div>
  )
}

function CircularSkill({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <div className="relative w-24 h-24 mb-2">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-zinc-700 stroke-current"
            strokeWidth="8"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          ></circle>
          <motion.circle
            className="text-purple-500 stroke-current"
            strokeWidth="8"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            initial={{ strokeDasharray: "251.2", strokeDashoffset: "251.2" }}
            whileInView={{
              strokeDashoffset: 251.2 - (251.2 * skill.value) / 100,
            }}
            transition={{ duration: 1.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          ></motion.circle>
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <span className="text-xl font-bold">{skill.value}%</span>
        </div>
      </div>
      <p className="text-center">{skill.name}</p>
    </motion.div>
  )
}

function TypewriterEffect({ text, delay = 50 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return <span>{displayText}</span>
}
