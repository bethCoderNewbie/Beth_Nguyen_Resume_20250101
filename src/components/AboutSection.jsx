import React, { useState } from 'react';
import { Mail, Linkedin, User, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('about');

  const navItems = [
    { id: 'about', icon: User, label: 'About Me' },
    { id: 'contact', icon: Mail, label: 'Contact' },
    { id: 'education', icon: GraduationCap, label: 'Education' }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Navigation */}
      <nav className="flex gap-6 mb-4">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 ${
              activeTab === id ? 'text-cyan-500' : 'text-gray-600'
            } hover:text-cyan-600 transition-colors`}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </nav>

      {/* About Section */}
      {activeTab === 'about' && (
        <div className="bg-[#E3FDFD] rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4 text-[#222831]">Beth Nguyen</h1>
          <div className="space-y-4 text-[#393E46]">
            <p className="text-lg leading-relaxed">
              As a professional with over 9 years of experience in legal compliance and quality control across APAC and US markets, I have demonstrated strong analytical capabilities through process optimization that achieved 30% cost reduction and 15% efficiency improvements. My journey shows exceptional adaptability in transitioning across different roles and regions, with proven skills in data analysis, strategic oversight, and transformation management.
            </p>
            <p className="text-lg leading-relaxed">
              While I am new to formal data analytics, my background in compliance monitoring, process optimization, and technical quality control provides a solid foundation for data analysis, combined with my demonstrated ability to quickly master new technical skills and commitment to continuous learning through hands-on experience and professional development.
            </p>
          </div>
        </div>
      )}

      {/* Contact Section */}
      {activeTab === 'contact' && (
        <div className="bg-[#E3FDFD] rounded-lg p-6">
          <div className="space-y-4">
            <a 
              href="mailto:beth88.career@gmail.com"
              className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 transition-colors"
            >
              <Mail size={20} />
              beth88.career@gmail.com
            </a>
            <a 
              href="http://www.linkedin.com/in/beth-nguyena773a157"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn Profile
            </a>
          </div>
        </div>
      )}

      {/* Education Section */}
      {activeTab === 'education' && (
        <div className="bg-[#E3FDFD] rounded-lg p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#222831]">
                Wichita State University
              </h3>
              <p className="text-lg text-[#393E46]">
                Master's degree, Business Analytics
              </p>
              <p className="text-sm text-[#393E46]">
                Aug 2024 - Aug 2026
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-[#222831]">
                University of Economics and Law Ho Chi Minh City
              </h3>
              <p className="text-lg text-[#393E46]">
                Bachelor's degree, Banking, Corporate, Finance, and Securities Law
              </p>
              <p className="text-sm text-[#393E46]">
                2008 - 2012
              </p>
              <p className="mt-2 text-[#393E46]">
                Grade: 3 out of 4
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutSection;
