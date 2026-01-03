import React, { useState } from 'react';
import { ChevronUp, BookOpen, Activity, Heart, Brain, TrendingUp, AlertTriangle, BatteryCharging, Shield, Users, Briefcase, Dumbbell } from 'lucide-react';

const BottomInfoPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isOpen ? 'h-[85vh]' : 'h-16'}`}
    >
      {/* Background/Backdrop for the panel */}
      <div className="absolute inset-0 bg-[#0f0f16]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]" />

      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto px-6 h-full flex flex-col">
        {/* Toggle Header */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex-none flex items-center justify-between py-4 text-left group focus:outline-none cursor-pointer border-b border-white/5"
        >
          <div className="flex items-center gap-3 text-purple-200 group-hover:text-white transition-colors">
            <BookOpen size={20} className={isOpen ? 'text-purple-400' : 'text-purple-200/70'} />
            <span className="font-semibold tracking-wide text-sm md:text-base uppercase">
              Biorhythm Insights & Guide
            </span>
          </div>
          <div className={`text-white/50 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronUp size={24} />
          </div>
        </button>

        {/* Scrollable Content Area */}
        <div className={`flex-1 overflow-y-auto custom-scrollbar transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
           <div className="py-8 space-y-12 pb-24">
              
              {/* Section 1: What Are Biorhythms? */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-6">What Are Biorhythms?</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Biorhythms are cyclical patterns believed to influence physical, emotional, and cognitive states over time. The classic model tracks three primary cycles starting from your date of birth:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-2 mb-2 text-red-400 font-bold">
                      <Activity size={18} /> Physical (23 days)
                    </div>
                    <p className="text-sm text-white/60">Energy, stamina, strength, coordination.</p>
                  </div>
                  <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold">
                      <Heart size={18} /> Emotional (28 days)
                    </div>
                    <p className="text-sm text-white/60">Mood, sensitivity, creativity, emotional stability.</p>
                  </div>
                  <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-2 mb-2 text-blue-400 font-bold">
                      <Brain size={18} /> Intellectual (33 days)
                    </div>
                    <p className="text-sm text-white/60">Focus, learning, problem-solving, decision-making.</p>
                  </div>
                </div>
                <p className="text-white/70 mt-4 text-sm italic">
                  Each cycle oscillates between high (positive) and low (negative) phases, crossing a critical day when the cycle shifts direction—often associated with instability or heightened sensitivity.
                </p>
              </section>

              {/* Section 2: How to Read */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-6">How to Read Your Biorhythm</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-500/20 rounded-lg text-green-400 mt-1">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">High phase</h4>
                      <p className="text-white/70 text-sm">Favorable for activities aligned with that cycle. You may feel more capable and energetic.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 mt-1">
                      <BatteryCharging size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Low phase</h4>
                      <p className="text-white/70 text-sm">Conserve energy; avoid pushing limits. It is a time for recharging and rest.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-yellow-500/20 rounded-lg text-yellow-400 mt-1">
                      <AlertTriangle size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Critical days (zero crossings)</h4>
                      <p className="text-white/70 text-sm">Be cautious; plan lightly, double-check decisions. These occur when the curve crosses the center line.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Practical Applications */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-6">Practical Applications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-purple-300 font-semibold">
                      <Briefcase size={18} /> Work & Learning
                    </div>
                    <p className="text-sm text-white/60">Schedule demanding analysis or learning during intellectual highs.</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-orange-300 font-semibold">
                      <Dumbbell size={18} /> Health & Fitness
                    </div>
                    <p className="text-sm text-white/60">Train harder during physical highs; prioritize recovery during lows.</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-pink-300 font-semibold">
                      <Users size={18} /> Relationships & Creativity
                    </div>
                    <p className="text-sm text-white/60">Address sensitive conversations or creative work during emotional highs.</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-red-300 font-semibold">
                      <Shield size={18} /> Risk Management
                    </div>
                    <p className="text-sm text-white/60">Avoid major commitments on critical days, especially when multiple cycles cross.</p>
                  </div>
                </div>
              </section>

              {/* Section 4: Using Effectively & Limitations */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Using Biorhythms Effectively</h3>
                  <p className="text-sm text-white/60 mb-4">(Without Overreliance)</p>
                  <ul className="space-y-3">
                    {[
                      "Treat biorhythms as signals, not rules.",
                      "Combine them with sleep quality, stress levels, and workload.",
                      "Track outcomes over time to see if patterns align with your experience."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/80 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border-l-4 border-yellow-500/50">
                   <h3 className="text-lg font-bold text-white mb-2">Limitations & Perspective</h3>
                   <p className="text-white/70 text-sm leading-relaxed">
                     Scientific support for biorhythms is mixed. Their value often lies in structured self-reflection and planning discipline, rather than prediction. Use them as a lightweight planning aid—not a determinant.
                   </p>
                </div>
              </section>

           </div>
        </div>
      </div>
    </div>
  );
};

export default BottomInfoPanel;