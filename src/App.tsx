import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { CardStack } from './components/CardStack';
import { BottomSheet } from './components/BottomSheet';
import { MenuView } from './components/MenuView';
import { EndCard } from './components/EndCard';
import { mockItems } from './data/mockItems';

type AppView = 'landing' | 'browsing' | 'completed';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('landing');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleStart = () => {
    setCurrentView('browsing');
    setCurrentIndex(0);
  };

  const handleComplete = () => {
    setCurrentView('completed');
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setCurrentView('browsing');
  };

  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  const handleItemClick = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = mockItems[currentIndex];

  return (
    <div className="h-screen w-full bg-gray-50 overflow-hidden">
      {currentView === 'landing' && (
        <LandingPage onStart={handleStart} />
      )}

      {currentView === 'browsing' && (
        <CardStack
          items={mockItems}
          currentIndex={currentIndex}
          onIndexChange={handleIndexChange}
          onDetailsClick={() => setIsBottomSheetOpen(true)}
          onMenuClick={() => setIsMenuOpen(true)}
          onWhatsAppClick={() => {}}
          onComplete={handleComplete}
        />
      )}

      {currentView === 'completed' && (
        <EndCard
          onRestart={handleRestart}
          onViewAll={() => setIsMenuOpen(true)}
        />
      )}

      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
        item={currentItem}
      />

      <MenuView
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        items={mockItems}
        currentIndex={currentIndex}
        onItemClick={handleItemClick}
      />
    </div>
  );
}
