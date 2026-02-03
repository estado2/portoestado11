import { Box, Typography, Breadcrumbs, Link } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';

interface PageHeaderProps {
  title: string;
  breadcrumbs?: { label: string; path?: string }[];
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <Box sx={{ mb: 3 }}>
      {breadcrumbs && (
        <Breadcrumbs
          separator={<NavigateNext fontSize="small" />}
          sx={{ mb: 1 }}
        >
          {breadcrumbs.map((crumb, index) => (
            <Link
              key={index}
              underline="hover"
              color={index === breadcrumbs.length - 1 ? 'text.primary' : 'inherit'}
              href={crumb.path || '#'}
              sx={{
                fontSize: '0.875rem',
                fontWeight: index === breadcrumbs.length - 1 ? 600 : 400,
              }}
            >
              {crumb.label}
            </Link>
          ))}
        </Breadcrumbs>
      )}
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
    </Box>
  );
}

