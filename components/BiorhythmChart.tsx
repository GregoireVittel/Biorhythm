import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend
} from 'recharts';
import { BiorhythmData } from '../types';

interface BiorhythmChartProps {
  data: BiorhythmData[];
}

const BiorhythmChart: React.FC<BiorhythmChartProps> = ({ data }) => {
  return (
    <div className="w-full h-[400px] bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl">
      <h3 className="text-white/90 font-semibold mb-4 text-lg">Your Next 30 Days</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="date" 
            stroke="rgba(255,255,255,0.6)" 
            tickFormatter={(value) => new Date(value).toLocaleDateString(undefined, { day: '2-digit', month: 'short' })}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            domain={[-1.2, 1.2]} 
            stroke="rgba(255,255,255,0.6)" 
            tickCount={5}
            tick={{ fontSize: 12 }}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px', color: '#fff' }}
            itemStyle={{ fontSize: 14 }}
            labelStyle={{ color: '#94a3b8', marginBottom: '4px' }}
            formatter={(value: number) => [`${(value * 100).toFixed(0)}%`]}
            labelFormatter={(label) => new Date(label).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          />
          <Legend wrapperStyle={{ paddingTop: '10px' }}/>
          <ReferenceLine y={0} stroke="rgba(255,255,255,0.3)" strokeDasharray="3 3" />
          
          <Line
            type="monotone"
            dataKey="physical"
            stroke="#ef4444" // Red-500
            strokeWidth={3}
            dot={false}
            name="Physical"
          />
          <Line
            type="monotone"
            dataKey="emotional"
            stroke="#10b981" // Emerald-500
            strokeWidth={3}
            dot={false}
            name="Emotional"
          />
          <Line
            type="monotone"
            dataKey="intellectual"
            stroke="#3b82f6" // Blue-500
            strokeWidth={3}
            dot={false}
            name="Intellectual"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BiorhythmChart;