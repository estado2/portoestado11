import { Box } from '@mui/material';
import PageHeader from '../../components/Common/PageHeader';
import DataTable from '../../components/Common/DataTable';

const columns = [
  { id: 'activityId', label: '이력 ID', minWidth: 100 },
  { id: 'adminName', label: '관리자', minWidth: 120 },
  { id: 'action', label: '활동', minWidth: 150 },
  { id: 'target', label: '대상', minWidth: 200 },
  { id: 'detail', label: '상세', minWidth: 250 },
  { id: 'ipAddress', label: 'IP 주소', minWidth: 130 },
  { id: 'timestamp', label: '일시', minWidth: 150 },
];

const rows = [
  { activityId: 'AC001', adminName: '관리자', action: '생성', target: '공지사항', detail: '서비스 점검 안내', ipAddress: '192.168.1.1', timestamp: '2024-02-04 14:30' },
  { activityId: 'AC002', adminName: '김담당', action: '수정', target: '상품', detail: '5G 데이터 무제한 가격 변경', ipAddress: '192.168.1.2', timestamp: '2024-02-04 13:15' },
  { activityId: 'AC003', adminName: '이운영', action: '삭제', target: 'FAQ', detail: 'FAQ ID: F123', ipAddress: '192.168.1.3', timestamp: '2024-02-04 11:45' },
];

export default function AdminActivity() {
  return (
    <Box>
      <PageHeader
        title="관리자 활동 이력 조회"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '관리자 관리' },
          { label: '관리자 활동 이력 조회' },
        ]}
      />
      
      <DataTable columns={columns} rows={rows} />
    </Box>
  );
}

