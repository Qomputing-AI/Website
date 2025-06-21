"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { navLinks } from "@/utils/constants/navbar";


const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={scrolled ? 4 : 0}
        sx={{
          background: scrolled 
            ? "rgba(10, 17, 40, 0.95)" 
            : "linear-gradient(180deg, rgba(1, 4, 17, 0.9) 0%, rgba(1, 4, 17, 0.7) 50%, rgba(1, 4, 17, 0) 100%)",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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

            {/* Links or Hamburger */}
            {isMobile ? (
              <>
                <IconButton 
                  onClick={() => setDrawerOpen(true)} 
                  edge="end"
                  sx={{ color: "white" }}
                >
                  <MenuIcon />
                </IconButton>
              </>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {navLinks.map((link) => (
                  <Button 
                    key={link.label} 
                    component={Link} 
                    href={link.href}
                    sx={{
                      color: "white",
                      mx: 1,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "0",
                        height: "2px",
                        bottom: 0,
                        left: "50%",
                        backgroundColor: "#FCEFB4",
                        transition: "all 0.3s ease",
                        transform: "translateX(-50%)",
                      },
                      "&:hover": {
                        backgroundColor: "transparent",
                        "&::after": {
                          width: "80%",
                        },
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
                <Button 
                  variant="contained" 
                  component={Link} 
                  href="#"
                  sx={{
                    ml: 2,
                    backgroundColor: "#FCEFB4",
                    color: "#0a1128",
                    fontWeight: "bold",
                    borderRadius: "30px",
                    px: 3,
                    "&:hover": {
                      backgroundColor: "#fdf5c5",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(252, 239, 180, 0.3)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Get Started
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Spacer for fixed navbar */}
      <Toolbar />

      {/* Drawer for Mobile */}
      <Drawer 
        anchor="right" 
        open={drawerOpen} 
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#0a1128",
            color: "white",
          }
        }}
      >
        <Box sx={{ width: 280, p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <RocketLaunchIcon sx={{ color: "#FCEFB4" }} />
              <Typography variant="h6" sx={{ color: "white", fontWeight: 700 }}>
                Qomputing
              </Typography>
            </Box>
            <IconButton 
              onClick={() => setDrawerOpen(false)}
              sx={{ color: "white" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ mt: 2 }}>
            {navLinks.map((link) => (
              <ListItem 
                component={Link} 
                href={link.href} 
                key={link.label} 
                onClick={() => setDrawerOpen(false)}
                sx={{ 
                  borderRadius: "8px",
                  mb: 1,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  }
                }}
              >
                <ListItemText 
                  primary={link.label} 
                  primaryTypographyProps={{ 
                    fontWeight: 500,
                    fontSize: "1.1rem"
                  }} 
                />
              </ListItem>
            ))}
            <ListItem sx={{ mt: 2 }}>
              <Button 
                fullWidth 
                variant="contained" 
                component={Link} 
                href="#" 
                onClick={() => setDrawerOpen(false)}
                sx={{
                  backgroundColor: "#FCEFB4",
                  color: "#0a1128",
                  fontWeight: "bold",
                  borderRadius: "30px",
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "#fdf5c5",
                  },
                }}
              >
                Get Started
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
