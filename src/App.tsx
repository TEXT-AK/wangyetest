import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Section from './components/Section';
import Navigation from './components/Navigation';

const sections = [
  {
    title: 'Revolutionary Design',
    description: 'Sleek, modern, and built for the future.',
    imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    title: 'Unparalleled Performance',
    description: 'Blazing fast speeds that redefine possibilities.',
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    title: 'Seamless Integration',
    description: 'Connects flawlessly with your digital ecosystem.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
];

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentSection]);

  const handleNavClick = (index: number) => {
    setCurrentSection(index);
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-black text-white">
      <Navigation 
        totalSections={sections.length} 
        currentSection={currentSection} 
        onNavClick={handleNavClick}
      />
      {sections.map((section, index) => (
        <Section
          key={index}
          {...section}
          isActive={index === currentSection}
          style={{
            transform: `translateY(-${currentSection * 100}%)`,
            transition: 'transform 0.8s cubic-bezier(0.86, 0, 0.07, 1)',
          }}
        />
      ))}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        {currentSection < sections.length - 1 && (
          <ChevronDown 
            className="w-8 h-8 animate-bounce cursor-pointer" 
            onClick={() => setCurrentSection(prev => Math.min(prev + 1, sections.length - 1))}
          />
        )}
        {currentSection > 0 && (
          <ChevronUp 
            className="w-8 h-8 animate-bounce cursor-pointer mt-2" 
            onClick={() => setCurrentSection(prev => Math.max(prev - 1, 0))}
          />
        )}
      </div>
    </div>
  );
}

export default App;