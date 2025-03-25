import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Divider,
  useTheme,
  Paper,
} from '@mui/material';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

const blogPosts = [
  {
    id: 1,
    title: 'Best Time to Visit Gulmarg',
    description: 'Discover the perfect seasons to experience the magic of Gulmarg! From winter wonderlands to summer bliss, guide to seasons here.',
    content: `Gulmarg, known as the "Meadow of Flowers," transforms throughout the year, offering unique experiences in each season.

Winter (December to March):
- Perfect for skiing and snowboarding
- Heavy snowfall creates a winter wonderland
- Gulmarg Gondola offers breathtaking views
- Winter sports festivals and events
- Average temperature: -4°C to 4°C

Spring (April to June):
- Meadows bloom with colorful flowers
- Ideal for trekking and hiking
- Pleasant weather for outdoor activities
- Golf season begins
- Average temperature: 15°C to 25°C

Summer (July to September):
- Escape from the heat of plains
- Perfect for family vacations
- Adventure activities at their peak
- Lush green landscapes
- Average temperature: 20°C to 30°C

Autumn (October to November):
- Golden landscapes
- Less crowded
- Clear skies for photography
- Best deals on accommodation
- Average temperature: 10°C to 20°C

Tips for Visitors:
1. Book accommodations in advance for winter season
2. Carry appropriate clothing for the season
3. Check weather conditions before planning activities
4. Consider local festivals and events
5. Plan longer stays to experience more activities`,
    image: '/images/Walking in a winter wonderland.___winter _winterwonderland __mountains _snow _hotel _gulmarg _kashmir _hotelroom _hotelshanu _resort _kashmiri _travel _inst(.jpg',
    date: 'March 15, 2024',
    tags: ['Travel Tips', 'Seasons'],
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Top 10 Things to Do in Kashmir',
    description: 'From gondola rides to traditional handicraft shopping, explore the must-do activities in Kashmir.',
    content: `Kashmir, often called "Paradise on Earth," offers countless experiences. Here are the top 10 must-do activities:

1. Gulmarg Gondola Ride
- World's highest operating cable car
- Breathtaking views of the Himalayas
- Access to skiing slopes in winter
- Two-stage ride reaching 4,000m

2. Shikara Ride on Dal Lake
- Iconic wooden boats
- Floating gardens and markets
- Sunset views
- Photography opportunities

3. Stay in a Houseboat
- Unique accommodation experience
- Traditional Kashmiri architecture
- Luxury amenities
- Lake views

4. Visit Mughal Gardens
- Historical architecture
- Beautiful landscaping
- Three main gardens: Shalimar, Nishat, and Chashme Shahi
- Best visited in spring

5. Shop at Local Markets
- Traditional Kashmiri handicrafts
- Pashmina shawls
- Wooden carvings
- Spices and dry fruits

6. Trek the Great Lakes
- 7-day trek
- Five alpine lakes
- Pristine landscapes
- Best in summer

7. Visit Pahalgam
- River rafting
- Horse riding
- Golf
- Movie shooting locations

8. Explore Sonamarg
- Thajiwas Glacier
- Mountain views
- Summer meadows
- Adventure activities

9. Try Kashmiri Cuisine
- Wazwan traditional feast
- Kahwa tea
- Local breads
- Authentic restaurants

10. Winter Sports in Gulmarg
- Skiing
- Snowboarding
- Snow sledding
- Professional instructors`,
    image: '/images/One million tourists took Gulmarg Gondola ride this year_-Revenue generation crosses Rs 110 cr(WEBP).webp',
    date: 'March 10, 2024',
    tags: ['Activities', 'Guide'],
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Local Cuisine Guide',
    description: 'A comprehensive guide to Kashmir\'s famous food paradise, from street food favorites to fine dining.',
    content: `Kashmiri cuisine is a rich tapestry of flavors, influenced by centuries of cultural exchange. Here's your guide to the best local dishes:

Traditional Wazwan:
- Rogan Josh (lamb curry)
- Gushtaba (meatballs in yogurt)
- Tabak Maaz (fried lamb ribs)
- Yakhni (yogurt-based curry)
- Rista (meatballs in red curry)

Street Food Favorites:
1. Nadru Monji (lotus stem fritters)
2. Harrisa (winter breakfast dish)
3. Kashmiri Kebabs
4. Masala Tsot (bread with spices)
5. Monj Gaad (fish with knol khol)

Vegetarian Delights:
- Dum Aloo (spiced potatoes)
- Haak Saag (collard greens)
- Chaman Kaliya (paneer dish)
- Nadru Yakhni (lotus stem curry)
- Rajma Gogji (kidney beans with turnips)

Breads & Rice:
1. Girda (round bread)
2. Lavasa (flatbread)
3. Kashmiri Pulao
4. Tahar (sweet yellow rice)

Beverages:
- Noon Chai (pink tea)
- Kahwa (green tea with spices)
- Sheer Chai (salty tea)

Desserts:
1. Phirni (rice pudding)
2. Halwa
3. Shufta (dried fruits dessert)

Best Places to Try:
- Traditional Wazwan Restaurants
- Local Tea Shops
- Street Food Markets
- Home-stay Experiences

Tips:
1. Try Wazwan at authentic restaurants
2. Visit during food festivals
3. Take a cooking class
4. Explore local markets
5. Ask locals for recommendations`,
    image: '/images/Kashmir is beautiful but what is more beautiful about this place is the people. They are not only nice_ they are loving_ caring_ really hardworking and so k(.jpg',
    date: 'March 5, 2024',
    tags: ['Food', 'Culture'],
    readTime: '6 min read'
  }
];

const BlogPostPage = () => {
  const theme = useTheme();
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return (
      <Box sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 2,
        p: 3
      }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Blog Post Not Found
        </Typography>
        <Button 
          component={Link} 
          to="/blog" 
          variant="contained" 
          color="primary"
          startIcon={<ArrowBackIcon />}
        >
          Back to Blog
        </Button>
      </Box>
    );
  }

  const renderContent = (content: string) => {
    const sections = content.split('\n\n');
    return sections.map((section, index) => {
      // Check if this is the main numbered list section
      if (section.match(/^\d+\./m)) {
        const items = section.split('\n');
        const title = items[0]; // The introductory text
        const listItems = items.slice(1).filter(item => item.trim()); // Remove empty lines
        
        return (
          <Box key={index} sx={{ mb: 4 }}>
            <Typography 
              variant="h6"
              sx={{ 
                mb: 3,
                fontFamily: '"Roboto", sans-serif',
                fontSize: '1.2rem',
                lineHeight: 1.8,
                color: theme.palette.text.primary
              }}
            >
              {title}
            </Typography>
            <Box 
              component="ol" 
              sx={{ 
                pl: 3,
                listStyleType: 'none',
                counterReset: 'my-counter',
                '& > li': {
                  counterIncrement: 'my-counter',
                  position: 'relative',
                  mb: 3,
                  pl: 2,
                  '&::before': {
                    content: 'counter(my-counter) "."',
                    position: 'absolute',
                    left: -24,
                    color: theme.palette.primary.main,
                    fontWeight: 'bold',
                    fontSize: '1.1rem'
                  }
                }
              }}
            >
              {listItems.map((item, i) => {
                const parts = item.split(' - ');
                const mainTitle = parts[0].replace(/^\d+\.\s/, '');
                const descriptions = parts.slice(1);
                
                return (
                  <Typography 
                    component="li" 
                    key={i} 
                    sx={{ 
                      fontFamily: '"Roboto", sans-serif',
                      fontSize: '1.1rem',
                      lineHeight: 1.6,
                      color: theme.palette.text.primary,
                      fontWeight: 600
                    }}
                  >
                    {mainTitle}
                    {descriptions.length > 0 && (
                      <Box 
                        component="ul" 
                        sx={{ 
                          mt: 1,
                          listStyle: 'none',
                          pl: 2,
                          '& > li': {
                            mb: 0.5,
                            color: theme.palette.text.secondary,
                            position: 'relative',
                            '&::before': {
                              content: '"•"',
                              position: 'absolute',
                              left: -16,
                              color: theme.palette.primary.main
                            }
                          }
                        }}
                      >
                        {descriptions.map((desc, j) => (
                          <Typography 
                            component="li" 
                            key={j}
                            sx={{ 
                              fontFamily: '"Roboto", sans-serif',
                              fontSize: '1rem',
                              lineHeight: 1.6
                            }}
                          >
                            {desc.trim()}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </Typography>
                );
              })}
            </Box>
          </Box>
        );
      }
      
      // Handle other sections with colons (like before)
      if (section.includes(':')) {
        const [title, ...items] = section.split('\n');
        return (
          <Box key={index} sx={{ mb: 4 }}>
            <Typography 
              variant="h5" 
              gutterBottom 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                color: theme.palette.primary.main,
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 600
              }}
            >
              {title.includes('Winter') && <AcUnitIcon />}
              {title.includes('Summer') && <WbSunnyIcon />}
              {title.includes('Traditional') && <RestaurantIcon />}
              {title.includes('Trek') && <DirectionsWalkIcon />}
              {title.includes('Best Places') && <LocationOnIcon />}
              {title.includes('Tips') && <StarIcon />}
              {title}
            </Typography>
            <Box 
              component="ul"
              sx={{ 
                pl: 3, 
                listStyle: 'none',
                '& > li': {
                  mb: 1,
                  position: 'relative',
                  '&::before': {
                    content: '"•"',
                    position: 'absolute',
                    left: -16,
                    color: theme.palette.primary.main
                  }
                }
              }}
            >
              {items.map((item, i) => (
                <Typography 
                  component="li" 
                  key={i} 
                  sx={{ 
                    fontFamily: '"Roboto", sans-serif',
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    color: theme.palette.text.secondary
                  }}
                >
                  {item.replace(/^-\s|^\d+\.\s/, '')}
                </Typography>
              ))}
            </Box>
          </Box>
        );
      }
      
      // Regular paragraphs
      return (
        <Typography 
          key={index} 
          paragraph 
          sx={{ 
            mb: 3,
            fontFamily: '"Roboto", sans-serif',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            color: theme.palette.text.primary
          }}
        >
          {section}
        </Typography>
      );
    });
  };

  return (
    <Box component="main" sx={{ 
      bgcolor: 'background.default',
      minHeight: '100vh',
      py: 8
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            onClick={() => navigate('/blog')}
            startIcon={<ArrowBackIcon />}
            sx={{ mb: 4 }}
          >
            Back to Blog
          </Button>

          <Box sx={{ 
            position: 'relative',
            height: { xs: '300px', md: '500px' },
            mb: 4,
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: theme.shadows[4]
          }}>
            <Box
              component="img"
              src={post.image}
              alt={post.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <Box sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
              p: 3,
              color: 'white'
            }}>
              <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <CalendarTodayIcon sx={{ fontSize: '0.9rem' }} />
                  <Typography variant="caption">{post.date}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <AccessTimeIcon sx={{ fontSize: '0.9rem' }} />
                  <Typography variant="caption">{post.readTime}</Typography>
                </Box>
              </Box>
              <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
                {post.title}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {post.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    icon={<LocalOfferIcon />}
                    label={tag}
                    size="small"
                    sx={{ 
                      bgcolor: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>

          <Paper sx={{ 
            bgcolor: 'background.paper',
            p: { xs: 3, md: 6 },
            borderRadius: 2,
            boxShadow: theme.shadows[2]
          }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                mb: 4, 
                fontStyle: 'italic',
                fontSize: '1.2rem',
                color: theme.palette.text.secondary,
                fontFamily: '"Merriweather", serif'
              }}
            >
              {post.description}
            </Typography>
            
            <Divider sx={{ my: 4 }} />
            
            {renderContent(post.content)}
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default BlogPostPage; 