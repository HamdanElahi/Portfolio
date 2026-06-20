import React, { useState } from "react";
import { Webhook, Brain, Database, MessageSquare, AlertCircle, RefreshCw, FileText, ShoppingCart, ShieldAlert, Cpu } from "lucide-react";

type FlowTab = "leadTriage" | "weatherPipeline" | "ecommerceOrder";

interface NodeData {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  colorClass: string;
  borderColor: string;
  tooltip: string;
  meta?: string;
}

const flows: Record<FlowTab, {
  title: string;
  description: string;
  ref: string;
  nodes: NodeData[];
}> = {
  leadTriage: {
    title: "AI Lead Triage",
    description: "An event-driven visual orchestration pipeline qualifying inbound prospects instantly without human intervention.",
    ref: "n8n_lead_qualifier_workflow.json",
    nodes: [
      {
        icon: <Webhook className="w-5 h-5" />,
        title: "Webhook Inbound",
        subtitle: "Zero-Compute Gateway",
        colorClass: "bg-orange-500/15 text-[#ff6d1f]",
        borderColor: "hover:border-[#ff6d1f]",
        tooltip: "Listens continuously for transactional REST POST requests, remaining dormant at zero compute until hit.",
        meta: "POST /webhook/lead-ingress"
      },
      {
        icon: <Brain className="w-5 h-5" />,
        title: "Gemini 2.5 Flash",
        subtitle: "Constraint Qualification",
        colorClass: "bg-purple-500/15 text-[#c4abff]",
        borderColor: "hover:border-[#571bc1]",
        tooltip: "Evaluates raw context and matches budget boundaries, isolating strategic value.",
        meta: "google/gemini-2.5-flash"
      },
      {
        icon: <Database className="w-5 h-5" />,
        title: "Airtable Logging",
        subtitle: "Sandboxed Database Write",
        colorClass: "bg-blue-500/15 text-[#9ecaff]",
        borderColor: "hover:border-[#00345b]",
        tooltip: "Logs client parameters securely through scoped Personal Access Tokens to restrict breach risk.",
        meta: "tblX92aSecureLayout"
      },
      {
        icon: <MessageSquare className="w-5 h-5" />,
        title: "Discord alert",
        subtitle: "Millisecond Handoff",
        colorClass: "bg-green-500/15 text-emerald-400",
        borderColor: "hover:border-emerald-500",
        tooltip: "Pushes formatted rich-text alert immediately to team channel with automated @mention alerts.",
        meta: "Webhook -> #urgent-leads"
      }
    ]
  },
  weatherPipeline: {
    title: "Weather Context AI",
    description: "A Python pipeline querying atmospheric metrics to parse and feed dynamically into LLM safety models.",
    ref: "weather_ai_ingress.py",
    nodes: [
      {
        icon: <Cpu className="w-5 h-5" />,
        title: "Open-Meteo REST API",
        subtitle: "Physical Parameter Ingestion",
        colorClass: "bg-blue-500/15 text-[#9ecaff]",
        borderColor: "hover:border-[#9ecaff]",
        tooltip: "Pings coordinate endpoints with zero SDK footprint to extract raw atmospheric indices.",
        meta: "GET weather_url"
      },
      {
        icon: <RefreshCw className="w-5 h-5" />,
        title: "JSON Nested Parser",
        subtitle: "Atmospheric Metrics Extraction",
        colorClass: "bg-amber-500/15 text-[#ffb596]",
        borderColor: "hover:border-[#ffb596]",
        tooltip: "Extracts current_temp variables securely via try/except boundaries to safeguard against missing indices.",
        meta: "data['current']['temp_2m']"
      },
      {
        icon: <Brain className="w-5 h-5" />,
        title: "OpenRouter Gateway",
        subtitle: "Dynamic Context Prompts",
        colorClass: "bg-purple-500/15 text-[#c4abff]",
        borderColor: "hover:border-[#571bc1]",
        tooltip: "Translates temperature scores directly into safe, human operational directives using Gemini.",
        meta: "max_tokens: 100 limit"
      },
      {
        icon: <FileText className="w-5 h-5" />,
        title: "Stream Log Persistence",
        subtitle: "I/O append safely",
        colorClass: "bg-[#ff6d1f]/15 text-[#ff6d1f]",
        borderColor: "hover:border-[#ff6d1f]",
        tooltip: "Appends daily workforce guidance cleanly on disk (daily_report.txt) with absolute race isolation.",
        meta: "file_append_context"
      }
    ]
  },
  ecommerceOrder: {
    title: "Ecommerce Fulfillment Flow",
    description: "A decoupled visual system monitoring checkout payloads, testing fraud indices, and issuing CRM updates.",
    ref: "shopify_order_security_blueprint.json",
    nodes: [
      {
        icon: <ShoppingCart className="w-5 h-5" />,
        title: "Shopify Trigger",
        subtitle: "Order Created Payload",
        colorClass: "bg-green-500/15 text-emerald-400",
        borderColor: "hover:border-emerald-500",
        tooltip: "Fires automatically when customized cart checks are finalized, sending checkout payload parameters.",
        meta: "topic: orders/create"
      },
      {
        icon: <ShieldAlert className="w-5 h-5" />,
        title: "OpenAI Triage Node",
        subtitle: "Fraud Index Evaluation",
        colorClass: "bg-purple-500/15 text-[#c4abff]",
        borderColor: "hover:border-[#571bc1]",
        tooltip: "Computes checkout risk values by analyzing address, email matching, and historical client records.",
        meta: "gpt-4o-mini classification"
      },
      {
        icon: <Database className="w-5 h-5" />,
        title: "CRM Sync System",
        subtitle: "Route & Tag status",
        colorClass: "bg-blue-500/15 text-[#9ecaff]",
        borderColor: "hover:border-[#9ecaff]",
        tooltip: "Tags risk scores and assigns priority parameters directly within client cards recursively.",
        meta: "Client Sync Pipeline"
      },
      {
        icon: <MessageSquare className="w-5 h-5" />,
        title: "Slack confirmation",
        subtitle: "Status Update Dispatch",
        colorClass: "bg-orange-500/15 text-[#ff6d1f]",
        borderColor: "hover:border-[#ff6d1f]",
        tooltip: "Provides ambient notifications to logistical managers ensuring immediate picking routines.",
        meta: "Push channel: #order-fulfillment"
      }
    ]
  }
};

export default function FlowchartCanvas() {
  const [activeTab, setActiveTab] = useState<FlowTab>("leadTriage");
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const activeFlow = flows[activeTab];

  return (
    <section id="workflows" className="py-24 bg-[#0e0e10] border-y border-white/5 relative">
      {/* Decorative glow */}
      <div className="absolute bottom-0 right-20 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(87,27,193,0.05)_0%,rgba(14,14,16,0)_70%)] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <div>
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-5xl text-[#e5e1e4] tracking-tight mb-3">
              Systems Architecture
            </h2>
            <p className="font-sans text-stone-400 text-sm md:text-base max-w-xl">
              Exploring the exact anatomy of high-performance workflow models. Select a scenario below to explore its live transactional blueprint.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#2a2a2c]/40 border border-white/5 shadow-2xl relative z-10 w-full sm:w-auto">
            {Object.keys(flows).map((key) => {
              const tabKey = key as FlowTab;
              const isActive = activeTab === tabKey;
              return (
                <button
                  key={tabKey}
                  onClick={() => {
                    setActiveTab(tabKey);
                    setHoveredNode(null);
                  }}
                  className={`px-5 py-2 rounded-lg font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex-1 sm:flex-none text-center cursor-pointer ${
                    isActive
                      ? "bg-[#ff6d1f] text-[#5b1f00] font-bold shadow-md"
                      : "text-stone-400 hover:text-[#e5e1e4] hover:bg-white/5"
                  }`}
                >
                  {flows[tabKey].title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Flowchart Canvas Layout */}
        <div className="w-full min-h-[460px] bg-[#1c1b1d]/60 backdrop-blur-md rounded-2xl relative overflow-hidden border border-white/5 p-8 flex flex-col justify-between shadow-2xl">
          {/* Decorative grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Description header */}
          <div className="relative z-10 mb-8 border-b border-white/5 pb-4">
            <h4 className="font-sans text-sm font-semibold text-[#ffb596] mb-1">
              {activeFlow.title} Topology
            </h4>
            <p className="font-sans text-[#e5e1e4] text-sm max-w-3xl">
              {activeFlow.description}
            </p>
          </div>

          {/* The nodes pipeline layout */}
          <div className="relative z-10 my-auto w-full flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-3">
            {activeFlow.nodes.map((node, index) => {
              const isHovered = hoveredNode === index;
              return (
                <div key={index} className="flex-1 w-full flex flex-col lg:flex-row items-center relative gap-3 lg:gap-0">
                  {/* Node box */}
                  <div
                    onMouseEnter={() => setHoveredNode(index)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className={`w-full lg:w-[220px] bg-[#201f22]/90 backdrop-blur-md p-4 rounded-xl border border-white/5 flex items-center gap-4 transition-all duration-300 relative z-20 cursor-pointer ${node.borderColor} ${
                      isHovered ? "scale-105 shadow-2xl border-white/20 bg-[#2a2a2c]" : ""
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${node.colorClass}`}>
                      {node.icon}
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-sans text-xs font-semibold text-[#e5e1e4] truncate">
                        {node.title}
                      </div>
                      <div className="text-[10px] text-stone-500 truncate mt-0.5">
                        {node.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Connective lines between nodes */}
                  {index < activeFlow.nodes.length - 1 && (
                    <div className="w-[2px] h-8 lg:w-full lg:h-[2px] bg-gradient-to-b lg:bg-gradient-to-r from-white/5 via-[#ff6d1f]/40 to-white/5 flex items-center justify-center shrink-0 relative lg:mx-2">
                      <div
                        className="absolute w-2 h-2 rounded-full bg-[#ffb596] shadow-[0_0_10px_#ff6d1f] animate-ping"
                        style={{
                          animationDuration: "2s",
                          animationDelay: `${index * 0.4}s`
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Tooltip detail description panel below */}
          <div className="relative z-10 mt-8 min-h-[70px] bg-[#0e0e10]/80 rounded-xl p-4 border border-white/5 flex items-center">
            {hoveredNode !== null ? (
              <div className="flex items-start gap-3 w-full animate-fadeIn">
                <div className="w-2 h-2 rounded-full bg-[#ff6d1f] mt-1.5 shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-[#ffb596] uppercase tracking-wide mr-2">
                    {activeFlow.nodes[hoveredNode].title}:
                  </span>
                  <span className="text-[#e5e1e4] block sm:inline">
                    {activeFlow.nodes[hoveredNode].tooltip}
                  </span>
                  <div className="mt-1 font-mono text-[10px] text-stone-500">
                    Active Environment Reference: <span className="text-stone-300">{activeFlow.nodes[hoveredNode].meta}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-[#e1bfb2] text-xs italic flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#ffb596] shrink-0" />
                Hover or tap any workflow block above to inspect real API context, parameters, and expressions.
              </div>
            )}
          </div>

          {/* Bottom metadata reference */}
          <div className="relative z-10 mt-4 border-t border-white/5 pt-3 flex justify-between items-center text-[10px] text-stone-500 font-mono">
            <span>Orchestrator Ref: {activeFlow.ref}</span>
            <span>Status: production reactive verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
