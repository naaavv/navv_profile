"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactSectionPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Sending...")

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus("Message sent successfully!")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("Failed to send message.")
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again later.")
    }
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white antialiased font-sans selection:bg-white selection:text-black">
      
      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 py-8 border-b border-[#2A2A2A]">
        <Link href="/" className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8E8E93] hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="max-w-xl mx-auto px-6 py-16 md:py-24">
        
        <div className="space-y-4 text-center mb-12">
          <span className="text-[10px] uppercase tracking-widest text-[#8E8E93] font-semibold">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            CONTACT ME
          </h1>
          <p className="text-sm text-[#8E8E93] leading-relaxed max-w-sm mx-auto">
            Have a question or want to collaborate? Fill out the form below, and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-wider text-[#8E8E93] font-medium block">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full h-12 px-4 rounded-xl bg-[#121212] border border-[#2A2A2A] text-sm text-white focus:outline-none focus:border-white transition-colors placeholder-[#444444]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-wider text-[#8E8E93] font-medium block">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full h-12 px-4 rounded-xl bg-[#121212] border border-[#2A2A2A] text-sm text-white focus:outline-none focus:border-white transition-colors placeholder-[#444444]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-xs uppercase tracking-wider text-[#8E8E93] font-medium block">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                className="w-full h-12 px-4 rounded-xl bg-[#121212] border border-[#2A2A2A] text-sm text-white focus:outline-none focus:border-white transition-colors placeholder-[#444444]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-wider text-[#8E8E93] font-medium block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project or inquiry..."
                className="w-full p-4 rounded-xl bg-[#121212] border border-[#2A2A2A] text-sm text-white focus:outline-none focus:border-white transition-colors placeholder-[#444444] resize-none"
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-white text-black hover:bg-[#E5E5E5] text-xs uppercase tracking-widest font-semibold rounded-xl transition-all duration-300"
            >
              Send Message
            </Button>
          </form>

          {status && (
            <p className="text-xs text-[#8E8E93] text-center pt-2">{status}</p>
          )}
        </div>

        {/* Contact details footer */}
        <div className="mt-12 pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#8E8E93]">
          <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> basnetnavraj4@gmail.com</span>
          <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> +977 9864726814</span>
          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Nepalgunj, Nepal</span>
        </div>

      </main>

    </div>
  )
}
