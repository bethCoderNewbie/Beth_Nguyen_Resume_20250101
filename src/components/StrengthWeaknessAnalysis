import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, XCircle, Plus, Minus } from 'lucide-react';

const AnalysisCard = ({ title, items, type }) => {
  const [isExpanded, setIsExpanded] = useState(false);

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

  const isStrength = type === 'strength';

  return (
    <div 
      className="mb-4 rounded-lg overflow-hidden shadow-md transition-all duration-200"
      style={{ 
        backgroundColor: isStrength ? colors.lightBlue : colors.light,
        borderLeft: `4px solid ${isStrength ? colors.oceanBlue : colors.secondary}`
      }}
    >
      <div
        className="p-4 cursor-pointer flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          {isStrength ? 
            <CheckCircle size={24} style={{ color: colors.oceanBlue }} /> :
            <XCircle size={24} style={{ color: colors.secondary }} />
          }
          <h3 className="font-semibold text-lg" style={{ color: colors.primary }}>
            {title}
          </h3>
        </div>
        {isExpanded ? 
          <ChevronUp size={20} style={{ color: colors.accent }} /> : 
          <ChevronDown size={20} style={{ color: colors.accent }} />
        }
      </div>
      
      {isExpanded && (
        <div className="px-4 pb-4">
          <ul className="space-y-2 ml-8">
            {items.map((item, index) => (
              <li 
                key={index}
                className="flex items-start gap-2"
                style={{ color: colors.secondary }}
              >
                <span className="mt-1">
                  {isStrength ? 
                    <Plus size={16} style={{ color: colors.oceanBlue }} /> :
                    <Minus size={16} style={{ color: colors.secondary }} />
                  }
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const StrengthWeaknessAnalysis = () => {
  const strengths = [
    {
      title: "Cross-Cultural Adaptability & International Experience",
      items: [
        "Successfully navigated business environments across Vietnam, APAC, and USA",
        "Demonstrated ability to transition between legal and technical roles",
        "Proven track record in multiple cultural contexts"
      ]
    },
    {
      title: "Process Optimization & Cost Management",
      items: [
        "Achieved 30% cost reduction in legal operations",
        "Implemented digital transformation initiatives",
        "Strong record of improving efficiency metrics"
      ]
    },
    {
      title: "Technical & Legal Versatility",
      items: [
        "Combined expertise in legal compliance and quality control",
        "Capable of both high-level strategic work and detailed technical inspection",
        "Broad skill range from corporate governance to precision measurement"
      ]
    },
    {
      title: "Crisis Management & Problem Solving",
      items: [
        "Handled COVID-19 financial crisis and insolvency proceedings",
        "Managed complex acquisitions under tight deadlines",
        "Successfully implemented corrective actions in quality control"
      ]
    },
    {
      title: "Project Management & Leadership",
      items: [
        "Led multi-jurisdictional teams across 4 Asian countries",
        "Managed complex acquisition projects",
        "Developed and implemented training programs"
      ]
    }
  ];

  const weaknesses = [
    {
      title: "Industry Discontinuity",
      items: [
        "Career shift from legal to quality control may appear disjointed",
        "Lack of continuous progression in a single industry",
        "May need to better articulate transferable skills"
      ]
    },
    {
      title: "Geographic Focus Gaps",
      items: [
        "Experience primarily concentrated in Vietnam/APAC",
        "Limited U.S. market exposure (recent addition)",
        "May need additional U.S. business environment understanding"
      ]
    },
    {
      title: "Technical Certification Gaps",
      items: [
        "Limited formal certifications in quality control",
        "Relatively recent transition to technical role",
        "May benefit from additional technical certifications"
      ]
    },
    {
      title: "Management Experience Scale",
      items: [
        "Most management experience limited to smaller teams",
        "May need exposure to larger organizational management",
        "Leadership experience primarily in regional contexts"
      ]
    },
    {
      title: "Specialized Industry Knowledge",
      items: [
        "Experience spread across multiple industries rather than deep expertise in one",
        "Recent role represents significant sector shift",
        "May need to develop deeper industry-specific knowledge in current field"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{ color: '#00ADB5' }}>
            <CheckCircle />
            Strengths
          </h2>
          {strengths.map((strength, index) => (
            <AnalysisCard
              key={index}
              title={strength.title}
              items={strength.items}
              type="strength"
            />
          ))}
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{ color: '#393E46' }}>
            <XCircle />
            Weaknesses
          </h2>
          {weaknesses.map((weakness, index) => (
            <AnalysisCard
              key={index}
              title={weakness.title}
              items={weakness.items}
              type="weakness"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrengthWeaknessAnalysis;
