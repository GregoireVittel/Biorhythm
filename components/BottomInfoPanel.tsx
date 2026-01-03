import React, { useState } from 'react';
import { ChevronUp, BookOpen, Sun, Moon, Wind, Zap, ClipboardCheck, Eye } from 'lucide-react';

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
              Biorhythm Insights & Lifestyle Guide
            </span>
          </div>
          <div className={`text-white/50 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronUp size={24} />
          </div>
        </button>

        {/* Scrollable Content Area */}
        <div className={`flex-1 overflow-y-auto custom-scrollbar transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
           <div className="py-8 space-y-16 pb-24">
              
              {/* Section 1: Work */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                  Adapting your work to your biorhythm
                </h3>
                <div className="prose prose-invert prose-p:text-white/80 prose-p:leading-relaxed max-w-none pl-4 md:pl-11 border-l border-white/10">
                    <p className="mb-4">
                      In the workplace, this approach is still not widespread. Yet, it can be a real key to preventing burnout, optimizing performance, and improving well-being. When we schedule important tasks during the times when we’re naturally most effective, productivity increases and fatigue decreases. On the other hand, constantly fighting against our own rhythm often leads to decreased motivation, or even chronic stress.
                    </p>
                    <p>
                      This principle of “the right task at the right time” relies on a deep understanding of our biorhythm. Thus, certain tasks, such as strategic decision-making, complex problem-solving, or creativity, find their place during moments when our attention and energy are at their peak. Conversely, more repetitive or administrative tasks can be performed when our energy is lower. It’s not a matter of laziness or procrastination, but a scientific approach to optimal timing for each activity.
                    </p>
                </div>
              </section>

              {/* Section 2: Lifestyle */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></span>
                  Lifestyle habits to synchronize your rhythm
                </h3>
                
                <div className="pl-4 md:pl-11">
                  <p className="text-white/80 mb-8 leading-relaxed">
                    To respect and strengthen your biological clock, a few simple lifestyle habits can make all the difference:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3 mb-3 text-yellow-300">
                        <Sun size={20} />
                        <h4 className="font-semibold">Get outside as soon as possible</h4>
                      </div>
                      <p className="text-sm text-white/70 leading-relaxed">
                        A short walk in the morning, even just 10 minutes, under natural light is often enough to trigger cortisol secretion and energize you. Don’t hesitate to air out your workspace regularly to benefit from a fresh air intake.
                      </p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3 mb-3 text-indigo-300">
                        <Moon size={20} />
                        <h4 className="font-semibold">Gradually adjust your light exposure</h4>
                      </div>
                      <p className="text-sm text-white/70 leading-relaxed">
                        At the end of the day, limit bright light and screens: opt for soft lighting (lampshades, adjustable intensity lamps) to promote the natural rise of melatonin and prepare your body for sleep.
                      </p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3 mb-3 text-emerald-300">
                        <Wind size={20} />
                        <h4 className="font-semibold">Walk and move outside of office hours</h4>
                      </div>
                      <p className="text-sm text-white/70 leading-relaxed">
                        Active breaks — a few steps on the street, some stretching, or a few breathing exercises — help release tension, fight post-lunch drowsiness, and maintain good alertness throughout the day.
                      </p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3 mb-3 text-orange-300">
                        <Zap size={20} />
                        <h4 className="font-semibold">If you’re lacking natural light</h4>
                      </div>
                      <p className="text-sm text-white/70 leading-relaxed">
                        Light therapy can be a useful complement: Expose yourself to a high-intensity lamp (10,000 lux) for 30 to 60 minutes, preferably in the morning. This method helps compensate for insufficient sunlight.
                      </p>
                    </div>
                  </div>

                  <p className="text-white/60 italic text-sm border-l-2 border-purple-500 pl-4 py-2 bg-purple-500/5 rounded-r-lg">
                    By incorporating these habits into your daily routine — morning walk, fresh air breaks, and gradual light management — you’ll not only improve the quality of your sleep, but also your energy and concentration at work.
                  </p>
                </div>
              </section>

              {/* Section 3: Observation & Checklist */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></span>
                  Understand & Observe Your Rhythm
                </h3>
                
                <div className="pl-4 md:pl-11 space-y-8">
                  
                  {/* Observation Intro */}
                  <div className="prose prose-invert prose-p:text-white/80 max-w-none">
                     <div className="flex items-start gap-4 mb-4">
                        <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400 mt-1">
                            <Eye size={20} />
                        </div>
                        <div>
                             <h4 className="text-xl font-semibold text-white mb-2">A week of observation</h4>
                             <p className="leading-relaxed text-white/80">
                               Rather than going against your natural rhythm, why not spend a week observing how we really function? The idea is not to turn everything upside down, but to better understand the moments when our body and brain are ready for certain tasks.
                             </p>
                        </div>
                     </div>

                     <div className="bg-white/5 rounded-2xl p-6 border-l-4 border-teal-500/50">
                        <p className="font-medium text-white/90 mb-4">Throughout your days, ask yourself a few simple questions:</p>
                        <ul className="list-none space-y-3 text-white/80">
                            {[
                                "What time do you wake up most easily, without excessive fatigue?",
                                "Are there moments when you feel like you’re at the top of your game, physically or intellectually?",
                                "When does that famous “energy dip” occur, making you want to procrastinate or escape?",
                                "When do ideas start flowing? When does writing or problem-solving seem easier?",
                                "Conversely, when do administrative or repetitive tasks seem most bearable?",
                                "At what time does sleep naturally take over, without a fight against drooping eyelids?"
                            ].map((q, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className="text-teal-400 font-bold">•</span>
                                    <span>{q}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="italic text-white/50 mt-6 text-sm">Being aware of these signals is not being lazy; it’s actually trying to align our actions with our real resources.</p>
                     </div>
                  </div>

                  {/* Checklist Card */}
                  <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 border border-emerald-500/20 rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-emerald-500/40 transition-colors">
                     {/* Decorative icon background */}
                     <div className="absolute top-0 right-0 -mt-6 -mr-6 text-emerald-500/5 transform rotate-12 group-hover:text-emerald-500/10 transition-colors">
                        <ClipboardCheck size={140} />
                     </div>

                     <div className="relative z-10">
                         <h4 className="text-xl font-bold text-emerald-300 mb-6 flex items-center gap-2">
                           <ClipboardCheck className="w-6 h-6" />
                           To try: your daily mini-checklist
                         </h4>
                         
                         <p className="text-white/80 mb-4">Each day for a week, take a minute to note:</p>
                         
                         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                           {[
                             "Your energy level upon waking",
                             "Moments of mental clarity or creativity",
                             "Phases of fatigue or decreased concentration",
                             "The time you would have liked to have gone to bed the night before"
                           ].map((item, i) => (
                             <li key={i} className="flex items-start gap-3 text-white/90 bg-black/20 p-3 rounded-lg border border-white/5">
                               <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-emerald-400 text-xs font-bold">
                                 {i + 1}
                               </div>
                               <span className="text-sm">{item}</span>
                             </li>
                           ))}
                         </ul>

                         <div className="bg-emerald-500/10 rounded-xl p-5 border border-emerald-500/20">
                           <h5 className="font-semibold text-emerald-200 mb-2">Taking notes</h5>
                           <p className="text-sm text-emerald-100/70 leading-relaxed">
                             At the end of the week, review your notes: you’ll see your own chronorhythm emerge. It will be your compass to better organize your days and find a bit more harmony in your daily life.
                           </p>
                         </div>
                     </div>
                  </div>

                </div>
              </section>

           </div>
        </div>
      </div>
    </div>
  );
};

export default BottomInfoPanel;