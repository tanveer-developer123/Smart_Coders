# Smart Coders Community

A modern React web application for students and developers to learn, interact, and grow with AI-powered tools.

## 🚀 Features

- **Authentication**: Firebase Auth with email/password and Google sign-in
- **Modern UI**: Clean, responsive design with Tailwind CSS
- **Smooth Animations**: Framer Motion for delightful user interactions
- **Protected Routes**: Secure navigation with React Router DOM
- **Dashboard**: Personalized user experience with feature cards
- **Learning Tools**: Placeholder pages for Learn, Chatbot, and PDF Tool features

## 🛠️ Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Firebase** for authentication and database
- **Framer Motion** for animations
- **React Router DOM** for navigation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Clg_Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication (Email/Password and Google)
   - Enable Firestore Database
   - Copy your Firebase config
   - Update `src/firebase/config.ts` with your Firebase configuration

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🔧 Firebase Configuration

Update the Firebase configuration in `src/firebase/config.ts`:

```typescript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

## 📱 Pages

### Public Pages
- **Home**: Hero section with call-to-action buttons
- **Login**: Email/password and Google authentication
- **Signup**: User registration with form validation
- **About**: Project description and features
- **Help**: Comprehensive help documentation
- **FAQs**: Frequently asked questions
- **Contact**: Contact form and information

### Protected Pages (Require Authentication)
- **Dashboard**: User profile and feature cards
- **Learn**: Learning resources (placeholder)
- **Chatbot**: AI-powered chatbot (placeholder)
- **PDF Tool**: Document processing tools (placeholder)

## 🎨 Design Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface with soft blue theme
- **Smooth Animations**: Framer Motion for page transitions and hover effects
- **Accessibility**: Proper semantic HTML and keyboard navigation
- **Loading States**: User feedback during authentication

## 🔐 Authentication

The app includes:
- Email/password authentication
- Google OAuth integration
- Protected routes for authenticated users
- Automatic redirects based on authentication state
- User profile management with Firestore

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**
   - Vercel
   - Netlify
   - Firebase Hosting
   - AWS S3 + CloudFront

## 📝 Development

- **Linting**: ESLint for code quality
- **TypeScript**: Type safety and better development experience
- **Hot Reload**: Fast development with Vite
- **Component Structure**: Organized, reusable components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you need help or have questions:
- Check the Help page in the application
- Review the FAQs section
- Contact us through the Contact page
- Open an issue on GitHub

---

**Smart Coders Community** - Empowering Learners with AI and Code 🚀