import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  IconButton, 
  Divider,
  List, 
  ListItem, 
  ListItemButton,
  ListItemText, 
  useTheme 
} from '@mui/material';
import { 
  Facebook as FacebookIcon, 
  Instagram as InstagramIcon, 
  Twitter as TwitterIcon, 
  LinkedIn as LinkedInIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' },
    { name: 'About Us', path: '/about' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: theme.palette.primary.main,
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ 
              fontFamily: '"Montserrat", "Arial", sans-serif',
              fontWeight: 700,
              mb: 2
            }}>
              GULMARG DESTINATIONS
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Discover the enchanting beauty of Gulmarg with our exclusive tour packages 
              and travel services designed to provide you with unforgettable experiences.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>
              <IconButton 
                component="a"
                href="https://www.instagram.com/gulmarg_destination?igsh=MWQ5dGx2bGkxdHU2cw=="
                target="_blank"
                sx={{ 
                  color: '#ffffff',
                  '&:hover': { 
                    color: theme.palette.secondary.main 
                  }
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton 
                component="a"
                href="https://www.facebook.com/share/1DuadeLv9C/"
                target="_blank"
                sx={{ 
                  color: '#ffffff',
                  '&:hover': { 
                    color: theme.palette.secondary.main 
                  }
                }}
              >
                <FacebookIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ 
              fontFamily: '"Montserrat", "Arial", sans-serif',
              fontWeight: 600,
              mb: 2
            }}>
              Quick Links
            </Typography>
            <List dense sx={{ p: 0 }}>
              {footerLinks.slice(0, 5).map((link) => (
                <ListItem key={link.name} disablePadding>
                  <ListItemButton 
                    component={Link} 
                    to={link.path}
                    sx={{ 
                      py: 0.5,
                      '&:hover': { 
                        color: theme.palette.secondary.main
                      }
                    }}
                  >
                    <ListItemText 
                      primary={link.name} 
                      primaryTypographyProps={{ 
                        variant: 'body2',
                        fontFamily: '"Roboto", "Arial", sans-serif',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ 
              fontFamily: '"Montserrat", "Arial", sans-serif',
              fontWeight: 600,
              mb: 2
            }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
              <LocationIcon sx={{ mr: 1, color: theme.palette.secondary.main }} />
              <Typography variant="body2" sx={{ fontFamily: '"Roboto", "Arial", sans-serif' }}>
                Gulmarg, Kashmir, India
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ mr: 1, color: theme.palette.secondary.main }} />
              <Typography variant="body2" sx={{ fontFamily: '"Roboto", "Arial", sans-serif' }}>
                +91 6006677929
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ mr: 1, color: theme.palette.secondary.main }} />
              <Typography variant="body2" sx={{ fontFamily: '"Roboto", "Arial", sans-serif' }}>
                +91 7889325581
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmailIcon sx={{ mr: 1, color: theme.palette.secondary.main }} />
              <Typography variant="body2" sx={{ fontFamily: '"Roboto", "Arial", sans-serif' }}>
                gulmargdestination@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
              <IconButton 
                component="a"
                href="https://www.instagram.com/gulmarg_destination?igsh=MWQ5dGx2bGkxdHU2cw=="
                target="_blank"
                sx={{ 
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton 
                component="a"
                href="https://www.facebook.com/share/1DuadeLv9C/"
                target="_blank"
                sx={{ 
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                <FacebookIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.1)' }} />

        {/* Payment Methods */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ 
            fontFamily: '"Montserrat", "Arial", sans-serif',
            fontWeight: 600,
            mb: 2
          }}>
            Payment Methods
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
            <Box component="img" src="/images/MasterCard.jpg" alt="MasterCard" sx={{ height: 30, objectFit: 'contain' }} />
            <Box component="img" src="/images/paypal.jpg" alt="PayPal" sx={{ height: 30, objectFit: 'contain' }} />
            <Box component="img" src="/images/visa electron.jpg" alt="Visa Electron" sx={{ height: 30, objectFit: 'contain' }} />
            <Box component="img" src="/images/visa.jpg" alt="Visa" sx={{ height: 30, objectFit: 'contain' }} />
            <Box component="img" src="/images/Maestro.jpg" alt="Maestro" sx={{ height: 30, objectFit: 'contain' }} />
          </Box>
        </Box>

        {/* Copyright */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Typography variant="body2" sx={{ fontFamily: '"Roboto", "Arial", sans-serif' }}>
            © {new Date().getFullYear()} Gulmarg Destinations. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {footerLinks.slice(5).map((link) => (
              <Typography 
                key={link.name} 
                variant="body2" 
                component={Link} 
                to={link.path}
                sx={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  fontFamily: '"Roboto", "Arial", sans-serif',
                  '&:hover': { 
                    color: theme.palette.secondary.main,
                    textDecoration: 'underline'
                  }
                }}
              >
                {link.name}
              </Typography>
            ))}
          </Box>
        </Box>
        
        {/* Zyberly Attribution */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          mt: 4, 
          gap: 1 
        }}>
          <Box 
            component="img" 
            src="/images/zyberly.png" 
            alt="Zyberly" 
            sx={{ 
              height: 25, 
              width: 25, 
              borderRadius: '50%',
              objectFit: 'cover'
            }} 
          />
          <Typography 
            variant="body2" 
            sx={{ 
              fontFamily: '"Roboto", "Arial", sans-serif',
              fontSize: '0.8rem'
            }}
          >
            Made by zyberly
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 