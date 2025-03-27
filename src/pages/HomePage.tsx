import React, { useEffect, useState, useRef } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Button, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions,
  Avatar,
  Rating,
  Divider,
  Paper,
  useTheme,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Icon
} from '@mui/material';
import { Link } from 'react-router-dom';
import DirectionsIcon from '@mui/icons-material/Directions';
import ExploreIcon from '@mui/icons-material/Explore';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TypewriterEffect from '../components/TypewriterEffect';
import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import KitesurfingIcon from '@mui/icons-material/Kitesurfing';
import HikingIcon from '@mui/icons-material/Hiking';
import CampingIcon from '@mui/icons-material/Campaign';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import ForestIcon from '@mui/icons-material/Forest';
import FavoriteIcon from '@mui/icons-material/Favorite';

const HomePage = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);
  
  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle contact form input changes
  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle contact form submission
  const handleContactSubmit = () => {
    console.log('Contact form submitted:', contactForm);
    // Reset form
    setContactForm({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    handleCloseContactModal();
  };

  // Header slideshow images
  const headerImages = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/' + encodeURIComponent('On holiday at last _ Because it was about time you took that much needed getaway with the family_ capturing the joys of togetherness in the contemporary com(.jpg')
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % headerImages.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + headerImages.length) % headerImages.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  useEffect(() => {
    setIsVisible(true);
    
    // Slideshow interval
    let interval: NodeJS.Timeout;
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % headerImages.length);
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPaused]);

  useEffect(() => {
    // Show the contact modal each time the page loads
    const timer = setTimeout(() => {
      setOpenContactModal(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseContactModal = () => {
    setOpenContactModal(false);
  };

  // Replace with actual local image path
  const heroImagePath = '/images/header.png'; 
  
  // Example feature images - replace with local paths
  const featureImages = [
    '/images/greenforest.jpg',
    '/images/greenpineforest.jpg',
    '/images/banner_resort.jpg',
  ];

  // Example package images - replace with local paths
  const packageImages = [
    '/images/Hungry for winter 🤭🤫🫠__These were actually some of the final snow and ski snippets in April this year 🎞️ . I_m so so ready for snow_ skiing_ _1.jpg',
    '/images/hotelwithview.png',
    '/images/Kashmir is covered with Himalayan Mountains which has more than hundred best places to stay_ visit and see. The flora and fauna_ climate_ food_ culture_ her(.jpg',
  ];

  // Example blog images - replace with local paths
  const blogImages = [
    '/images/Gulmarg Kashmir 📍___kashmir _kashmirvalley _winter _kashmirtourism(JPG).jpg',
    '/images/One million tourists took Gulmarg Gondola ride this year_-Revenue generation crosses Rs 110 cr(WEBP).webp',
    '/images/Indira Gandhi Memorial Tulip Garden is the largest Tulip Garden in Asia. The garden was opened in 2007. This tulip garden is undoubtedly the first major lan(.jpg',
  ];

  const packages = [
    {
      title: 'Adventure Package',
      description: 'Experience the thrill of skiing, snowboarding, and other winter sports in the beautiful mountains of Gulmarg.',
      price: '₹15,000',
      image: packageImages[0]
    },
    {
      title: 'Relaxation Retreat',
      description: 'Unwind and rejuvenate with our peaceful retreat package including spa treatments and scenic views.',
      price: '₹12,000',
      image: packageImages[1]
    },
    {
      title: 'Cultural Experience',
      description: 'Immerse yourself in the rich culture of Kashmir with guided tours to local villages and historical sites.',
      price: '₹10,000',
      image: packageImages[2]
    },
  ];

  const features = [
    {
      icon: <ExploreIcon fontSize="large" sx={{ color: theme.palette.secondary.main }} />,
      title: 'Guided Tours',
      description: 'Expert local guides to show you the hidden gems and provide cultural insights.'
    },
    {
      icon: <DirectionsIcon fontSize="large" sx={{ color: theme.palette.secondary.main }} />,
      title: 'Adventure Activities',
      description: 'From skiing to trekking, experience the ultimate Himalayan adventures.'
    },
    {
      icon: <LocalActivityIcon fontSize="large" sx={{ color: theme.palette.secondary.main }} />,
      title: 'Cultural Events',
      description: 'Participate in local festivals and experience authentic Kashmiri culture.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'United Kingdom',
      rating: 5,
      comment: 'An absolutely incredible experience! The ski instructors were professional, and the views were breathtaking.',
      avatar: '/images/Walking in a winter wonderland.___winter _winterwonderland __mountains _snow _hotel _gulmarg _kashmir _hotelroom _hotelshanu _resort _kashmiri _travel _inst(.jpg'
    },
    {
      name: 'Raj Patel',
      location: 'India',
      rating: 5,
      comment: 'The cultural tour was amazing. We learned so much about Kashmiri traditions and the local hospitality was outstanding.',
      avatar: '/images/Kashmir is beautiful but what is more beautiful about this place is the people. They are not only nice_ they are loving_ caring_ really hardworking and so k(.jpg'
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      rating: 5,
      comment: 'Perfect winter getaway! The accommodation was comfortable and the staff went above and beyond.',
      avatar: '/images/Escape to a winter wonderland where luxury meets nature_s frozen splendor. Frozen Fall by Palwasha is a serene alpine villa offering lavish comforts surroun(.jpg'
    }
  ];

  const statistics = [
    {
      icon: <PeopleIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
      value: '5000+',
      label: 'Happy Customers'
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
      value: '50+',
      label: 'Destinations'
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
      value: '15+',
      label: 'Years Experience'
    }
  ];

  const blogPosts = [
    {
      title: 'Best Time to Visit Gulmarg',
      excerpt: 'Discover the perfect seasons to experience the magic of Gulmarg, from winter sports to summer treks.',
      date: 'March 15, 2024',
      image: blogImages[0]
    },
    {
      title: 'Top 10 Things to Do in Kashmir',
      excerpt: 'From scenic gondola rides to traditional handicraft shopping, explore the must-do activities in Kashmir.',
      date: 'March 10, 2024',
      image: blogImages[1]
    },
    {
      title: 'Local Cuisine Guide',
      excerpt: 'A comprehensive guide to Kashmiri cuisine, from Wazwan to street food favorites.',
      date: 'March 5, 2024',
      image: blogImages[2]
    }
  ];

  // Tour Gallery Section
  const tourGallery = [
    {
      image: '/images/Mount Harmukh_ Gangbal lake(Right)and Nandkol lake (left) seen on day 5 of Kashmir Great Lakes trek _Picture taken at Jaj pass_._._._ _india _jammukashmir _(.jpg',
      location: 'Kashmir Lakes',
      title: 'Great Lakes Trek',
      link: '/gallery'
    },
    {
      image: '/images/Doodhpathri Kashmir._._.___instagood _snow _gulmarg _church _fog _landscape _blue _createwithsony _minimalism _moodygrams _moodytoning _quotes _mountains _k(.jpg',
      location: 'Doodhpathri',
      title: 'Winter Paradise',
      link: '/gallery'
    },
    {
      image: '/images/✨ Living life one shikara ride at a time on Dal Lake _ Capturing moments in paradise _ ___DalLakeMagic _trendingreels _photo _travelgram _new _dal _lake _(.jpg',
      location: 'Dal Lake',
      title: 'Shikara Experience',
      link: '/gallery'
    },
    {
      image: '/images/Indira Gandhi Memorial Tulip Garden is the largest Tulip Garden in Asia. The garden was opened in 2007. This tulip garden is undoubtedly the first major lan(.jpg',
      location: 'Srinagar',
      title: 'Tulip Gardens',
      link: '/gallery'
    }
  ];

  return (
    <Box>
      {/* Contact Details Modal */}
      <Dialog 
        open={openContactModal} 
        onClose={handleCloseContactModal}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            overflow: 'hidden',
            position: 'relative'
          }
        }}
      >
        <DialogTitle sx={{ 
          bgcolor: theme.palette.primary.main,
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: 2
        }}>
          <Typography variant="h5" fontWeight="bold">
            Get in Touch
          </Typography>
          <IconButton 
            onClick={handleCloseContactModal}
            sx={{ 
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        
        <DialogContent sx={{ p: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Contact Information
                </Typography>
                <Divider sx={{ mb: 3 }} />
              </Box>
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={contactForm.name}
                onChange={handleContactInputChange}
                variant="outlined"
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={contactForm.email}
                onChange={handleContactInputChange}
                variant="outlined"
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={contactForm.phone}
                onChange={handleContactInputChange}
                variant="outlined"
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                value={contactForm.message}
                onChange={handleContactInputChange}
                variant="outlined"
                multiline
                rows={4}
                required
                sx={{ mb: 3 }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
                Contact us directly:
              </Typography>
            </Grid>
            
            <Grid item xs={12}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2,
                mb: 2
              }}>
                <PhoneIcon color="primary" />
                <Box>
                  <Typography variant="h6">
                    +91 6006677929
                  </Typography>
                  <Typography variant="h6">
                    +91 7889325581
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2,
                mb: 2
              }}>
                <EmailIcon color="primary" />
                <Typography variant="h6">
                  gulmargdestination@gmail.com
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2,
                mb: 2
              }}>
                <InstagramIcon color="primary" />
                <Typography variant="h6">
                  @gulmarg_destination
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ 
                display: 'flex', 
                gap: 2,
                mt: 2
              }}>
                <IconButton 
                  color="primary"
                  component="a"
                  href="https://www.instagram.com/gulmarg_destination?igsh=MWQ5dGx2bGkxdHU2cw=="
                  target="_blank"
                  sx={{ 
                    bgcolor: 'rgba(25, 118, 210, 0.1)',
                    '&:hover': {
                      bgcolor: 'rgba(25, 118, 210, 0.2)'
                    }
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton 
                  color="primary"
                  component="a"
                  href="tel:+916006677929"
                  sx={{ 
                    bgcolor: 'rgba(25, 118, 210, 0.1)',
                    '&:hover': {
                      bgcolor: 'rgba(25, 118, 210, 0.2)'
                    }
                  }}
                >
                  <PhoneIcon />
                </IconButton>
                <IconButton 
                  color="primary"
                  component="a"
                  href="mailto:gulmargdestination@gmail.com"
                  sx={{ 
                    bgcolor: 'rgba(25, 118, 210, 0.1)',
                    '&:hover': {
                      bgcolor: 'rgba(25, 118, 210, 0.2)'
                    }
                  }}
                >
                  <EmailIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        
        <DialogActions sx={{ 
          p: 3, 
          bgcolor: 'rgba(25, 118, 210, 0.05)',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Button 
            variant="contained" 
            color="primary"
            onClick={handleContactSubmit}
            sx={{ 
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}
          >
            Send Message
          </Button>
        </DialogActions>
      </Dialog>

      {/* Hero Section with Slideshow */}
      <Box 
        sx={{ 
          height: { xs: '70vh', md: '90vh' },
          position: 'relative',
          mb: 8,
          overflow: 'hidden'
        }}
      >
        {headerImages.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              backgroundImage: `url("${image}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              }
            }}
          />
        ))}
        
        {/* Navigation Buttons */}
        <Box sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: 0, 
          right: 0, 
          transform: 'translateY(-50%)',
          display: 'flex',
          justifyContent: 'space-between',
          px: { xs: 1, sm: 2, md: 4 },
          zIndex: 2
        }}>
          <IconButton 
            onClick={prevSlide}
            sx={{ 
              bgcolor: 'rgba(255, 255, 255, 0.3)',
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.5)',
              },
              width: { xs: 40, md: 56 },
              height: { xs: 40, md: 56 }
            }}
          >
            <ChevronLeftIcon sx={{ fontSize: { xs: 30, md: 40 } }} />
          </IconButton>
          <IconButton 
            onClick={nextSlide}
            sx={{ 
              bgcolor: 'rgba(255, 255, 255, 0.3)',
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.5)',
              },
              width: { xs: 40, md: 56 },
              height: { xs: 40, md: 56 }
            }}
          >
            <ChevronRightIcon sx={{ fontSize: { xs: 30, md: 40 } }} />
          </IconButton>
        </Box>

        {/* Slide Indicators */}
        <Box sx={{ 
          position: 'absolute', 
          bottom: 20, 
          left: '50%', 
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1,
          zIndex: 2
        }}>
          {headerImages.map((_, index) => (
            <Box
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 5000);
              }}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: currentSlide === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.2)',
                }
              }}
            />
          ))}
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', zIndex: 1 }}>
          <Box sx={{ maxWidth: { xs: '100%', md: '60%' }, pt: { xs: 0, md: 0 }, color: 'white' }}>
            <Box className="slide-in-left" 
              sx={{
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-in-out'
              }}
            >
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 'bold',
                  mb: 2,
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color: 'white'
                }}
              >
                <TypewriterEffect 
                  texts={[
                    'Discover the Magic of Gulmarg',
                    'Discover the Beauty of Kashmir',
                    'Discover the Wonder of Himalaya'
                  ]}
                  typingSpeed={70}
                  deletingSpeed={40}
                  pauseDuration={1500}
                />
              </Typography>
            </Box>
            <Box className="slide-in-right" 
              sx={{
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-in-out',
                transitionDelay: '0.4s'
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4,
                  fontFamily: 'Roboto, Arial, sans-serif',
                  fontSize: { xs: '1.2rem', md: '1.8rem' },
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  fontWeight: 500
                }}
              >
                Experience the breathtaking beauty of Kashmir's premier ski resort and mountain retreat
              </Typography>
            </Box>
            <Box className="fade-in" 
              sx={{
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-in-out',
                transitionDelay: '0.8s',
                '& > :not(style)': { mr: 2, mb: { xs: 2, md: 0 } }
              }}
            >
              <Button 
                variant="contained" 
                color="secondary" 
                size="large"
                component={Link}
                to="/packages"
                className="pulse"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold'
                }}
              >
                Explore Packages
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                component={Link}
                to="/contact"
                sx={{ 
                  borderColor: 'white', 
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    borderColor: theme.palette.secondary.main,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Container>
        <Box 
          className="bounce"
          sx={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            textAlign: 'center',
            cursor: 'pointer'
          }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <Typography variant="body2" sx={{ mb: 1 }}>Scroll Down</Typography>
          <Box sx={{ fontSize: '2rem' }}>↓</Box>
        </Box>
      </Box>

      {/* Welcome Video Section */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" gutterBottom className="slide-in-left">
            Welcome to Paradise
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.2rem', mb: 4 }} className="slide-in-right">
            Experience the magic of Gulmarg through our eyes. Let the stunning visuals transport you to this winter wonderland.
          </Typography>
          <Box sx={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden', borderRadius: '20px', boxShadow: '0 15px 25px rgba(0,0,0,0.2)' }}>
            <iframe 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              src="https://www.youtube.com/embed/i56PEYXz40U"
              title="Gulmarg, Kashmir - The Winter Paradise"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        </Box>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" gutterBottom className="slide-in-left">
            Why Choose Us
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.2rem' }} className="slide-in-right">
            We provide unforgettable experiences with our expert local knowledge and passion for the region.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ 
                opacity: 0,
                animation: `fadeIn 1s ease forwards ${0.3 * (index + 1)}s`
              }}>
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3,
                  borderRadius: 4,
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }
                }}>
                  <Box sx={{ mb: 2 }}>
                    <Box className="rotate" sx={{ display: 'inline-block' }}>
                      {feature.icon}
                    </Box>
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1">
                    {feature.description}
                  </Typography>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Statistics Section */}
      <Box sx={{ 
        bgcolor: theme.palette.primary.main, 
        color: 'white', 
        py: 8, 
        mb: 10,
        backgroundImage: 'linear-gradient(135deg, rgba(26, 38, 57, 0.95) 0%, rgba(0, 0, 0, 0.8) 100%)',
        backgroundSize: '200% 200%',
        className: 'wave-bg'
      }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom 
            className="slide-in-left"
            sx={{ mb: 6 }}
          >
            Our Success By Numbers
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {statistics.map((stat, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    opacity: 0,
                    animation: `fadeIn 1s ease forwards ${0.3 * (index + 1)}s`,
                    transform: 'translateY(20px)',
                    transition: 'transform 0.5s ease-out',
                    '&:hover': {
                      transform: 'translateY(0)'
                    }
                  }}
                >
                  <Box sx={{ 
                    display: 'inline-flex',
                    p: 2,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    mb: 2
                  }}>
                    {stat.icon}
                  </Box>
                  <Typography variant="h3" sx={{ my: 2, fontWeight: 'bold' }}>
                    <AnimatedCounter 
                      end={parseInt(stat.value.replace(/\D/g, ''))} 
                      duration={2.5} 
                      suffix={stat.value.includes('+') ? '+' : ''} 
                    />
                  </Typography>
                  <Typography variant="h6">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About Us Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
            <Box sx={{ 
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -20,
                left: -20,
                width: 100,
                height: 100,
                backgroundColor: theme.palette.secondary.main,
                opacity: 0.1,
                borderRadius: '50%',
                zIndex: 0
              }
            }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjZW5lcnl8ZW58MHx8MHx8fDA%3D"
                alt="About Us"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  position: 'relative',
                  zIndex: 1
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -30,
                  right: -30,
                  bgcolor: theme.palette.secondary.main,
                  color: 'white',
                  p: 3,
                  borderRadius: 2,
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  zIndex: 2
                }}
              >
                <Typography variant="h3" fontWeight="bold">
                  16
                </Typography>
                <Typography variant="subtitle1">
                  Successful Years
                </Typography>
              </Box>
            </Box>
            </Grid>
            <Grid item xs={12} md={6}>
            <Box>
              <Typography 
                variant="subtitle1" 
                color="secondary" 
                fontWeight="bold" 
                sx={{ mb: 1 }}
              >
                About Us
              </Typography>
              <Typography 
                variant="h3" 
                fontWeight="bold" 
                sx={{ mb: 3 }}
              >
                We are Professional Planners for your Vacations
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  fontFamily: 'Roboto, Arial, sans-serif',
                  mb: 4 
                }}
              >
                With over 16 years of experience in crafting unforgettable journeys, we specialize in creating personalized travel experiences that showcase the best of Kashmir's natural beauty and cultural heritage. Our expert team ensures every detail of your trip is meticulously planned and executed.
              </Typography>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CampingIcon sx={{ width: 40, height: 40, mr: 2, color: theme.palette.primary.main }} />
                    <Typography variant="h6">Tent Campaign</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <DirectionsBikeIcon sx={{ width: 40, height: 40, mr: 2, color: theme.palette.primary.main }} />
                    <Typography variant="h6">Mountain Biking</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <ForestIcon sx={{ width: 40, height: 40, mr: 2, color: theme.palette.primary.main }} />
                    <Typography variant="h6">Wild Campaign</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <FavoriteIcon sx={{ width: 40, height: 40, mr: 2, color: theme.palette.primary.main }} />
                    <Typography variant="h6">Couple Campaign</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                to="/about"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold'
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Tour Gallery Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h6" 
            component="p" 
            color="secondary" 
            fontWeight="bold" 
            sx={{ mb: 1 }}
          >
            Tour Gallery
          </Typography>
          <Typography 
            variant="h2" 
            component="h2" 
            fontWeight="bold" 
            sx={{ mb: 2 }}
          >
            Best Tourist's Shared
          </Typography>
          <Typography 
            variant="h2" 
            component="h2" 
            fontWeight="bold" 
            color="secondary"
          >
            Beautiful Photos
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {tourGallery.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                component={Link}
                to={item.link}
                sx={{
                  position: 'relative',
                  height: 400,
                  display: 'block',
                  textDecoration: 'none',
                  overflow: 'hidden',
                  borderRadius: 4,
                  '&:hover img': {
                    transform: 'scale(1.1)',
                  },
                  '&:hover .overlay': {
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  },
                  '&:hover .arrow': {
                    transform: 'translateX(5px)',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    height: '100%',
                    transition: 'transform 0.6s ease',
                  }}
                />
                <Box
                  className="overlay"
                      sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    transition: 'background-color 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    p: 3,
                        color: 'white',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        {item.location}
                      </Typography>
                      <Typography variant="h6" fontWeight="bold">
                        {item.title}
                      </Typography>
                    </Box>
                    <ArrowForwardIcon 
                      className="arrow" 
                      sx={{ 
                        transition: 'transform 0.3s ease',
                        fontSize: 24
                      }} 
                    />
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* Featured Packages Section */}
      <Box sx={{ 
        bgcolor: 'background.default', 
        py: 10,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/images/greenpineforest.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.05,
          zIndex: 0
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" gutterBottom className="slide-in-left">
              Featured Packages
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.2rem' }} className="slide-in-right">
              Experience the magic of Kashmir with our carefully curated packages. From thrilling winter sports to serene cultural tours, we offer unforgettable adventures for every traveler.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {packages.map((pkg, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ 
                  opacity: 0,
                  animation: `fadeIn 1s ease forwards ${0.3 * (index + 1)}s`,
                  height: '100%'
                }}>
                  <Card sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'all 0.5s ease',
                    overflow: 'hidden',
                    borderRadius: 4,
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)'
                    },
                    '&:hover .MuiCardMedia-root': {
                      transform: 'scale(1.1)'
                    }
                  }}>
                    <Box sx={{ 
                      position: 'relative',
                      overflow: 'hidden',
                      pt: '60%' // 60% aspect ratio
                    }}>
                      <CardMedia
                        component="img"
                        image={pkg.image}
                        alt={pkg.title}
                        sx={{ 
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center',
                          transition: 'transform 1.5s ease',
                        }}
                      />
                    </Box>
                    <Box sx={{ 
                      position: 'absolute', 
                      top: 12, 
                      right: 12, 
                      bgcolor: theme.palette.secondary.main,
                      color: 'white',
                      py: 0.75,
                      px: 2,
                      borderRadius: 10,
                      fontWeight: 'bold'
                    }}>
                      {pkg.price}
                    </Box>
                    <CardContent sx={{ flexGrow: 1, pt: 3 }}>
                      <Typography gutterBottom variant="h5" component="h3" fontWeight="bold">
                        {pkg.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {pkg.description}
                      </Typography>
                      <Box sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: theme.palette.text.secondary,
                        mb: 2
                      }}>
                        <LocationOnIcon fontSize="small" color="primary" />
                        <Typography variant="body2">Gulmarg, Kashmir</Typography>
                      </Box>
                      <Box sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: theme.palette.text.secondary
                      }}>
                        <PeopleIcon fontSize="small" color="primary" />
                        <Typography variant="body2">Group & Private Tours Available</Typography>
                      </Box>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button 
                        size="small" 
                        color="primary" 
                        component={Link} 
                        to="/packages"
                        sx={{
                          '&:hover': {
                            transform: 'translateX(5px)'
                          },
                          transition: 'transform 0.3s ease'
                        }}
                      >
                        Learn More
                      </Button>
                      <Button 
                        size="small" 
                        color="secondary" 
                        variant="contained" 
                        component={Link} 
                        to="/contact"
                        className="pulse"
                        sx={{ ml: 'auto' }}
                      >
                        Book Now
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 5, opacity: 0, animation: 'fadeIn 1s ease forwards 1.5s' }}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              component={Link}
              to="/packages"
              sx={{ 
                px: 4, 
                py: 1.5,
                borderRadius: 8,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                  transform: 'scale(1.05)'
                        }
                      }}
                    >
              View All Packages
            </Button>
                    </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" gutterBottom className="slide-in-left">
            What Our Guests Say
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.2rem' }} className="slide-in-right">
            Read about the experiences of travelers who have explored Gulmarg with us
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ 
                opacity: 0,
                height: '100%',
                transform: 'translateY(20px)',
                animation: `slideInLeft 1s ease forwards ${0.3 * (index + 1)}s`
              }}>
                <Card sx={{ 
                  height: '100%',
                  p: 3,
                  borderRadius: 4,
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)'
                  }
                }}>
                  <Box sx={{ position: 'absolute', top: 20, right: 20 }}>
                    <FormatQuoteIcon sx={{ fontSize: 40, color: theme.palette.secondary.main, opacity: 0.3 }} />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar 
                      src={testimonial.avatar} 
                      sx={{ 
                        width: 70, 
                        height: 70, 
                        mr: 2,
                        border: `3px solid ${theme.palette.secondary.main}`
                      }} 
                    />
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.location}
                      </Typography>
                    </Box>
                  </Box>
                  <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                  <Typography variant="body1" color="text.secondary" sx={{ 
                    mb: 2,
                    minHeight: '80px',
                    fontWeight: 400
                  }}>
                    "{testimonial.comment}"
                  </Typography>
                  <Box sx={{ 
                    mt: 3, 
                    pt: 2, 
                    borderTop: `1px solid ${theme.palette.divider}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5
                  }}>
                    <PeopleIcon fontSize="small" color="primary" />
                    <Typography variant="body2" color="primary" fontWeight="medium">
                      Verified Guest
                    </Typography>
                  </Box>
                </Card>
                  </Box>
                </Grid>
          ))}
        </Grid>
      </Container>

      {/* Blog Preview Section */}
      <Box sx={{ 
        bgcolor: 'background.default', 
        py: 10,
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(240,240,240,0.6) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(240,240,240,0.6) 100%)',
          zIndex: 0
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" gutterBottom className="slide-in-left">
              Latest from Our Blog
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', fontSize: '1.2rem', mb: 4 }} className="slide-in-right">
              Stay updated with travel tips, local insights, and stories from Gulmarg
            </Typography>
            <Button
              component={Link}
              to="/blog"
              variant="contained"
              color="primary"
              size="large"
                      sx={{
                mb: 4,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 'bold'
              }}
            >
              View All Articles
            </Button>
          </Box>

          <Grid container spacing={4}>
            {blogPosts.map((post, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ 
                  opacity: 0,
                  animation: `fadeIn 1s ease forwards ${0.3 * (index + 1)}s`,
                  height: '100%'
                }}>
                  <Card sx={{ 
                    height: '100%',
                    transition: 'all 0.3s ease',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
                    },
                    '&:hover .blog-img': {
                      transform: 'scale(1.1)'
                    }
                  }}>
                    <Box sx={{ overflow: 'hidden', position: 'relative', pt: '60%' }}>
                      <CardMedia
                        component="img"
                        image={post.image}
                        alt={post.title}
                        className="blog-img"
                        sx={{ 
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 1.5s ease',
                        }}
                      />
                      <Box sx={{ 
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                        p: 2,
                        color: 'white'
                      }}>
                        <Typography variant="caption" display="block" sx={{ fontWeight: 'bold' }}>
                          {post.date}
                        </Typography>
                      </Box>
                    </Box>
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                        {post.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {post.excerpt}
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        gap: 1, 
                        flexWrap: 'wrap',
                        mb: 2
                      }}>
                        <Chip 
                          label="Travel Tips" 
                          size="small" 
                          color="primary" 
                          variant="outlined"
                        />
                        <Chip 
                          label="Gulmarg" 
                          size="small" 
                          color="secondary" 
                          variant="outlined"
                        />
                      </Box>
                    </CardContent>
                    <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
                      <Button 
                        component={Link}
                        to={`/blog/${index + 1}`}
                        size="small" 
                        color="primary"
                        sx={{
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateX(5px)'
                          }
                        }}
                      >
                        Read More
                        <Box component="span" sx={{ ml: 0.5, transition: 'transform 0.3s ease', display: 'inline-block' }}>→</Box>
                      </Button>
                    </CardActions>
                  </Card>
                    </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* What We Offer Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="subtitle1" 
            color="secondary" 
            fontWeight="bold" 
            sx={{ mb: 1 }}
          >
            Our Services
          </Typography>
          <Typography 
            variant="h2" 
            gutterBottom 
            fontWeight="bold"
          >
            What We Offer For You
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            In Great Packages
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{
              p: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)'
              }
            }}>
              <Box sx={{ 
                mb: 2,
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette.secondary.main
              }}>
                <HotelIcon sx={{ fontSize: 48 }} />
              </Box>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Luxury Cabin
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Experience comfort in our premium mountain-view cabins with modern amenities and traditional charm.
              </Typography>
              <Button 
                component={Link}
                to="/packages"
                sx={{ 
                  mt: 'auto',
                  pt: 2,
                  color: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: theme.palette.secondary.main,
                  }
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Explore More
              </Button>
            </Card>
                </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{
              p: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)'
              }
            }}>
              <Box sx={{ 
                mb: 2,
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette.secondary.main
              }}>
                <RestaurantIcon sx={{ fontSize: 48 }} />
              </Box>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Delicious Food
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Savor authentic Kashmiri cuisine prepared by expert chefs using local ingredients and traditional recipes.
              </Typography>
              <Button 
                component={Link}
                to="/packages"
                      sx={{
                  mt: 'auto',
                  pt: 2,
                  color: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: theme.palette.secondary.main,
                  }
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Explore More
              </Button>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{
              p: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)'
              }
            }}>
              <Box sx={{ 
                mb: 2,
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette.secondary.main
              }}>
                <KitesurfingIcon sx={{ fontSize: 48 }} />
              </Box>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Paragliding
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Take to the skies and experience breathtaking views of the Himalayas with our certified paragliding guides.
              </Typography>
              <Button 
                component={Link}
                to="/packages"
                sx={{ 
                  mt: 'auto',
                  pt: 2,
                  color: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: theme.palette.secondary.main,
                  }
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Explore More
              </Button>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{
              p: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)'
              }
            }}>
              <Box sx={{ 
                mb: 2,
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette.secondary.main
              }}>
                <HikingIcon sx={{ fontSize: 48 }} />
              </Box>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Adventure
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Embark on thrilling mountain adventures with guided treks, skiing, and snowboarding experiences.
              </Typography>
              <Button 
                component={Link}
                to="/packages"
                sx={{ 
                  mt: 'auto',
                  pt: 2,
                  color: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: theme.palette.secondary.main,
                  }
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Explore More
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Seasonal Offer Section */}
      <Box sx={{ 
        py: 8, 
        bgcolor: theme.palette.secondary.main, 
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.1,
          backgroundImage: `url(${featureImages[1]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box className="slide-in-left">
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                  LIMITED TIME OFFER
                </Typography>
                <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
                  Winter Special: 20% Off All Ski Packages!
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
                  Book your winter adventure before November 30th and get 20% off on all ski packages. Includes professional instruction, equipment rental, and luxury accommodation.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    component={Link}
                    to="/packages"
                    className="pulse"
                    sx={{ 
                      px: 3,
                      py: 1.25,
                      fontSize: '1rem',
                      fontWeight: 'bold'
                    }}
                  >
                    View Winter Packages
                  </Button>
                  <Button 
                    variant="outlined" 
                    color="inherit" 
                    size="large"
                    sx={{ 
                      px: 3,
                      py: 1.25,
                      fontSize: '1rem',
                      borderColor: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: 'rgba(255,255,255,0.1)'
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box className="slide-in-right" sx={{ 
                bgcolor: 'white', 
                color: 'black', 
                p: 3, 
                borderRadius: 3,
                boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
              }}>
                <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: theme.palette.secondary.main }}>
                  Offer Details
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <Typography component="li" sx={{ mb: 1 }}>Valid for bookings made before November 30th</Typography>
                  <Typography component="li" sx={{ mb: 1 }}>Applicable on stays between December 15th and March 15th</Typography>
                  <Typography component="li" sx={{ mb: 1 }}>Includes professional ski instruction</Typography>
                  <Typography component="li" sx={{ mb: 1 }}>Premium equipment rental included</Typography>
                  <Typography component="li">Luxury accommodation with breakfast</Typography>
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  mt: 3, 
                  p: 2, 
                  bgcolor: theme.palette.primary.main, 
                  color: 'white',
                  borderRadius: 2
                }}>
                  <Box component="span" sx={{ fontWeight: 'bold' }}>Use Code:</Box>
                  <Box component="span" sx={{ 
                    px: 2, 
                    py: 0.5, 
                    bgcolor: 'white', 
                    color: theme.palette.primary.main,
                    fontWeight: 'bold',
                    borderRadius: 1,
                    letterSpacing: 1
                  }}>
                    WINTER20
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Call to Action Section */}
      <Box sx={{ 
        bgcolor: theme.palette.primary.main, 
        color: 'white', 
        py: 10,
        backgroundImage: `linear-gradient(rgba(26, 38, 57, 0.9), rgba(26, 38, 57, 0.9)), url(${featureImages[0]})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        position: 'relative'
      }}>
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Box className="fade-in">
            <Typography variant="h3" gutterBottom fontWeight="bold">
              Ready for an Unforgettable Adventure?
            </Typography>
            <Typography variant="body1" sx={{ mb: 5, fontSize: '1.2rem', maxWidth: '800px', mx: 'auto' }}>
              Let us help you plan your perfect Kashmir adventure. Our team of experts is here to create a personalized itinerary that matches your preferences and interests.
            </Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              component={Link}
              to="/contact"
              className="pulse"
              sx={{ 
                px: 5, 
                py: 1.5, 
                fontSize: '1.1rem',
                borderRadius: 10,
                fontWeight: 'bold'
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage; 