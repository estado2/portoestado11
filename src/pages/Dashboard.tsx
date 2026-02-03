import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import {
  People,
  Store,
  CardGiftcard,
  Notifications,
  TrendingUp,
} from '@mui/icons-material';
import PageHeader from '../components/Common/PageHeader';

const stats = [
  {
    title: '전체 회원',
    value: '12,345',
    change: '+12.5%',
    icon: <People sx={{ fontSize: 40 }} />,
    color: '#5B7CFF',
  },
  {
    title: '전시 상품',
    value: '234',
    change: '+5.2%',
    icon: <Store sx={{ fontSize: 40 }} />,
    color: '#7C8DB5',
  },
  {
    title: '포인트 발급',
    value: '1,234,567',
    change: '+18.3%',
    icon: <CardGiftcard sx={{ fontSize: 40 }} />,
    color: '#FFA726',
  },
  {
    title: 'PUSH 발송',
    value: '5,678',
    change: '+8.7%',
    icon: <Notifications sx={{ fontSize: 40 }} />,
    color: '#66BB6A',
  },
];

export default function Dashboard() {
  return (
    <Box>
      <PageHeader
        title="전체메뉴"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '전체메뉴' },
        ]}
      />
      
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box>
                    <Typography color="text.secondary" gutterBottom>
                      {stat.title}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                      {stat.value}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <TrendingUp sx={{ fontSize: 16, color: 'success.main' }} />
                      <Typography variant="body2" color="success.main" sx={{ fontWeight: 600 }}>
                        {stat.change}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      bgcolor: stat.color + '20',
                      color: stat.color,
                      p: 1,
                      borderRadius: 2,
                    }}
                  >
                    {stat.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              빠른 메뉴
            </Typography>
            <Grid container spacing={2}>
              {[
                '회원 기본정보 조회',
                '상품 원장 관리',
                '공지사항 관리',
                'Push 발송 관리',
                '포인트 조회',
                '관리자 계정 관리',
              ].map((menu, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card variant="outlined" sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
                    <CardContent>
                      <Typography variant="body1">{menu}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

