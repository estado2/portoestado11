import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../../components/Common/PageHeader';
import DataTable from '../../../components/Common/DataTable';

const columns = [
  { id: 'requestId', label: '요청 ID', minWidth: 100 },
  { id: 'memberId', label: '회원 ID', minWidth: 100 },
  { id: 'name', label: '이름', minWidth: 120 },
  { id: 'type', label: '유형', minWidth: 100 },
  { id: 'points', label: '포인트', minWidth: 100, align: 'right' as const },
  { id: 'reason', label: '사유', minWidth: 200 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { requestId: 'PE001', memberId: 'M001', name: '홍길동', type: '적립', points: '+5,000', reason: '이벤트 참여 보상', status: '완료' },
  { requestId: 'PE002', memberId: 'M002', name: '김철수', type: '차감', points: '-1,000', reason: '시스템 오류 정정', status: '대기' },
];

export default function PointEdit() {
  return (
    <Box>
      <PageHeader
        title="포인트 수정"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '포인트/정책 관리' },
          { label: '포인트 관리' },
          { label: '포인트 수정' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            포인트 수정
          </Button>
        }
      />
    </Box>
  );
}

