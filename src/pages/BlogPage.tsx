import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogPage = () => {
  const theme = useTheme();

  const blogPosts = [
    {
      id: 1,
      title: 'Best Time to Visit Gulmarg',
      description: 'Discover the perfect seasons to experience the magic of Gulmarg! From winter wonderlands to summer bliss, guide to seasons here.',
      image: '/images/Walking in a winter wonderland.___winter _winterwonderland __mountains _snow _hotel _gulmarg _kashmir _hotelroom _hotelshanu _resort _kashmiri _travel _inst(.jpg',
      date: 'March 15, 2024',
      tags: ['Travel Tips', 'Seasons'],
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Top 10 Things to Do in Kashmir',
      description: 'From gondola rides to traditional handicraft shopping, explore the must-do activities in Kashmir.',
      image: '/images/One million tourists took Gulmarg Gondola ride this year_-Revenue generation crosses Rs 110 cr(WEBP).webp',
      date: 'March 10, 2024',
      tags: ['Activities', 'Guide'],
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Local Cuisine Guide',
      description: 'A comprehensive guide to Kashmir\'s famous food paradise, from street food favorites to fine dining.',
      image: '/images/Kashmir is beautiful but what is more beautiful about this place is the people. They are not only nice_ they are loving_ caring_ really hardworking and so k(.jpg',
      date: 'March 5, 2024',
      tags: ['Food', 'Culture'],
      readTime: '6 min read'
    }
  ];

  return (
    <Box component="main" sx={{ 
      bgcolor: 'background.default',
      minHeight: '100vh',
      position: 'relative',
      zIndex: 0
    }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6, pt: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontWeight: 'bold',
                color: 'text.primary'
              }}
            >
              Latest from Our Blog
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                fontFamily: 'Roboto, Arial, sans-serif',
                color: 'text.secondary',
                maxWidth: '800px',
                mx: 'auto',
                mb: 4
              }}
            >
              Stay updated with travel tips, local insights, and stories from Gulmarg
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} md={4} key={post.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                    '& .MuiCardMedia-root': {
                      transform: 'scale(1.05)',
                    }
                  }
                }}
              >
                <Box sx={{ position: 'relative', pt: '60%', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    image={post.image}
                    alt={post.title}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease'
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ mr: 2 }}>
                      {post.date}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {post.readTime}
                    </Typography>
                  </Box>
                  <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {post.description}
                  </Typography>
                  <Box sx={{ mt: 2, mb: 1 }}>
                    {post.tags.map((tag, index) => (
                      <Chip
                        key={index}
                        label={tag}
                        size="small"
                        sx={{ mr: 1, mb: 1 }}
                        color="secondary"
                      />
                    ))}
                  </Box>
                  <Button 
                    component={Link}
                    to={`/blog/${post.id}`}
                    color="primary"
                    sx={{ 
                      mt: 2,
                      textTransform: 'none',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: theme.palette.secondary.main,
                      }
                    }}
                  >
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogPage; 