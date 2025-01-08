import React from 'react';
import { 
  AboutSection,
  CareerTimeline, 
  QuadrantSkillsChart,
  CoreCompetenceWheel 
} from './components';

const App = () => {
  const colors = {
    primary: '#222831',
    secondary: '#393E46',
    light: '#EEEEEE',
    accent: '#00ADB5',
    lightBlue: '#E3FDFD',
    paleBlue: '#CBF1F5',
    skyBlue: '#A6E3E9',
    oceanBlue: '#71C9CE'
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.light }}>
      <AboutSection />
      
      {/* Career Timeline */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <CareerTimeline />
        </div>
      </section>

      {/* Skills Charts */}
      <section className="py-12 px-4" style={{ backgroundColor: colors.paleBlue }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <QuadrantSkillsChart />
          <CoreCompetenceWheel />
        </div>
      </section>
  
      <footer className="py-6 px-4 text-center" style={{ backgroundColor: colors.oceanBlue }}>
        <p className="text-sm" style={{ color: colors.light }}>
          © 2024 Beth Nguyen. Professional Portfolio
        </p>
      </footer>
    </div>
  );
};

export default App;
