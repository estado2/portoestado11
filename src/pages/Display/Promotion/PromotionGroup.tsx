import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../../components/Common/PageHeader';
import DataTable from '../../../components/Common/DataTable';

const columns = [
  { id: 'groupId', label: '그룹 ID', minWidth: 100 },
  { id: 'name', label: '그룹명', minWidth: 200 },
  { id: 'codeCount', label: '코드 수', minWidth: 100 },
  { id: 'usageCount', label: '사용 수', minWidth: 100 },
  { id: 'totalDiscount', label: '총 할인액', minWidth: 120 },
  { id: 'createdAt', label: '생성일', minWidth: 120 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { groupId: 'PG001', name: '2월 신규 가입', codeCount: '1000', usageCount: '234', totalDiscount: '2,340,000원', createdAt: '2024-02-01', status: '활성' },
];

export default function PromotionGroup() {
  return (
    <Box>
      <PageHeader
        title="프로모션 코드 그룹관리/통계"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '전시 관리' },
          { label: '프로모션 코드관리' },
          { label: '프로모션 코드 그룹관리/통계' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            그룹 생성
          </Button>
        }
      />
    </Box>
  );
}

