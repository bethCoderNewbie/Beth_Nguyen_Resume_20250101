import React from 'react';
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  Legend,
  Tooltip
} from 'recharts';

const CoreCompetenceWheel = () => {
  const colors = {
    primary: '#222831',
    secondary: '#393E46',
    accent: '#00ADB5',
    light: '#EEEEEE',
    lightBlue: '#E3FDFD',
    paleBlue: '#CBF1F5',
    skyBlue: '#A6E3E9',
    oceanBlue: '#71C9CE'
  };

  const data = [
    {
      competency: 'COMPLIANCE',
      score: 95,
      details: [
        'Legal & Regulatory Expertise',
        'Risk Management',
        'Policy Development',
        'Compliance Training'
      ]
    },
    {
      competency: 'OPTIMIZATION',
      score: 90,
      details: [
        'Process Improvement',
        'Digital Transformation',
        'Cost Reduction',
        'Efficiency Enhancement'
      ]
    },
    {
      competency: 'ADAPTABILITY',
      score: 85,
      details: [
        'Cross-cultural Communication',
        'Change Management',
        'Crisis Response',
        'Market Adaptation'
      ]
    }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { competency, details, score } = payload[0].payload;
      return (
        <div className="p-4 rounded-lg shadow-lg" style={{ backgroundColor: colors.light }}>
          <h3 className="font-bold mb-2" style={{ color: colors.primary }}>
            {competency}: {score}%
          </h3>
          <ul className="text-sm">
            {details.map((detail, index) => (
              <li key={index} className="mb-1" style={{ color: colors.secondary }}>
                • {detail}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 flex flex-col items-center" style={{ backgroundColor: colors.lightBlue }}>
      <h2 className="text-2xl font-bold mb-6" style={{ color: colors.primary }}>
        Core Competencies
      </h2>
      <div className="w-full h-[400px] flex justify-center">
        <RadarChart 
          cx="50%" 
          cy="50%" 
          outerRadius="80%" 
          width={400} 
          height={400} 
          data={data}
        >
          <PolarGrid stroke={colors.secondary} />
          <PolarAngleAxis 
            dataKey="competency" 
            tick={{ fill: colors.primary, fontSize: 14 }}
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 100]} 
            tick={{ fill: colors.secondary }}
          />
          <Radar 
            name="Core Competencies" 
            dataKey="score" 
            stroke={colors.accent} 
            fill={colors.skyBlue} 
            fillOpacity={0.6}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </div>
      <div className="mt-6 text-center max-w-md">
        <p className="text-sm" style={{ color: colors.secondary }}>
          Hover over each axis to see detailed competency breakdowns. The chart represents proficiency levels across key areas of expertise.
        </p>
      </div>
    </div>
  );
};

export default CoreCompetenceWheel;
