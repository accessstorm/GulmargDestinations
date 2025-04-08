import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
  useTheme,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material';
import {
  ArrowForwardIos as ArrowForwardIosIcon,
  ArrowBackIos as ArrowBackIosIcon,
  AirlineSeatReclineNormal as SeatIcon,
  Check as CheckIcon,
  LocalOffer as LocalOfferIcon,
  DirectionsCar as DirectionsCarIcon,
  Settings as SettingsIcon,
  EventAvailable as EventAvailableIcon,
  Support as SupportIcon,
  Close as CloseIcon,
  LocationOn as LocationIcon,
  Star as StarIcon,
  Timer as TimerIcon,
  Info as InfoIcon,
  Phone as PhoneIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Extended Vehicle interface with more details
interface Vehicle {
  id: number;
  name: string;
  image: string;
  seats: string;
  dailyRental: string;
  keyPoints: string[];
  description?: string;
  location?: string;
  rating?: number;
  reviews?: number;
  amenities?: string[];
}

const CabsPage = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleVehicles, setVisibleVehicles] = useState<Vehicle[]>([]);
  
  // Dialog states
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  
  // Form states
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    pickupDate: '',
    pickupLocation: '',
    returnDate: '',
    duration: '',
    passengers: 1
  });
  
  // Define the vehicles data with extended properties
  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: 'Maruti Swift Etios',
      image: '/images/Maruti Swift Etios.jpg',
      seats: '4-Seater',
      dailyRental: '₹3,000',
      location: 'Gulmarg, Kashmir',
      rating: 4.8,
      reviews: 32,
      description: "The Maruti Swift Etios offers exceptional fuel efficiency and comfortable seating, making it perfect for city exploration and short trips around Gulmarg. With its compact size and excellent maneuverability, it's ideal for navigating through the beautiful yet sometimes narrow roads of Kashmir.",
      keyPoints: [
        'Fuel-efficient',
        'Perfect for city travel',
        'Comfortable seating',
        'Air conditioning'
      ],
      amenities: [
        'GPS Navigation',
        'Bluetooth Audio',
        'USB Charging',
        'Heating System'
      ]
    },
    {
      id: 2,
      name: 'Maruti Swift Dzire',
      image: '/images/Maruti Swift Dzire.jpg',
      seats: '4-Seater',
      dailyRental: '₹2,000',
      location: 'Gulmarg, Kashmir',
      rating: 4.7,
      reviews: 41,
      description: "The Maruti Swift Dzire combines comfort and practicality with a spacious trunk, making it ideal for families and travelers with luggage. Its smooth ride quality ensures a comfortable journey while exploring the scenic landscapes of Kashmir.",
      keyPoints: [
        'Spacious trunk',
        'Smooth ride quality',
        'Bluetooth connectivity',
        'Power windows'
      ],
      amenities: [
        'GPS Navigation',
        'Entertainment System',
        'Rear AC Vents',
        'Central Locking'
      ]
    },
    {
      id: 3,
      name: 'Innova Crysta',
      image: '/images/Innova Crysta.jpg',
      seats: '6-Seater',
      dailyRental: '₹3,500',
      location: 'Gulmarg, Kashmir',
      rating: 4.9,
      reviews: 57,
      description: "The Toyota Innova Crysta is our premium offering for larger groups or those seeking extra comfort. With spacious seating for 6 passengers, advanced safety features, and climate control, it's perfect for exploring mountain roads and enjoying Kashmir's breathtaking landscapes.",
      keyPoints: [
        'Spacious interior',
        'Comfortable for long journeys',
        'Advanced safety features',
        'Climate control'
      ],
      amenities: [
        'Leather Seats',
        'Multi-zone Climate Control',
        'Premium Audio System',
        'Rear Entertainment'
      ]
    },
    {
      id: 4,
      name: 'Force traveller',
      image: '/images/Force traveller.jpg',
      seats: 'Shared',
      dailyRental: '₹2,000',
      location: 'Gulmarg, Kashmir',
      rating: 4.7,
      reviews: 41,
      description: "Shared Force Traveller tours for budget-friendly and comfortable group travel to top destinations.",
      keyPoints: [
        'Spacious trunk',
        'Smooth ride quality',
        'Bluetooth connectivity',
        'Power windows'
      ],
      amenities: [
        'GPS Navigation',
        'Entertainment System',
        'Rear AC Vents',
        'Central Locking'
      ]
    },
  ];

  // Set up the visible vehicles
  useEffect(() => {
    setVisibleVehicles([...vehicles, ...vehicles, ...vehicles]);
  }, []);

  // Calculate how many vehicles to show at once based on screen size
  const getVisibleCount = () => {
    // Return number of items to show based on screen width
    if (window.innerWidth < 600) return 1;  // xs screens - mobile
    if (window.innerWidth < 960) return 2;  // sm screens - tablets
    return 3;  // md+ screens - desktop
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  // Update visible count on window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    
    window.addEventListener('resize', handleResize);
    // Initialize with current window size
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Navigation functions
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + vehicles.length) % vehicles.length);
  };

  // Define handlers for the buttons
  const handleBookNow = (vehicle: Vehicle) => {
    console.log('Booking vehicle:', vehicle.name);
    alert(`You're booking a ${vehicle.name}. This would open a booking form in a real implementation.`);
  };

  // Handle opening the details dialog
  const handleOpenDetailsDialog = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsDetailsDialogOpen(true);
  };

  // Handle opening the booking dialog
  const handleOpenBookingDialog = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsBookingDialogOpen(true);
  };

  // Handle dialog closing
  const handleCloseDialog = () => {
    setIsDetailsDialogOpen(false);
    setIsBookingDialogOpen(false);
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string | number>
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name as string]: value,
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    // Here you would handle the form submission logic
    console.log('Form submitted:', formValues);
    handleCloseDialog();
    // Reset form
    setFormValues({
      name: '',
      email: '',
      phone: '',
      pickupDate: '',
      pickupLocation: '',
      returnDate: '',
      duration: '',
      passengers: 1
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Render a vehicle card
  const renderVehicleCard = (vehicle: Vehicle) => (
    <Card 
      key={vehicle.id} 
      sx={{ 
        minWidth: 280, 
        maxWidth: '100%', 
        mx: 1, 
        my: 1, 
        boxShadow: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ position: 'relative', pt: '56.25%', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          image={vehicle.image}
          alt={vehicle.name}
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {vehicle.name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <SeatIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {vehicle.seats}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LocalOfferIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {vehicle.dailyRental} per day
          </Typography>
        </Box>
        <List dense>
          {vehicle.keyPoints.slice(0, 2).map((point, index) => (
            <ListItem key={index} disableGutters sx={{ py: 0 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <CheckIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={point} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Button 
          size="small" 
          variant="outlined" 
          startIcon={<InfoIcon />}
          onClick={() => handleOpenDetailsDialog(vehicle)}
        >
          Show Details
        </Button>
        <Button 
          size="small" 
          variant="contained" 
          onClick={() => handleOpenBookingDialog(vehicle)}
        >
          Rent Now
        </Button>
      </CardActions>
    </Card>
  );

  return (
    <Box sx={{ bgcolor: 'background.paper', pb: 10 }}>
      <Box component="main" sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Typography
              variant="h2"
              component="h1"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: 'text.primary',
                mt: 8,
                mb: 2
              }}
            >
              Available Vehicles for Rent
            </Typography>
            
            <Box sx={{ width: '100px', height: '4px', bgcolor: theme.palette.secondary.main, mx: 'auto', mb: 6 }} />
          </motion.div>

          {/* New carousel implementation */}
          <Box sx={{ position: 'relative', mb: 8 }}>
            <Paper 
              elevation={3}
              sx={{ 
                borderRadius: 4, 
                overflow: 'hidden',
                p: 2,
                py: 4,
                position: 'relative'
              }}
            >
              {/* Add side navigation buttons - hidden on mobile, visible on tablet and up */}
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handlePrev}
                  sx={{ 
                    position: 'absolute',
                    left: { xs: 8, sm: 8 },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 100,
                    borderRadius: '50%', 
                    minWidth: '40px', 
                    width: '40px',
                    height: '40px',
                    p: 0,
                    boxShadow: 4
                  }}
                >
                  <ArrowBackIosIcon sx={{ ml: 1, fontSize: 'small' }} />
                </Button>
                
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  sx={{ 
                    position: 'absolute',
                    right: { xs: 8, sm: 8 },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 100,
                    borderRadius: '50%', 
                    minWidth: '40px', 
                    width: '40px',
                    height: '40px',
                    p: 0,
                    boxShadow: 4
                  }}
                >
                  <ArrowForwardIosIcon sx={{ fontSize: 'small' }} />
                </Button>
              </Box>

              <Grid container spacing={3} sx={{ 
                display: 'flex', 
                flexWrap: { xs: 'nowrap', md: 'nowrap' },
                px: { xs: 2, sm: 4 },
                overflow: { xs: 'auto', md: 'hidden' },
                scrollSnapType: 'x mandatory',
                '&::-webkit-scrollbar': {
                  display: 'none'
                },
                scrollbarWidth: 'none'
              }}>
                {vehicles.map((vehicle, index) => {
                  // Logic to calculate if this item should be visible
                  const isVisible = index >= currentIndex && index < currentIndex + visibleCount;
                  // Handle wrap-around for the end of the array
                  const isWrappedVisible = currentIndex + visibleCount > vehicles.length && 
                                         index < (currentIndex + visibleCount) % vehicles.length;
                  
                  return (
                    <Grid 
                      item 
                      xs={12}
                      sm={6} 
                      md={4} 
                      key={index}
                      sx={{ 
                        flexShrink: 0,
                        width: { xs: '100%', sm: '50%', md: '33.33%' },
                        scrollSnapAlign: 'center',
                        display: { 
                          xs: 'block', // Always display on mobile (will show in scrollable container)
                          sm: isVisible || isWrappedVisible ? 'block' : 'none'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Box sx={{ px: 1 }}>
                        {renderVehicleCard(vehicle)}
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>

              {/* Move dot indicators to bottom center */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 1, overflow: 'auto' }}>
                {vehicles.map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      mx: 0.5,
                      bgcolor: currentIndex === index ? theme.palette.primary.main : 'grey.300',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      flexShrink: 0
                    }}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </Box>
            </Paper>
          </Box>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Typography
              variant="h3"
              component="h2"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                mb: 4
              }}
            >
              Why Choose Our Cab Services
            </Typography>

            <Grid container spacing={4} sx={{ mb: 8 }}>
              <Grid item xs={12} md={6} lg={3}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: 3,
                    boxShadow: 3,
                    '&:hover': {
                      boxShadow: 6
                    }
                  }}>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <DirectionsCarIcon sx={{ fontSize: 60, color: theme.palette.secondary.main }} />
                      </Box>
                      <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" color="primary" align="center">
                        Experienced Drivers
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="body1" color="text.secondary">
                        Our drivers are locals with years of experience navigating the mountain roads safely.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={6} lg={3}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: 3,
                    boxShadow: 3,
                    '&:hover': {
                      boxShadow: 6
                    }
                  }}>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <SettingsIcon sx={{ fontSize: 60, color: theme.palette.secondary.main }} />
                      </Box>
                      <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" color="primary" align="center">
                        Well-Maintained Fleet
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="body1" color="text.secondary">
                        All our vehicles undergo regular maintenance checks to ensure your journey is comfortable and safe.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={6} lg={3}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: 3,
                    boxShadow: 3,
                    '&:hover': {
                      boxShadow: 6
                    }
                  }}>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <EventAvailableIcon sx={{ fontSize: 60, color: theme.palette.secondary.main }} />
                      </Box>
                      <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" color="primary" align="center">
                        Flexible Booking
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="body1" color="text.secondary">
                        Book for a few hours, a full day, or multiple days. We offer packages tailored to your needs.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={6} lg={3}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: 3,
                    boxShadow: 3,
                    '&:hover': {
                      boxShadow: 6
                    }
                  }}>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <SupportIcon sx={{ fontSize: 60, color: theme.palette.secondary.main }} />
                      </Box>
                      <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" color="primary" align="center">
                        24/7 Support
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="body1" color="text.secondary">
                        Our customer support team is available round the clock to assist you with any queries or concerns.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Vehicle Details Dialog */}
      <Dialog
        open={isDetailsDialogOpen}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedVehicle && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h5" component="div">{selectedVehicle.name}</Typography>
              <IconButton edge="end" color="inherit" onClick={handleCloseDialog} aria-label="close">
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
                <Box sx={{ flex: 1, minWidth: { xs: '100%', md: '40%' } }}>
                  <CardMedia
                    component="img"
                    image={selectedVehicle.image}
                    alt={selectedVehicle.name}
                    sx={{ 
                      height: 300, 
                      objectFit: 'cover', 
                      borderRadius: 1,
                      mb: 2
                    }}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LocationIcon color="primary" sx={{ mr: 0.5 }} />
                      <Typography variant="body2">{selectedVehicle.location}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <StarIcon color="primary" sx={{ mr: 0.5 }} />
                      <Typography variant="body2">{selectedVehicle.rating} ({selectedVehicle.reviews} reviews)</Typography>
                    </Box>
                  </Box>
                </Box>
                
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" gutterBottom>Details</Typography>
                  <Typography variant="body2" paragraph>
                    {selectedVehicle.description}
                  </Typography>
                  
                  <Typography variant="h6" gutterBottom>Key Features</Typography>
                  <Grid container spacing={1}>
                    {selectedVehicle.keyPoints.map((point, index) => (
                      <Grid item xs={6} key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CheckIcon color="primary" sx={{ mr: 1 }} fontSize="small" />
                          <Typography variant="body2">{point}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  
                  <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Amenities</Typography>
                  <Grid container spacing={1}>
                    {selectedVehicle.amenities?.map((amenity, index) => (
                      <Grid item xs={6} key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CheckIcon color="primary" sx={{ mr: 1 }} fontSize="small" />
                          <Typography variant="body2">{amenity}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  
                  <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                      <Typography variant="body2" color="text.secondary">Daily Rental</Typography>
                      <Typography variant="h6" color="primary">{selectedVehicle.dailyRental}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <SeatIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="body1">{selectedVehicle.seats}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
              <Button 
                variant="contained" 
                onClick={() => {
                  handleCloseDialog();
                  handleOpenBookingDialog(selectedVehicle);
                }}
              >
                Rent This Vehicle
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Booking Dialog */}
      <Dialog
        open={isBookingDialogOpen}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedVehicle && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h5" component="div">Book {selectedVehicle.name}</Typography>
              <IconButton edge="end" color="inherit" onClick={handleCloseDialog} aria-label="close">
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                <Box sx={{ flex: 1, minWidth: { xs: '100%', md: '40%' } }}>
                  <CardMedia
                    component="img"
                    image={selectedVehicle.image}
                    alt={selectedVehicle.name}
                    sx={{ 
                      height: 200, 
                      objectFit: 'cover', 
                      borderRadius: 1,
                      mb: 2
                    }}
                  />
                  <Typography variant="h6" gutterBottom>Vehicle Details</Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">Type:</Typography>
                    <Typography variant="body2">{selectedVehicle.name}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">Capacity:</Typography>
                    <Typography variant="body2">{selectedVehicle.seats}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">Daily Rate:</Typography>
                    <Typography variant="body2" color="primary" fontWeight="bold">{selectedVehicle.dailyRental}</Typography>
                  </Box>
                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ bgcolor: theme.palette.grey[100], p: 2, borderRadius: 1 }}>
                    <Typography variant="body2" paragraph>
                      For booking assistance, please contact:
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <IconButton size="small" color="primary" sx={{ mr: 1 }}>
                        <PhoneIcon fontSize="small" />
                      </IconButton>
                      <Typography variant="body2">+91 6006677929</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton size="small" color="primary" sx={{ mr: 1 }}>
                        <PhoneIcon fontSize="small" />
                      </IconButton>
                      <Typography variant="body2">+91 7889325581</Typography>
                    </Box>
                  </Box>
                </Box>
                
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" gutterBottom>Booking Details</Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formValues.name}
                        onChange={handleInputChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Pickup Date"
                        name="pickupDate"
                        type="date"
                        value={formValues.pickupDate}
                        onChange={handleInputChange}
                        required
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Return Date"
                        name="returnDate"
                        type="date"
                        value={formValues.returnDate}
                        onChange={handleInputChange}
                        required
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Pickup Location"
                        name="pickupLocation"
                        value={formValues.pickupLocation}
                        onChange={handleInputChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id="duration-label">Rental Duration</InputLabel>
                        <Select
                          labelId="duration-label"
                          id="duration"
                          name="duration"
                          value={formValues.duration}
                          label="Rental Duration"
                          onChange={handleInputChange}
                        >
                          <MenuItem value="1">1 Day</MenuItem>
                          <MenuItem value="2">2 Days</MenuItem>
                          <MenuItem value="3">3 Days</MenuItem>
                          <MenuItem value="4">4 Days</MenuItem>
                          <MenuItem value="5">5 Days</MenuItem>
                          <MenuItem value="6">6 Days</MenuItem>
                          <MenuItem value="7">1 Week</MenuItem>
                          <MenuItem value="14">2 Weeks</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id="passengers-label">Passengers</InputLabel>
                        <Select
                          labelId="passengers-label"
                          id="passengers"
                          name="passengers"
                          value={formValues.passengers}
                          label="Passengers"
                          onChange={handleInputChange}
                        >
                          <MenuItem value={1}>1 Person</MenuItem>
                          <MenuItem value={2}>2 People</MenuItem>
                          <MenuItem value={3}>3 People</MenuItem>
                          <MenuItem value={4}>4 People</MenuItem>
                          <MenuItem value={6}>6 People</MenuItem>
                          <MenuItem value={8}>8+ People</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button 
                variant="contained" 
                component={Link}
                to="/contact"
              >
                Submit Booking
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default CabsPage; 