import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../components/Common/PageHeader';
import DataTable from '../../components/Common/DataTable';

const columns = [
  { id: 'id', label: '회원 ID', minWidth: 100 },
  { id: 'name', label: '이름', minWidth: 120 },
  { id: 'email', label: '이메일', minWidth: 200 },
  { id: 'phone', label: '전화번호', minWidth: 130 },
  { id: 'status', label: '상태', minWidth: 100 },
  { id: 'createdAt', label: '가입일', minWidth: 150 },
];

const rows = [
  { id: 'M001', name: '홍길동', email: 'hong@example.com', phone: '010-1234-5678', status: '활성', createdAt: '2024-01-15' },
  { id: 'M002', name: '김철수', email: 'kim@example.com', phone: '010-2345-6789', status: '활성', createdAt: '2024-01-20' },
  { id: 'M003', name: '이영희', email: 'lee@example.com', phone: '010-3456-7890', status: '휴면', createdAt: '2024-01-25' },
];

export default function MemberBasic() {
  return (
    <Box>
      <PageHeader
        title="회원 기본정보 조회"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '회원정보 조회' },
          { label: '회원 기본정보 조회' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            회원 등록
          </Button>
        }
      />
    </Box>
  );
}

