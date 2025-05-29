import React, { useState } from 'react';

interface DetailsSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const DetailsSection: React.FC<DetailsSectionProps> = ({ 
  title, 
  children, 
  defaultOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <div
        className="cursor-pointer p-2 bg-gray-100 rounded mb-2 font-medium hover:bg-gray-200 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </div>
      {isOpen && (
        <div className="p-2 border-l-4 border-teal-600 ml-2 bg-gray-50 mb-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default DetailsSection; 