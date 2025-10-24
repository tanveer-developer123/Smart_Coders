import React from 'react';
import { motion } from 'framer-motion';

const Learn: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="text-8xl mb-8">📚</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hello World - Learn Page Coming Soon
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're working hard to bring you amazing learning content. Stay tuned!
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold"
          >
            Coming Soon
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Learn;
