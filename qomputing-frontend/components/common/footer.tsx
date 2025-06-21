"use client";

import React from "react";
import { Box, Button, Typography, Container, Grid, IconButton, Divider } from "@mui/material";
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const footerLinks = [
  {
    title: "Products",
    links: [
      { label: "Qomputing IDE", href: "#" },
      { label: "Qomputing Simulator", href: "#" },
      { label: "Quantum Tools", href: "#" },
      { label: "Pricing", href: "#" },
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Tutorials", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Research Papers", href: "#" },
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ]
  },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(to bottom, #05091a, #010411)",
        color: "white",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and description */}
          <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <RocketLaunchIcon sx={{ color: "#FCEFB4" }} />
              <Typography 
                variant="h6" 
                sx={{ 
                  color: "white", 
                  fontWeight: 700,
                  letterSpacing: "0.5px"
                }}
              >
                Qomputing
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 3, maxWidth: "90%" }}>
              Empowering the future of computation with our comprehensive quantum development environment. Join us on the quantum journey.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton 
                size="small" 
                sx={{ 
                  color: "white",
                  "&:hover": { 
                    color: "#FCEFB4",
                    transform: "translateY(-3px)",
                  },
                  transition: "all 0.3s ease"
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton 
                size="small" 
                sx={{ 
                  color: "white",
                  "&:hover": { 
                    color: "#FCEFB4",
                    transform: "translateY(-3px)",
                  },
                  transition: "all 0.3s ease"
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton 
                size="small" 
                sx={{ 
                  color: "white",
                  "&:hover": { 
                    color: "#FCEFB4",
                    transform: "translateY(-3px)",
                  },
                  transition: "all 0.3s ease"
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Links */}
          {footerLinks.map((section) => (
            <Grid 
              key={section.title}
              sx={{ gridColumn: { xs: 'span 6', sm: 'span 4', md: 'span 2' } }}
            >
              <Typography 
                variant="subtitle2" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 2,
                  color: "#FCEFB4"
                }}
              >
                {section.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {section.links.map((link) => (
                  <Box 
                    component="li" 
                    key={link.label} 
                    sx={{ mb: 1 }}
                  >
                    <Box
                      component={Link}
                      href={link.href}
                      sx={{ 
                        color: "rgba(255, 255, 255, 0.7)",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        transition: "all 0.2s ease",
                        display: "inline-block",
                        "&:hover": {
                          color: "white",
                          transform: "translateX(3px)"
                        }
                      }}
                    >
                      {link.label}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}

          {/* Newsletter */}
          <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
            <Typography 
              variant="subtitle2" 
              sx={{ 
                fontWeight: 700, 
                mb: 2,
                color: "#FCEFB4"
              }}
            >
              Join Our Newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 2 }}>
              Stay updated with the latest in quantum computing.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FCEFB4",
                color: "#0a1128",
                fontWeight: "bold",
                borderRadius: "30px",
                px: 3,
                py: 1,
                "&:hover": {
                  backgroundColor: "#fdf5c5",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(252, 239, 180, 0.3)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />
        
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
          <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.5)" }}>
            © {new Date().getFullYear()} Qomputing. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Box
              component={Link}
              href="#"
              sx={{ 
                color: "rgba(255, 255, 255, 0.5)",
                textDecoration: "none",
                fontSize: "0.75rem",
                "&:hover": {
                  color: "white"
                }
              }}
            >
              Terms of Service
            </Box>
            <Box
              component={Link}
              href="#"
              sx={{ 
                color: "rgba(255, 255, 255, 0.5)",
                textDecoration: "none",
                fontSize: "0.75rem",
                "&:hover": {
                  color: "white"
                }
              }}
            >
              Privacy Policy
            </Box>
            <Box
              component={Link}
              href="#"
              sx={{ 
                color: "rgba(255, 255, 255, 0.5)",
                textDecoration: "none",
                fontSize: "0.75rem",
                "&:hover": {
                  color: "white"
                }
              }}
            >
              Cookies
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
