"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 3,
        px: 2,
        textAlign: "center",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Typography variant="body2" color="textSecondary" gutterBottom>
        © {new Date().getFullYear()} Qomputing. All rights reserved.
      </Typography>
      <Button
        variant="text"
        color="primary"
        component={Link}
        href="/about"
        sx={{ mt: 1 }}
      >
        About Us
      </Button>
    </Box>
  );
};

export default Footer;
