import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import FloatingNavigation from './common/FloatingNavigation';
import SwipeIndicator from './common/SwipeIndicator';
import Module1 from './modules/Module1';
import Module2 from './modules/Module2';
import Module3 from './modules/Module3';
import Module4 from './modules/Module4';
import Module5 from './modules/Module5';
import Module6 from './modules/Module6';
import Footer from './Footer';
import { useSwipeGesture } from '../hooks/useSwipeGesture';

const MaintenanceEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('module1');

  const tabs = [
    'module1', 'module2', 'module3', 'module4', 'module5', 'module6'
  ];

  const handleTabChange = (tabId: string, sectionId?: string) => {
    setActiveTab(tabId);
    window.scrollTo(0, 0);
    
    if (sectionId) {
      setTimeout(() => {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSwipeLeft = () => {
    const currentIndex = tabs.findIndex(tab => tab === activeTab);
    if (currentIndex < tabs.length - 1) {
      handleTabChange(tabs[currentIndex + 1]);
    }
  };

  const handleSwipeRight = () => {
    const currentIndex = tabs.findIndex(tab => tab === activeTab);
    if (currentIndex > 0) {
      handleTabChange(tabs[currentIndex - 1]);
    }
  };

  // 스와이프 제스처 활성화
  const { swipeDirection, isSwipeVisible } = useSwipeGesture({
    onSwipeLeft: handleSwipeLeft,
    onSwipeRight: handleSwipeRight,
    threshold: 80,
  });

  const renderActiveModule = () => {
    switch (activeTab) {
      case 'module1':
        return <Module1 onNavigate={handleTabChange} />;
      case 'module2':
        return <Module2 onNavigate={handleTabChange} />;
      case 'module3':
        return <Module3 onNavigate={handleTabChange} />;
      case 'module4':
        return <Module4 onNavigate={handleTabChange} />;
      case 'module5':
        return <Module5 onNavigate={handleTabChange} />;
      case 'module6':
        return <Module6 onNavigate={handleTabChange} />;
      default:
        return <Module1 onNavigate={handleTabChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      
      {/* 모바일 진행률 표시기를 위한 상단 여백 */}
      <div className="h-16 md:hidden" />
      
      <main className="container mx-auto p-4 md:p-8">
        {renderActiveModule()}
      </main>
      
      <Footer />
      
      {/* 플로팅 네비게이션 */}
      <FloatingNavigation 
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onScrollToTop={handleScrollToTop}
      />
      
      {/* 스와이프 표시기 */}
      <SwipeIndicator 
        direction={swipeDirection}
        isVisible={isSwipeVisible}
      />
    </div>
  );
};

export default MaintenanceEducation; 