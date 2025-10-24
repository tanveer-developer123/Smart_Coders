import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();

  const features = [
    {
      title: 'Learn',
      description: 'Explore our comprehensive learning resources and tutorials',
      icon: '📚',
      link: '/learn',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Chatbot',
      description: 'Get instant help and answers with our AI-powered chatbot',
      icon: '🤖',
      link: '/chatbot',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'PDF Tool',
      description: 'Extract and process information from PDF documents',
      icon: '📄',
      link: '/pdf-tool',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome, {currentUser?.displayName || currentUser?.email?.split('@')[0]}!
          </h1>
          <p className="text-xl text-gray-600">
            Ready to start your learning journey?
          </p>
        </motion.div>

        {/* User Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-12 border border-gray-200"
        >
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {currentUser?.displayName || 'User'}
              </h3>
              <p className="text-gray-600">{currentUser?.email}</p>
              <p className="text-sm text-gray-500">
                Member since {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Link to={feature.link}>
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-6xl mb-6"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {feature.description}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex items-center px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r ${feature.color} hover:shadow-lg transition-all duration-300`}
                    >
                      Get Started
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
            <div className="text-gray-600">Lessons Completed</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-green-600 mb-2">0</div>
            <div className="text-gray-600">Chatbot Sessions</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
            <div className="text-gray-600">PDFs Processed</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
