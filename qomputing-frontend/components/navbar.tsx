"use client";

import React, { useState } from "react";
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
} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  { label: "Products", href: "#" },
  { label: "Community", href: "#" },
  { label: "Qourses", href: "#" },
  { label: "About", href: "#" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <RocketLaunchIcon color="primary" />
            <Typography variant="h6" color="textPrimary">
              Qomputing
            </Typography>
          </Box>

          {/* Links or Hamburger */}
          {isMobile ? (
            <>
              <IconButton onClick={() => setDrawerOpen(true)} edge="end">
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 3 }}>
              {navLinks.map((link) => (
                <Button key={link.label} color="inherit" component={Link} href={link.href}>
                  {link.label}
                </Button>
              ))}
              <Button variant="outlined" color="primary" component={Link} href="#">
                Get Started
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem component={Link} href={link.href} key={link.label} onClick={() => setDrawerOpen(false)}>
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
            <ListItem component={Link} href="#" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Get Started" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
