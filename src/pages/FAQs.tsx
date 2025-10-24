import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Smart Coders Community?",
      answer: "Smart Coders Community is a modern web application designed for students and developers to learn, interact, and grow. We provide AI-powered learning tools, interactive chatbots, and PDF processing capabilities to enhance your coding journey."
    },
    {
      question: "How do I create an account?",
      answer: "You can create an account by clicking the 'Join Now' button on our homepage. You can sign up using your email address and password, or use Google sign-in for a quicker registration process."
    },
    {
      question: "What features are currently available?",
      answer: "Currently, we have the authentication system, dashboard, and placeholder pages for Learn, Chatbot, and PDF Tool features. The core functionality is being developed and will be available soon."
    },
    {
      question: "Is the platform free to use?",
      answer: "Yes, Smart Coders Community is free to use. We believe in making quality coding education accessible to everyone. Some premium features may be introduced in the future, but the core functionality will remain free."
    },
    {
      question: "How do I get help if I'm stuck?",
      answer: "You can use our Help section for detailed guides, check the FAQs for common questions, or contact our support team through the Contact page. We're here to help you succeed in your coding journey."
    },
    {
      question: "What programming languages are supported?",
      answer: "Our platform is designed to support multiple programming languages including JavaScript, Python, Java, C++, and more. The AI chatbot can help with questions across various programming languages and frameworks."
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
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about Smart Coders Community
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-500"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 bg-blue-50 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Can't find the answer you're looking for? We're here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQs;
