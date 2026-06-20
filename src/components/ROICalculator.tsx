import { useState, useMemo } from "react";
import { Clock, Calendar, DollarSign, TrendingUp } from "lucide-react";

export default function ROICalculator() {
  const [weeklyHours, setWeeklyHours] = useState<number>(20);
  const [hourlyRate, setHourlyRate] = useState<number>(50);

  const stats = useMemo(() => {
    const WEEKS_IN_MONTH = 4.333;
    const WEEKS_IN_YEAR = 52;
    
    const monthlyHours = Math.round(weeklyHours * WEEKS_IN_MONTH);
    const yearlyHours = Math.round(weeklyHours * WEEKS_IN_YEAR);
    
    const monthlySavings = monthlyHours * hourlyRate;
    const yearlySavings = yearlyHours * hourlyRate;

    return {
      monthlyHours,
      yearlyHours,
      monthlySavings,
      yearlySavings
    };
  }, [weeklyHours, hourlyRate]);

  // Format currency
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="roi" className="py-24 relative overflow-hidden bg-[#131315]">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 left-1/10 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,109,31,0.08)_0%,rgba(19,19,21,0)_70%)] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-[350px] h-[350px] bg-[radial-gradient(circle,rgba(87,27,193,0.06)_0%,rgba(19,19,21,0)_70%)] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-[#e5e1e4] tracking-tight mb-4">
            Calculate your Automation ROI
          </h2>
          <p className="font-sans text-[#e1bfb2] max-w-2xl mx-auto text-base md:text-lg">
            Quantify the precise financial and operational impact of replacing clunky, manually managed software steps with visual automation loops that run at a zero-compute idle state.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Panel */}
          <div className="lg:col-span-5 bg-[#1c1b1d]/80 backdrop-blur-md rounded-2xl p-8 border border-white/5 flex flex-col justify-center shadow-xl">
            {/* Input 1 */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-4">
                <label className="font-sans text-sm font-medium text-[#e5e1e4] tracking-wide uppercase">
                  Manual Hours (Weekly)
                </label>
                <span className="font-sans text-3xl font-semibold text-[#ff6d1f]" id="hoursVal">
                  {weeklyHours} hrs
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="80"
                step="1"
                value={weeklyHours}
                onChange={(e) => setWeeklyHours(Number(e.target.value))}
                className="w-full h-1 bg-[#353437] rounded-lg appearance-none cursor-pointer accent-[#ff6d1f] hover:accent-[#ffb596] transition-colors"
              />
              <div className="flex justify-between text-xs text-stone-500 mt-2">
                <span>2 hrs</span>
                <span>40 hrs</span>
                <span>80 hrs</span>
              </div>
            </div>

            {/* Input 2 */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="font-sans text-sm font-medium text-[#e5e1e4] tracking-wide uppercase">
                  Internal Hourly Rate
                </label>
                <span className="font-sans text-3xl font-semibold text-[#ff6d1f]" id="rateVal">
                  ${hourlyRate}/hr
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="250"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-1 bg-[#353437] rounded-lg appearance-none cursor-pointer accent-[#ff6d1f] hover:accent-[#ffb596] transition-colors"
              />
              <div className="flex justify-between text-xs text-stone-500 mt-2">
                <span>$15/hr</span>
                <span>$125/hr</span>
                <span>$250/hr</span>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Metric 1 */}
            <div className="bg-[#1c1b1d]/50 backdrop-blur-md rounded-2xl p-8 border border-white/5 border-t-2 border-t-transparent hover:border-t-[#571bc1] transition-all duration-300 flex flex-col justify-between group shadow-lg">
              <span className="font-sans text-xs font-semibold text-[#e1bfb2] uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#571bc1]" /> Monthly Hours Saved
              </span>
              <div className="mt-6 font-serif text-5xl md:text-6xl text-[#e5e1e4] group-hover:text-[#c4abff] transition-colors">
                {stats.monthlyHours}
                <span className="text-xl ml-2 font-sans font-light text-stone-500">hrs</span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-[#1c1b1d]/50 backdrop-blur-md rounded-2xl p-8 border border-white/5 border-t-2 border-t-transparent hover:border-t-[#571bc1] transition-all duration-300 flex flex-col justify-between group shadow-lg">
              <span className="font-sans text-xs font-semibold text-[#e1bfb2] uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#571bc1]" /> Yearly Hours Saved
              </span>
              <div className="mt-6 font-serif text-5xl md:text-6xl text-[#e5e1e4] group-hover:text-[#c4abff] transition-colors">
                {stats.yearlyHours}
                <span className="text-xl ml-2 font-sans font-light text-stone-500">hrs</span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-[#1c1b1d]/50 backdrop-blur-md rounded-2xl p-8 border border-white/5 border-t-2 border-t-transparent hover:border-t-[#ff6d1f] transition-all duration-300 flex flex-col justify-between group shadow-lg">
              <span className="font-sans text-xs font-semibold text-[#e1bfb2] uppercase tracking-wider flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-[#ff6d1f]" /> Monthly Cost Savings
              </span>
              <div className="mt-6 font-serif text-5xl md:text-6xl text-[#ff6d1f] group-hover:text-[#ffb596] transition-colors">
                {formatCurrency(stats.monthlySavings)}
              </div>
            </div>

            {/* Metric 4 */}
            <div className="bg-[#1c1b1d]/50 backdrop-blur-md rounded-2xl p-8 border border-white/5 border-t-2 border-t-transparent hover:border-t-[#ff6d1f] transition-all duration-300 flex flex-col justify-between group shadow-lg relative overflow-hidden">
              <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-[#ff6d1f]/10 blur-2xl rounded-full" />
              <span className="font-sans text-xs font-semibold text-[#e1bfb2] uppercase tracking-wider flex items-center gap-2 relative z-10">
                <TrendingUp className="w-4 h-4 text-[#ffb596]" /> Dynamic Annual ROI
              </span>
              <div className="mt-6 font-serif text-5xl md:text-6xl text-[#ff6d1f] group-hover:text-[#ffb596] transition-colors relative z-10">
                {formatCurrency(stats.yearlySavings)}
              </div>
            </div>
          </div>
        </div>

        {/* Footnote / Context */}
        <div className="mt-12 text-center">
          <p className="font-sans text-xs text-stone-500">
            * Calculations are based on replacing average manual data syncs, lead routing lags, CRM tracking, and communication delays.
          </p>
        </div>
      </div>
    </section>
  );
}
