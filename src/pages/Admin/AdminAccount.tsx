import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../components/Common/PageHeader';
import DataTable from '../../components/Common/DataTable';

const columns = [
  { id: 'adminId', label: '관리자 ID', minWidth: 100 },
  { id: 'name', label: '이름', minWidth: 120 },
  { id: 'email', label: '이메일', minWidth: 200 },
  { id: 'phone', label: '전화번호', minWidth: 130 },
  { id: 'role', label: '권한 그룹', minWidth: 150 },
  { id: 'lastLogin', label: '마지막 로그인', minWidth: 150 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { adminId: 'A001', name: '관리자', email: 'admin@example.com', phone: '010-1234-5678', role: '슈퍼 관리자', lastLogin: '2024-02-04 14:30', status: '활성' },
  { adminId: 'A002', name: '김담당', email: 'kim@example.com', phone: '010-2345-6789', role: '운영 관리자', lastLogin: '2024-02-04 13:15', status: '활성' },
  { adminId: 'A003', name: '이운영', email: 'lee@example.com', phone: '010-3456-7890', role: 'CS 관리자', lastLogin: '2024-02-03 18:00', status: '활성' },
];

export default function AdminAccount() {
  return (
    <Box>
      <PageHeader
        title="관리자 계정 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '관리자 관리' },
          { label: '관리자 계정 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            관리자 추가
          </Button>
        }
      />
    </Box>
  );
}

