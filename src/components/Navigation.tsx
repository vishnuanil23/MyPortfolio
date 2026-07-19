import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 280;
const navItems: [string, string][] = [
  ['About', 'about'],
  ['Skills', 'expertise'],
  ['Experience', 'history'],
  ['Projects', 'projects'],
  ['Leadership', 'leadership'],
  ['Contact', 'contact'],
];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section tracking
      const sections = navItems.map((item) => item[1]);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      className="navigation-bar-responsive"
      sx={{
        textAlign: 'center',
        height: '100%',
        background: 'var(--color-bg-2)',
        padding: '1rem 0',
      }}
    >
      {/* Logo */}
      <Box sx={{ padding: '1rem 1.5rem 0.5rem', textAlign: 'left' }}>
        <span style={{
          fontSize: '1.1rem',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Vishnu M A
        </span>
      </Box>
      <Divider sx={{ borderColor: 'var(--color-border)', margin: '0.5rem 0' }} />
      <List sx={{ padding: '0.5rem' }}>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: '10px',
                margin: '2px 0',
                color: activeSection === item[1] ? '#a78bfa' : 'var(--color-text-muted)',
                background: activeSection === item[1] ? 'rgba(124,58,237,0.1)' : 'transparent',
                '&:hover': {
                  background: 'rgba(124,58,237,0.08)',
                  color: 'var(--color-text)',
                },
              }}
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText
                primary={item[0]}
                primaryTypographyProps={{ fontFamily: 'Inter', fontSize: '0.9rem', fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}
        sx={{ boxShadow: 'none' }}
      >
        <Toolbar
          className="navigation-bar"
          sx={{ justifyContent: 'space-between', minHeight: '64px !important', padding: '0 5% !important' }}
        >
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' }, color: 'var(--color-text)' }}
            >
              <MenuIcon />
            </IconButton>
            <span
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                cursor: 'pointer',
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Inter',
              }}
            >
              VA
            </span>
          </Box>

          {/* Nav links — desktop */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: '2px' }}>
            {navItems.map((item) => (
              <Button
                key={item[0]}
                onClick={() => scrollToSection(item[1])}
                sx={{
                  color: activeSection === item[1] ? '#a78bfa' : 'rgba(255,255,255,0.6)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontFamily: 'Inter',
                  background: activeSection === item[1] ? 'rgba(124,58,237,0.1)' : 'transparent',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    background: 'rgba(124,58,237,0.08)',
                    color: 'rgba(255,255,255,0.9)',
                  },
                }}
              >
                {item[0]}
              </Button>
            ))}
          </Box>

          {/* Right: Theme toggle + Resume */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IconButton
              onClick={modeChange}
              size="small"
              sx={{
                width: 36,
                height: 36,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.7)',
                '&:hover': { background: 'rgba(124,58,237,0.15)' },
              }}
            >
              {mode === 'dark' ? <LightModeIcon sx={{ fontSize: 16 }} /> : <DarkModeIcon sx={{ fontSize: 16 }} />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: 'var(--color-bg-2)',
              border: 'none',
              borderRight: '1px solid var(--color-border)',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;