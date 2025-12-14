import { motion } from 'motion/react';
import { RotateCcw, List } from 'lucide-react';

interface EndCardProps {
  onRestart: () => void;
  onViewAll: () => void;
}

export function EndCard({ onRestart, onViewAll }: EndCardProps) {
  return (
    <div className="h-full flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
            <RotateCcw className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="mb-4">
            That's All for Now!
          </h2>
          
          <p className="text-gray-600 mb-8">
            You've seen all available items. New items are added weekly, so check back soon!
          </p>
        </div>
        
        <div className="flex flex-col gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onRestart}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Start Over
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onViewAll}
            className="w-full bg-white border-2 border-gray-200 text-gray-700 py-4 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <List className="w-5 h-5" />
            View All Items
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
