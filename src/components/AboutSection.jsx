import React from 'react';
import { Mail, Linkedin, GraduationCap, User } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
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

  return (
    <section className="py-8 px-4" style={{ backgroundColor: colors.light }}>
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="w-full mb-8" style={{ backgroundColor: colors.paleBlue }}>
            <TabsTrigger value="about" className="flex items-center gap-2 data-[state=active]:bg-white">
              <User size={18} style={{ color: colors.accent }} />
              About Me
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2 data-[state=active]:bg-white">
              <Mail size={18} style={{ color: colors.accent }} />
              Contact
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2 data-[state=active]:bg-white">
              <GraduationCap size={18} style={{ color: colors.accent }} />
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <Card className="shadow-lg" style={{ backgroundColor: colors.lightBlue }}>
              <CardContent className="p-6">
                <h1 className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>
                  Beth Nguyen
                </h1>
                <div className="prose max-w-none" style={{ color: colors.secondary }}>
                  <p className="text-lg leading-relaxed">
                    As a professional with over 9 years of experience in legal compliance and quality control across APAC and US markets, I have demonstrated strong analytical capabilities through process optimization that achieved 30% cost reduction and 15% efficiency improvements. My journey shows exceptional adaptability in transitioning across different roles and regions, with proven skills in data analysis, strategic oversight, and transformation management.
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    While I am new to formal data analytics, my background in compliance monitoring, process optimization, and technical quality control provides a solid foundation for data analysis, combined with my demonstrated ability to quickly master new technical skills and commitment to continuous learning through hands-on experience and professional development.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card className="shadow-lg" style={{ backgroundColor: colors.lightBlue }}>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <a 
                    href="mailto:beth88.career@gmail.com"
                    className="flex items-center gap-2 text-lg hover:text-cyan-600 transition-colors"
                    style={{ color: colors.accent }}
                  >
                    <Mail size={20} />
                    beth88.career@gmail.com
                  </a>
                  <a 
                    href="http://www.linkedin.com/in/beth-nguyena773a157"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg hover:text-cyan-600 transition-colors"
                    style={{ color: colors.accent }}
                  >
                    <Linkedin size={20} />
                    LinkedIn Profile
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education">
            <Card className="shadow-lg" style={{ backgroundColor: colors.lightBlue }}>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: colors.primary }}>
                    Wichita State University
                  </h3>
                  <p className="text-lg" style={{ color: colors.secondary }}>
                    Master's degree, Business Analytics
                  </p>
                  <p className="text-sm" style={{ color: colors.secondary }}>
                    Aug 2024 - Aug 2026
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: colors.primary }}>
                    University of Economics and Law Ho Chi Minh City
                  </h3>
                  <p className="text-lg" style={{ color: colors.secondary }}>
                    Bachelor's degree, Banking, Corporate, Finance, and Securities Law
                  </p>
                  <p className="text-sm" style={{ color: colors.secondary }}>
                    2008 - 2012
                  </p>
                  <p className="mt-2" style={{ color: colors.secondary }}>
                    Grade: 3 out of 4
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AboutSection;
