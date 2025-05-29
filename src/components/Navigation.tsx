import React, { useState } from 'react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const tabs = [
    { id: 'module1', label: '모듈 1: 개요', shortLabel: '개요' },
    { id: 'module2', label: '모듈 2: 고장 진단', shortLabel: '진단' },
    { id: 'module3', label: '모듈 3: 후처리장치', shortLabel: '후처리' },
    { id: 'module4', label: '모듈 4: EGR', shortLabel: 'EGR' },
    { id: 'module5', label: '모듈 5: 연료 시스템', shortLabel: '연료' },
    { id: 'module6', label: '모듈 6: 과급 시스템', shortLabel: '과급' },
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  const handleTabChange = (tabId: string) => {
    onTabChange(tabId);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* 모바일 드롭다운 메뉴 (768px 미만) */}
      <div className="md:hidden">
        <div className="container mx-auto px-4">
          <button
            className="w-full flex items-center justify-between py-4 text-left"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="font-medium text-teal-600">
              📚 {activeTabData?.label || '모듈 선택'}
            </span>
            <span className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0 ${
                    activeTab === tab.id ? 'bg-teal-50 text-teal-600 font-medium' : ''
                  }`}
                  onClick={() => handleTabChange(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 태블릿/데스크톱 탭 메뉴 (768px 이상) */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 lg:px-6 py-3 cursor-pointer border-b-4 transition-all duration-300 font-medium whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab.id
                    ? 'border-teal-600 text-teal-600 font-bold'
                    : 'border-transparent hover:bg-gray-100'
                }`}
                onClick={() => onTabChange(tab.id)}
              >
                <span className="lg:hidden">{tab.shortLabel}</span>
                <span className="hidden lg:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 