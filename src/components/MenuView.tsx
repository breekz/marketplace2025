import { motion, AnimatePresence } from 'motion/react';
import { X, Tag } from 'lucide-react';
import { Item } from '../types/item';

interface MenuViewProps {
  isOpen: boolean;
  onClose: () => void;
  items: Item[];
  currentIndex: number;
  onItemClick: (index: number) => void;
}

export function MenuView({ isOpen, onClose, items, currentIndex, onItemClick }: MenuViewProps) {
  const categories = Array.from(new Set(items.map(item => item.category)));

  const handleItemClick = (index: number) => {
    onItemClick(index);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 bottom-0 w-full max-w-sm bg-white z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
              <h3>Browse All Items</h3>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Categories */}
            <div className="px-6 py-4 border-b border-gray-100">
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <span
                    key={category}
                    className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm flex items-center gap-1"
                  >
                    <Tag className="w-3 h-3" />
                    {category}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Items list */}
            <div className="flex-1 overflow-y-auto">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleItemClick(index)}
                  className={`flex gap-4 p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                    index === currentIndex ? 'bg-purple-50' : ''
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="mb-1 truncate">{item.name}</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        item.condition === 'new' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {item.condition.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-500">{item.category}</span>
                    </div>
                    <p className="text-purple-600">${item.price}</p>
                  </div>
                  
                  {/* Current indicator */}
                  {index === currentIndex && (
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
