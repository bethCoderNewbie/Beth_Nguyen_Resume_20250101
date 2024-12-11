import React from 'react';
import { 
  StrengthWeaknessAnalysis, 
  CareerTimeline, 
  QuadrantSkillsChart,
  CoreCompetenceWheel 
} from './components';
import { Mail, Linkedin, GraduationCap } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const App = () => {
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
    <div className="min-h-screen" style={{ backgroundColor: colors.light }}>
      {/* About Me Section */}
      <section className="py-8 px-4" style={{ backgroundColor: colors.lightBlue }}>
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h1 className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>Beth Nguyen</h1>
              <div className="prose max-w-none" style={{ color: colors.secondary }}>
                {/* About content */}
                <Tabs defaultValue="contact" className="w-full mt-6">
                  <TabsList className="w-full mb-4">
                    <TabsTrigger value="contact">Contact</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                  </TabsList>
                  {/* Contact and Education tabs content */}
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <CareerTimeline />
        </div>
      </section>

      {/* Skills Charts - Side by Side */}
      <section className="py-12 px-4" style={{ backgroundColor: colors.paleBlue }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <QuadrantSkillsChart />
          <CoreCompetenceWheel />
        </div>
      </section>

      {/* Strengths and Weaknesses */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <StrengthWeaknessAnalysis />
        </div>
      </section>

      <footer className="py-6 px-4 text-center" style={{ backgroundColor: colors.primary }}>
        <p className="text-sm" style={{ color: colors.light }}>
          © 2024 Beth Nguyen. Professional Portfolio
        </p>
      </footer>
    </div>
  );
};

export default App;
