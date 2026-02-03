import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../../components/Common/PageHeader';
import DataTable from '../../../components/Common/DataTable';

const columns = [
  { id: 'cardId', label: '카드 ID', minWidth: 100 },
  { id: 'title', label: '제목', minWidth: 200 },
  { id: 'type', label: '타입', minWidth: 120 },
  { id: 'position', label: '위치', minWidth: 100 },
  { id: 'priority', label: '우선순위', minWidth: 100 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { cardId: 'HC001', title: '인기 상품 추천', type: '상품 리스트', position: '메인', priority: '1', status: '노출중' },
];

export default function HomeCard() {
  return (
    <Box>
      <PageHeader
        title="홈 카드 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '전시 관리' },
          { label: '홈 관리' },
          { label: '홈 카드 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            카드 등록
          </Button>
        }
      />
    </Box>
  );
}

