import { useState } from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import AppRoutes from '../../routes';

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Header />
      <Sidebar open={sidebarOpen} onToggle={handleSidebarToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          mt: 8,
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        <AppRoutes />
      </Box>
    </Box>
  );
}

