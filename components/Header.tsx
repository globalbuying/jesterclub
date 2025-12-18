import React, { useState } from 'react';
import { ViewState } from '../types';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string; view: ViewState }[] = [
    { label: 'Home', view: 'HOME' },
    { label: 'History', view: 'HISTORY' },
    { label: 'Committee', view: 'COMMITTEE' },
    { label: 'Fixtures', view: 'FIXTURES' },
    { label: 'News', view: 'NEWS' },
    { label: 'Gallery', view: 'GALLERY' },
  ];

  const handleNav = (view: ViewState) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-oxford text-white sticky top-0 z-50 shadow-md border-b-4 border-cambridge">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo Area */}
        <div 
          className="flex items-center gap-4 cursor-pointer group" 
          onClick={() => handleNav('HOME')}
        >
          <div className="w-16 h-16 md:w-18 md:h-18 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-cambridge shadow-lg transition-transform group-hover:scale-105 duration-300">
             <Logo className="w-full h-full scale-[1.5]" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-wider group-hover:text-cambridge transition-colors leading-none">THE JESTERS CLUB</h1>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => handleNav(item.view)}
              className={`text-xs lg:text-sm font-bold uppercase tracking-widest transition-all duration-200 relative group
                ${currentView === item.view ? 'text-cambridge' : 'text-gray-300 hover:text-white'}
              `}
            >
              {item.label}
              <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-cambridge transform transition-transform duration-300 origin-left
                ${currentView === item.view ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
              `}></span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="md:hidden bg-oxford-light border-t border-gray-700 animate-fade-in">
          <ul className="flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.view}>
                <button
                  onClick={() => handleNav(item.view)}
                  className={`w-full text-left px-8 py-4 border-l-4 transition-all
                    ${currentView === item.view ? 'border-cambridge bg-white/5 text-white' : 'border-transparent text-gray-400'}
                  `}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};