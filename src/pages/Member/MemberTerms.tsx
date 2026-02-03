import { Box } from '@mui/material';
import PageHeader from '../../components/Common/PageHeader';
import DataTable from '../../components/Common/DataTable';

const columns = [
  { id: 'memberId', label: '회원 ID', minWidth: 100 },
  { id: 'name', label: '이름', minWidth: 120 },
  { id: 'termsService', label: '서비스 이용약관', minWidth: 130 },
  { id: 'termsPrivacy', label: '개인정보 처리방침', minWidth: 150 },
  { id: 'termsMarketing', label: '마케팅 수신동의', minWidth: 130 },
  { id: 'agreedAt', label: '동의일', minWidth: 150 },
];

const rows = [
  { memberId: 'M001', name: '홍길동', termsService: '동의', termsPrivacy: '동의', termsMarketing: '동의', agreedAt: '2024-01-15' },
  { memberId: 'M002', name: '김철수', termsService: '동의', termsPrivacy: '동의', termsMarketing: '미동의', agreedAt: '2024-01-20' },
];

export default function MemberTerms() {
  return (
    <Box>
      <PageHeader
        title="약관동의 조회"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '회원정보 조회' },
          { label: '약관동의 조회' },
        ]}
      />
      
      <DataTable columns={columns} rows={rows} />
    </Box>
  );
}

