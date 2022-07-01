import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { Box } from '@mui/system';
import Navbar from './components/Navbar';
import Index from './pages/Index';

const theme = createTheme({
  palette:{
    mode: "light"
  }
})

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Box>
          <Navbar />
          <Index />
        </Box>
      </ThemeProvider>
  );
}

export default App;
