"use client"

import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CalendarCheck, Send, CheckCircle2, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_na33vyl', 
      'template_q1eh9pk', 
      form.current!, 
      'NLON9n33eOMNG_jmq'
    )
      .then(() => {
        setIsSuccess(true);
        setLoading(false);
        form.current?.reset();
      }, (error) => {
        console.log(error.text);
        setLoading(false);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-12 bg-[#020617] flex items-center justify-center font-montserrat">
      {/* Success Modal */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.9 }} 
              animate={{ scale: 1 }} 
              className="bg-slate-900 border border-slate-700 p-8 rounded-2xl max-w-sm text-center shadow-2xl"
            >
              <CheckCircle2 className="h-10 w-10 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2 font-run-alto">Message Sent</h3>
              <p className="text-white/70 mb-6 text-xs">I&apos;ll get back to you within 24 hours.</p>
              <Button 
                onClick={() => setIsSuccess(false)} 
                className="w-full bg-white text-black hover:bg-gray-200 font-bold py-3 rounded-lg"
              >
                Done
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl w-full px-6">
        {/* Statement Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-run-alto tracking-tight">Let&apos;s Build Your Vision</h2>
          <p className="text-white/60 text-lg md:text-xl italic font-medium max-w-2xl mx-auto leading-snug">
            "Engineering seamless interactions where complex functionality meets effortless usability."
          </p>
        </div>

        {/* Main Compressed Container */}
        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-5 gap-0">
            
            {/* Sidebar: Strategy Session */}
            <div className="lg:col-span-2 p-7 bg-white/[0.02] border-r border-white/10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-white/60 mb-3">
                <CalendarCheck className="h-4 w-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Strategy Session</span>
              </div>
              <h3 className="text-white font-bold mb-4 text-xl font-run-alto">45-min Deep Dive</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['$25', '€20', '£20', '3,000 KES'].map((p) => (
                  <span key={p} className="px-2.5 py-1 rounded-md bg-white/5 text-white text-[10px] font-bold border border-white/10">
                    {p}
                  </span>
                ))}
              </div>
              <Button asChild variant="link" className="text-white p-0 h-auto justify-start hover:opacity-70 font-bold text-sm underline underline-offset-4 transition-opacity">
                <a href="https://wa.me/254740091331">Reserve via WhatsApp</a>
              </Button>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-3 p-7 md:p-9">
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-white uppercase tracking-widest ml-1">Name</label>
                    <Input 
                      name="user_name" 
                      placeholder="Your Name" 
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus:border-white/40 focus:ring-0 h-11 rounded-lg text-sm" 
                      required 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-white uppercase tracking-widest ml-1">Email</label>
                    <Input 
                      name="user_email" 
                      type="email" 
                      placeholder="Email Address" 
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus:border-white/40 focus:ring-0 h-11 rounded-lg text-sm" 
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-white uppercase tracking-widest ml-1">Project Details</label>
                  <Textarea 
                    name="message" 
                    placeholder="Describe your vision..." 
                    rows={3} 
                    className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus:border-white/40 focus:ring-0 resize-none rounded-lg text-sm p-3" 
                    required 
                  />
                </div>
                <Button 
                  disabled={loading} 
                  type="submit" 
                  className="w-full bg-white text-black hover:bg-gray-200 py-6 font-black tracking-widest rounded-xl transition-all duration-300 text-sm uppercase"
                >
                  {loading ? "Sending..." : "Submit Inquiry"} <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}