/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Bot, 
  Workflow, 
  Layers, 
  Bug, 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  PhoneCall, 
  Cpu, 
  Compass, 
  Database,
  ArrowRight,
  Code,
  FileText,
  BadgeAlert,
  Terminal,
  ShieldCheck,
  Zap,
  Volume2
} from "lucide-react";
import { caseStudies } from "./data/caseStudies";
import { CaseStudy } from "./types";
import ROICalculator from "./components/ROICalculator";
import FlowchartCanvas from "./components/FlowchartCanvas";
import CaseStudyModal from "./components/CaseStudyModal";
import Scheduler from "./components/Scheduler";
import FAQSection from "./components/FAQSection";

export default function App() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [roleText, setRoleText] = useState("Automation Architect");
  const roles = ["Automation Architect", "Workflow Engineer", "Decoupled Integration Expert", "Systems Builder"];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleText((prev) => {
        const nextIdx = (roles.indexOf(prev) + 1) % roles.length;
        return roles[nextIdx];
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#131315] text-[#e5e1e4] font-sans antialiased min-h-screen selection:bg-[#ff6d1f] selection:text-[#5b1f00]">
      
      {/* Dynamic Global Header */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl rounded-full bg-[#131315]/60 backdrop-blur-xl border border-white/10 shadow-2xl z-50 transition-all duration-300">
        <div className="flex justify-between items-center px-6 py-3.5 max-w-7xl mx-auto">
          <a href="#" className="font-serif italic text-xl md:text-2xl text-[#ffb596] tracking-tighter duration-300 hover:scale-[1.02] flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#ff6d1f] animate-pulse" />
            LUNATIC_FLOW
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider">
            <a href="#about" className="text-[#e5e1e4] hover:text-[#ffb596] transition-colors">What I Do</a>
            <a href="#roi" className="text-stone-400 hover:text-[#ffb596] transition-colors">ROI Calculator</a>
            <a href="#workflows" className="text-[#ff6d1f] transition-all bg-[#ff6d1f]/10 px-3 py-1 rounded-md border border-[#ff6d1f]/20">Live Pipelines</a>
            <a href="#studies" className="text-stone-400 hover:text-[#ffb596] transition-colors">Case Studies</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="#contact" 
              className="px-5 py-2 rounded-full bg-[#ff6d1f] text-[#5b1f00] font-sans font-bold text-xs hover:bg-[#ffb596] transition-all duration-300 active:scale-95 shadow-lg shadow-[#ff6d1f]/10 cursor-pointer"
            >
              Book Consult
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
        {/* Abstract Background with Hotlinked image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img 
            alt="Abstract rendering of high-end technical nodes pulsing with orange and purple light" 
            src="https://lh3.googleusercontent.com/aida/AP1WRLu5yX2riyvfvkddd5G16alRWikfshSv3G-rmanyOjvPRs8MxZZlMxeiaPo31qMrwr2REwY6uWpQBNWoaGJZ6P5WcW4O2n91duT351yZm6R_WoORMUQJfpEmYP9eCk0_ik_O24HNiUUOTMHti5Gzx2KvBDGKl9w7hFYYDl4SSfAXBiko6AK7-yE3o4IJ_Qv254hAhgcZ0CJxbi4GEOeZfjnvgCUHJW_s6ngzPuFLkbTRspDKe1NMspva5RWt"
            className="w-full h-full object-cover opacity-35 mix-blend-screen scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Edge gradients targeting readibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#131315]/95 via-[#131315]/70 to-[#131315]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#131315] to-transparent" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 25 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
        >

          {/* Elite Title Typography pairing */}
          <h1 className="font-serif italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-stone-100 tracking-tight leading-none mb-6">
            <span className="text-[#ffb596] block not-italic font-bold font-sans tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-4">
              Hamdan Elahi
            </span>
            Designing Precision
          </h1>

          <p className="font-sans text-[#e1bfb2] text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            A specialized <span className="text-[#ff6d1f] font-semibold">{roleText}</span>. We build custom, secure, event-driven automation loops that turn messy manual steps into zero-compute revenue machinery.
          </p>

          {/* Interactive Hero action links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 w-full max-w-md">
            <a 
              href="#studies" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#ff6d1f] hover:bg-[#ffb596] text-[#5b1f00] font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl hover:shadow-[#ff6d1f]/10"
            >
              See Proof of Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/10 hover:border-[#ff6d1f] hover:bg-white/5 text-[#e5e1e4] font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 text-center"
            >
              Book Consultation
            </a>
          </div>

          {/* Hotlinks social references metadata banner */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-stone-500 border-t border-white/5 pt-8 w-full max-w-2xl font-mono">
            <a 
              href="#contact" 
              className="hover:text-[#ffb596] flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#ff6d1f]" /> Key Contact
            </a>
            <span className="text-stone-800">|</span>
            <a 
              href="https://www.linkedin.com/in/hamdanelahi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#ffb596] flex items-center gap-1.5 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#ff6d1f]" /> LinkedIn Profile
            </a>
            <span className="text-stone-800">|</span>
            <a 
              href="https://github.com/HamdanElahi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#ffb596] flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-[#ff6d1f]" /> GitHub Repo
            </a>
          </div>

        </motion.div>
      </section>

      {/* Intro Context Card "What I Do" */}
      <section id="about" className="py-24 bg-[#0e0e10] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs text-[#ff6d1f] uppercase tracking-widest font-bold block">
                [ 🎯 ARCHITECTURE DISCIPLINE ]
              </span>
              <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-[#e5e1e4] tracking-tight leading-tight">
                I replace clunky loops with resilient automation pipelines
              </h2>
              <p className="font-sans text-stone-400 text-sm md:text-base leading-relaxed">
                I bridge the gap between volatile enterprise data streams and advanced AI models (Gemini, OpenAI, Claude). Instead of managing expensive server setups that stack idle costs, I develop clean visual logic flows that remain dormant until triggered by direct API payloads, responding in fractions of a second.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="bg-[#1c1b1d]/50 p-6 rounded-xl border border-white/5 hover:border-[#ff6d1f]/40 hover:-translate-y-1 shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-[#c4abff] flex items-center justify-center mb-4">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="font-sans text-sm font-bold text-[#e5e1e4] mb-2">
                  Custom n8n Orchestration
                </h3>
                <p className="text-stone-400 text-xs leading-normal">
                  Building visual backend systems and state managers that maintain absolute stability under massive fluctuating payloads.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#1c1b1d]/50 p-6 rounded-xl border border-white/5 hover:border-[#ff6d1f]/40 hover:-translate-y-1 shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-[#ffb596] flex items-center justify-center mb-4">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="font-sans text-sm font-bold text-[#e5e1e4] mb-2">
                  Context-Aware AI Ingress
                </h3>
                <p className="text-stone-400 text-xs leading-normal">
                  Moving beyond basic static queries. Mapping live nested API metrics directly into models for structured workforce directives.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#1c1b1d]/50 p-6 rounded-xl border border-white/5 hover:border-[#ff6d1f]/40 hover:-translate-y-1 shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-sky-400 flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-sans text-sm font-bold text-[#e5e1e4] mb-2">
                  Secure Schema Integration
                </h3>
                <p className="text-stone-400 text-xs leading-normal">
                  Connecting CRMs, Airtables, and spreadsheets asynchronously with Table-bounded personal access tokens minimizing leak factors.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-[#1c1b1d]/50 p-6 rounded-xl border border-white/5 hover:border-[#ff6d1f]/40 hover:-translate-y-1 shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4">
                  <Bug className="w-5 h-5" />
                </div>
                <h3 className="font-sans text-sm font-bold text-[#e5e1e4] mb-2">
                  Production-Grade Audits
                </h3>
                <p className="text-stone-400 text-xs leading-normal">
                  Hardening code solutions against rate ceilings, transaction exceptions, HTTP 400/402 codes, and cross-platform bottlenecks.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Systems Topology Builder */}
      <FlowchartCanvas />

      {/* ROI Calculator Section */}
      <ROICalculator />

      {/* Live Case Studies Grid */}
      <section id="studies" className="py-24 bg-[#0e0e10] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="font-mono text-xs text-[#ff6d1f] uppercase tracking-widest font-bold block mb-2">
                [ 🚀 PROOF OF WORK & AUTENTICITY ]
              </span>
              <h2 className="font-serif italic text-4xl sm:text-5xl text-[#e5e1e4]">
                Enterprise Case Studies
              </h2>
            </div>
            <p className="font-sans text-stone-400 text-xs md:text-sm max-w-md">
              Unpack the complete technical blueprints, verified sandbox logs, production code snips, and real-world results of automation integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div 
                key={study.id}
                className="bg-[#1c1b1d]/50 rounded-2xl overflow-hidden border border-white/5 flex flex-col justify-between group hover:border-[#ff6d1f]/35 hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                {/* Visual Comparative header card representation */}
                <div className="bg-[#131315] p-6 border-b border-white/5 min-h-[140px] flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-[#ff6d1f]/10 to-transparent blur-xl rounded-full" />
                  
                  <div className="flex items-center gap-2 mb-3 z-10">
                    <span className="px-2 py-0.5 rounded bg-white/5 font-mono text-[9px] uppercase tracking-wider text-stone-500 font-bold">
                      {study.category}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="font-mono text-[9px] text-stone-500 font-medium lowercase">production verified</span>
                  </div>

                  <div className="flex items-center gap-4 z-10">
                    <div className="px-3 py-1.5 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono line-through shrink-0">
                      {study.beforeLabel.split(":")[1] || study.beforeLabel}
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-600" />
                    <div className="px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold shrink-0">
                      {study.afterLabel.split(":")[1] || study.afterLabel}
                    </div>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans text-base font-bold text-[#e5e1e4] group-hover:text-[#ffb596] transition-colors mb-2 leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-[#e1bfb2] text-xs leading-relaxed line-clamp-3">
                      {study.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex justify-between items-end">
                    <div>
                      <div className="font-serif italic text-3xl text-[#ff6d1f] font-normal leading-none mb-1">
                        {study.metricValue}
                      </div>
                      <div className="font-mono text-[9px] text-stone-500 uppercase tracking-wider">
                        {study.metricUnit}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedStudy(study)}
                      className="px-4 py-2 rounded bg-white/5 hover:bg-white/10 text-xs font-semibold text-stone-300 transition-colors flex items-center gap-1.5 cursor-pointer border border-white/5"
                    >
                      Audit Architecture <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Marquee text ticker decoration */}
      <section className="bg-[#131315] border-y border-white/5 py-6 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee inline-block font-serif text-xl sm:text-2xl text-stone-700 tracking-wider uppercase px-4 select-none pointer-events-none">
          SYSTEM INTEGRITY • DECOUPLED ARCHITECTURE • ZERO COMPUTE HOVERS • HIGH FREQUENCY LOGIC • EVENT ROUTING • EXCEPTION AUDITING • 
        </div>
        <div className="animate-marquee inline-block font-serif text-xl sm:text-2xl text-stone-700 tracking-wider uppercase px-4 select-none pointer-events-none" style={{ animationDelay: "10s" }}>
          SYSTEM INTEGRITY • DECOUPLED ARCHITECTURE • ZERO COMPUTE HOVERS • HIGH FREQUENCY LOGIC • EVENT ROUTING • EXCEPTION AUDITING • 
        </div>
      </section>

      {/* Technical Toolkit Grid */}
      <section className="py-24 bg-[#131315] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-[#ff6d1f] uppercase tracking-widest font-bold block mb-2">
              [ 🛠️ COMBINATIONAL STACK ]
            </span>
            <h2 className="font-serif italic text-4xl md:text-5xl text-[#e5e1e4] tracking-tight">
              The Specialized Toolkit
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1 */}
            <div className="bg-[#1c1b1d]/40 p-6 rounded-xl border border-white/5 space-y-4">
              <div className="font-sans text-xs font-bold text-[#ffb596] uppercase tracking-wider block">
                Automation Engines
              </div>
              <ul className="space-y-2 text-xs text-[#e1bfb2] leading-normal font-mono">
                <li>• n8n Orchestrator (Expert)</li>
                <li>• Make & Zapier Core</li>
                <li>• Webhook Endpoint Routing</li>
                <li>• Decoupled Expression Binding</li>
              </ul>
            </div>

            {/* Box 2 */}
            <div className="bg-[#1c1b1d]/40 p-6 rounded-xl border border-white/5 space-y-4">
              <div className="font-sans text-xs font-bold text-[#ffb596] uppercase tracking-wider block">
                Intelligence Loops
              </div>
              <ul className="space-y-2 text-xs text-[#e1bfb2] leading-normal font-mono">
                <li>• Google Gemini SDK / API</li>
                <li>• OpenRouter Edge Gateways</li>
                <li>• OpenAI API / Custom Agents</li>
                <li>• Advanced Prompt Templates</li>
              </ul>
            </div>

            {/* Box 3 */}
            <div className="bg-[#1c1b1d]/40 p-6 rounded-xl border border-white/5 space-y-4">
              <div className="font-sans text-xs font-bold text-[#ffb596] uppercase tracking-wider block">
                Scripting & Formatting
              </div>
              <ul className="space-y-2 text-xs text-[#e1bfb2] leading-normal font-mono">
                <li>• Python (Requests, I/O)</li>
                <li>• Nested JSON Schema parsing</li>
                <li>• Bash / PowerShell scripting</li>
                <li>• Structured UTF-8 format</li>
              </ul>
            </div>

            {/* Box 4 */}
            <div className="bg-[#1c1b1d]/40 p-6 rounded-xl border border-white/5 space-y-4">
              <div className="font-sans text-xs font-bold text-[#ffb596] uppercase tracking-wider block">
                Databases & Channels
              </div>
              <ul className="space-y-2 text-xs text-[#e1bfb2] leading-normal font-mono">
                <li>• Airtable (Personal Access)</li>
                <li>• Google Sheets API</li>
                <li>• Discord Webhooks (Urgent)</li>
                <li>• Slack custom bot triggers</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Booking Scheduler Pipeline */}
      <Scheduler />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Value Proposition Consultation Package Block */}
      <section className="py-24 bg-[#0e0e10] border-t border-white/5 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-xs text-[#ffb596] uppercase tracking-widest font-bold block mb-4">
            Fixed-Scope MVP Infrastructure Deliverables
          </span>
          <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-[#e5e1e4] tracking-tight mb-8">
            Secure visual backend architectures built to last.
          </h2>

          <div className="bg-[#1c1b1d]/80 border border-white/5 rounded-2xl p-8 max-w-2xl mx-auto text-left shadow-2xl space-y-6">
            <h3 className="font-serif text-2xl text-[#ff6d1f] italic border-b border-white/5 pb-3">
              The MVP Ingestion Block ($500 - $1,500)
            </h3>
            
            <p className="text-stone-400 text-xs md:text-sm leading-relaxed">
              I will map out, bundle, and deploy a secure, 4-stage visual automation infrastructure designed for your special use case:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-[#e1bfb2]">
              <div className="bg-[#131315] p-3 rounded-lg border border-white/2 flex items-center gap-3">
                <span className="text-[#ff6d1f]">01/</span> 1 Webhook Gateway
              </div>
              <div className="bg-[#131315] p-3 rounded-lg border border-white/2 flex items-center gap-3">
                <span className="text-[#ff6d1f]">02/</span> 1 Context AI Layer
              </div>
              <div className="bg-[#131315] p-3 rounded-lg border border-white/2 flex items-center gap-3">
                <span className="text-[#ff6d1f]">03/</span> 1 Sandboxed Airtable
              </div>
              <div className="bg-[#131315] p-3 rounded-lg border border-white/2 flex items-center gap-3">
                <span className="text-[#ff6d1f]">04/</span> 1 Instant Escalator alert
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-xs text-stone-500 font-sans">
                * Handed off under standard non-breaking credential wraps.
              </span>
              <a 
                href="#contact" 
                className="px-6 py-2.5 rounded bg-[#ff6d1f] hover:bg-[#ffb596] text-[#5b1f00] font-sans font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto text-center"
              >
                Claim Package
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Global Footer */}
      <footer className="bg-[#0e0e10] border-t border-white/5 py-12 text-center text-xs text-stone-500 font-mono space-y-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="font-serif italic text-2xl text-[#ffb596] tracking-wider mb-6">
            LUNATIC_FLOW
          </div>

          <div className="flex justify-center items-center gap-6 text-stone-400 mb-8 font-sans font-medium text-xs">
            <a href="#about" className="hover:text-[#ffb596] transition-colors">Service Scope</a>
            <span>•</span>
            <a href="#roi" className="hover:text-[#ffb596] transition-colors">ROI Calculator</a>
            <span>•</span>
            <a href="#workflows" className="hover:text-[#ffb596] transition-colors font-semibold text-[#ff6d1f]">Visual Pipelines</a>
            <span>•</span>
            <a href="#studies" className="hover:text-[#ffb596] transition-colors">Case Audits</a>
          </div>

          <p className="text-stone-600 max-w-sm mx-auto text-[10px] leading-relaxed">
            Designed for enterprise founders seeking robust, non-volatile workflow pipelines and serverless automation frameworks.
          </p>

          <div className="pt-8 text-[10px] text-stone-700">
            © 2026 LUNATIC_FLOW. HAMDAN ELAHI ALL RIGHTS VERIFIED.
          </div>

        </div>
      </footer>

      {/* Case Study Detailed Viewport Modal */}
      {selectedStudy && (
        <CaseStudyModal 
          study={selectedStudy} 
          onClose={() => setSelectedStudy(null)} 
        />
      )}

    </div>
  );
}
