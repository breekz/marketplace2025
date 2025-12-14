import { motion } from 'motion/react';
import { Item } from '../types/item';
import { useState } from 'react';

interface ItemCardProps {
  item: Item;
  style?: React.CSSProperties;
  zIndex: number;
  onTap?: () => void;
  isFlipped?: boolean;
}

export function ItemCard({ item, style, zIndex, onTap, isFlipped = false }: ItemCardProps) {
  return (
    <motion.div
      style={{
        ...style,
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex,
      }}
      className="cursor-grab active:cursor-grabbing"
    >
      <div 
        className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
        style={{ perspective: '1000px' }}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
          onClick={onTap}
        >
          {/* Front of card - Photo */}
          <div 
            className="absolute w-full h-full"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Item info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="mb-3">
                {item.name}
              </h2>
              
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  item.condition === 'new' 
                    ? 'bg-green-500/90' 
                    : 'bg-blue-500/90'
                }`}>
                  {item.condition.toUpperCase()}
                </span>
                
                <span className="text-2xl">
                  ${item.price}
                </span>
              </div>
              
              <p className="text-white/60 text-sm mt-2">
                Tap for details
              </p>
            </div>
          </div>
          
          {/* Back of card - Details */}
          <div 
            className="absolute w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 p-6 flex flex-col"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="flex-1 overflow-y-auto">
              <h2 className="text-white mb-4">
                {item.name}
              </h2>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
                <div className="grid grid-cols-2 gap-4 text-white">
                  <div>
                    <p className="text-white/70 text-sm mb-1">Price</p>
                    <p className="text-xl">${item.price}</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-1">Condition</p>
                    <p className="text-xl capitalize">{item.condition}</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-1">Category</p>
                    <p>{item.category}</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-1">Seller</p>
                    <p>{item.seller}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <p className="text-white/70 text-sm mb-2">Description</p>
                <p className="text-white">{item.description}</p>
              </div>
            </div>
            
            <p className="text-white/50 text-sm text-center mt-4">
              Tap to flip back
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}