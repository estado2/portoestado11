import { Box } from '@mui/material';
import PageHeader from '../../components/Common/PageHeader';
import DataTable from '../../components/Common/DataTable';

const columns = [
  { id: 'sendId', label: '발송 ID', minWidth: 100 },
  { id: 'contentTitle', label: '컨텐츠 제목', minWidth: 200 },
  { id: 'sentCount', label: '발송 수', minWidth: 100, align: 'right' as const },
  { id: 'deliveredCount', label: '전달 수', minWidth: 100, align: 'right' as const },
  { id: 'openedCount', label: '오픈 수', minWidth: 100, align: 'right' as const },
  { id: 'clickedCount', label: '클릭 수', minWidth: 100, align: 'right' as const },
  { id: 'openRate', label: '오픈율', minWidth: 100, align: 'right' as const },
  { id: 'sentAt', label: '발송일시', minWidth: 150 },
];

const rows = [
  { sendId: 'PS001', contentTitle: '신규 이벤트 안내', sentCount: '1,234', deliveredCount: '1,210', openedCount: '645', clickedCount: '234', openRate: '53.3%', sentAt: '2024-02-01 10:00' },
  { sendId: 'PS002', contentTitle: '포인트 소멸 안내', sentCount: '5,678', deliveredCount: '5,590', openedCount: '2,234', clickedCount: '789', openRate: '39.9%', sentAt: '2024-02-03 09:00' },
];

export default function PushResult() {
  return (
    <Box>
      <PageHeader
        title="Push 결과 조회"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: 'PUSH/알림 관리' },
          { label: 'Push 결과 조회' },
        ]}
      />
      
      <DataTable columns={columns} rows={rows} />
    </Box>
  );
}

