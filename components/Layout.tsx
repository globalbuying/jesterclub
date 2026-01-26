import React from 'react';
import { Header } from './Header';
import { ViewState } from '../types';
import { ScrollToTop } from './ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentView, 
  onNavigate, 
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <Header 
        currentView={currentView} 
        onNavigate={onNavigate} 
      />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-oxford text-white py-12 border-t-8 border-cambridge">
        <div className="container mx-auto px-6 text-center flex flex-col items-center">
          <div className="mb-6">
            <span className="font-serif font-bold text-2xl tracking-wider">THE JESTERS CLUB</span>
          </div>
          <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
            A members-only club dedicated to the enjoyment of our games.
          </p>
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} The Jesters Club. All right reserved.
          </p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
};