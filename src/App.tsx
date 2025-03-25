import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ThemeProvider from './themes/ThemeProvider';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import PackagesPage from './pages/PackagesPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import CssBaseline from '@mui/material/CssBaseline';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
      <WhatsAppButton />
    </ThemeProvider>
  );
};

export default App;
