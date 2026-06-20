import React, { useEffect, useState } from "react";
import { Sparkles, Clock } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function Scheduler() {
  const [calLoaded, setCalLoaded] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: "15min" });
        cal("ui", {
          cssVarsPerTheme: {
            light: { "cal-brand": "#212427" },
            dark: { "cal-brand": "#ff6d1f" }
          },
          hideEventTypeDetails: false,
          layout: "month_view"
        });

        setCalLoaded(true);
      } catch (err) {
        console.error("Failed to initialize Cal.com embed API:", err);
        setCalLoaded(true); // fallback to ensure user can see view regardless
      }
    })();

    // Failsafe timeout to clear the spinner after 2 seconds max
    const timer = setTimeout(() => {
      setCalLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="contact" className="py-24 bg-[#131315] relative overflow-hidden">
      {/* Background Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,109,31,0.05)_0%,rgba(19,19,21,0)_70%)] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-[#1c1b1d]/80 text-xs font-semibold text-[#ffb596] mb-4">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#ff6d1f]" /> Automated Consultation Slot
          </div>
          <h2 className="font-serif italic text-4xl md:text-5xl text-[#e5e1e4] tracking-tight mb-4">
            Book a 15-Minute Consult
          </h2>
          <p className="font-sans text-stone-400 text-sm max-w-xl mx-auto">
            Select an open availability window below to lock in an architectural consult. 
          </p>
        </div>

        {/* Calendar Viewport Box */}
        <div className="relative bg-[#1c1b1d]/25 border border-white/5 rounded-2xl overflow-hidden min-h-[660px] flex flex-col shadow-2xl">
          {/* Top Aesthetic Status Bar */}
          <div className="bg-[#121113] px-4 py-2.5 border-b border-white/5 flex items-center text-[11px] font-mono text-stone-500">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff6d1f]/30 inline-block animate-pulse" />
              <span>LIVE INTEGRATION CANVASES DISPATCH ACTIVE</span>
            </div>
          </div>

          {/* Loading State Spinner */}
          {!calLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#131315] z-10 font-mono text-xs text-stone-500">
              <Clock className="w-6 h-6 animate-spin text-[#ff6d1f]" />
              <span>Initializing secure calendar engine...</span>
            </div>
          )}

          {/* Interactive Native Embed Target Div using @calcom/embed-react */}
          <div className="w-full flex-1 min-h-[620px] bg-transparent">
            <Cal 
              namespace="15min"
              calLink="hamdan-elahi-n8n/15min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
