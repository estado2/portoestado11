import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../components/Common/PageHeader';
import DataTable from '../../components/Common/DataTable';

const columns = [
  { id: 'termsId', label: '약관 ID', minWidth: 100 },
  { id: 'title', label: '약관명', minWidth: 250 },
  { id: 'version', label: '버전', minWidth: 100 },
  { id: 'isRequired', label: '필수여부', minWidth: 100 },
  { id: 'effectiveDate', label: '시행일', minWidth: 120 },
  { id: 'updatedAt', label: '수정일', minWidth: 150 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { termsId: 'T001', title: '서비스 이용약관', version: 'v2.1', isRequired: '필수', effectiveDate: '2024-01-01', updatedAt: '2024-01-01', status: '적용중' },
  { termsId: 'T002', title: '개인정보 처리방침', version: 'v1.5', isRequired: '필수', effectiveDate: '2024-01-01', updatedAt: '2024-01-01', status: '적용중' },
  { termsId: 'T003', title: '마케팅 수신 동의', version: 'v1.0', isRequired: '선택', effectiveDate: '2024-01-01', updatedAt: '2024-01-01', status: '적용중' },
];

export default function SupportTerms() {
  return (
    <Box>
      <PageHeader
        title="약관 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '고객지원' },
          { label: '약관 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            약관 등록
          </Button>
        }
      />
    </Box>
  );
}

