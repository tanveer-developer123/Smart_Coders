import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Chatbot from './pages/Chatbot';
import PDFTool from './pages/PDFTool';
import About from './pages/About';
import Help from './pages/Help';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Protected Route component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? <>{children}</> : <Navigate to="/login" />;
};

// Public Route component (redirect to dashboard if already logged in)
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  
  return !currentUser ? <>{children}</> : <Navigate to="/dashboard" />;
};

// Layout component to conditionally show navbar and footer
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {!isAuthPage && <Navbar />}
      <main className={!isAuthPage ? 'min-h-screen' : ''}>
        {children}
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
              <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/learn" element={<ProtectedRoute><Learn /></ProtectedRoute>} />
              <Route path="/chatbot" element={<ProtectedRoute><Chatbot /></ProtectedRoute>} />
              <Route path="/pdf-tool" element={<ProtectedRoute><PDFTool /></ProtectedRoute>} />
              <Route path="/about" element={<About />} />
              <Route path="/help" element={<Help />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
