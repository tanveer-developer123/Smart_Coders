import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Smart Coders Community
          </h1>
          <p className="text-xl text-gray-600">
            Empowering learners with AI and code
          </p>
        </motion.div>

        <div className="space-y-12">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Smart Coders Community is dedicated to providing students and developers with cutting-edge 
              learning tools powered by artificial intelligence. We believe that everyone should have 
              access to quality education and the latest technology to enhance their coding journey.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Learning Resources</h3>
                <p className="text-gray-600">
                  Comprehensive tutorials and interactive learning materials
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Chatbot</h3>
                <p className="text-gray-600">
                  Get instant help and answers to your coding questions
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">PDF Tools</h3>
                <p className="text-gray-600">
                  Extract and process information from documents
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We envision a world where learning to code is accessible, engaging, and personalized 
              for every individual. By leveraging the power of AI and modern web technologies, 
              we're building the future of coding education.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;
