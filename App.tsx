import React, { useState, useEffect } from 'react';
import { Calendar, RefreshCw, Sparkles, ChevronRight } from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground.tsx';
import BiorhythmChart from './components/BiorhythmChart.tsx';
import DailyCard from './components/DailyCard.tsx';
import BottomInfoPanel from './components/BottomInfoPanel.tsx';
import { calculateBiorhythm, getBiorhythmSeries } from './utils/biorhythm.ts';
import { getDailyAdvice } from './services/geminiService.ts';
import { BiorhythmState, BiorhythmData } from './types.ts';

const App: React.FC = () => {
  const [dob, setDob] = useState<string>('');
  const [biorhythmState, setBiorhythmState] = useState<BiorhythmState | null>(null);
  const [chartData, setChartData] = useState<BiorhythmData[]>([]);
  const [aiAdvice, setAiAdvice] = useState<string | null>(null);
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(false);
  const [today, setToday] = useState(new Date());

  // Initialize with a default example or verify local storage if needed
  // For now, we start clean.

  const handleCalculate = async () => {
    if (!dob) return;
    
    const birthDate = new Date(dob);
    const calculatedState = calculateBiorhythm(birthDate, today);
    const series = getBiorhythmSeries(birthDate, today, 30); // 30 days forecast

    setBiorhythmState(calculatedState);
    setChartData(series);
    setAiAdvice(null); // Reset advice on new calculation
  };

  const handleGetAdvice = async () => {
    if (!biorhythmState) return;
    
    setLoadingAdvice(true);
    const advice = await getDailyAdvice(biorhythmState);
    setAiAdvice(advice);
    setLoadingAdvice(false);
  };

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white pb-24">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-20">
        {/* Header */}
        <header className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-full mb-4 shadow-lg border border-white/20">
             <RefreshCw className="w-6 h-6 text-purple-400 mr-2 animate-spin-slow" />
             <span className="font-semibold tracking-wider text-sm text-purple-200 uppercase">BIORHYTHM CALCULATOR</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-pink-300 pb-2 animate-text-gradient">
            Check Your Natural Rhythm
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Enter your birth date to unlock your personal rhythm
          </p>
        </header>

        {/* Input Section */}
        <div className="max-w-md mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-xl p-2 rounded-2xl border border-white/20 shadow-2xl flex items-center">
            <div className="pl-4 text-white/50">
              <Calendar className="w-5 h-5" />
            </div>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="bg-transparent border-none text-white text-lg w-full px-4 py-3 focus:ring-0 focus:outline-none placeholder-white/50 [color-scheme:dark]"
            />
            <button
              onClick={handleCalculate}
              disabled={!dob}
              className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold hover:bg-purple-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              Analyze <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Results Section */}
        {biorhythmState && (
          <div className="space-y-8 animate-fade-in-up">
            
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DailyCard type="physical" value={biorhythmState.physical} />
              <DailyCard type="emotional" value={biorhythmState.emotional} />
              <DailyCard type="intellectual" value={biorhythmState.intellectual} />
            </div>

            {/* AI Insight Section */}
            <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
              
              {!aiAdvice ? (
                <div className="flex flex-col items-center">
                  <Sparkles className="w-12 h-12 text-yellow-300 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Unlock AI Daily Insight</h3>
                  <p className="text-white/60 mb-6 max-w-lg">
                    Get a personalized interpretation of your combined cycles generated by Google Gemini AI.
                  </p>
                  <button
                    onClick={handleGetAdvice}
                    disabled={loadingAdvice}
                    className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full font-semibold transition-all flex items-center gap-2 group-hover:border-purple-400/50"
                  >
                    {loadingAdvice ? (
                      <>
                        <RefreshCw className="animate-spin w-4 h-4" /> Analyzing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" /> Get AI Advice
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="text-left md:text-center animate-fade-in">
                  <div className="inline-flex items-center gap-2 text-yellow-300 mb-4 bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
                    <Sparkles size={14} />
                    <span className="text-xs font-bold uppercase tracking-widest">Gemini AI Insight</span>
                  </div>
                  <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/90">
                    "{aiAdvice}"
                  </p>
                  <button 
                    onClick={() => setAiAdvice(null)}
                    className="mt-6 text-sm text-white/40 hover:text-white hover:underline transition-colors"
                  >
                    Refresh Insight
                  </button>
                </div>
              )}
            </div>

            {/* Chart Section */}
            <BiorhythmChart data={chartData} />

          </div>
        )}
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-white/30 text-sm">
        <p>&copy; {new Date().getFullYear()} Biorhythm Calculations based on standard biorhythm theory.</p>
      </footer>
      
      {/* Bottom Info Panel */}
      <BottomInfoPanel />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-spin-slow {
            animation: spin 3s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes textGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-gradient {
          background-size: 200% auto;
          animation: textGradient 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default App;