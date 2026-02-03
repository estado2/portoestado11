import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../../components/Common/PageHeader';
import DataTable from '../../../components/Common/DataTable';

const columns = [
  { id: 'choiceId', label: '선택지 ID', minWidth: 100 },
  { id: 'pickTitle', label: '픽 제목', minWidth: 150 },
  { id: 'choiceText', label: '선택지', minWidth: 200 },
  { id: 'targetProduct', label: '타겟 상품', minWidth: 150 },
  { id: 'selectCount', label: '선택 수', minWidth: 100 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { choiceId: 'PC001', pickTitle: '가성비 요금제', choiceText: '데이터 많이 쓰는 편', targetProduct: '5G 무제한', selectCount: '567', status: '활성' },
];

export default function PickChoice() {
  return (
    <Box>
      <PageHeader
        title="픽 선택지 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '전시 관리' },
          { label: '픽 관리' },
          { label: '픽 선택지 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            선택지 등록
          </Button>
        }
      />
    </Box>
  );
}

