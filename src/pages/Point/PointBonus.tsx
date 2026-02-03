import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../components/Common/PageHeader';
import DataTable from '../../components/Common/DataTable';

const columns = [
  { id: 'policyId', label: '정책 ID', minWidth: 100 },
  { id: 'name', label: '정책명', minWidth: 200 },
  { id: 'conditions', label: '조건', minWidth: 200 },
  { id: 'bonusPoints', label: '보너스 포인트', minWidth: 120 },
  { id: 'validPeriod', label: '유효기간', minWidth: 150 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { policyId: 'BP001', name: '신규 가입 보너스', conditions: '신규 가입 시', bonusPoints: '10,000P', validPeriod: '30일', status: '활성' },
  { policyId: 'BP002', name: '첫 구매 보너스', conditions: '첫 구매 완료 시', bonusPoints: '5,000P', validPeriod: '60일', status: '활성' },
];

export default function PointBonus() {
  return (
    <Box>
      <PageHeader
        title="보너스팩 정책 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '포인트/정책 관리' },
          { label: '보너스팩 정책 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            정책 등록
          </Button>
        }
      />
    </Box>
  );
}

