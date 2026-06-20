import { useState } from "react";
import { CaseStudy } from "../types";
import { X, Check, Copy, Code, List, Award, Terminal, AlertTriangle, Cpu, HelpCircle } from "lucide-react";

interface CaseStudyModalProps {
  study: CaseStudy;
  onClose: () => void;
}

export default function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (study.codeSnippet) {
      navigator.clipboard.writeText(study.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-[#1c1b1d] border border-white/5 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl my-8 relative flex flex-col max-h-[90vh]">
        
        {/* Header decoration banner */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#ff6d1f] via-[#571bc1] to-[#9ecaff]" />

        {/* Modal Header */}
        <div className="p-6 md:p-8 border-b border-white/5 flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded bg-[#ff6d1f]/10 text-[#ffb596] text-[10px] uppercase font-bold tracking-widest">
                {study.category}
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 text-stone-400 text-[10px] uppercase font-mono font-bold tracking-wider">
                Production Audited
              </span>
            </div>
            <h3 className="font-serif italic text-2xl md:text-3xl text-[#e5e1e4] tracking-tight">
              {study.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/5 text-stone-400 hover:text-[#e5e1e4] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Contents */}
        <div className="p-6 md:p-8 space-y-8 overflow-y-auto flex-1">
          
          {/* Executive Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8 space-y-4">
              <h4 className="font-sans text-xs font-bold text-[#ffb596] uppercase tracking-wide">
                Executive Problem & Solution
              </h4>
              <p className="font-sans text-stone-300 text-xs md:text-sm leading-relaxed">
                <strong className="text-[#e5e1e4]">Problem:</strong> {study.problem}
              </p>
              <p className="font-sans text-stone-300 text-xs md:text-sm leading-relaxed">
                <strong className="text-[#e5e1e4]">Solution:</strong> {study.solution}
              </p>
            </div>

            {/* Metrics Sidebar */}
            <div className="md:col-span-4 bg-[#131315] p-5 rounded-xl border border-white/5 space-y-3">
              <span className="text-[10px] text-stone-500 block uppercase tracking-wider font-mono">
                Verified ROI Metrics
              </span>
              <div className="border-b border-white/5 pb-2">
                <div className="font-mono text-xs text-stone-400">Response Delay</div>
                <div className="font-serif italic text-3xl text-[#ff6d1f]">{study.beforeLabel.split(":")[1] || study.beforeLabel}</div>
              </div>
              <div className="border-b border-white/5 pb-2">
                <div className="font-mono text-xs text-stone-400">Post-Automation</div>
                <div className="font-serif italic text-3xl text-emerald-400">{study.afterLabel.split(":")[1] || study.afterLabel}</div>
              </div>
              <div>
                <div className="font-mono text-xs text-stone-400">Overall Footprint Decrease</div>
                <div className="font-sans text-2xl text-[#c4abff] font-bold">{study.metricValue} <span className="text-xs text-stone-400 font-normal">{study.metricUnit}</span></div>
              </div>
            </div>
          </div>

          {/* Core Topology Pipeline */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-bold text-[#ffb596] uppercase tracking-wide flex items-center gap-2">
              <List className="w-4 h-4 text-[#ffb596]" /> Architectural Transaction Stages
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {study.pipelineStages.map((stage, idx) => (
                <div key={idx} className="bg-[#131315]/50 p-4 rounded-xl border border-white/5 flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/5 text-[#ffb596] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-bold text-[#e5e1e4] mb-1">
                      {stage.name}
                    </h5>
                    <p className="font-sans text-stone-400 text-[11px] leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Code Snippet Module */}
          {study.codeSnippet && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-sans text-xs font-bold text-[#ffb596] uppercase tracking-wide flex items-center gap-2">
                  <Code className="w-4 h-4" /> Production Implementation Script
                </h4>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-stone-500">
                    {study.codeSnippet.filename}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#131315] hover:bg-white/5 border border-white/5 text-[10px] text-stone-300 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Mock code editor */}
              <div className="bg-[#0e0e10] border border-white/5 rounded-xl overflow-hidden shadow-inner">
                {/* Editor Top Bar */}
                <div className="bg-[#131315] px-4 py-2 border-b border-white/3 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="font-mono text-[9px] text-stone-500 ml-2">
                    {study.codeSnippet.language === "python" ? "Python Runtime Stream" : "JSON Layout Schema"}
                  </span>
                </div>
                
                {/* Code viewport container */}
                <div className="p-4 overflow-x-auto max-h-[250px] font-mono text-[11px] text-[#e5e1e4] leading-relaxed whitespace-pre bg-[#0e0e10]">
                  <code>{study.codeSnippet.code}</code>
                </div>
              </div>
            </div>
          )}

          {/* Section: Completed Breakthroughs */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-bold text-[#ffb596] uppercase tracking-wide flex items-center gap-2">
              <Award className="w-4 h-4 text-[#ffb596]" /> Engineered Breakthroughs
            </h4>
            
            <div className="space-y-3">
              {study.breakthroughs.map((b, idx) => (
                <div key={idx} className="bg-[#1c1b1d] p-4 rounded-xl border-l-2 border-l-[#ff6d1f] border-r border-t border-b border-white/5 flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#ff6d1f] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-sans text-xs font-semibold text-[#e5e1e4] mb-1">
                      {b.title}
                    </h5>
                    <p className="font-sans text-stone-400 text-xs leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Realworld Execution Audit logs */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-bold text-[#ffb596] uppercase tracking-wide flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#ffb596]" /> Dynamic Simulation & Audit Data
            </h4>
            
            <div className="space-y-3">
              {study.auditTrail.map((trial, idx) => (
                <div key={idx} className="bg-[#131315] p-5 rounded-xl border border-white/5 space-y-4">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="font-sans text-xs font-bold text-[#e1bfb2]">
                      {trial.scenario}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full font-mono text-[9px] ${
                      trial.isUrgent ? "bg-rose-500/10 text-rose-400" : "bg-blue-500/10 text-blue-400"
                    }`}>
                      {trial.isUrgent ? "System Trigger Active" : "Logged Passive"}
                    </span>
                  </div>
                  <p className="font-sans text-stone-400 text-xs">
                    {trial.details}
                  </p>
                  
                  {trial.output && (
                    <div className="bg-[#0e0e10] p-3 rounded-lg border border-white/3 font-mono text-[10px] text-stone-300 leading-relaxed whitespace-pre-line">
                      <span className="text-[#ff6d1f] font-mono mr-2">&gt;_</span>
                      {trial.output}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-white/5 bg-[#131315] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-stone-500 text-[10px] uppercase tracking-wider text-center sm:text-left">
            * Fully verified against rate timeouts and encoding anomalies.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-stone-300 transition-colors cursor-pointer w-full sm:w-auto"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
}
