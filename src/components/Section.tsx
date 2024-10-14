import React from 'react';

interface SectionProps {
  title: string;
  description: string;
  imageUrl: string;
  isActive: boolean;
  style: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({ title, description, imageUrl, isActive, style }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full flex items-center justify-center bg-cover bg-center ${
        isActive ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-800`}
      style={{ ...style, backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="z-10 text-center px-4">
        <h2 className="text-5xl font-bold mb-4 transform transition-all duration-700 ease-out"
            style={{ 
              opacity: isActive ? 1 : 0, 
              transform: isActive ? 'translateY(0)' : 'translateY(20px)'
            }}>
          {title}
        </h2>
        <p className="text-xl max-w-2xl mx-auto transform transition-all duration-700 ease-out delay-200"
           style={{ 
             opacity: isActive ? 1 : 0, 
             transform: isActive ? 'translateY(0)' : 'translateY(20px)'
           }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Section;