import React, { useEffect, useState } from 'react';

const AnimatedBackground: React.FC = () => {
  const [particles, setParticles] = useState<Array<{left: number, size: number, duration: number, delay: number}>>([]);

  useEffect(() => {
    // Generate particles for a starry/firefly effect on mount to avoid hydration mismatch
    const newParticles = Array.from({ length: 40 }).map(() => ({
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 20
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-[#0a0a0c]">
      <style>
        {`
          @keyframes float-slow {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(30px, 30px) rotate(180deg); }
            100% { transform: translate(0, 0) rotate(360deg); }
          }
          @keyframes float-medium {
            0% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-30px, 50px) scale(1.1); }
            66% { transform: translate(20px, -20px) scale(0.9); }
            100% { transform: translate(0, 0) scale(1); }
          }
          @keyframes rise-and-fade {
            0% { transform: translateY(110vh) scale(0); opacity: 0; }
            10% { opacity: 0.6; transform: translateY(100vh) scale(1); }
            90% { opacity: 0.6; transform: translateY(10vh) scale(1); }
            100% { transform: translateY(-10vh) scale(0); opacity: 0; }
          }
          .animate-blob-slow { animation: float-slow 30s infinite linear; }
          .animate-blob-medium { animation: float-medium 25s infinite ease-in-out; }
          .animate-particle { animation: rise-and-fade linear infinite; }
        `}
      </style>

      {/* Deep Space Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1b2e] via-[#0f0f16] to-[#000000]" />

      {/* Large Glowing Orbs/Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[80px] animate-blob-slow" />
      <div className="absolute top-[20%] right-[-20%] w-[40vw] h-[40vw] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[80px] animate-blob-medium" style={{ animationDelay: '-5s' }} />
      <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob-slow" style={{ animationDelay: '-10s' }} />
      <div className="absolute bottom-[10%] right-[30%] w-[30vw] h-[30vw] bg-pink-500/10 rounded-full mix-blend-screen filter blur-[90px] animate-blob-medium" style={{ animationDelay: '-2s' }} />

      {/* Grid Pattern with Fade */}
      <div 
        className="absolute inset-0 opacity-[0.07]" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', 
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)'
        }} 
      />

      {/* Rising Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `-${p.delay}s`,
          }}
        />
      ))}
      
      {/* Texture Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
};

export default AnimatedBackground;