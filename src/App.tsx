import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Typography, Box, Paper } from '@mui/material';
import Quiz from './components/Quiz';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb', // Bright blue
      light: '#60a5fa',
      dark: '#1d4ed8',
    },
    secondary: {
      main: '#db2777', // Vibrant pink
      light: '#ec4899',
      dark: '#be185d',
    },
    success: {
      main: '#059669', // Emerald green
      light: '#34d399',
      dark: '#047857',
    },
    error: {
      main: '#dc2626', // Red
      light: '#ef4444',
      dark: '#b91c1c',
    },
    warning: {
      main: '#d97706', // Amber
      light: '#fbbf24',
      dark: '#b45309',
    },
    info: {
      main: '#0284c7', // Light blue
      light: '#38bdf8',
      dark: '#0369a1',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e293b',
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 800,
      letterSpacing: '-0.5px',
      background: 'linear-gradient(45deg, #2563eb, #db2777)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.5px',
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #2563eb, #db2777)',
          color: 'white',
          '&:hover': {
            background: 'linear-gradient(45deg, #1d4ed8, #be185d)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
        filled: {
          background: 'linear-gradient(45deg, #2563eb, #60a5fa)',
          color: 'white',
          '&:hover': {
            background: 'linear-gradient(45deg, #1d4ed8, #3b82f6)',
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          '& .MuiStepIcon-root': {
            background: 'linear-gradient(45deg, #2563eb, #db2777)',
            borderRadius: '50%',
            color: 'white',
          },
          '& .MuiStepIcon-text': {
            fill: 'white',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ mt: 4, mb: 4 }}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 4, 
              textAlign: 'center', 
              backgroundColor: 'transparent',
              background: 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(219,39,119,0.1) 100%)',
              borderRadius: 4,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at top right, rgba(96,165,250,0.1), transparent 70%)',
              },
            }}
          >
            <Typography variant="h3" component="h1" gutterBottom>
              High School Success Roadmap
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ 
                mb: 4,
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.6,
                fontWeight: 500,
              }}
            >
              Create your personalized path to top universities with targeted activities, competitions, and programs
            </Typography>
          </Paper>
          <Quiz />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
