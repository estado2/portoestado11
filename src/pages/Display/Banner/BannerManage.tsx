import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../../components/Common/PageHeader';
import DataTable from '../../../components/Common/DataTable';

const columns = [
  { id: 'bannerId', label: '배너 ID', minWidth: 100 },
  { id: 'title', label: '제목', minWidth: 200 },
  { id: 'type', label: '타입', minWidth: 100 },
  { id: 'position', label: '위치', minWidth: 120 },
  { id: 'startDate', label: '시작일', minWidth: 120 },
  { id: 'endDate', label: '종료일', minWidth: 120 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { bannerId: 'B001', title: '신규 가입 이벤트', type: '배너', position: '메인 상단', startDate: '2024-02-01', endDate: '2024-02-29', status: '노출중' },
  { bannerId: 'B002', title: '시즌 프로모션', type: '팝업', position: '전체', startDate: '2024-02-01', endDate: '2024-02-15', status: '노출중' },
];

export default function BannerManage() {
  return (
    <Box>
      <PageHeader
        title="배너 및 팝업 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '전시 관리' },
          { label: '배너 관리' },
          { label: '배너 및 팝업 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            배너 등록
          </Button>
        }
      />
    </Box>
  );
}

