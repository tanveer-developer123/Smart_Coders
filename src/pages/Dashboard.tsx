import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import { BookOpen, MessageCircle, FileText, User, Github, Linkedin, Award, TrendingUp, Clock, Target, Users, Code, Zap, Star } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();

  const features = [
    {
      title: 'Learn',
      description: 'Explore our comprehensive learning resources and tutorials',
      icon: BookOpen,
      link: '/learn',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      title: 'Chatbot',
      description: 'Get instant help and answers with our AI-powered chatbot',
      icon: MessageCircle,
      link: '/chatbot',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      title: 'PDF Tool',
      description: 'Extract and process information from PDF documents',
      icon: FileText,
      link: '/pdf-tool',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    }
  ];

  const teamMembers = [
    {
      name: 'Tanveer',
      role: 'Frontend Developer',
      avatar: '👨‍💻',
      github: 'https://github.com/tanveer',
      linkedin: 'https://linkedin.com/in/tanveer'
    },
    {
      name: 'Sarah Johnson',
      role: 'Backend Developer',
      avatar: '👩‍💻',
      github: 'https://github.com/sarah',
      linkedin: 'https://linkedin.com/in/sarah'
    },
    {
      name: 'Alex Chen',
      role: 'AI Engineer',
      avatar: '👨‍🔬',
      github: 'https://github.com/alex',
      linkedin: 'https://linkedin.com/in/alex'
    }
  ];

  const stats = [
    { label: 'Lessons Completed', value: 12, icon: BookOpen, color: 'text-blue-600' },
    { label: 'Chatbot Sessions', value: 45, icon: MessageCircle, color: 'text-green-600' },
    { label: 'PDFs Processed', value: 8, icon: FileText, color: 'text-purple-600' },
    { label: 'Achievements', value: 3, icon: Award, color: 'text-yellow-600' }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome back, {currentUser?.displayName || currentUser?.email?.split('@')[0]}! 👋
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Ready to continue your coding journey?
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 text-center"
            >
              <div className={`w-12 h-12 ${stat.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Link to={feature.link}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <feature.icon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {feature.description}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex items-center px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r ${feature.color} hover:shadow-lg transition-all duration-300`}
                    >
                      Get Started
                      <Zap className="w-5 h-5 ml-2" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The talented developers behind Smart Coders Community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 text-center group"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {member.role}
                </p>
                <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {[
              { action: 'Completed JavaScript Basics', time: '2 hours ago', type: 'lesson', icon: BookOpen },
              { action: 'Used Chatbot for React help', time: '1 day ago', type: 'chatbot', icon: MessageCircle },
              { action: 'Processed PDF: React Guide', time: '3 days ago', type: 'pdf', icon: FileText },
              { action: 'Earned "Quick Learner" badge', time: '1 week ago', type: 'achievement', icon: Award }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <activity.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 dark:text-white font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{activity.time}</p>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Complete Your Profile</h3>
              <p className="text-blue-100 mb-4">
                Add more details to personalize your learning experience
              </p>
              <Link 
                to="/profile"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <User className="w-5 h-5" />
                <span>View Profile</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-12 h-12" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
