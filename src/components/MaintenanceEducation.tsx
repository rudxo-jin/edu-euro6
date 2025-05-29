import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Module1 from './modules/Module1';
import Module2 from './modules/Module2';
import Module3 from './modules/Module3';
import Module4 from './modules/Module4';
import Module5 from './modules/Module5';
import Module6 from './modules/Module6';
import Footer from './Footer';

const MaintenanceEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('module1');

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
      <main className="container mx-auto p-4 md:p-8">
        {renderActiveModule()}
      </main>
      <Footer />
    </div>
  );
};

export default MaintenanceEducation; 