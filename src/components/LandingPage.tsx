import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mb-8 inline-block"
        >
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl">
            <ShoppingBag className="w-12 h-12 text-purple-600" />
          </div>
        </motion.div>
        
        <h1 className="text-white mb-4">
          Swipe & Discover
        </h1>
        
        <p className="text-white/90 mb-12">
          Your next treasure is just a swipe away. Browse unique items from people in your community.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="bg-white text-purple-600 px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-shadow"
        >
          Start Exploring
        </motion.button>
      </motion.div>
    </div>
  );
}
