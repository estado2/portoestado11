import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../components/Common/PageHeader';
import DataTable from '../../components/Common/DataTable';

const columns = [
  { id: 'noticeId', label: '공지 ID', minWidth: 100 },
  { id: 'title', label: '제목', minWidth: 300 },
  { id: 'category', label: '카테고리', minWidth: 120 },
  { id: 'views', label: '조회수', minWidth: 100 },
  { id: 'isImportant', label: '중요', minWidth: 80 },
  { id: 'createdAt', label: '등록일', minWidth: 150 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { noticeId: 'N001', title: '서비스 점검 안내', category: '시스템', views: '1,234', isImportant: '중요', createdAt: '2024-02-01', status: '게시중' },
  { noticeId: 'N002', title: '2월 이벤트 안내', category: '이벤트', views: '567', isImportant: '일반', createdAt: '2024-02-03', status: '게시중' },
];

export default function SupportNotice() {
  return (
    <Box>
      <PageHeader
        title="공지사항 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '고객지원' },
          { label: '공지사항 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            공지사항 등록
          </Button>
        }
      />
    </Box>
  );
}

