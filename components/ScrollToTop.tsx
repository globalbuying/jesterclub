import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

// Threshold in pixels before the button becomes visible
const SCROLL_THRESHOLD = 300;

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle visibility based on scroll position
      const shouldShow = window.scrollY > SCROLL_THRESHOLD;
      setIsVisible(shouldShow);
    };

    // Add scroll listener with passive option for better scrolling performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      // Fixed positioning at bottom-right with high z-index
      // Styles match the club theme (Oxford Blue bg, Cambridge Green border/hover)
      className={`
        fixed bottom-8 right-8 z-50 
        p-3 rounded-full 
        bg-oxford text-white 
        shadow-[0_0_15px_rgba(0,0,0,0.3)] 
        border-2 border-cambridge 
        transition-all duration-300 ease-in-out
        transform 
        hover:scale-110 hover:bg-cambridge hover:text-oxford hover:shadow-[0_0_20px_rgba(163,193,173,0.6)]
        focus:outline-none focus:ring-2 focus:ring-cambridge focus:ring-offset-2
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
      aria-label="Scroll to top of page"
    >
      <ArrowUp size={24} />
    </button>
  );
};