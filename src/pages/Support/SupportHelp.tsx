import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../components/Common/PageHeader';
import DataTable from '../../components/Common/DataTable';

const columns = [
  { id: 'helpId', label: '도움말 ID', minWidth: 100 },
  { id: 'category', label: '카테고리', minWidth: 120 },
  { id: 'title', label: '제목', minWidth: 250 },
  { id: 'views', label: '조회수', minWidth: 100 },
  { id: 'order', label: '순서', minWidth: 80 },
  { id: 'updatedAt', label: '수정일', minWidth: 150 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { helpId: 'H001', category: '시작하기', title: '회원가입 가이드', views: '3,456', order: '1', updatedAt: '2024-01-25', status: '게시중' },
  { helpId: 'H002', category: '기능 사용', title: '포인트 사용 방법', views: '2,134', order: '2', updatedAt: '2024-01-28', status: '게시중' },
];

export default function SupportHelp() {
  return (
    <Box>
      <PageHeader
        title="도움말 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '고객지원' },
          { label: '도움말 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            도움말 등록
          </Button>
        }
      />
    </Box>
  );
}

