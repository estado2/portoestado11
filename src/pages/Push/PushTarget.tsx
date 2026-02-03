import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../components/Common/PageHeader';
import DataTable from '../../components/Common/DataTable';

const columns = [
  { id: 'targetId', label: '타겟 ID', minWidth: 100 },
  { id: 'name', label: '타겟명', minWidth: 200 },
  { id: 'conditions', label: '조건', minWidth: 250 },
  { id: 'userCount', label: '대상 수', minWidth: 100, align: 'right' as const },
  { id: 'createdAt', label: '생성일', minWidth: 150 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { targetId: 'PT001', name: '신규 가입 회원', conditions: '가입 후 7일 이내', userCount: '1,234', createdAt: '2024-02-01', status: '활성' },
  { targetId: 'PT002', name: '휴면 회원', conditions: '3개월 미접속', userCount: '567', createdAt: '2024-02-02', status: '활성' },
];

export default function PushTarget() {
  return (
    <Box>
      <PageHeader
        title="Push 타겟 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: 'PUSH/알림 관리' },
          { label: 'Push 타겟 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            타겟 생성
          </Button>
        }
      />
    </Box>
  );
}

