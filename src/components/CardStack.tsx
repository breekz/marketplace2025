import { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { Item } from '../types/item';
import { ItemCard } from './ItemCard';
import { Info, List, MessageCircle } from 'lucide-react';

interface CardStackProps {
  items: Item[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  onDetailsClick: () => void;
  onMenuClick: () => void;
  onWhatsAppClick: () => void;
  onComplete: () => void;
}

export function CardStack({
  items,
  currentIndex,
  onIndexChange,
  onDetailsClick,
  onMenuClick,
  onWhatsAppClick,
  onComplete,
}: CardStackProps) {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | null>(null);

  const currentItem = items[currentIndex];
  const nextItem = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;
  const nextNextItem = currentIndex < items.length - 2 ? items[currentIndex + 2] : null;

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 100;
    const velocity = info.velocity.x;
    
    if (Math.abs(info.offset.x) > threshold || Math.abs(velocity) > 500) {
      if (info.offset.x < 0 || velocity < -500) {
        // Swipe left - next item
        setExitDirection('left');
        setTimeout(() => {
          if (currentIndex < items.length - 1) {
            onIndexChange(currentIndex + 1);
          } else {
            onComplete();
          }
          setExitDirection(null);
        }, 300);
      } else {
        // Swipe right - previous item
        setExitDirection('right');
        setTimeout(() => {
          if (currentIndex > 0) {
            onIndexChange(currentIndex - 1);
          }
          setExitDirection(null);
        }, 300);
      }
    }
  };

  const handleCardTap = (itemId: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleWhatsApp = () => {
    if (currentItem) {
      const message = encodeURIComponent(`Hi! I'm interested in the ${currentItem.name}`);
      window.open(`https://wa.me/${currentItem.whatsappNumber}?text=${message}`, '_blank');
    }
  };

  if (currentIndex >= items.length) {
    return null;
  }

  return (
    <div className="relative h-full w-full flex flex-col">
      {/* Card stack area */}
      <div className="flex-1 relative px-4 pt-8 pb-4">
        <div className="relative w-full h-full max-w-md mx-auto">
          {/* Third card (most tilted) */}
          {nextNextItem && (
            <motion.div
              key={`card-${currentIndex + 2}`}
              initial={{ rotate: 3, scale: 0.9, y: 8, opacity: 0 }}
              animate={{ rotate: 3, scale: 0.9, y: 8, opacity: 1 }}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: 1,
              }}
            >
              <ItemCard
                item={nextNextItem}
                style={{}}
                zIndex={1}
              />
            </motion.div>
          )}
          
          {/* Second card (slightly tilted) */}
          {nextItem && (
            <motion.div
              key={`card-${currentIndex + 1}`}
              initial={{ rotate: -2, scale: 0.95, y: 4, opacity: 0 }}
              animate={{ rotate: -2, scale: 0.95, y: 4, opacity: 1 }}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: 2,
              }}
            >
              <ItemCard
                item={nextItem}
                style={{}}
                zIndex={2}
              />
            </motion.div>
          )}
          
          {/* Current card (draggable) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`card-${currentIndex}`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              initial={{ 
                x: 0,
                rotate: 0,
                scale: 1,
                opacity: 1
              }}
              animate={{ 
                x: 0,
                rotate: 0,
                scale: 1,
                opacity: 1
              }}
              exit={{ 
                x: exitDirection === 'left' ? -500 : exitDirection === 'right' ? 500 : 0,
                opacity: 0,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: 3,
              }}
              whileDrag={{
                scale: 1.05,
                cursor: 'grabbing'
              }}
            >
              <ItemCard
                item={currentItem}
                style={{}}
                zIndex={3}
                onTap={() => handleCardTap(currentItem.id)}
                isFlipped={flippedCards.has(currentItem.id)}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="px-4 pb-8 pt-4">
        <div className="flex items-center justify-center gap-6 max-w-md mx-auto">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onDetailsClick}
            className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
          >
            <Info className="w-6 h-6 text-blue-600" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onMenuClick}
            className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
          >
            <List className="w-6 h-6 text-gray-700" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleWhatsApp}
            className="w-16 h-16 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
