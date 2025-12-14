import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Item } from '../types/item';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  item: Item | null;
}

export function BottomSheet({ isOpen, onClose, item }: BottomSheetProps) {
  if (!item) return null;

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
          
          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 max-h-[85vh] overflow-hidden"
          >
            {/* Handle bar */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
            </div>
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3>Item Details</h3>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Content */}
            <div className="overflow-y-auto px-6 py-6 max-h-[calc(85vh-120px)]">
              {/* Image */}
              <div className="mb-6 rounded-2xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              {/* Item name and price */}
              <div className="mb-6">
                <h2 className="mb-3">{item.name}</h2>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1.5 rounded-full text-sm ${
                    item.condition === 'new' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {item.condition.toUpperCase()}
                  </span>
                  <span className="text-2xl text-purple-600">
                    ${item.price}
                  </span>
                </div>
              </div>
              
              {/* Details grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-gray-500 text-sm mb-1">Category</p>
                  <p>{item.category}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-gray-500 text-sm mb-1">Seller</p>
                  <p>{item.seller}</p>
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-6">
                <h4 className="mb-3">Description</h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* Contact button */}
              <button
                onClick={() => {
                  const message = encodeURIComponent(`Hi! I'm interested in the ${item.name}`);
                  window.open(`https://wa.me/${item.whatsappNumber}?text=${message}`, '_blank');
                }}
                className="w-full bg-green-500 text-white py-4 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <span>Contact Seller on WhatsApp</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
