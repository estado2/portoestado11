import { Box } from '@mui/material';
import PageHeader from '../../../components/Common/PageHeader';
import DataTable from '../../../components/Common/DataTable';

const columns = [
  { id: 'historyId', label: '이력 ID', minWidth: 100 },
  { id: 'memberId', label: '회원 ID', minWidth: 100 },
  { id: 'name', label: '이름', minWidth: 120 },
  { id: 'type', label: '유형', minWidth: 100 },
  { id: 'points', label: '포인트', minWidth: 100, align: 'right' as const },
  { id: 'balance', label: '잔액', minWidth: 100, align: 'right' as const },
  { id: 'reason', label: '사유', minWidth: 200 },
  { id: 'date', label: '일시', minWidth: 150 },
];

const rows = [
  { historyId: 'H001', memberId: 'M001', name: '홍길동', type: '적립', points: '+5,000', balance: '15,000', reason: '이벤트 참여', date: '2024-02-01 14:30' },
  { historyId: 'H002', memberId: 'M001', name: '홍길동', type: '사용', points: '-3,000', balance: '10,000', reason: '상품 구매', date: '2024-02-02 10:15' },
];

export default function PointHistory() {
  return (
    <Box>
      <PageHeader
        title="포인트 수정 상세 이력"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '포인트/정책 관리' },
          { label: '포인트 관리' },
          { label: '포인트 수정 상세 이력' },
        ]}
      />
      
      <DataTable columns={columns} rows={rows} />
    </Box>
  );
}

