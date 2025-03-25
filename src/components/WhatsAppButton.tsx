import React, { useState } from 'react';
import { Box, Fab, Typography, Zoom, keyframes } from '@mui/material';
import { WhatsApp as WhatsAppIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Create a pulsing animation
const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

const WhatsAppButton = () => {
  const [showText, setShowText] = useState(false);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 30,
        left: 15,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
      }}
    >
      <Fab
        component={motion.div}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        color="success"
        size="large"
        aria-label="whatsapp"
        sx={{
          bgcolor: '#25D366',
          '&:hover': {
            bgcolor: '#22c15e'
          },
          boxShadow: '0 4px 10px rgba(37, 211, 102, 0.4)',
          animation: `${pulse} 2s infinite`,
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
        onClick={() => window.open('https://wa.me/911234567890', '_blank')}
      >
        <WhatsAppIcon fontSize="large" />
      </Fab>

      <Zoom in={showText} timeout={300}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          sx={{
            bgcolor: 'white',
            color: 'text.primary',
            py: 1,
            px: 2,
            borderRadius: 2,
            boxShadow: 3,
            ml: 1
          }}
        >
          <Typography variant="body2" fontWeight="medium">
            Contact us now
          </Typography>
        </Box>
      </Zoom>
    </Box>
  );
};

export default WhatsAppButton; 