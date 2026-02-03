import { Box, Card, CardContent, Typography, Grid, Avatar, Divider, Button } from '@mui/material';
import { AccountCircle, Email, Phone, Lock, Edit } from '@mui/icons-material';
import PageHeader from '../../components/Common/PageHeader';

export default function AdminMypage() {
  return (
    <Box>
      <PageHeader
        title="마이페이지"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '관리자 관리' },
          { label: '마이페이지' },
        ]}
      />
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  mx: 'auto',
                  mb: 2,
                  bgcolor: 'primary.main',
                }}
              >
                <AccountCircle sx={{ fontSize: 80 }} />
              </Avatar>
              <Typography variant="h5" sx={{ mb: 1 }}>
                관리자
              </Typography>
              <Typography color="text.secondary">
                admin@example.com
              </Typography>
              <Button
                variant="outlined"
                startIcon={<Edit />}
                sx={{ mt: 2 }}
              >
                프로필 수정
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3 }}>
                계정 정보
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccountCircle sx={{ mr: 2, color: 'text.secondary' }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    이름
                  </Typography>
                  <Typography>관리자</Typography>
                </Box>
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Email sx={{ mr: 2, color: 'text.secondary' }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    이메일
                  </Typography>
                  <Typography>admin@example.com</Typography>
                </Box>
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone sx={{ mr: 2, color: 'text.secondary' }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    전화번호
                  </Typography>
                  <Typography>010-1234-5678</Typography>
                </Box>
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Lock sx={{ mr: 2, color: 'text.secondary' }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      비밀번호
                    </Typography>
                    <Typography>••••••••</Typography>
                  </Box>
                </Box>
                <Button variant="text" startIcon={<Edit />}>
                  변경
                </Button>
              </Box>
            </CardContent>
          </Card>
          
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                권한 정보
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                권한 그룹: <strong>슈퍼 관리자</strong>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                마지막 로그인: 2024-02-04 14:30
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

