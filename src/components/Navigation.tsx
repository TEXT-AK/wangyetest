import React from 'react';

interface NavigationProps {
  totalSections: number;
  currentSection: number;
  onNavClick: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ totalSections, currentSection, onNavClick }) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      {Array.from({ length: totalSections }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 my-2 rounded-full cursor-pointer transition-all duration-300 ${
            index === currentSection ? 'bg-white scale-125' : 'bg-gray-500 hover:bg-gray-300'
          }`}
          onClick={() => onNavClick(index)}
        />
      ))}
    </div>
  );
};

export default Navigation;