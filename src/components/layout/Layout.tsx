import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      '& > main': {
        flexGrow: 1,
        mt: '64px',
        mb: { xs: 6, sm: 8 }, // Responsive margin bottom
        display: 'flex',
        flexDirection: 'column'
      }
    }}>
      <Navbar />
      <Box component="main">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout; 