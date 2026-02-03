import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../components/Common/PageHeader';
import DataTable from '../../components/Common/DataTable';

const columns = [
  { id: 'contentId', label: '컨텐츠 ID', minWidth: 100 },
  { id: 'title', label: '제목', minWidth: 200 },
  { id: 'message', label: '메시지', minWidth: 250 },
  { id: 'type', label: '타입', minWidth: 120 },
  { id: 'link', label: '링크', minWidth: 150 },
  { id: 'createdAt', label: '등록일', minWidth: 150 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { contentId: 'PC001', title: '신규 이벤트 안내', message: '2월 이벤트에 참여하세요!', type: '프로모션', link: '/event/feb', createdAt: '2024-02-01', status: '승인' },
  { contentId: 'PC002', title: '포인트 소멸 안내', message: '포인트가 곧 소멸됩니다.', type: '알림', link: '/point', createdAt: '2024-02-03', status: '대기' },
];

export default function PushContent() {
  return (
    <Box>
      <PageHeader
        title="Push 컨텐츠 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: 'PUSH/알림 관리' },
          { label: 'Push 컨텐츠 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            컨텐츠 등록
          </Button>
        }
      />
    </Box>
  );
}

