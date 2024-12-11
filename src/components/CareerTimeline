import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Building, ExternalLink } from 'lucide-react';

const TimelineCard = ({ 
  company, 
  companyUrl, 
  companyDescription, 
  role, 
  period, 
  achievements, // Added missing achievements prop
  index, 
  totalItems, 
  isExpanded, 
  onToggle 
}) => {
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

  const getBackgroundColor = (index, total) => {
    const baseColor = '#CBF1F5';
    const opacity = 1 - (index / (total - 1)) * 0.5;
    return `rgba(203, 241, 245, ${opacity})`;
  };

  const handleCompanyClick = (e, url) => {
    if (url) {
      e.stopPropagation();
      window.open(url, '_blank');
    }
  };

  return (
    <div className="mb-6 relative">
      <div className="ml-6 relative">
        <div 
          className="absolute w-3 h-3 rounded-full mt-2"
          style={{ backgroundColor: colors.accent, left: '-1.5rem' }}
        />
        <div 
          className="absolute w-0.5 h-full"
          style={{ backgroundColor: colors.paleBlue, left: '-0.9375rem', top: '0.75rem' }}
        />
        <div 
          className="p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-lg"
          style={{ 
            backgroundColor: getBackgroundColor(index, totalItems),
            boxShadow: index === 0 ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'
          }}
          onClick={onToggle}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building size={20} style={{ color: colors.accent }} />
              <h3 className="text-lg font-semibold" style={{ color: colors.primary }}>
                {company}
                {companyUrl && (
                  <button 
                    onClick={(e) => handleCompanyClick(e, companyUrl)}
                    className="inline-flex items-center ml-2 text-sm hover:text-blue-600"
                    style={{ color: colors.accent }}
                  >
                    <ExternalLink size={16} />
                  </button>
                )}
              </h3>
            </div>
            {isExpanded ? 
              <ChevronUp size={20} style={{ color: colors.accent }} /> : 
              <ChevronDown size={20} style={{ color: colors.accent }} />
            }
          </div>
          
          {companyDescription && (
            <p className="text-sm mt-2 italic" style={{ color: colors.secondary }}>
              {companyDescription}
            </p>
          )}
          
          <p className="text-sm mt-2" style={{ color: colors.secondary }}>{role}</p>
          <p className="text-sm italic" style={{ color: colors.secondary }}>{period}</p>
          
          {isExpanded && achievements && achievements.length > 0 && (
            <div className="mt-4">
              <ul className="space-y-2">
                {achievements.map((achievement, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start gap-2"
                    style={{ color: colors.secondary }}
                  >
                    <span 
                      className="min-w-2 h-2 rounded-full mt-2"
                      style={{ backgroundColor: colors.oceanBlue }}
                    />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CareerTimeline = () => {
  const [expandedCards, setExpandedCards] = useState(new Set());

  const timelineData = [
    {
      company: "Pizza 4P's",
      companyUrl: "https://pizza4ps.com/",
      companyDescription: "Pizza 4P's is a pioneering Vietnamese-based culinary empire that combines artisanal craftsmanship in cheese-making, sustainable gastronomy, Japanese-inspired hospitality, global franchise management, and international expansion to create a unique dining experience.",
      role: "Legal Compliance Manager",
      period: "May 2020 - July 2023",
      achievements: [
        "Successfully managed the acquisition of a cheese production facility in Lam Dong industrial zone, completing the project in just 3 months during 2020",
        "Modernized the contract approval system through digitalization, reducing processing time by 15% and boosting internal client satisfaction by 25%",
        "Generated 30% cost savings in the legal department by optimizing internal capabilities and reducing reliance on external legal services",
        "Strengthened company-wide legal compliance through education and policy awareness initiatives"
      ]
    },
    {
      company: "Leflair",
      companyDescription: "Having raised $34.6M in funding, Leflair is a venture-backed Vietnamese e-commerce platform that combines authentic luxury brands, competitive pricing, diverse product curation, digital convenience, and secure shopping to deliver upscale retail experiences.",
      role: "Senior Legal Executive",
      period: "Nov 2019 - Apr 2021",
      achievements: [
        "Oversaw legal compliance across multiple Asian markets including Hong Kong, Singapore, Indonesia, and Vietnam",
        "Played a crucial role in managing legal challenges during the COVID-19 crisis in 2020, particularly handling insolvency-related issues"
      ]
    },
    {
      company: "TMF Group",
      companyUrl: "https://www.tmf-group.com/en/",
      companyDescription: "TMF Group is a global administrative services provider that enables businesses to operate and invest seamlessly across 125+ offices in 87 jurisdictions worldwide.",
      role: "Senior Officer",
      period: "Nov 2017 - Sep 2019",
      achievements: [
        "Provided comprehensive legal advisory services across diverse sectors including Media, Commercial, Private Equity, Hospitality, FMCG, and Manufacturing",
        "Led a significant project advising a ride-hailing platform during their acquisition and restructuring in 2018",
        "Managed client relationships and supervised team operations to ensure high-quality service delivery"
      ]
    },
    {
      company: "Tran Thi Tuyet Lawoffice",
      role: "Senior Associate",
      period: "Sep 2014 - Mar 2017",
      achievements: []
    },
    {
      company: "Unilever",
      role: "Intern",
      period: "May 2014 - Sep 2014",
      achievements: [
        "Focused on compliance reporting, risk assessment, and product registration compliance"
      ]
    }
  ];

  const toggleCard = (index) => {
    const newExpandedCards = new Set(expandedCards);
    if (newExpandedCards.has(index)) {
      newExpandedCards.delete(index);
    } else {
      newExpandedCards.add(index);
    }
    setExpandedCards(newExpandedCards);
  };

  return (
    <div className="max-w-3xl mx-auto p-6" style={{ backgroundColor: '#EEEEEE' }}>
      <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#222831' }}>
        Professional Timeline
      </h2>
      <div className="relative">
        {timelineData.map((item, index) => (
          <TimelineCard
            key={index}
            {...item}
            index={index}
            totalItems={timelineData.length}
            isExpanded={expandedCards.has(index)}
            onToggle={() => toggleCard(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CareerTimeline;
