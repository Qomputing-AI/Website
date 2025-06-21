"use client";

import { Box, Typography, Button, Container } from "@mui/material";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        gap: 4,
        background: "linear-gradient(135deg, #010411 0%, #0a1128 50%, #05091a 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated particles background */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 0.1,
          zIndex: 0,
          background: "radial-gradient(circle, transparent 20%, #010411 80%)",
          backgroundSize: "15px 15px",
        }}
      />
      
      {/* Glowing orb effect */}
      <Box
        sx={{
          position: "absolute",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(252, 239, 180, 0.1) 0%, rgba(252, 239, 180, 0) 70%)",
          filter: "blur(40px)",
          top: "10%",
          right: "5%",
          opacity: 0.6,
          animation: "pulse 8s infinite ease-in-out",
          "@keyframes pulse": {
            "0%": { opacity: 0.4, transform: "scale(1)" },
            "50%": { opacity: 0.6, transform: "scale(1.1)" },
            "100%": { opacity: 0.4, transform: "scale(1)" },
          },
        }}
      />
      
      <Box
        sx={{
          position: "absolute",
          width: "30vw",
          height: "30vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(100, 120, 255, 0.1) 0%, rgba(100, 120, 255, 0) 70%)",
          filter: "blur(40px)",
          bottom: "10%",
          left: "5%",
          opacity: 0.5,
          animation: "pulse2 10s infinite ease-in-out",
          "@keyframes pulse2": {
            "0%": { opacity: 0.3, transform: "scale(1)" },
            "50%": { opacity: 0.5, transform: "scale(1.15)" },
            "100%": { opacity: 0.3, transform: "scale(1)" },
          },
        }}
      />
      
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Box 
          sx={{ 
            mb: 2,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <Typography 
            variant="overline" 
            sx={{ 
              color: "#FCEFB4", 
              letterSpacing: "3px",
              fontWeight: 500,
              mb: 1,
              display: "block"
            }}
          >
            — QUANTUM COMPUTING PLATFORM
          </Typography>
        </Box>

        <Box 
          sx={{ 
            mb: 2,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          }}
        >
          <Typography 
            variant="h1" 
            sx={{
              fontWeight: 800,
              fontSize: { xs: "3rem", md: "4.5rem" },
              letterSpacing: "1px",
              background: "linear-gradient(90deg, #ffffff 0%, #FCEFB4 100%)",
              backgroundClip: "text",
              textFillColor: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              textShadow: "0 0 40px rgba(252, 239, 180, 0.3)",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, #ffffff 0%, #FCEFB4 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "blur(8px)",
                opacity: 0.6,
                zIndex: -1,
              }
            }}
          >
            QOMPUTING
          </Typography>
        </Box>

        <Box 
          sx={{ 
            mb: 4,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
          }}
        >
          <Typography 
            variant="subtitle1" 
            sx={{ 
              maxWidth: 700, 
              mx: "auto", 
              mb: 4,
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.6
            }}
          >
            Experience the future of computation with our comprehensive quantum development environment. From IDE to simulation, we've got your quantum journey covered.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
            mb: 5,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s",
          }}
        >
          {[
            "AI powered Circuit designing",
            "Interactive UI/UX",
            "Hardware Integration",
            "Qomputing® Simulator"
          ].map((label, index) => (
            <Button 
              key={label}
              variant="outlined" 
              sx={{
                color: "white",
                borderColor: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "8px",
                px: 2,
                py: 1,
                transition: "all 0.3s ease",
                animation: `fadeIn 0.5s ease forwards ${0.7 + index * 0.1}s`,
                opacity: 0,
                "@keyframes fadeIn": {
                  "0%": { opacity: 0, transform: "translateY(10px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "#FCEFB4",
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                }
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        <Box 
          sx={{ 
            display: "flex", 
            gap: 3, 
            justifyContent: "center", 
            flexWrap: "wrap",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.8s, transform 0.6s ease 0.8s",
          }}
        >
          <Button 
            variant="contained" 
            sx={{
              // borderRadius: '30px', 
              px: 4, 
              py: 1.5, 
              backgroundColor: "#FCEFB4",
              color: "#0a1128",
              fontWeight: 'bold', 
              letterSpacing: '1px', 
              transition: 'all 0.3s ease', 
              boxShadow: '0 4px 20px rgba(252, 239, 180, 0.3)',
              position: 'relative',
              overflow: 'hidden',
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
            Try Qomputing IDE
          </Button>
          <Button 
            variant="outlined" 
            sx={{ 
              borderRadius: '30px',
              px: 4, 
              py: 1.5, 
              color: "white",
              borderColor: "white",
              fontWeight: 'bold', 
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
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
            View Documentation
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
