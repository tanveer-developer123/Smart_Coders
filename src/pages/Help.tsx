import React from 'react';
import { motion } from 'framer-motion';

const Help: React.FC = () => {
  const helpSections = [
    {
      title: "Getting Started",
      content: "Learn how to create an account and navigate the platform",
      steps: [
        "Create an account using email or Google sign-in",
        "Complete your profile setup",
        "Explore the dashboard to access all features",
        "Start with the Learn section to begin your journey"
      ]
    },
    {
      title: "Using the Dashboard",
      content: "Navigate and make the most of your dashboard experience",
      steps: [
        "View your profile information and stats",
        "Access the three main features: Learn, Chatbot, and PDF Tool",
        "Track your progress and achievements",
        "Use the navigation menu to move between sections"
      ]
    },
    {
      title: "Learning Resources",
      content: "Make the most of our educational content",
      steps: [
        "Browse through available lessons and tutorials",
        "Follow the structured learning paths",
        "Practice with interactive exercises",
        "Track your learning progress"
      ]
    },
    {
      title: "AI Chatbot",
      content: "Get help with your coding questions",
      steps: [
        "Ask specific programming questions",
        "Get explanations for code concepts",
        "Request code examples and solutions",
        "Use natural language to describe your problems"
      ]
    },
    {
      title: "PDF Tools",
      content: "Process and extract information from documents",
      steps: [
        "Upload PDF documents for processing",
        "Extract text and key information",
        "Convert documents to different formats",
        "Generate summaries and insights"
      ]
    }
  ];

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
            Help Center
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know to get started with Smart Coders Community
          </p>
        </motion.div>

        <div className="space-y-8">
          {helpSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {section.content}
              </p>
              <div className="space-y-3">
                {section.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-blue-600">
                        {stepIndex + 1}
                      </span>
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-blue-50 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Need Help?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            If you can't find what you're looking for, feel free to contact us.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Help;
