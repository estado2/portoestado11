import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../../components/Common/PageHeader';
import DataTable from '../../../components/Common/DataTable';

const columns = [
  { id: 'codeId', label: '코드 ID', minWidth: 100 },
  { id: 'code', label: '프로모션 코드', minWidth: 150 },
  { id: 'name', label: '코드명', minWidth: 200 },
  { id: 'discount', label: '할인액', minWidth: 100 },
  { id: 'usageCount', label: '사용 횟수', minWidth: 100 },
  { id: 'expiryDate', label: '만료일', minWidth: 120 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { codeId: 'PC001', code: 'WELCOME2024', name: '신규 가입 환영', discount: '10,000원', usageCount: '234', expiryDate: '2024-12-31', status: '활성' },
];

export default function PromotionCode() {
  return (
    <Box>
      <PageHeader
        title="프로모션 코드관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '전시 관리' },
          { label: '프로모션 코드관리' },
          { label: '프로모션 코드관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            코드 생성
          </Button>
        }
      />
    </Box>
  );
}

