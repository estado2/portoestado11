import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../../components/Common/PageHeader';
import DataTable from '../../../components/Common/DataTable';

const columns = [
  { id: 'ctaId', label: 'CTA ID', minWidth: 100 },
  { id: 'title', label: '제목', minWidth: 200 },
  { id: 'type', label: '타입', minWidth: 120 },
  { id: 'link', label: '링크', minWidth: 200 },
  { id: 'priority', label: '우선순위', minWidth: 100 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { ctaId: 'CTA001', title: '신규 가입 혜택', type: '버튼', link: '/promotion/new', priority: '1', status: '활성' },
];

export default function HomeCta() {
  return (
    <Box>
      <PageHeader
        title="CTA 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '전시 관리' },
          { label: '홈 관리' },
          { label: 'CTA 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            CTA 등록
          </Button>
        }
      />
    </Box>
  );
}

