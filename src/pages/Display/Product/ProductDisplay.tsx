import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../../components/Common/PageHeader';
import DataTable from '../../../components/Common/DataTable';

const columns = [
  { id: 'displayId', label: '전시 ID', minWidth: 100 },
  { id: 'productName', label: '상품명', minWidth: 200 },
  { id: 'position', label: '전시 위치', minWidth: 150 },
  { id: 'priority', label: '우선순위', minWidth: 100 },
  { id: 'startDate', label: '시작일', minWidth: 120 },
  { id: 'endDate', label: '종료일', minWidth: 120 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { displayId: 'D001', productName: '5G 데이터 무제한', position: '메인 배너', priority: '1', startDate: '2024-02-01', endDate: '2024-02-29', status: '노출중' },
];

export default function ProductDisplay() {
  return (
    <Box>
      <PageHeader
        title="상품 전시 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '전시 관리' },
          { label: '상품 관리' },
          { label: '상품 전시 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            전시 등록
          </Button>
        }
      />
    </Box>
  );
}

