import React from 'react';
import { Activity, Heart, Brain, AlertTriangle, TrendingUp, TrendingDown, BatteryCharging } from 'lucide-react';
import { getPercentage, getInterpretation } from '../utils/biorhythm.ts';

interface DailyCardProps {
  type: 'physical' | 'emotional' | 'intellectual';
  value: number;
}

const DailyCard: React.FC<DailyCardProps> = ({ type, value }) => {
  const percentage = getPercentage(value);
  const label = getInterpretation(value);
  
  let Icon = Activity;
  let colorClass = "text-red-400";
  let bgClass = "bg-red-500/10 border-red-500/30";
  let title = "Physical";
  
  if (type === 'emotional') {
    Icon = Heart;
    colorClass = "text-emerald-400";
    bgClass = "bg-emerald-500/10 border-emerald-500/30";
    title = "Emotional";
  } else if (type === 'intellectual') {
    Icon = Brain;
    colorClass = "text-blue-400";
    bgClass = "bg-blue-500/10 border-blue-500/30";
    title = "Intellectual";
  }

  // Determine status icon based on value
  let StatusIcon = BatteryCharging;
  if (value > 0.5) StatusIcon = TrendingUp;
  else if (value < -0.5) StatusIcon = TrendingDown;
  else if (Math.abs(value) < 0.1) StatusIcon = AlertTriangle;

  return (
    <div className={`backdrop-blur-md rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02] ${bgClass}`}>
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl bg-white/10 ${colorClass}`}>
          <Icon size={24} />
        </div>
        <div className={`flex items-center gap-1 text-sm font-medium ${colorClass}`}>
          <StatusIcon size={16} />
          <span>{Math.round(value * 100)}%</span>
        </div>
      </div>
      
      <h3 className="text-white font-bold text-xl mb-1">{title}</h3>
      <p className="text-white/60 text-sm mb-4">{label}</p>
      
      <div className="w-full bg-black/20 rounded-full h-2 overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out ${colorClass.replace('text-', 'bg-')}`} 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default DailyCard;