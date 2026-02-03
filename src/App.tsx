import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import MainLayout from './components/Layout/MainLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/portoestado11">
        <MainLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

