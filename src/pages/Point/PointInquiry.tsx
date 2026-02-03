import { Box } from '@mui/material';
import PageHeader from '../../components/Common/PageHeader';
import DataTable from '../../components/Common/DataTable';

const columns = [
  { id: 'memberId', label: '회원 ID', minWidth: 100 },
  { id: 'name', label: '이름', minWidth: 120 },
  { id: 'currentPoints', label: '보유 포인트', minWidth: 120, align: 'right' as const },
  { id: 'earnedPoints', label: '적립 포인트', minWidth: 120, align: 'right' as const },
  { id: 'usedPoints', label: '사용 포인트', minWidth: 120, align: 'right' as const },
  { id: 'expiringSoon', label: '소멸 예정', minWidth: 120, align: 'right' as const },
];

const rows = [
  { memberId: 'M001', name: '홍길동', currentPoints: '15,000', earnedPoints: '50,000', usedPoints: '35,000', expiringSoon: '2,000' },
  { memberId: 'M002', name: '김철수', currentPoints: '8,500', earnedPoints: '30,000', usedPoints: '21,500', expiringSoon: '500' },
];

export default function PointInquiry() {
  return (
    <Box>
      <PageHeader
        title="포인트 조회"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '포인트/정책 관리' },
          { label: '포인트 조회' },
        ]}
      />
      
      <DataTable columns={columns} rows={rows} />
    </Box>
  );
}

