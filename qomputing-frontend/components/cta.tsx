"use client";
import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { useEffect, useState } from "react";

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const ctaSection = document.getElementById('cta-section');
      if (ctaSection) {
        const ctaSectionTop = ctaSection.getBoundingClientRect().top;
        if (ctaSectionTop < window.innerHeight * 0.75) {
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
    <Box
      id="cta-section"
      sx={{
        py: 12,           
        px: 4,
        textAlign: 'center',
        background: 'linear-gradient(135deg, #010411 0%, #0a1128 50%, #05091a 100%)', 
        color: '#fff',
        mb: 0,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background elements */}
      <Box
        sx={{
          position: "absolute",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(252, 239, 180, 0.03) 0%, rgba(252, 239, 180, 0) 70%)",
          filter: "blur(50px)",
          top: "-20%",
          left: "-10%",
          opacity: 0.6,
        }}
      />
      
      <Box
        sx={{
          position: "absolute",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(100, 120, 255, 0.03) 0%, rgba(100, 120, 255, 0) 70%)",
          filter: "blur(50px)",
          bottom: "-10%",
          right: "-5%",
          opacity: 0.5,
        }}
      />
      
      {/* Particle effect */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          opacity: 0.1,
          background: "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Ccircle cx=\"2\" cy=\"2\" r=\"1\" fill=\"%23FCEFB4\" /%3E%3C/svg%3E')",
          backgroundSize: "20px 20px",
        }}
      />
      
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{
              fontWeight: 800,
              mb: 3,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '3px',
                background: 'linear-gradient(90deg, #FCEFB4, rgba(252, 239, 180, 0.3))',
                borderRadius: '3px',
              }
            }}
          >
            Ready to Enter the <span style={{ 
              color: "#FCEFB4", 
              textShadow: "0 0 10px rgba(252, 239, 180, 0.3)",
              position: "relative",
            }}>Quantum Era?</span>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 650,
              margin: "0 auto",
              color: "rgba(255, 255, 255, 0.8)",
              mb: 6,
              fontSize: "1.1rem",
              lineHeight: 1.6,
            }}
          >
            Join thousands of developers, researchers, and quantum enthusiasts
            building the future of computation.
          </Typography>

          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={{ xs: 2, sm: 3 }} 
            justifyContent="center" 
            alignItems="center"
          >
            <Button
              variant="contained"
              sx={{
                px: 4,
                py: 1.8,
                backgroundColor: "#FCEFB4",
                color: "#0a1128",
                fontWeight: 700,
                borderRadius: "30px",
                boxShadow: '0 4px 20px rgba(252, 239, 180, 0.3)',
                letterSpacing: "0.5px",
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                  transition: 'all 0.6s ease',
                },
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 25px rgba(252, 239, 180, 0.4)',
                  backgroundColor: "#fdf5c5",
                  '&::before': {
                    left: '100%',
                  },
                }
              }}
            >
              Start Free Trial
            </Button>
            <Button
              variant="outlined"
              sx={{
                px: 4,
                py: 1.8,
                color: "#fff",
                borderColor: "rgba(255, 255, 255, 0.5)",
                fontWeight: 700,
                borderRadius: "30px",
                letterSpacing: "0.5px",
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: '2px',
                  backgroundColor: "#FCEFB4",
                  transition: 'width 0.3s ease',
                },
                '&:hover': {
                  borderColor: "#FCEFB4",
                  color: "#FCEFB4",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  '&::after': {
                    width: '100%',
                  },
                }
              }}
            >
              Join Qommunity
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default CTA;
