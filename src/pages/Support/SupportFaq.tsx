import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../components/Common/PageHeader';
import DataTable from '../../components/Common/DataTable';

const columns = [
  { id: 'faqId', label: 'FAQ ID', minWidth: 100 },
  { id: 'category', label: '카테고리', minWidth: 120 },
  { id: 'question', label: '질문', minWidth: 300 },
  { id: 'views', label: '조회수', minWidth: 100 },
  { id: 'helpful', label: '도움됨', minWidth: 100 },
  { id: 'order', label: '순서', minWidth: 80 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { faqId: 'F001', category: '가입/해지', question: '가입은 어떻게 하나요?', views: '2,345', helpful: '98%', order: '1', status: '게시중' },
  { faqId: 'F002', category: '요금', question: '요금제 변경은 어떻게 하나요?', views: '1,890', helpful: '95%', order: '2', status: '게시중' },
];

export default function SupportFaq() {
  return (
    <Box>
      <PageHeader
        title="자주묻는 질문 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '고객지원' },
          { label: '자주묻는 질문 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            FAQ 등록
          </Button>
        }
      />
    </Box>
  );
}

