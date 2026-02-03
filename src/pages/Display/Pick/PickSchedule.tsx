import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../../components/Common/PageHeader';
import DataTable from '../../../components/Common/DataTable';

const columns = [
  { id: 'scheduleId', label: '일정 ID', minWidth: 100 },
  { id: 'title', label: '제목', minWidth: 200 },
  { id: 'startDate', label: '시작일', minWidth: 120 },
  { id: 'endDate', label: '종료일', minWidth: 120 },
  { id: 'pickCount', label: '픽 수', minWidth: 80 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { scheduleId: 'PS001', title: '2월 추천 요금제', startDate: '2024-02-01', endDate: '2024-02-29', pickCount: '5', status: '진행중' },
];

export default function PickSchedule() {
  return (
    <Box>
      <PageHeader
        title="픽 일정 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '전시 관리' },
          { label: '픽 관리' },
          { label: '픽 일정 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            일정 등록
          </Button>
        }
      />
    </Box>
  );
}

