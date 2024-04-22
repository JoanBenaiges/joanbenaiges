import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <>
      <Navigation language={language} toggleLanguage={toggleLanguage} />
      <AppRoutes language={language} />
      <Footer language={language} />
    </>
  );
}

export default App;