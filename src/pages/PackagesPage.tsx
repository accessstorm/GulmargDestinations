
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Tabs,
  Tab
} from '@mui/material';
import {
  Timer as TimerIcon,
  LocationOn as LocationIcon,
  LocalOffer as LocalOfferIcon,
  Check as CheckIcon,
  Star as StarIcon,
  Close as CloseIcon,
  Phone as PhoneIcon,
  DateRange as DateRangeIcon,
  PersonOutline as PersonOutlineIcon,
  Email as EmailIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Add interface for package type
interface Package {
  id: number;
  title: string;
  description: string;
  price: string;
  duration: string;
  location: string;
  rating: number;
  reviews: number;
  category: string;
  image: string;
  highlights: string[];
  features?: string[];
}

// Add an interface for hotel type
interface Hotel {
  id: number;
  name: string;
  description: string;
  price: string;
  rating: number;
  image: string;
  features: string[];
  location: string;
  category: string;
}

// Create a combined interface for both packages and hotels
interface DetailItem {
  id: number;
  title: string;
  name?: string;
  description: string;
  price: string;
  duration?: string;
  location: string;
  rating: number;
  reviews: number;
  category: string;
  image: string;
  highlights?: string[];
  features?: string[];
  isHotel?: boolean;
}

const PackagesPage = () => {
  const theme = useTheme();
  const [selectedPackage, setSelectedPackage] = useState<null | number>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [selectedTab, setSelectedTab] = useState(0);

  // Map string categories to proper case for display
  const getCategoryDisplayName = (category: string): string => {
    switch(category.toLowerCase()) {
      case 'adventure': return 'Adventure';
      case 'relaxation': return 'Relaxation';
      case 'cultural': return 'Cultural';
      case 'family': return 'Family';
      case 'couples': return 'Couples';
      case 'kashmir': return 'Kashmir';
      case 'himachal': return 'Himachal';
      case 'ladakh': return 'Ladakh';
      case 'luxury': return 'Luxury';
      default: return category.charAt(0).toUpperCase() + category.slice(1);
    }
  };

  // Replace with actual local image paths
  const packagesData: Package[] = [
    {
      id: 1,
      title: 'Winter Adventure Package',
      description: 'Experience the thrill of skiing, snowboarding, and other winter sports in the beautiful mountains of Gulmarg.',
      price: '₹15,000',
      duration: '3 days, 2 nights',
      location: 'Gulmarg, Kashmir',
      rating: 4.8,
      reviews: 32,
      category: 'adventure',
      image: '/images/Hungry for winter 🤭🤫🫠__These were actually some of the final snow and ski snippets in April this year 🎞️ . I_m so so ready for snow_ skiing_ _1.jpg',
      highlights: [
        'Professional ski training for beginners',
        'High-quality equipment rental included',
        'Snowmobile adventure tour',
        'Cozy mountain lodge accommodation'
      ]
    },
    {
      id: 2,
      title: 'Relaxation Retreat',
      description: 'Unwind and rejuvenate with our peaceful retreat package including spa treatments and scenic views.',
      price: '₹12,000',
      duration: '4 days, 3 nights',
      location: 'Gulmarg, Kashmir',
      rating: 4.9,
      reviews: 45,
      category: 'relaxation',
      image: '/images/hotelwithview.png',
      highlights: [
        'Daily yoga and meditation sessions',
        'Traditional Kashmiri spa treatments',
        'Scenic nature walks',
        'Luxury hotel accommodation with mountain views'
      ]
    },
    {
      id: 3,
      title: 'Cultural Experience',
      description: 'Immerse yourself in the rich culture of Kashmir with guided tours to local villages and historical sites.',
      price: '₹10,000',
      duration: '5 days, 4 nights',
      location: 'Gulmarg & Surrounding Areas',
      rating: 4.7,
      reviews: 29,
      category: 'cultural',
      image: '/images/Kashmir is beautiful but what is more beautiful about this place is the people. They are not only nice_ they are loving_ caring_ really hardworking and so k(.jpg',
      highlights: [
        'Visit to traditional Kashmiri villages',
        'Local cuisine cooking classes',
        'Handicraft workshops',
        'Cultural performances and music'
      ]
    },
    {
      id: 4,
      title: 'Family Package',
      description: 'The perfect package for families looking to create unforgettable memories in the breathtaking Gulmarg region.',
      price: '₹20,000',
      duration: '6 days, 5 nights',
      location: 'Gulmarg & Surrounding Areas',
      rating: 4.6,
      reviews: 38,
      category: 'family',
      image: '/images/banner_resort.jpg',
      highlights: [
        'Child-friendly activities and games',
        'Family adventure excursions',
        'Spacious family suite accommodation',
        'Professional photography session'
      ]
    },
    {
      id: 5,
      title: 'Honeymoon Special',
      description: 'Celebrate your love in one of the most romantic settings with our specially designed honeymoon package.',
      price: '₹25,000',
      duration: '7 days, 6 nights',
      location: 'Gulmarg, Kashmir',
      rating: 5.0,
      reviews: 52,
      category: 'couples',
      image: '/images/__Escape the chill of winter and warm up to our hospitality. Snowflakes gently fall outside_ while comfort and warmth envelop you__(JPG).jpg',
      highlights: [
        'Private candlelit dinners',
        'Romantic sunset gondola ride',
        'Couple spa treatments',
        'Luxury suite with breathtaking views'
      ]
    },
    {
      id: 6,
      title: 'Adventure Explorer',
      description: 'For the thrill-seekers looking to push their limits in the stunning Himalayan terrain.',
      price: '₹18,000',
      duration: '5 days, 4 nights',
      location: 'Gulmarg & Surrounding Areas',
      rating: 4.8,
      reviews: 41,
      category: 'adventure',
      image: '/images/Mount Harmukh_ Gangbal lake(Right)and Nandkol lake (left) seen on day 5 of Kashmir Great Lakes trek _Picture taken at Jaj pass_._._._ _india _jammukashmir _(.jpg',
      highlights: [
        'White water rafting excursion',
        'Himalayan trekking adventure',
        'Rock climbing experience',
        'Mountain biking trails'
      ]
    },
    {
      id: 7,
      title: 'Kashmir Paradise',
      description: 'Experience the magic of Kashmir with our comprehensive tour package.',
      price: '₹25,000',
      duration: '5 Days',
      location: 'Gulmarg, Kashmir',
      rating: 4.8,
      reviews: 45,
      category: 'cultural',
      image: '/images/Kashmir Paradise.jpg',
      highlights: ['Srinagar Houseboat Stay', 'Gulmarg Gondola Ride', 'Pangong Lake Visit', 'Local Cuisine'],
      features: ['Srinagar Houseboat Stay', 'Gulmarg Gondola Ride', 'Pangong Lake Visit', 'Local Cuisine']
    },
    {
      id: 8,
      title: 'Winter Wonderland',
      description: 'Discover the snowy paradise of Kashmir in winter.',
      price: '₹30,000',
      duration: '6 Days',
      location: 'Gulmarg, Kashmir',
      rating: 4.9,
      reviews: 38,
      category: 'family',
      image: '/images/Winter Wonderland.jpg',
      highlights: ['Skiing in Gulmarg', 'Snow Activities', 'Ice Skating', 'Winter Sports'],
      features: ['Skiing in Gulmarg', 'Snow Activities', 'Ice Skating', 'Winter Sports']
    },
    {
      id: 9,
      title: 'Shimla Serenity',
      description: 'Explore the colonial charm and natural beauty of Shimla.',
      price: '₹20,000',
      duration: '4 Days',
      location: 'Shimla, Himachal Pradesh',
      rating: 4.7,
      reviews: 42,
      category: 'relaxation',
      image: '/images/Shimla Serenity.jpg',
      highlights: ['Mall Road Visit', 'Jakhu Temple', 'Christ Church', 'Kufri Excursion'],
      features: ['Mall Road Visit', 'Jakhu Temple', 'Christ Church', 'Kufri Excursion']
    },
    {
      id: 10,
      title: 'Manali Magic',
      description: 'Experience the perfect blend of adventure and tranquility in Manali.',
      price: '₹22,000',
      duration: '5 Days',
      location: 'Manali, Himachal Pradesh',
      rating: 4.8,
      reviews: 35,
      category: 'family',
      image: '/images/Manali Magic.jpg',
      highlights: ['Rohtang Pass', 'Solang Valley', 'Hadimba Temple', 'River Rafting'],
      features: ['Rohtang Pass', 'Solang Valley', 'Hadimba Temple', 'River Rafting']
    },
    {
      id: 11,
      title: 'Leh Ladakh Adventure',
      description: 'Journey through the mystical landscapes of Leh Ladakh.',
      price: '₹35,000',
      duration: '7 Days',
      location: 'Leh, Ladakh',
      rating: 4.9,
      reviews: 48,
      category: 'adventure',
      image: '/images/Leh Ladakh Adventure.jpg',
      highlights: ['Pangong Lake', 'Nubra Valley', 'Khardung La Pass', 'Buddhist Monasteries'],
      features: ['Pangong Lake', 'Nubra Valley', 'Khardung La Pass', 'Buddhist Monasteries']
    }
  ];

  const hotelsData: Hotel[] = [
    {
      id: 1,
      name: 'Khyber Himalayan Resort & Spa',
      description: 'Luxury 5-star resort offering panoramic views of Gulmarg.',
      price: '₹15,000',
      rating: 4.8,
      image: '/images/Khyber Himalayan Resort & Spa.jpg',
      features: ['Spa Services', 'Fine Dining', 'Ski-in/Ski-out Access', 'Helicopter Service'],
      location: 'Gulmarg, Kashmir',
      category: 'luxury'
    }
  ];

  const handleOpenDialog = (id: number) => {
    setSelectedPackage(id);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleOpenDetailsDialog = (id: number, isHotel = false) => {
    // For hotels, add the offset to match our combined data structure
    if (isHotel) {
      setSelectedPackage(id + 1000);
    } else {
      setSelectedPackage(id);
    }
    setIsDetailsDialogOpen(true);
  };

  const handleCloseDetailsDialog = () => {
    setIsDetailsDialogOpen(false);
  };

  const handleFilterChange = (event: React.SyntheticEvent, newValue: string) => {
    setFilter(newValue);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  // Map numeric tab values to category strings
  const getCategoryFromTab = (tabValue: number): string => {
    switch(tabValue) {
      case 0: return 'all';
      case 1: return 'adventure';
      case 2: return 'relaxation';
      case 3: return 'cultural';
      case 4: return 'family';
      case 5: return 'couples';
      case 6: return 'hotels';
      default: return 'all';
    }
  };

  const filteredPackages = selectedTab === 0
    ? packagesData
    : packagesData.filter(pkg => pkg.category.toLowerCase() === getCategoryFromTab(selectedTab));
    
  // Show both packages and hotels in the "All" tab
  const shouldShowHotels = selectedTab === 0 || selectedTab === 6;
  const filteredHotels = shouldShowHotels ? hotelsData : [];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  // Convert hotel data to the same format for the detail view
  const selectedItemData = selectedPackage ? 
    [...packagesData, ...hotelsData.map(hotel => ({
      id: hotel.id + 1000, // Use offset to prevent ID collision with packages
      title: hotel.name,
      name: hotel.name,
      description: hotel.description,
      price: hotel.price,
      duration: 'Flexible',
      location: hotel.location,
      rating: hotel.rating,
      reviews: 42, // Default value
      category: hotel.category,
      image: hotel.image,
      highlights: hotel.features,
      features: hotel.features,
      isHotel: true
    } as DetailItem))].find(item => item.id === selectedPackage) : null;

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
              Our Tour Packages & Hotels
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
                color: 'text.secondary',
                maxWidth: '800px',
                mx: 'auto',
                mb: 4
              }}
            >
              Discover our carefully curated packages and luxury accommodations designed to give you the best experience
            </Typography>
          </motion.div>

          <Paper elevation={1} sx={{ 
            borderRadius: 2, 
            mb: 5, 
            mx: 'auto', 
            maxWidth: 800,
            bgcolor: 'background.paper',
            position: 'sticky',
            top: 0,
            zIndex: 10,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              indicatorColor="secondary"
              textColor="primary"
              variant="scrollable"
              scrollButtons={true}
              allowScrollButtonsMobile
              aria-label="package categories tabs"
              sx={{
                '& .MuiTab-root': {
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  px: { xs: 2, sm: 3 },
                  py: 2,
                  minWidth: 100
                },
                '& .MuiTabs-scrollButtons': {
                  '&.Mui-disabled': {
                    opacity: 0.3,
                  },
                }
              }}
            >
              <Tab label="All" value={0} />
              <Tab label="Adventure" value={1} />
              <Tab label="Relaxation" value={2} />
              <Tab label="Cultural" value={3} />
              <Tab label="Family" value={4} />
              <Tab label="Couples" value={5} />
              <Tab label="Hotels" value={6} />
            </Tabs>
          </Paper>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {selectedTab === 6 ? (
            // Hotels Section - Only show when "Hotels" tab is selected
            <Grid container spacing={4}>
              {hotelsData.map((hotel) => (
                <Grid item xs={12} md={6} key={hotel.id}>
                  <motion.div variants={itemVariants}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 2,
                        overflow: 'hidden',
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        boxShadow: theme.shadows[2],
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2), 0 10px 10px -5px rgba(0,0,0,0.1)',
                          '& .MuiCardMedia-root': {
                            transform: 'scale(1.08)',
                          }
                        }
                      }}
                    >
                      <Box sx={{ position: 'relative', overflow: 'hidden', pt: '60%' }}>
                        <CardMedia
                          component="img"
                          image={hotel.image}
                          alt={hotel.name}
                          sx={{ 
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            transition: 'transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
                            objectFit: 'cover',
                            objectPosition: 'center',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            bgcolor: 'rgba(0, 0, 0, 0.7)',
                            color: 'white',
                            py: 0.5,
                            px: 1.5,
                            borderRadius: 10,
                            display: 'flex',
                            alignItems: 'center',
                            backdropFilter: 'blur(5px)'
                          }}
                        >
                          <StarIcon sx={{ color: theme.palette.secondary.main, mr: 0.5, fontSize: '1rem' }} />
                          <Typography variant="body2" fontWeight="bold">
                            {hotel.rating}/5
                          </Typography>
                        </Box>
                        
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 16,
                            left: 16,
                            bgcolor: theme.palette.secondary.main,
                            color: 'white',
                            py: 0.5,
                            px: 1.5,
                            borderRadius: 1,
                            display: 'flex',
                            alignItems: 'center',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                          }}
                        >
                          <Typography variant="body1" fontWeight="bold">
                            {hotel.price}/night
                          </Typography>
                        </Box>
                      </Box>

                      <CardContent sx={{ 
                        p: 3, 
                        pt: 2,
                        pb: 1,
                        flexGrow: 1, 
                        display: 'flex', 
                        flexDirection: 'column'
                      }}>
                        <Typography variant="h6" component="h2" fontWeight="bold" gutterBottom>
                          {hotel.name}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <LocationIcon sx={{ color: theme.palette.secondary.main, mr: 1, fontSize: '1rem' }} />
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {hotel.location}
                          </Typography>
                        </Box>

                        <Typography 
                          variant="body1" 
                          color="text.secondary" 
                          sx={{ 
                            mb: 2,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            minHeight: '48px'
                          }}
                        >
                          {hotel.description}
                        </Typography>

                        <Box sx={{ mt: 'auto' }}>
                          <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                            Amenities:
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {hotel.features.map((feature, index) => (
                              <Chip 
                                key={index} 
                                label={feature} 
                                size="small"
                                sx={{ 
                                  bgcolor: 'rgba(25, 118, 210, 0.1)',
                                  color: 'primary.main',
                                  '&:hover': {
                                    bgcolor: 'rgba(25, 118, 210, 0.2)'
                                  }
                                }}
                              />
                            ))}
                          </Box>
                        </Box>
                      </CardContent>

                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button 
                          size="small" 
                          color="secondary" 
                          variant="text"
                          onClick={() => handleOpenDetailsDialog(hotel.id, true)}
                        >
                          View Details
                        </Button>
                        <Button 
                          variant="contained" 
                          color="primary"
                          sx={{ ml: 1 }}
                          onClick={() => handleOpenDialog(hotel.id)}
                        >
                          Book Now
                        </Button>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          ) : (
            // Combined view for "All" tab or filtered packages for other tabs
            <>
              {/* Packages Section */}
              <Grid container spacing={4}>
                {filteredPackages.map((pkg) => (
                  <Grid item xs={12} md={6} lg={4} key={pkg.id}>
                    <motion.div variants={itemVariants}>
                      <Card
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          borderRadius: 2,
                          overflow: 'hidden',
                          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                          boxShadow: theme.shadows[2],
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2), 0 10px 10px -5px rgba(0,0,0,0.1)',
                            '& .MuiCardMedia-root': {
                              transform: 'scale(1.08)',
                            }
                          }
                        }}
                      >
                        <Box sx={{ position: 'relative', overflow: 'hidden', pt: '60%' }}>
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
                              transition: 'transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
                              objectFit: 'cover',
                              objectPosition: 'center',
                            }}
                          />
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 16,
                              right: 16,
                              bgcolor: 'rgba(0, 0, 0, 0.7)',
                              color: 'white',
                              py: 0.5,
                              px: 1.5,
                              borderRadius: 10,
                              display: 'flex',
                              alignItems: 'center',
                              backdropFilter: 'blur(5px)'
                            }}
                          >
                            <StarIcon sx={{ color: theme.palette.secondary.main, mr: 0.5, fontSize: '1rem' }} />
                            <Typography variant="body2" fontWeight="bold">
                              {pkg.rating}/5 ({pkg.reviews})
                            </Typography>
                          </Box>
                          
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 16,
                              left: 16,
                              bgcolor: theme.palette.secondary.main,
                              color: 'white',
                              py: 0.5,
                              px: 1.5,
                              borderRadius: 1,
                              display: 'flex',
                              alignItems: 'center',
                              fontWeight: 'bold',
                              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                            }}
                          >
                            <Typography variant="body1" fontWeight="bold">
                              {pkg.price}
                            </Typography>
                          </Box>
                        </Box>

                        <CardContent sx={{ 
                          p: 3, 
                          pt: 2,
                          pb: 1,
                          flexGrow: 1, 
                          display: 'flex', 
                          flexDirection: 'column'
                        }}>
                          <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="h6" component="h2" fontWeight="bold" noWrap>
                              {pkg.title}
                            </Typography>
                            <Chip 
                              label={getCategoryDisplayName(pkg.category)} 
                              size="small" 
                              color="primary" 
                              sx={{ fontWeight: 'medium', ml: 1 }}
                            />
                          </Box>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <TimerIcon sx={{ color: theme.palette.secondary.main, mr: 1, fontSize: '1rem' }} />
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {pkg.duration}
                            </Typography>
                          </Box>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <LocationIcon sx={{ color: theme.palette.secondary.main, mr: 1, fontSize: '1rem' }} />
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {pkg.location}
                            </Typography>
                          </Box>

                          <Typography 
                            variant="body1" 
                            color="text.secondary" 
                            sx={{ 
                              mb: 2,
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              minHeight: '48px'
                            }}
                          >
                            {pkg.description}
                          </Typography>

                          <Box sx={{ mt: 'auto' }}>
                            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                              Highlights:
                            </Typography>
                            <List dense disablePadding>
                              {(pkg.highlights || pkg.features || []).slice(0, 3).map((highlight, index) => (
                                <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                                  <ListItemIcon sx={{ minWidth: 28 }}>
                                    <CheckIcon sx={{ color: theme.palette.secondary.main, fontSize: '0.875rem' }} />
                                  </ListItemIcon>
                                  <ListItemText 
                                    primary={highlight} 
                                    primaryTypographyProps={{ 
                                      variant: 'body2',
                                      fontSize: '0.875rem',
                                      sx: {
                                        whiteSpace: 'normal',
                                        wordBreak: 'break-word'
                                      }
                                    }} 
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                        </CardContent>

                        <CardActions sx={{ p: 2, pt: 0 }}>
                          <Button 
                            size="small" 
                            color="secondary" 
                            variant="text"
                            onClick={() => handleOpenDetailsDialog(pkg.id)}
                          >
                            View Details
                          </Button>
                          <Button 
                            size="small" 
                            variant="contained" 
                            color="primary"
                            onClick={() => handleOpenDialog(pkg.id)}
                          >
                            Book Now
                          </Button>
                        </CardActions>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              {/* Show hotels in "All" tab */}
              {selectedTab === 0 && (
                <>
                  <Typography 
                    variant="h3" 
                    component="h2" 
                    sx={{ 
                      mt: 8, 
                      mb: 4, 
                      fontWeight: 'bold',
                      textAlign: 'center' 
                    }}
                  >
                    Luxury Hotels
                  </Typography>
                  <Grid container spacing={4}>
                    {hotelsData.map((hotel) => (
                      <Grid item xs={12} md={6} key={hotel.id}>
                        <motion.div variants={itemVariants}>
                          <Card
                            sx={{
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              borderRadius: 2,
                              overflow: 'hidden',
                              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                              boxShadow: theme.shadows[2],
                              '&:hover': {
                                transform: 'translateY(-8px)',
                                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2), 0 10px 10px -5px rgba(0,0,0,0.1)',
                                '& .MuiCardMedia-root': {
                                  transform: 'scale(1.08)',
                                }
                              }
                            }}
                          >
                            <Box sx={{ position: 'relative', overflow: 'hidden', pt: '60%' }}>
                              <CardMedia
                                component="img"
                                image={hotel.image}
                                alt={(hotel.name || '')}
                                sx={{ 
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  transition: 'transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
                                  objectFit: 'cover',
                                  objectPosition: 'center',
                                }}
                              />
                              <Box
                                sx={{
                                  position: 'absolute',
                                  top: 16,
                                  right: 16,
                                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                                  color: 'white',
                                  py: 0.5,
                                  px: 1.5,
                                  borderRadius: 10,
                                  display: 'flex',
                                  alignItems: 'center',
                                  backdropFilter: 'blur(5px)'
                                }}
                              >
                                <StarIcon sx={{ color: theme.palette.secondary.main, mr: 0.5, fontSize: '1rem' }} />
                                <Typography variant="body2" fontWeight="bold">
                                  {hotel.rating}/5
                                </Typography>
                              </Box>
                              
                              <Box
                                sx={{
                                  position: 'absolute',
                                  top: 16,
                                  left: 16,
                                  bgcolor: theme.palette.secondary.main,
                                  color: 'white',
                                  py: 0.5,
                                  px: 1.5,
                                  borderRadius: 1,
                                  display: 'flex',
                                  alignItems: 'center',
                                  fontWeight: 'bold',
                                  boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                                }}
                              >
                                <Typography variant="body1" fontWeight="bold">
                                  {hotel.price}/night
                                </Typography>
                              </Box>
                            </Box>

                            <CardContent sx={{ 
                              p: 3, 
                              pt: 2,
                              pb: 1,
                              flexGrow: 1, 
                              display: 'flex', 
                              flexDirection: 'column'
                            }}>
                              <Typography variant="h6" component="h2" fontWeight="bold" gutterBottom>
                                {hotel.name}
                              </Typography>
                              
                              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <LocationIcon sx={{ color: theme.palette.secondary.main, mr: 1, fontSize: '1rem' }} />
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                  {hotel.location}
                                </Typography>
                              </Box>

                              <Typography 
                                variant="body1" 
                                color="text.secondary" 
                                sx={{ 
                                  mb: 2,
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  display: '-webkit-box',
                                  WebkitLineClamp: 3,
                                  WebkitBoxOrient: 'vertical',
                                  minHeight: '48px'
                                }}
                              >
                                {hotel.description}
                              </Typography>

                              <Box sx={{ mt: 'auto' }}>
                                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                                  Amenities:
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                  {hotel.features.map((feature, index) => (
                                    <Chip 
                                      key={index} 
                                      label={feature} 
                                      size="small"
                                      sx={{ 
                                        bgcolor: 'rgba(25, 118, 210, 0.1)',
                                        color: 'primary.main',
                                        '&:hover': {
                                          bgcolor: 'rgba(25, 118, 210, 0.2)'
                                        }
                                      }}
                                    />
                                  ))}
                                </Box>
                              </Box>
                            </CardContent>

                            <CardActions sx={{ p: 2, pt: 0 }}>
                              <Button 
                                size="small" 
                                color="secondary" 
                                variant="text"
                                onClick={() => handleOpenDetailsDialog(hotel.id, true)}
                              >
                                View Details
                              </Button>
                              <Button 
                                variant="contained" 
                                color="primary"
                                sx={{ ml: 1 }}
                                onClick={() => handleOpenDialog(hotel.id)}
                              >
                                Book Now
                              </Button>
                            </CardActions>
                          </Card>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}
            </>
          )}
        </motion.div>
      </Container>

      {/* Details Dialog */}
      <Dialog
        open={isDetailsDialogOpen}
        onClose={handleCloseDetailsDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            p: 0,
            height: '90vh',
            maxHeight: '90vh',
            overflow: 'hidden'
          }
        }}
      >
        {selectedItemData && (
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ position: 'relative', height: 300, flexShrink: 0 }}>
              <CardMedia
                component="img"
                image={selectedItemData.image}
                alt={(selectedItemData.title || '')}
                sx={{ 
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover'
                }}
              />
              <IconButton
                onClick={handleCloseDetailsDialog}
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  bgcolor: 'rgba(0, 0, 0, 0.6)',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.8)',
                  }
                }}
              >
                <CloseIcon />
              </IconButton>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  color: 'white',
                  p: 3
                }}
              >
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  {selectedItemData.title}
                </Typography>
                <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                  {selectedItemData.duration && (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <TimerIcon sx={{ mr: 1 }} />
                      {selectedItemData.duration}
                    </Box>
                  )}
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationIcon sx={{ mr: 1 }} />
                    {selectedItemData.location}
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <StarIcon sx={{ mr: 1, color: theme.palette.secondary.main }} />
                    {selectedItemData.rating}/5 ({selectedItemData.reviews} reviews)
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ 
              flex: 1,
              overflow: 'auto',
              p: 4,
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: '#f1f1f1',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#888',
                borderRadius: '4px',
                '&:hover': {
                  background: '#555',
                },
              },
            }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    {selectedItemData.id > 1000 ? 'Hotel Description' : 'Package Description'}
                  </Typography>
                  <Typography paragraph color="text.secondary">
                    {selectedItemData.description}
                  </Typography>

                  <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ mt: 4 }}>
                    {selectedItemData.id > 1000 ? 'Hotel Amenities' : 'Package Highlights'}
                  </Typography>
                  <List>
                    {(selectedItemData?.highlights || selectedItemData?.features || []).map((highlight, index) => (
                      <ListItem key={index} sx={{ py: 1 }}>
                        <ListItemIcon>
                          <CheckIcon sx={{ color: theme.palette.secondary.main }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={highlight}
                          primaryTypographyProps={{
                            color: 'text.secondary'
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  {selectedItemData.id < 1000 && (
                    <>
                      <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ mt: 4 }}>
                        What's Included
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <List dense>
                            <ListItem>
                              <ListItemIcon>
                                <CheckIcon sx={{ color: theme.palette.secondary.main }} />
                              </ListItemIcon>
                              <ListItemText primary="Accommodation" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckIcon sx={{ color: theme.palette.secondary.main }} />
                              </ListItemIcon>
                              <ListItemText primary="Daily Breakfast" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckIcon sx={{ color: theme.palette.secondary.main }} />
                              </ListItemIcon>
                              <ListItemText primary="Transportation" />
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <List dense>
                            <ListItem>
                              <ListItemIcon>
                                <CheckIcon sx={{ color: theme.palette.secondary.main }} />
                              </ListItemIcon>
                              <ListItemText primary="Guide Services" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckIcon sx={{ color: theme.palette.secondary.main }} />
                              </ListItemIcon>
                              <ListItemText primary="Activity Equipment" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckIcon sx={{ color: theme.palette.secondary.main }} />
                              </ListItemIcon>
                              <ListItemText primary="24/7 Support" />
                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                    </>
                  )}

                  {selectedItemData.id > 1000 && (
                    <>
                      <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ mt: 4 }}>
                        Hotel Services
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <List dense>
                            <ListItem>
                              <ListItemIcon>
                                <CheckIcon sx={{ color: theme.palette.secondary.main }} />
                              </ListItemIcon>
                              <ListItemText primary="24-Hour Room Service" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckIcon sx={{ color: theme.palette.secondary.main }} />
                              </ListItemIcon>
                              <ListItemText primary="Concierge Services" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckIcon sx={{ color: theme.palette.secondary.main }} />
                              </ListItemIcon>
                              <ListItemText primary="Free Wi-Fi" />
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <List dense>
                            <ListItem>
                              <ListItemIcon>
                                <CheckIcon sx={{ color: theme.palette.secondary.main }} />
                              </ListItemIcon>
                              <ListItemText primary="Premium Dining" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckIcon sx={{ color: theme.palette.secondary.main }} />
                              </ListItemIcon>
                              <ListItemText primary="Luxury Spa" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <CheckIcon sx={{ color: theme.palette.secondary.main }} />
                              </ListItemIcon>
                              <ListItemText primary="Airport Transfers" />
                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                    </>
                  )}
                </Grid>

                <Grid item xs={12} md={4}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 3, 
                      bgcolor: 'background.default', 
                      borderRadius: 2
                    }}
                  >
                    <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">
                      {selectedItemData.price}
                      <Typography component="span" variant="body2" color="text.secondary">
                        {selectedItemData.id > 1000 ? '/night' : '/person'}
                      </Typography>
                    </Typography>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Typography variant="subtitle2" gutterBottom fontWeight="bold">
                      Quick Facts:
                    </Typography>
                    <List dense>
                      {selectedItemData.duration && (
                        <ListItem disableGutters>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <TimerIcon fontSize="small" color="primary" />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Duration"
                            secondary={selectedItemData.duration}
                          />
                        </ListItem>
                      )}
                      <ListItem disableGutters>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <LocationIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Location"
                          secondary={selectedItemData.location}
                        />
                      </ListItem>
                      <ListItem disableGutters>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <StarIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Rating"
                          secondary={`${selectedItemData.rating}/5 (${selectedItemData.reviews} reviews)`}
                        />
                      </ListItem>
                    </List>

                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      onClick={() => {
                        handleCloseDetailsDialog();
                        // If it's a hotel, we need to get the original ID
                        const originalId = selectedItemData.id > 1000 ? selectedItemData.id - 1000 : selectedItemData.id;
                        handleOpenDialog(originalId);
                      }}
                      sx={{ mt: 3 }}
                    >
                      Book Now
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}
      </Dialog>

      {/* Booking Dialog */}
      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            p: 2
          }
        }}
      >
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" component="div" fontWeight="bold">
              Book {selectedItemData?.title}
            </Typography>
            <IconButton aria-label="close" onClick={handleCloseDialog} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  margin="normal"
                  required
                  InputProps={{
                    startAdornment: <PhoneIcon sx={{ mr: 1, color: 'text.secondary' }} fontSize="small" />,
                  }}
                  helperText="Primary: +91 6006677929 | Secondary: +91 7889325581"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  required
                  InputProps={{
                    startAdornment: <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} fontSize="small" />,
                  }}
                  helperText="gulmargdestination@gmail.com"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Travel Date"
                  type="date"
                  variant="outlined"
                  margin="normal"
                  required
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: <DateRangeIcon sx={{ mr: 1, color: 'text.secondary' }} fontSize="small" />,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal" variant="outlined">
                  <InputLabel id="guests-label">Number of Guests</InputLabel>
                  <Select
                    labelId="guests-label"
                    label="Number of Guests"
                    defaultValue={2}
                    IconComponent={PersonOutlineIcon}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <MenuItem key={num} value={num}>{num}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Special Requests (Optional)"
                  multiline
                  rows={3}
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 2, bgcolor: 'primary.light', borderRadius: 1, mt: 1 }}>
                  <LocalOfferIcon sx={{ color: 'primary.main', mr: 1 }} />
                  <Typography variant="body2" color="primary.main" fontWeight="medium">
                    Package Price: <strong>{selectedItemData?.price}</strong> per person
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Button 
                  variant="outlined" 
                  onClick={handleCloseDialog} 
                  sx={{ mr: 2 }}
                >
                  Cancel
                </Button>
                <Button 
                  variant="contained" 
                  color="primary"
                  size="large"
                >
                  Confirm Booking
                </Button>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default PackagesPage; 