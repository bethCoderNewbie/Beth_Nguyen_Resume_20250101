import React from 'react';
import { 
  StrengthWeaknessAnalysis, 
  CareerTimeline, 
  QuadrantSkillsChart,
  CoreCompetenceWheel 
} from './components';

const App = () => {
  const colors = {
    primary: '#222831',
    secondary: '#393E46',
    accent: '#00ADB5',
    light: '#EEEEEE'
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.light }}>
      <header className="py-8 px-4" style={{ backgroundColor: colors.primary }}>
        <h1 className="text-3xl font-bold text-center" style={{ color: colors.light }}>
          Professional Portfolio
        </h1>
      </header>
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        <section>
          <QuadrantSkillsChart />
        </section>
        
        <section>
          <CoreCompetenceWheel />
        </section>
        
        <section>
          <CareerTimeline />
        </section>
        
        <section>
          <StrengthWeaknessAnalysis />
        </section>
      </main>
      
      <footer className="py-6 px-4 text-center" style={{ backgroundColor: colors.primary }}>
        <p className="text-sm" style={{ color: colors.light }}>
          © 2024 Professional Portfolio. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default App;
