import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../components/Common/PageHeader';
import DataTable from '../../components/Common/DataTable';

const columns = [
  { id: 'eventId', label: '이벤트 ID', minWidth: 100 },
  { id: 'title', label: '제목', minWidth: 200 },
  { id: 'category', label: '카테고리', minWidth: 120 },
  { id: 'startDate', label: '시작일', minWidth: 120 },
  { id: 'endDate', label: '종료일', minWidth: 120 },
  { id: 'participants', label: '참여자 수', minWidth: 100 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { eventId: 'E001', title: '2월 추천 이벤트', category: '프로모션', startDate: '2024-02-01', endDate: '2024-02-29', participants: '1,234', status: '진행중' },
];

export default function EventHome() {
  return (
    <Box>
      <PageHeader
        title="이벤트 홈 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '전시 관리' },
          { label: '이벤트 홈 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            이벤트 등록
          </Button>
        }
      />
    </Box>
  );
}

