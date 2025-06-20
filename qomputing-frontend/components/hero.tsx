"use client";

import { Box, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        gap: 3,
      }}
    >
      <Typography variant="overline" color="primary">
        — Quantum Computing Platform
      </Typography>

      <Typography variant="h1" fontWeight="bold">
        QOMPUTING
      </Typography>

      <Typography variant="subtitle1" maxWidth={600}>
        Experience the future of computation with our comprehensive quantum development environment. From IDE to simulation, we’ve got your quantum journey covered.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          mt: 1,
        }}
      >
        <Button variant="outlined" color="inherit">
          AI powered Circuit designing
        </Button>
        <Button variant="outlined" color="inherit">
          Interactive UI/UX
        </Button>
        <Button variant="outlined" color="inherit">
          Hardware Integration
        </Button>
        <Button variant="outlined" color="inherit">
          Qomputing® Simulator
        </Button>
      </Box>

      <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
        <Button variant="outlined" color="inherit" sx={{borderRadius: '24px', m: 1, px: 3, py: 1.5, boxShadow: 2, fontWeight: 'bold', letterSpacing: '0.5px', transition: 'all 0.3s ease', '&:hover': { transform: 'scale(1.05)', boxShadow: 4, backgroundColor: '#f5f5f5' }}}>

          Try Qomputing IDE
        </Button>
        <Button variant="outlined" color="primary" sx={{ m: 1, px: 3, py: 1.5, boxShadow: 2, fontWeight: 'bold', letterSpacing: '0.5px'}}>
          View Documentation
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
