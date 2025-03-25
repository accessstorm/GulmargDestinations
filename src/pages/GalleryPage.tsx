import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
  Tabs,
  Tab,
  Fade,
  Grow,
  useMediaQuery,
  Paper
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const GalleryPage = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [openImage, setOpenImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState(0);

  // Replace with actual local image paths
  const categories = [
    {
      name: 'Landscapes',
      images: [
        '/images/Mount Harmukh_ Gangbal lake(Right)and Nandkol lake (left) seen on day 5 of Kashmir Great Lakes trek _Picture taken at Jaj pass_._._._ _india _jammukashmir _(.jpg',
        '/images/Doodhpathri Kashmir._._.___instagood _snow _gulmarg _church _fog _landscape _blue _createwithsony _minimalism _moodygrams _moodytoning _quotes _mountains _k(.jpg',
        '/images/lakeandmountains.jpg',
        '/images/greenforest.jpg',
        '/images/greenpineforest.jpg',
        '/images/banner_resort.jpg',
        '/images/Sonmarg_ Kashmir_._._._._._._._._._._._.__kashmir _kashmirtourism _kashmirvalley _kashmirdairies _sonmarg _sonmargvalley _sonmargkashmir(WEBP).webp',
        '/images/Sonmarg_ Kashmir_._._._._._._._._._._._.__kashmir _kashmirtourism _kashmirvalley _kashmirdairies _sonmarg _sonmargvalley _sonmargkashmir(WEBP)_1.webp',
        '/images/Your journey unfolds_ like grains of sand_ each step is a story that unfurls in finding a new way_ wherein you conquer the whole world in a blink.___peerkig(.jpg'
      ]
    },
    {
      name: 'Winter',
      images: [
        '/images/Hungry for winter 🤭🤫🫠__These were actually some of the final snow and ski snippets in April this year 🎞️ . I_m so so ready for snow_ skiing_ _1.jpg',
        '/images/Hungry for winter 🤭🤫🫠__These were actually some of the final snow and ski snippets in April this year 🎞️ . I_m so so ready for snow_ skiing_ s(.jpg',
        '/images/The gentle days of winter when snowflakes fall and and cover you in their soft embrace_  _snowfall _kokernag _snow _kashmir _snowday _winter _winterwonderla(.jpg',
        '/images/Walking in a winter wonderland.___winter _winterwonderland __mountains _snow _hotel _gulmarg _kashmir _hotelroom _hotelshanu _resort _kashmiri _travel _inst(.jpg',
        '/images/Escape to a winter wonderland where luxury meets nature_s frozen splendor. Frozen Fall by Palwasha is a serene alpine villa offering lavish comforts surroun(.jpg',
        '/images/Some photos from the lesser explored yet the most beautiful_ Narnia like town of Kashmir ❄️☃️_Tag your friends 👬_._._📍Doodhpathri_ Kashmir _F_1.jpg',
        '/images/Some photos from the lesser explored yet the most beautiful_ Narnia like town of Kashmir ❄️☃️_Tag your friends 👬_._._📍Doodhpathri_ Kashmir _Fo(.jpg'
      ]
    },
    {
      name: 'Activities',
      images: [
        '/images/One million tourists took Gulmarg Gondola ride this year_-Revenue generation crosses Rs 110 cr(WEBP).webp',
        '/images/✨ Living life one shikara ride at a time on Dal Lake _ Capturing moments in paradise _ ___DalLakeMagic _trendingreels _photo _travelgram _new _dal _lake _(.jpg',
        '/images/The serene beauty of Dal Lake_ where every shot is a masterpiece. 📸🇮🇳___SonyAlphaIN _CreateWithSony _SameerBirbalPhotography ___Kashmir _KashmirTou(.jpg',
        '/images/Gulmarg Kashmir 📍___kashmir _kashmirvalley _winter _kashmirtourism(JPG).jpg',
        '/images/Gulmarg Kashmir 📍___kashmir _kashmirvalley _winter _kashmirtourism(JPG)_2.jpg'
      ]
    },
    {
      name: 'Accommodations',
      images: [
        '/images/hotelwithview.png',
        '/images/GreenzHotel.jpg',
        '/images/All Deluxe Rooms With Mountain View _waterfrontpinepahalgam(JPG).jpg',
        '/images/__Escape the chill of winter and warm up to our hospitality. Snowflakes gently fall outside_ while comfort and warmth envelop you__(JPG).jpg',
        '/images/Escape to a winter wonderland where luxury meets nature_s frozen splendor. Frozen Fall by Palwasha is a serene alpine villa offering lavish comforts surroun(.jpg',
        '/images/banner_resort.jpg'
      ]
    },
    {
      name: 'Gardens & Flowers',
      images: [
        '/images/Not getting over this anytime soon _)_The beauty of Chinars at Achabal garden.__kashmir _landscape _autumn _chinars _colours(JPG).jpg',
        '/images/Not getting over this anytime soon _)_The beauty of Chinars at Achabal garden.__kashmir _landscape _autumn _chinars _colours(JPG)_1.jpg',
        '/images/Not getting over this anytime soon _)_The beauty of Chinars at Achabal garden.__kashmir _landscape _autumn _chinars _colours(JPG)_2.jpg',
        '/images/Achabal Garden_ also referred as _the place of the princess__ is a small Mughal Garden located in Achabal_ a town in Anantnag district of Kashmir valley. L(.webp',
        '/images/Indira Gandhi Memorial Tulip Garden is the largest Tulip Garden in Asia. The garden was opened in 2007. This tulip garden is undoubtedly the first major lan(.jpg'
      ]
    },
    {
      name: 'Rivers & Lakes',
      images: [
        '/images/Born from the crystal springs of Verinag__ the Jehlum flows like poetry through the _heart of Kashmir_ weaving tales of serenity and grace. _Its waters_ a l(.jpg',
        '/images/Born from the crystal springs of Verinag__ the Jehlum flows like poetry through the _heart of Kashmir_ weaving tales of serenity and grace. _Its waters_ a _1.jpg',
        '/images/Born from the crystal springs of Verinag__ the Jehlum flows like poetry through the _heart of Kashmir_ weaving tales of serenity and grace. _Its waters_ a _2.jpg',
        '/images/Colour of water and reflection 😘😘😘_ _______________________________________________________________________________________________________________(.jpg',
        '/images/Raining at Nilnag_ Kashmir.__Kashmir _Beautiful _nature _blue _lake _amazing _Colours _Mountains _rain _clouds _Meadows __soi _storm _storiesofindia(JPG).jpg',
        '/images/Kashmir is beautiful but what is more beautiful about this place is the people. They are not only nice_ they are loving_ caring_ really hardworking and so k(.jpg'
      ]
    },
    {
      name: 'Culture & People',
      images: [
        '/images/The one who brightens up any place_ the one whose smile is the most precious_ the one who brings moments to life.__For your most special lady_ there_s nothi(.jpg',
        '/images/Kashmir is covered with Himalayan Mountains which has more than hundred best places to stay_ visit and see. The flora and fauna_ climate_ food_ culture_ her(.jpg',
        '/images/Kashmir is covered with Himalayan Mountains which has more than hundred best places to stay_ visit and see. The flora and fauna_ climate_ food_ culture_ he_1.jpg',
        '/images/Pahalgam kashmir __365pixofficial _tripotocommunity __coi __soi _incredibleindia _travelindia _travelworld _traveldiary _photographers_of_india _photos _lan(.jpg'
      ]
    }
  ];

  const handleOpenImage = (imagePath: string) => {
    setOpenImage(imagePath);
  };

  const handleCloseImage = () => {
    setOpenImage(null);
  };

  const handleChangeCategory = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedCategory(newValue);
  };

  // Function to calculate varying heights for images to create a more artistic layout
  const getImageHeight = (index: number): number => {
    const heights = [280, 350, 230, 320, 260, 300];
    return heights[index % heights.length];
  };

  // Variants for framer-motion animations
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

  // Using different layouts for different categories
  const getLayoutConfig = (categoryIndex: number) => {
    const layouts = [
      { columns: [2, 1, 2, 1, 2, 1, 1, 1, 2] }, // Landscapes - alternating 2-1 columns
      { columns: [2, 1, 1, 2, 1, 1, 2] }, // Winter - varied pattern
      { columns: [2, 1, 1, 2, 1] }, // Activities - varied pattern
      { columns: [1, 1, 2, 2, 1, 1] }, // Accommodations - grouped pairs
      { columns: [2, 1, 1, 2, 1] }, // Gardens & Flowers - varied pattern
      { columns: [1, 2, 1, 2, 1, 1] }, // Rivers & Lakes - varied pattern
      { columns: [2, 1, 2] }        // Culture & People - alternating
    ];
    
    return layouts[categoryIndex % layouts.length];
  };

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
              Our Gallery
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Typography variant="h5" sx={{
              textAlign: 'center',
              fontFamily: 'Roboto, Arial, sans-serif',
              mb: 2
            }}>
              Experience the stunning beauty of Gulmarg through our carefully curated gallery
            </Typography>
          </motion.div>
          
          <Paper elevation={1} sx={{ 
            borderRadius: 2, 
            mb: 5, 
            mx: 'auto', 
            maxWidth: 800,
            bgcolor: 'background.paper'
          }}>
            <Tabs 
              value={selectedCategory} 
              onChange={handleChangeCategory}
              indicatorColor="secondary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              sx={{ 
                '& .MuiTab-root': { 
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  px: { xs: 1.5, sm: 2.5 },
                  py: 1.5
                } 
              }}
            >
              {categories.map((category, index) => (
                <Tab key={index} label={category.name} />
              ))}
            </Tabs>
          </Paper>
        </Box>

        {categories.map((category, categoryIndex) => (
          <Fade 
            in={selectedCategory === categoryIndex} 
            key={categoryIndex}
            timeout={500}
            style={{ display: selectedCategory === categoryIndex ? 'block' : 'none' }}
          >
            <Box>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <Box 
                  sx={{ 
                    display: 'grid',
                    gridTemplateColumns: { 
                      xs: 'repeat(1, 1fr)',
                      sm: 'repeat(2, 1fr)',
                      md: 'repeat(3, 1fr)'
                    },
                    gap: 3,
                    gridAutoFlow: 'dense'
                  }}
                >
                  {category.images.map((image, imageIndex) => {
                    const layout = getLayoutConfig(categoryIndex);
                    const columnSpan = layout.columns[imageIndex % layout.columns.length];
                    
                    return (
                      <motion.div
                        key={imageIndex}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, zIndex: 1 }}
                        style={{
                          gridColumn: isDesktop ? `span ${columnSpan}` : 'span 1',
                          transformOrigin: 'center'
                        }}
                      >
                        <Card 
                          sx={{ 
                            cursor: 'pointer',
                            height: '100%',
                            borderRadius: 2,
                            overflow: 'hidden',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            boxShadow: theme.shadows[4],
                            '&:hover': {
                              transform: 'translateY(-8px)',
                              boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2), 0 10px 10px -5px rgba(0,0,0,0.1)',
                              '& .MuiCardMedia-root': {
                                transform: 'scale(1.08)',
                              },
                              '& .overlay': {
                                opacity: 1
                              }
                            },
                            display: 'flex',
                            flexDirection: 'column'
                          }}
                          onClick={() => handleOpenImage(image)}
                        >
                          <Box sx={{ 
                            overflow: 'hidden', 
                            position: 'relative', 
                            flexGrow: 1,
                            display: 'flex',
                            pt: '75%',
                            height: 'auto'
                          }}>
                            <CardMedia
                              component="img"
                              image={image}
                              alt={`${category.name} image ${imageIndex + 1}`}
                              sx={{ 
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                transition: 'transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
                              }}
                            />
                            <Box 
                              className="overlay"
                              sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)',
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                                display: 'flex',
                                alignItems: 'flex-end',
                                padding: 2
                              }}
                            >
                              <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold' }}>
                                {category.name} {imageIndex + 1}
                              </Typography>
                            </Box>
                          </Box>
                        </Card>
                      </motion.div>
                    );
                  })}
                </Box>
              </motion.div>
            </Box>
          </Fade>
        ))}
      </Container>

      {/* Image Dialog */}
      <Dialog
        open={Boolean(openImage)}
        onClose={handleCloseImage}
        maxWidth="lg"
        PaperProps={{
          sx: {
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 2,
            p: 0,
            m: 2
          }
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton
            onClick={handleCloseImage}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              bgcolor: 'rgba(0,0,0,0.6)',
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.8)',
              },
              zIndex: 2
            }}
          >
            <CloseIcon />
          </IconButton>
          {openImage && (
            <motion.img 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={openImage}
              alt="Enlarged view"
              style={{ 
                width: '100%', 
                height: 'auto', 
                display: 'block',
                maxHeight: '80vh',
                objectFit: 'contain'
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default GalleryPage; 