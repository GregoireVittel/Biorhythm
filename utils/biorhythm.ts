import { BiorhythmData, BiorhythmState } from '../types';

const CYCLES = {
  physical: 23,
  emotional: 28,
  intellectual: 33,
};

export const calculateBiorhythm = (dob: Date, targetDate: Date): BiorhythmState => {
  const diffTime = targetDate.getTime() - dob.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  return {
    physical: Math.sin((2 * Math.PI * diffDays) / CYCLES.physical),
    emotional: Math.sin((2 * Math.PI * diffDays) / CYCLES.emotional),
    intellectual: Math.sin((2 * Math.PI * diffDays) / CYCLES.intellectual),
  };
};

export const getBiorhythmSeries = (dob: Date, startDate: Date, days: number): BiorhythmData[] => {
  const series: BiorhythmData[] = [];

  for (let i = 0; i < days; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    
    const bio = calculateBiorhythm(dob, currentDate);
    const average = (bio.physical + bio.emotional + bio.intellectual) / 3;

    series.push({
      date: currentDate.toISOString().split('T')[0], // YYYY-MM-DD
      physical: parseFloat(bio.physical.toFixed(2)),
      emotional: parseFloat(bio.emotional.toFixed(2)),
      intellectual: parseFloat(bio.intellectual.toFixed(2)),
      average: parseFloat(average.toFixed(2)),
    });
  }

  return series;
};

export const getPercentage = (value: number): number => {
  return Math.round(((value + 1) / 2) * 100);
};

export const getInterpretation = (value: number): string => {
  if (value > 0.5) return "High / Peak Performance";
  if (value > 0.1) return "Positive Phase";
  if (value >= -0.1 && value <= 0.1) return "Critical / Transition";
  if (value < -0.5) return "Low / Recharging";
  return "Negative Phase";
};