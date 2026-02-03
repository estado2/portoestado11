import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../components/Common/PageHeader';
import DataTable from '../../components/Common/DataTable';

const columns = [
  { id: 'sendId', label: '발송 ID', minWidth: 100 },
  { id: 'contentTitle', label: '컨텐츠 제목', minWidth: 200 },
  { id: 'targetName', label: '타겟', minWidth: 150 },
  { id: 'scheduledAt', label: '발송 예정', minWidth: 150 },
  { id: 'sentCount', label: '발송 수', minWidth: 100, align: 'right' as const },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { sendId: 'PS001', contentTitle: '신규 이벤트 안내', targetName: '신규 가입 회원', scheduledAt: '2024-02-05 10:00', sentCount: '1,234', status: '예약' },
  { sendId: 'PS002', contentTitle: '포인트 소멸 안내', targetName: '전체 회원', scheduledAt: '2024-02-10 09:00', sentCount: '-', status: '대기' },
];

export default function PushSend() {
  return (
    <Box>
      <PageHeader
        title="Push 발송 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: 'PUSH/알림 관리' },
          { label: 'Push 발송 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            발송 예약
          </Button>
        }
      />
    </Box>
  );
}

