import React from 'react';
import { motion } from 'framer-motion';

const Chatbot: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="text-8xl mb-8">🤖</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hello World - Chatbot Page Coming Soon
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Our AI-powered chatbot will be here soon to help you with your coding questions!
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold"
          >
            Coming Soon
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Chatbot;
