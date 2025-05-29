import React from 'react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'module1', label: '모듈 1: 개요' },
    { id: 'module2', label: '모듈 2: 고장 진단' },
    { id: 'module3', label: '모듈 3: 후처리장치' },
    { id: 'module4', label: '모듈 4: EGR' },
    { id: 'module5', label: '모듈 5: 연료 시스템' },
    { id: 'module6', label: '모듈 6: 과급 시스템' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-center overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-3 cursor-pointer border-b-4 transition-all duration-300 font-medium whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-teal-600 text-teal-600 font-bold'
                : 'border-transparent hover:bg-gray-100'
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation; 