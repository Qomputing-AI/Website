"use client";

import { Box, Typography, Button, Grid, Card, CardContent, Stack } from '@mui/material';
import { Zap, CpuIcon, UsersIcon, BookIcon, WrenchIcon, LineChartIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const products = [
  {
    icon: <Zap size={32} color="#FCEFB4" />,
    title: 'Qomputing IDE',
    points: [
      'Interactive UI/UX with Drag and Drop feature',
      'Integrated AI for Circuit Designing',
      'Integrate with any Quantum Simulator or Hardware',
      'Our own Qomputing Simulators',
    ],
  },
  {
    icon: <CpuIcon size={32} color="#FCEFB4" />,
    title: 'Qomputing Simulator',
    points: [
      'Freely available 20+ qubit simulator',
      'Assembly Language Base',
      'AI based Qomputing Simulator',
      'Qomputing Simulators for specific use cases',
    ],
  },
  {
    icon: <UsersIcon size={32} color="#FCEFB4" />,
    title: 'Qommunity',
    points: [
      'Engage with Similar and Curious minds',
      'Get updates on Quantum Advancements and research',
      'Collaborative Research Projects',
      'Weekly Quantum Workshops & Webinars',
    ],
  },
  {
    icon: <BookIcon size={32} color="#FCEFB4" />,
    title: 'Qourses',
    points: [
      'Practice on Qomputing IDE',
      'Hands-on Projects',
      'Expert Instructors',
      'Certification',
    ],
  },
  {
    icon: <WrenchIcon size={32} color="#FCEFB4" />,
    title: 'Tool Library',
    points: [
      'Algorithm Collection',
      'Research Tools',
      'Dynamically Typed Codes',
      'Regular Updates',
    ],
  },
  {
    icon: <LineChartIcon size={32} color="#FCEFB4" />,
    title: 'Prediction Modeling',
    points: [
      'Monte Carlo Methods',
      'Risk Quantification',
      'Probabilistic Models',
      'Predictive Analytics',
    ],
  },
];

export default function QuantumProductCards() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const cardsSection = document.getElementById('cards-section');
      if (cardsSection) {
        const cardsSectionTop = cardsSection.getBoundingClientRect().top;
        if (cardsSectionTop < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    // Set visible immediately if already in view
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box id="cards-section" sx={{ 
      py: 10, 
      px: 4,
      background: 'linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background pattern */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 0.03,
          zIndex: 0,
          top: 0,
          left: 0,
          background: "radial-gradient(circle, #010411 20%, transparent 80%)",
          backgroundSize: "20px 20px",
        }}
      />
      
      <Box sx={{ 
        position: 'relative',
        zIndex: 1,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}>
        <Typography 
          variant="h4" 
          fontWeight="bold" 
          textAlign="center" 
          gutterBottom
          sx={{
            position: 'relative',
            display: 'inline-block',
            width: '100%',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, #0a0f1a, #FCEFB4)',
              borderRadius: '3px',
            }
          }}
        >
          Complete Quantum <span style={{ color: '#FCEFB4', textShadow: '0 0 10px rgba(252, 239, 180, 0.3)' }}>Ecosystem</span>
        </Typography>
        <Typography 
          variant="body1" 
          textAlign="center" 
          mb={8}
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            color: '#555',
            mt: 3,
          }}
        >
          From development to deployment, our integrated suite of tools empowers you to harness the full potential of quantum computing.
        </Typography>

        <Grid component="div" display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={4}>
          {products.map((product, index) => (
            <Grid 
              component="div" 
              sx={{ gridColumn: { xs: "span 12", sm: "span 6", md: "span 4" } }} 
              key={index}
            >
              <Card
                sx={{
                  backgroundColor: '#0a0f1a',
                  color: 'white',
                  borderRadius: 3,
                  height: '100%',
                  transition: 'all 0.4s ease',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  animation: `fadeIn 0.5s ease forwards ${0.2 + index * 0.1}s`,
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  '@keyframes fadeIn': {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at top right, rgba(252, 239, 180, 0.15), transparent 70%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
                    '&::before': {
                      opacity: 1,
                    },
                  },
                }}
              >
                <CardContent sx={{ position: 'relative', zIndex: 1 }}>
                  <Stack direction="row" spacing={1.5} alignItems="center" mb={2.5}>
                    <Box 
                      sx={{ 
                        p: 1.5, 
                        borderRadius: '12px', 
                        backgroundColor: 'rgba(252, 239, 180, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {product.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      fontWeight="bold"
                      sx={{ 
                        background: 'linear-gradient(90deg, #ffffff, #FCEFB4)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {product.title}
                    </Typography>
                  </Stack>
                  <Box component="ul" sx={{ 
                    paddingLeft: '1.2rem', 
                    margin: 0,
                    listStyleType: 'none',
                    position: 'relative',
                  }}>
                    {product.points.map((point, i) => (
                      <Box 
                        component="li" 
                        key={i} 
                        sx={{ 
                          mb: 1.5, 
                          fontSize: '0.9rem',
                          color: 'rgba(255, 255, 255, 0.8)',
                          position: 'relative',
                          pl: 2.5,
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            top: '0.5em',
                            width: '6px',
                            height: '6px',
                            backgroundColor: '#FCEFB4',
                            borderRadius: '50%',
                          }
                        }}
                      >
                        {point}
                      </Box>
                    ))}
                  </Box>
                  <Button
                    size="small"
                    sx={{
                      mt: 3,
                      color: '#FCEFB4',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: '1px',
                        backgroundColor: '#FCEFB4',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#FCEFB4',
                        '&::after': {
                          width: '100%',
                        },
                      },
                    }}
                  >
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}


