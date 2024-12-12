import React, { useState } from 'react';
import { X } from 'lucide-react';

const QuadrantSkillsChart = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      name: 'Analytical',
      proficiency: 80,
      experience: 10,
      color: '#A6E3E9',
      details: {
        description: 'Expertise in analytical problem-solving across multiple domains',
        keySkills: ['Problem Solving', 'Critical Thinking', 'Strategic Planning'],  // Added comma here
        achievements: [
          'Evaluated legal risks in business expansion',
          'Developed solutions for complex acquisition projects',
          'Optimized legal operations to achieve 30% cost reduction'
        ]
      }
    },
    {
      name: 'Project Management',
      proficiency: 85,
      experience: 5,
      color: '#71C9CE',
      details: {
        description: 'Proven track record in managing large-scale projects',
        keySkills: ['Team Leadership', 'Risk Management', 'Resource Planning', 'Stakeholder Management'],
        achievements: [
          'Led cheese production facility acquisition',
          'Led teams across Vietnam, Singapore, India, Cambodia',
          'Managed ride-hailing platform restructuring'
        ]
      }
    },
    {
      name: 'Communication',
      proficiency: 90,
      experience: 8,
      color: '#CBF1F5',
      details: {
        description: 'Expert in stakeholder communication and presentation',
        keySkills: ['Public Speaking', 'Stakeholder Engagement', 'Training'],
        achievements: [
          'Conducted legal training for business units',
          'Presented compliance reports to management board'
        ]
      }
    },
    {
      name: 'Technical',
      proficiency: 75,
      experience: 2,
      color: '#00ADB5',
      details: {
        description: 'Rapidly developing technical capabilities',
        keySkills: ['Programming', 'Database Management', 'API Integration'],
        achievements: [
          'Modernized contract approval systems',
          'Implemented digital workflows',
          'Quantifiable Impact: 15% reduction in processing time, 25% increase in satisfaction'
        ]
      }
    }
  ];

  const calculateBubbleSize = (proficiency) => proficiency * 0.7;

  return (
    <div className="relative w-full h-[800px] bg-white p-16">
      {/* Quadrant Labels */}
      <div className="absolute top-4 left-1/4 right-1/4 flex justify-between text-sm text-[#393E46]">
        <div>Developing Skills</div>
        <div>Expert Skills</div>
      </div>

      <div className="relative h-full w-full border-b-2 border-l-2 border-[#393E46]">
        {/* Y-axis labels */}
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

        {/* X-axis labels */}
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
            <div
              key={`v${x}`}
              className="absolute h-full border-l border-[#393E46] opacity-10"
              style={{ left: `${x}%` }}
            />
          ))}
          {[3, 6, 9, 12].map(y => (
            <div
              key={`h${y}`}
              className="absolute w-full border-t border-[#393E46] opacity-10"
              style={{ bottom: `${(y/15) * 100}%` }}
            />
          ))}
        </div>

        {/* Skill Bubbles */}
        {skills.map(skill => {
          const size = calculateBubbleSize(skill.proficiency);
          return (
            <div
              key={skill.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: skill.color,
                left: `${skill.proficiency}%`,
                bottom: `${(skill.experience/15) * 100}%`,
              }}
              onClick={() => setSelectedSkill(skill)}
            >
              <div className="text-center">
                <div className="font-bold text-[#222831] text-sm whitespace-nowrap">{skill.name}</div>
                <div className="text-xs text-[#393E46]">{skill.experience} yrs</div>
                <div className="text-xs text-[#393E46]">{skill.proficiency}%</div>
              </div>
            </div>
          );
        })}

        {/* Modal */}
        {selectedSkill && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4 relative">
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
              
              <h2 className="text-2xl font-bold mb-4" style={{ color: selectedSkill.color }}>
                {selectedSkill.name}
              </h2>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="font-semibold text-[#222831] mb-2">Proficiency</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${selectedSkill.proficiency}%`,
                        backgroundColor: selectedSkill.color
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-[#222831] mb-2">Experience</div>
                  <div className="text-lg text-[#393E46]">{selectedSkill.experience} years</div>
                </div>
              </div>
              
              <div className="text-[#393E46] mb-4">
                {selectedSkill.details.description}
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold text-[#222831] mb-2">Key Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.details.keySkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ backgroundColor: `${selectedSkill.color}33` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#222831] mb-2">Key Achievements</h3>
                <ul className="list-disc pl-5">
                  {selectedSkill.details.achievements.map((achievement, index) => (
                    <li key={index} className="text-[#393E46] mb-1">{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuadrantSkillsChart;
