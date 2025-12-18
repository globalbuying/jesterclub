import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <img 
      src="https://futurerelevance.com/wp-content/uploads/2025/11/jester.png" 
      alt="The Jesters Club South Africa" 
      className={`object-contain ${className}`}
    />
  );
};