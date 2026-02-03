import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Avatar,
} from '@mui/material';
import {
  Notifications,
  Search,
  AccountCircle,
} from '@mui/icons-material';

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: 'background.paper',
        color: 'text.primary',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
            air
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', ml: 1 }}>
            관리자페이지
          </Typography>
        </Box>
        
        <Box sx={{ flexGrow: 1 }} />
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton color="inherit" size="large">
            <Search />
          </IconButton>
          <IconButton color="inherit" size="large">
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton color="inherit" size="large">
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
              <AccountCircle />
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

