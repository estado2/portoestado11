import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import {
  Dashboard,
  People,
  Store,
  CardGiftcard,
  Support,
  Notifications,
  AdminPanelSettings,
  ExpandLess,
  ExpandMore,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';
import { menuItems, MenuItem } from '../../types/menu';

const DRAWER_WIDTH = 280;
const DRAWER_WIDTH_COLLAPSED = 70;

const iconMap: Record<string, React.ReactElement> = {
  Dashboard: <Dashboard />,
  People: <People />,
  Store: <Store />,
  CardGiftcard: <CardGiftcard />,
  Support: <Support />,
  Notifications: <Notifications />,
  AdminPanelSettings: <AdminPanelSettings />,
};

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

export default function Sidebar({ open, onToggle }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(['dashboard']);

  const handleToggle = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const isActive = (path?: string) => {
    if (!path) return false;
    return location.pathname === path;
  };

  const renderMenuItem = (item: MenuItem, depth: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.id);
    const active = isActive(item.path);

    return (
      <div key={item.id}>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            onClick={() => {
              if (hasChildren) {
                handleToggle(item.id);
              } else if (item.path) {
                handleNavigate(item.path);
              }
            }}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              pl: open ? 2.5 + depth * 2 : 2.5,
              bgcolor: active ? 'primary.light' : 'transparent',
              color: active ? 'primary.contrastText' : 'text.primary',
              '&:hover': {
                bgcolor: active ? 'primary.light' : 'action.hover',
              },
            }}
          >
            {depth === 0 && item.icon && (
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: active ? 'primary.contrastText' : 'inherit',
                }}
              >
                {iconMap[item.icon]}
              </ListItemIcon>
            )}
            <ListItemText
              primary={item.label}
              sx={{
                opacity: open ? 1 : 0,
                '& .MuiListItemText-primary': {
                  fontSize: depth > 0 ? '0.875rem' : '0.95rem',
                  fontWeight: depth === 0 ? 500 : 400,
                },
              }}
            />
            {hasChildren && open && (
              isExpanded ? <ExpandLess /> : <ExpandMore />
            )}
          </ListItemButton>
        </ListItem>
        {hasChildren && (
          <Collapse in={isExpanded && open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children!.map((child) => renderMenuItem(child, depth + 1))}
            </List>
          </Collapse>
        )}
      </div>
    );
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? DRAWER_WIDTH : DRAWER_WIDTH_COLLAPSED,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? DRAWER_WIDTH : DRAWER_WIDTH_COLLAPSED,
          boxSizing: 'border-box',
          transition: (theme) =>
            theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          overflowX: 'hidden',
          borderRight: '1px solid',
          borderColor: 'divider',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          minHeight: 64,
        }}
      >
        {open && (
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
            air
          </Typography>
        )}
        <IconButton onClick={onToggle} size="small">
          {open ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </Box>
      <List sx={{ pt: 0 }}>
        {menuItems.map((item) => renderMenuItem(item))}
      </List>
    </Drawer>
  );
}

