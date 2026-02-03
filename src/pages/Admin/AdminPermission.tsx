import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../components/Common/PageHeader';
import DataTable from '../../components/Common/DataTable';

const columns = [
  { id: 'groupId', label: '그룹 ID', minWidth: 100 },
  { id: 'name', label: '그룹명', minWidth: 150 },
  { id: 'description', label: '설명', minWidth: 250 },
  { id: 'memberCount', label: '구성원 수', minWidth: 100 },
  { id: 'createdAt', label: '생성일', minWidth: 150 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { groupId: 'G001', name: '슈퍼 관리자', description: '모든 권한 보유', memberCount: '1', createdAt: '2024-01-01', status: '활성' },
  { groupId: 'G002', name: '운영 관리자', description: '회원, 전시, 포인트 관리', memberCount: '3', createdAt: '2024-01-01', status: '활성' },
  { groupId: 'G003', name: 'CS 관리자', description: '고객지원, 공지사항 관리', memberCount: '5', createdAt: '2024-01-01', status: '활성' },
];

export default function AdminPermission() {
  return (
    <Box>
      <PageHeader
        title="권한 그룹 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '관리자 관리' },
          { label: '권한 그룹 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            그룹 추가
          </Button>
        }
      />
    </Box>
  );
}

