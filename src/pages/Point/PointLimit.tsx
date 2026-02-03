import { Box, Button } from '@mui/material';
import { Edit } from '@mui/icons-material';
import PageHeader from '../../components/Common/PageHeader';
import DataTable from '../../components/Common/DataTable';

const columns = [
  { id: 'limitId', label: '한도 ID', minWidth: 100 },
  { id: 'type', label: '유형', minWidth: 150 },
  { id: 'dailyLimit', label: '일일 한도', minWidth: 120, align: 'right' as const },
  { id: 'monthlyLimit', label: '월 한도', minWidth: 120, align: 'right' as const },
  { id: 'perTransactionLimit', label: '건당 한도', minWidth: 120, align: 'right' as const },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { limitId: 'L001', type: '일반 회원', dailyLimit: '50,000P', monthlyLimit: '500,000P', perTransactionLimit: '10,000P', status: '적용중' },
  { limitId: 'L002', type: 'VIP 회원', dailyLimit: '100,000P', monthlyLimit: '1,000,000P', perTransactionLimit: '50,000P', status: '적용중' },
];

export default function PointLimit() {
  return (
    <Box>
      <PageHeader
        title="포인트 사용 한도 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '포인트/정책 관리' },
          { label: '포인트 사용 한도 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Edit />}>
            한도 수정
          </Button>
        }
      />
    </Box>
  );
}

