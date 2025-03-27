import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  Snackbar,
  Alert,
  Card,
  CardContent,
  useTheme,
  Divider,
  useMediaQuery,
  Avatar,
  IconButton
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  AccessTime as AccessTimeIcon,
  Send as SendIcon,
  WhatsApp as WhatsAppIcon,
  FacebookOutlined as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    packageType: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const packageTypes = [
    'Adventure Package',
    'Relaxation Retreat',
    'Cultural Experience',
    'Family Package',
    'Honeymoon Special',
    'Custom Package'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear error for this field if it exists
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    setFormData({
      ...formData,
      packageType: e.target.value
    });
    
    // Clear error for this field if it exists
    if (errors.packageType) {
      setErrors({
        ...errors,
        packageType: ''
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is not valid';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    }

    if (!formData.packageType) {
      newErrors.packageType = 'Please select a package type';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      // In a real application, you would submit the form data to a server
      console.log('Form submitted:', formData);
      
      // Show success message
      setOpenSnackbar(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        packageType: '',
        message: ''
      });
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

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

  return (
    <Box component="main" sx={{ 
      bgcolor: 'background.default',
      minHeight: '100vh',
      position: 'relative',
      zIndex: 0
    }}>
      {/* Header Section */}
      <Box sx={{ 
        bgcolor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
        mb: 6,
        position: 'relative',
        zIndex: 1
      }}>
        <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 'bold',
              color: 'text.primary',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Contact Us
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              fontFamily: 'Roboto, Arial, sans-serif',
              color: 'text.secondary',
              mb: 4,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Get in touch with us to plan your perfect Kashmir adventure
          </Typography>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={5}>
            <Grid container item xs={12} spacing={4}>
              <Grid item xs={12} md={4}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ 
                    height: '100%',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease-in-out',
                    bgcolor: 'background.paper',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 12px 20px rgba(0, 0, 0, 0.15)',
                    }
                  }}>
                    <Box sx={{ 
                      height: '8px', 
                      bgcolor: theme.palette.primary.main 
                    }} />
                    <CardContent sx={{ p: 4 }}>
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        gutterBottom
                        sx={{ 
                          fontWeight: 700,
                          color: theme.palette.primary.main,
                          mb: 3,
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <Box component="span" sx={{ 
                          width: 40, 
                          height: 40, 
                          borderRadius: '50%', 
                          bgcolor: theme.palette.primary.main,
                          color: 'white',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2
                        }}>
                          <LocationIcon fontSize="small" />
                        </Box>
                        Location
                      </Typography>
                      
                      <Typography variant="body1" fontWeight="500" sx={{ mb: 0.5 }}>
                        Gulmarg Destinations
                      </Typography>
                      <Typography variant="body2" paragraph sx={{ mb: 2 }}>
                        Gulmarg, Kashmir, India
                      </Typography>
                      
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        gutterBottom
                        sx={{ 
                          fontWeight: 700,
                          color: theme.palette.primary.main,
                          mb: 3,
                          mt: 4,
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <Box component="span" sx={{ 
                          width: 40, 
                          height: 40, 
                          borderRadius: '50%', 
                          bgcolor: theme.palette.primary.main,
                          color: 'white',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2
                        }}>
                          <AccessTimeIcon fontSize="small" />
                        </Box>
                        Office Hours
                      </Typography>
                      
                      <Box sx={{ mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                          Monday - Sunday:
                        </Typography>
                        <Typography variant="body2">
                          9:00 AM - 8:00 PM
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ 
                    height: '100%',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease-in-out',
                    bgcolor: 'background.paper',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 12px 20px rgba(0, 0, 0, 0.15)',
                    }
                  }}>
                    <Box sx={{ 
                      height: '8px', 
                      bgcolor: theme.palette.secondary.main 
                    }} />
                    <CardContent sx={{ p: 4 }}>
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        gutterBottom
                        sx={{ 
                          fontWeight: 700,
                          color: theme.palette.secondary.main,
                          mb: 3,
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <Box component="span" sx={{ 
                          width: 40, 
                          height: 40, 
                          borderRadius: '50%', 
                          bgcolor: theme.palette.secondary.main,
                          color: 'white',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2
                        }}>
                          <PhoneIcon fontSize="small" />
                        </Box>
                        Contact Us
                      </Typography>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                          Primary Contact:
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                          +91 6006677929
                        </Typography>
                      </Box>
                      
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                          Secondary Contact:
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                          +91 7889325581
                        </Typography>
                      </Box>
                      
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        gutterBottom
                        sx={{ 
                          fontWeight: 700,
                          color: theme.palette.secondary.main,
                          mb: 3,
                          mt: 4,
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <Box component="span" sx={{ 
                          width: 40, 
                          height: 40, 
                          borderRadius: '50%', 
                          bgcolor: theme.palette.secondary.main,
                          color: 'white',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2
                        }}>
                          <EmailIcon fontSize="small" />
                        </Box>
                        Email
                      </Typography>
                      
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                          Email Address:
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                          gulmargdestination@gmail.com
                        </Typography>
                      </Box>

                      <Typography 
                        variant="h5" 
                        component="h2" 
                        gutterBottom
                        sx={{ 
                          fontWeight: 700,
                          color: theme.palette.secondary.main,
                          mb: 3,
                          mt: 4,
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <Box component="span" sx={{ 
                          width: 40, 
                          height: 40, 
                          borderRadius: '50%', 
                          bgcolor: theme.palette.secondary.main,
                          color: 'white',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2
                        }}>
                          <InstagramIcon fontSize="small" />
                        </Box>
                        <Box component="span" sx={{ 
                          width: 40, 
                          height: 40, 
                          borderRadius: '50%', 
                          bgcolor: theme.palette.secondary.main,
                          color: 'white',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2
                        }}>
                          <FacebookIcon fontSize="small" />
                        </Box>
                        Instagram & Facebook
                      </Typography>
                      
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                          Follow us:
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                          @gulmarg_destination
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ 
                    height: '100%',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease-in-out',
                    bgcolor: 'background.paper',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 12px 20px rgba(0, 0, 0, 0.15)',
                    }
                  }}>
                    <Box sx={{ 
                      height: '8px', 
                      bgcolor: theme.palette.primary.light 
                    }} />
                    <CardContent sx={{ p: 4 }}>
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        gutterBottom
                        sx={{ 
                          fontWeight: 700,
                          color: theme.palette.primary.light,
                          mb: 3,
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <Box component="span" sx={{ 
                          width: 40, 
                          height: 40, 
                          borderRadius: '50%', 
                          bgcolor: theme.palette.primary.light,
                          color: 'white',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2
                        }}>
                          <SendIcon fontSize="small" />
                        </Box>
                        Social Media
                      </Typography>
                      
                      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                        <IconButton 
                          component="a"
                          href="https://www.instagram.com/gulmarg_destination?igsh=MWQ5dGx2bGkxdHU2cw=="
                          target="_blank"
                          sx={{ 
                            bgcolor: '#c13584',
                            color: 'white',
                            '&:hover': {
                              bgcolor: '#a72a6b'
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
                            bgcolor: '#1877f2',
                            color: 'white',
                            '&:hover': {
                              bgcolor: '#166fe5'
                            }
                          }}
                        >
                          <FacebookIcon />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ mt: 8 }}>
              <motion.div variants={itemVariants}>
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: { xs: 3, md: 6 }, 
                    borderRadius: 3,
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                    bgcolor: 'background.paper'
                  }}
                >
                  <Typography 
                    variant="h4" 
                    component="h2" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                      mb: 2,
                      textAlign: 'center'
                    }}
                  >
                    Send Us a Message
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 4,
                      textAlign: 'center',
                      maxWidth: '600px',
                      mx: 'auto',
                      color: 'text.primary'
                    }}
                  >
                    Fill out the form below and our team will be in touch with you shortly.
                  </Typography>
                  
                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          error={Boolean(errors.name)}
                          helperText={errors.name}
                          variant="outlined"
                          required
                          sx={{ 
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          error={Boolean(errors.email)}
                          helperText={errors.email}
                          variant="outlined"
                          required
                          sx={{ 
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          error={Boolean(errors.phone)}
                          helperText={errors.phone}
                          variant="outlined"
                          required
                          sx={{ 
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl 
                          fullWidth 
                          error={Boolean(errors.packageType)}
                          required
                          sx={{ 
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2
                            }
                          }}
                        >
                          <InputLabel>Package Type</InputLabel>
                          <Select
                            name="packageType"
                            value={formData.packageType}
                            onChange={handleSelectChange}
                            label="Package Type"
                          >
                            {packageTypes.map((type) => (
                              <MenuItem key={type} value={type}>
                                {type}
                              </MenuItem>
                            ))}
                          </Select>
                          {errors.packageType && (
                            <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 2 }}>
                              {errors.packageType}
                            </Typography>
                          )}
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          error={Boolean(errors.message)}
                          helperText={errors.message}
                          variant="outlined"
                          multiline
                          rows={6}
                          required
                          sx={{ 
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          sx={{ 
                            minWidth: '200px', 
                            py: 1.5,
                            px: 4,
                            borderRadius: 2,
                            fontWeight: 'bold',
                            textTransform: 'none',
                            fontSize: '1rem',
                            boxShadow: `0 8px 20px ${theme.palette.primary.main}40`,
                            '&:hover': {
                              boxShadow: `0 12px 25px ${theme.palette.primary.main}60`,
                              transform: 'translateY(-2px)'
                            }
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} sx={{ mt: 8 }}>
              <motion.div variants={itemVariants}>
                <Box sx={{ 
                  borderRadius: 3, 
                  overflow: 'hidden',
                  height: '400px',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
                }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26231.270369563877!2d74.3713234!3d34.0493584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1af75d89f1265%3A0x9493beb566331ae!2sGulmarg%2C%20Jammu%20and%20Kashmir%20193403!5e0!3m2!1sen!2sin!4v1679995789882!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Gulmarg Map"
                  ></iframe>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          variant="filled"
          sx={{ width: '100%' }}
        >
          Your message has been sent successfully! We will contact you shortly.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactPage; 