import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
  Rating,
  useTheme,
  Button,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const theme = useTheme();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'United Kingdom',
      rating: 5,
      comment: 'An absolutely incredible experience! The ski instructors were professional, and the views were breathtaking. The team went above and beyond to make our stay memorable.',
      avatar: '/images/winter_wonderland.jpg',
      date: 'March 2024'
    },
    {
      name: 'Raj Patel',
      location: 'India',
      rating: 5,
      comment: 'The cultural tour was amazing. We learned so much about Kashmiri traditions and the local hospitality was outstanding. Every detail was perfectly planned.',
      avatar: '/images/kashmir_people.jpg',
      date: 'February 2024'
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      rating: 5,
      comment: 'Perfect winter getaway! The accommodation was comfortable and the staff went above and beyond. The skiing experience was unforgettable.',
      avatar: '/images/frozen_fall.jpg',
      date: 'January 2024'
    },
    {
      name: 'Emma Thompson',
      location: 'Australia',
      rating: 5,
      comment: 'From the moment we arrived, everything was perfect. The guides were knowledgeable and friendly, and the activities were well-organized. Will definitely return!',
      avatar: '/images/gulmarg_kashmir.jpg',
      date: 'March 2024'
    },
    {
      name: 'David Kim',
      location: 'South Korea',
      rating: 5,
      comment: 'The photography tour was exceptional. Got some amazing shots of the Himalayas. The team knew exactly where to take us for the best views.',
      avatar: '/images/gondola_ride.webp',
      date: 'February 2024'
    },
    {
      name: 'Lisa Wang',
      location: 'Canada',
      rating: 5,
      comment: "A truly magical experience. The winter sports facilities were top-notch, and the local cuisine was delicious. Couldn't have asked for more!",
      avatar: '/images/tulip_garden.jpg',
      date: 'January 2024'
    }
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/images/banner_resort.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              component="h1"
              fontWeight="bold"
              gutterBottom
              sx={{ textAlign: 'center' }}
            >
              Our Story & Reviews
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                fontFamily: 'Roboto, Arial, sans-serif',
                fontStyle: 'normal'
              }}
            >
              Discover what our guests have to say about their experiences with us
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Story Section */}
      <Container maxWidth="md" sx={{ py: 12 }}>
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            fontWeight="bold"
            color="primary"
          >
            Our Heritage
          </Typography>
          <Typography variant="body1" paragraph sx={{ 
            fontSize: '1.1rem',
            lineHeight: 1.8,
            fontFamily: 'Roboto, Arial, sans-serif',
            mb: 4 
          }}>
            For over a decade, we've been crafting unforgettable experiences in the heart of Kashmir. Our journey began with a simple vision: to share the breathtaking beauty and rich culture of this paradise on Earth with travelers from around the world.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Roboto, Arial, sans-serif',
              color: theme.palette.text.secondary,
              mb: 4,
              textAlign: 'center',
              fontWeight: 500
            }}
          >
            "In Kashmir, every path leads to a new wonder, every moment holds a story waiting to be told."
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            fontWeight="bold"
            color="primary"
          >
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph sx={{ 
            fontSize: '1.1rem',
            lineHeight: 1.8,
            fontFamily: 'Roboto, Arial, sans-serif',
            mb: 4 
          }}>
            We're dedicated to providing authentic, sustainable travel experiences that benefit both our guests and the local community. Our expert guides and carefully curated itineraries ensure that every journey with us is both meaningful and memorable.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Roboto, Arial, sans-serif',
              color: theme.palette.text.secondary,
              mb: 4,
              textAlign: 'center',
              fontWeight: 500
            }}
          >
            "Discover the magic of Kashmir with us"
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            fontWeight="bold"
            color="primary"
          >
            Our Promise
          </Typography>
          <Typography variant="body1" paragraph sx={{ 
            fontSize: '1.1rem',
            lineHeight: 1.8,
            fontFamily: 'Roboto, Arial, sans-serif',
            mb: 4 
          }}>
            Whether you're seeking adventure in the snow-capped peaks, tranquility in the pristine valleys, or cultural immersion in local traditions, we promise to deliver experiences that exceed your expectations and create stories worth sharing.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Roboto, Arial, sans-serif',
              color: theme.palette.text.secondary,
              mb: 4,
              textAlign: 'center',
              fontWeight: 500
            }}
          >
            "Creating memories that last a lifetime"
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Roboto, Arial, sans-serif',
              color: theme.palette.text.secondary,
              mb: 4,
              textAlign: 'center',
              fontWeight: 500
            }}
          >
            "Your journey of discovery begins here"
          </Typography>
        </Box>
      </Container>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ 
                  height: '100%',
                  p: 3,
                  borderRadius: 4,
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
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
                      <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
                        {testimonial.location}
                      </Typography>
                    </Box>
                  </Box>
                  <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                  <Typography variant="body2" color="text.secondary" sx={{ 
                    mb: 2,
                    minHeight: '80px',
                    fontFamily: 'Roboto, Arial, sans-serif',
                    fontWeight: 400
                  }}>
                    "{testimonial.comment}"
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.date}
                    </Typography>
                    <Box sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      color: theme.palette.primary.main
                    }}>
                      <PeopleIcon fontSize="small" />
                      <Typography variant="body2" fontWeight="medium">
                        Verified Guest
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Ready to Create Your Own Story?
          </Typography>
          <Typography variant="body1" sx={{ 
            mb: 4, 
            maxWidth: '600px', 
            mx: 'auto',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            fontFamily: 'Roboto, Arial, sans-serif'
          }}>
            Join our community of happy travelers and experience the magic of Kashmir
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/contact"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}
          >
            Start Planning Your Trip
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage; 