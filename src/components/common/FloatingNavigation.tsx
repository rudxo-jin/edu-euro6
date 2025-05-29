import React from 'react';
import { ChevronLeft, ChevronRight, Home, RotateCcw } from 'lucide-react';

interface FloatingNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onScrollToTop: () => void;
}

const FloatingNavigation: React.FC<FloatingNavigationProps> = ({ 
  activeTab, 
  onTabChange, 
  onScrollToTop 
}) => {
  const tabs = [
    { id: 'module1', label: '개요' },
    { id: 'module2', label: '진단' },
    { id: 'module3', label: '후처리' },
    { id: 'module4', label: 'EGR' },
    { id: 'module5', label: '연료' },
    { id: 'module6', label: '과급' },
  ];

  const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
  const progress = ((currentIndex + 1) / tabs.length) * 100;
  
  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < tabs.length - 1;

  const handlePrevious = () => {
    if (canGoPrevious) {
      onTabChange(tabs[currentIndex - 1].id);
      onScrollToTop();
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      onTabChange(tabs[currentIndex + 1].id);
      onScrollToTop();
    }
  };

  const handleHome = () => {
    onTabChange('module1');
    onScrollToTop();
  };

  return (
    <>
      {/* 진행률 표시기 */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 md:hidden">
        <div className="px-4 py-2">
          <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
            <span>{tabs[currentIndex]?.label}</span>
            <span>{currentIndex + 1} / {tabs.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div 
              className="bg-gradient-to-r from-teal-500 to-teal-600 h-1.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* 하단 플로팅 네비게이션 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden floating-nav-enter">
        {/* 배경 블러 효과 */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-lg border-t border-gray-200" />
        
        {/* 네비게이션 컨텐츠 */}
        <div className="relative px-4 py-3 safe-area-inset-bottom">
          <div className="flex items-center justify-between">
            {/* 이전 버튼 */}
            <button
              onClick={handlePrevious}
              disabled={!canGoPrevious}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                canGoPrevious
                  ? 'bg-teal-500 text-white shadow-lg hover:bg-teal-600 active:scale-95'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            {/* 중앙 액션 버튼들 */}
            <div className="flex items-center space-x-3">
              {/* 홈 버튼 */}
              <button
                onClick={handleHome}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 active:scale-95 transition-all duration-200"
              >
                <Home size={18} />
              </button>

              {/* 맨 위로 버튼 */}
              <button
                onClick={onScrollToTop}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 active:scale-95 transition-all duration-200"
              >
                <RotateCcw size={18} />
              </button>
            </div>

            {/* 다음 버튼 */}
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                canGoNext
                  ? 'bg-teal-500 text-white shadow-lg hover:bg-teal-600 active:scale-95'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* 현재 모듈 표시 */}
          <div className="text-center mt-2">
            <span className="text-xs font-medium text-gray-600">
              {tabs[currentIndex]?.label}
            </span>
          </div>
        </div>
      </div>

      {/* 컨텐츠 하단 여백 (플로팅 네비게이션 공간 확보) */}
      <div className="h-24 md:hidden safe-area-inset-bottom" />
    </>
  );
};

export default FloatingNavigation; 