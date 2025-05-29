import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SwipeIndicatorProps {
  direction: 'left' | 'right' | null;
  isVisible: boolean;
}

const SwipeIndicator: React.FC<SwipeIndicatorProps> = ({ direction, isVisible }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible && direction) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, direction]);

  if (!show || !direction) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center md:hidden">
      <div 
        className={`
          flex items-center justify-center w-20 h-20 rounded-full 
          bg-black/20 backdrop-blur-sm border-2 border-white/30
          swipe-indicator
          ${direction === 'left' ? 'translate-x-8' : '-translate-x-8'}
        `}
      >
        {direction === 'left' ? (
          <ChevronLeft size={32} className="text-white" />
        ) : (
          <ChevronRight size={32} className="text-white" />
        )}
      </div>
    </div>
  );
};

export default SwipeIndicator; 