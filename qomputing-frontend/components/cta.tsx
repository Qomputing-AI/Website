"use client";
import { Box, Typography, Button, Stack } from "@mui/material";

const CTA = () => {
  return (
    <Box
      sx={{
        py: 8,           
        px: 4,
        textAlign: 'center',
        background: 'linear-gradient(to bottom, #010411, #05091a)', 
        color: '#fff',
        mb: 8,           
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Ready to Enter the <span style={{ color: "#FCEFB4" }}>Quantum Era?</span>
      </Typography>

      <Typography
        variant="body1"
        maxWidth={600}
        margin="0 auto"
        color="grey.400"
        mb={4}
      >
        Join thousands of developers, researchers, and quantum enthusiasts
        building the future of computation.
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
        <Button
          variant="contained"
          sx={{
            px: 4,
            py: 1.5,
            backgroundColor: "#FCEFB4",
            color: "#000",
            fontWeight: 600,
            borderRadius: "30px",
            boxShadow: 3,
            "&:hover": {
              backgroundColor: "#fdf5c5",
            },
          }}
        >
          Start Free Trial
        </Button>
        <Button
          variant="outlined"
          sx={{
            px: 4,
            py: 1.5,
            color: "#fff",
            borderColor: "#fff",
            fontWeight: 600,
            borderRadius: "30px",
            "&:hover": {
              backgroundColor: "#1f2937",
              borderColor: "#ccc",
            },
          }}
        >
          Join Qommunity
        </Button>
      </Stack>
    </Box>
  );
};

export default CTA;
