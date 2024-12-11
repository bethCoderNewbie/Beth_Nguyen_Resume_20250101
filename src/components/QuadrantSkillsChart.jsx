import React from 'react';

const QuadrantSkillsChart = () => {
  const skills = [
    {
      name: 'Analytical',
      proficiency: 98,
      experience: 15,
      color: '#A6E3E9'
    },
    {
      name: 'Project Management',
      proficiency: 95,
      experience: 12,
      color: '#71C9CE'
    },
    {
      name: 'Communication',
      proficiency: 92,
      experience: 11,
      color: '#CBF1F5'
    },
    {
      name: 'Technical',
      proficiency: 75,
      experience: 1.5,
      color: '#00ADB5'
    }
  ];

  const calculateBubbleSize = (proficiency) => proficiency * 0.7;

  return (
    <div className="relative w-full h-[800px] bg-white p-16">
      <div className="relative h-full w-full border-b-2 border-l-2 border-[#393E46]">
        {/* Y-axis with more spacing */}
        <div className="absolute -left-12 h-full flex flex-col justify-between text-sm text-[#393E46]">
          {[15, 12, 9, 6, 3, 0].map(value => (
            <div key={value} className="flex items-center">
              <div className="w-2 h-0.5 bg-[#393E46] -right-2 absolute"/>
              {value}
            </div>
          ))}
        </div>
        
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-bold text-[#393E46] whitespace-nowrap">
          Years of Experience
        </div>
        
        <div className="absolute -left-28 top-0 text-xs text-[#393E46]">Expert Level</div>
        <div className="absolute -left-28 bottom-0 text-xs text-[#393E46]">Entry Level</div>

        {/* X-axis */}
        <div className="absolute w-full -bottom-8 flex justify-between text-sm text-[#393E46]">
          {[0, 25, 50, 75, 100].map(value => (
            <div key={value} className="flex flex-col items-center">
              <div className="h-2 w-0.5 bg-[#393E46] mb-1"/>
              {value}%
            </div>
          ))}
        </div>
        
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-sm font-bold text-[#393E46]">
          Proficiency Level
        </div>

        {/* Grid Lines */}
        <div className="absolute inset-0">
          {[25, 50, 75].map(x => (
            <div key={`v${x}`} className="absolute h-full border-l border-[#393E46] opacity-10"
                 style={{ left: `${x}%` }} />
          ))}
          {[3, 6, 9, 12].map(y => (
            <div key={`h${y}`} className="absolute w-full border-t border-[#393E46] opacity-10"
                 style={{ bottom: `${(y/15) * 100}%` }} />
          ))}
        </div>

        {skills.map(skill => {
          const size = calculateBubbleSize(skill.proficiency);
          return (
            <div
              key={skill.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-transform hover:scale-105"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: skill.color,
                left: `${skill.proficiency}%`,
                bottom: `${(skill.experience/15) * 100}%`,
              }}
            >
              <div className="text-center">
                <div className="font-bold text-[#222831] text-sm whitespace-nowrap">{skill.name}</div>
                <div className="text-xs text-[#393E46]">{skill.experience} yrs</div>
                <div className="text-xs text-[#393E46]">{skill.proficiency}%</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuadrantSkillsChart;
