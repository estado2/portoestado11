import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../../components/Common/PageHeader';
import DataTable from '../../../components/Common/DataTable';

const columns = [
  { id: 'quickId', label: '퀵메뉴 ID', minWidth: 100 },
  { id: 'title', label: '제목', minWidth: 150 },
  { id: 'icon', label: '아이콘', minWidth: 100 },
  { id: 'link', label: '링크', minWidth: 200 },
  { id: 'order', label: '순서', minWidth: 80 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { quickId: 'Q001', title: '요금제 변경', icon: 'phone', link: '/plan/change', order: '1', status: '활성' },
  { quickId: 'Q002', title: '내 정보', icon: 'user', link: '/mypage', order: '2', status: '활성' },
];

export default function HomeQuick() {
  return (
    <Box>
      <PageHeader
        title="퀵메뉴 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '전시 관리' },
          { label: '홈 관리' },
          { label: '퀵메뉴 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            퀵메뉴 등록
          </Button>
        }
      />
    </Box>
  );
}

