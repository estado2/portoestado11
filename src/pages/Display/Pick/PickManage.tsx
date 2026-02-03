import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../../components/Common/PageHeader';
import DataTable from '../../../components/Common/DataTable';

const columns = [
  { id: 'pickId', label: '픽 ID', minWidth: 100 },
  { id: 'title', label: '제목', minWidth: 200 },
  { id: 'category', label: '카테고리', minWidth: 120 },
  { id: 'priority', label: '우선순위', minWidth: 100 },
  { id: 'viewCount', label: '조회수', minWidth: 100 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { pickId: 'P001', title: '가성비 요금제', category: '요금제', priority: '1', viewCount: '1,234', status: '활성' },
];

export default function PickManage() {
  return (
    <Box>
      <PageHeader
        title="픽 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '전시 관리' },
          { label: '픽 관리' },
          { label: '픽 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            픽 등록
          </Button>
        }
      />
    </Box>
  );
}

