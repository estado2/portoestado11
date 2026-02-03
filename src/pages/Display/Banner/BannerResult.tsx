import { Box } from '@mui/material';
import PageHeader from '../../../components/Common/PageHeader';
import DataTable from '../../../components/Common/DataTable';

const columns = [
  { id: 'bannerId', label: '배너 ID', minWidth: 100 },
  { id: 'title', label: '제목', minWidth: 200 },
  { id: 'impressions', label: '노출 수', minWidth: 100, align: 'right' as const },
  { id: 'clicks', label: '클릭 수', minWidth: 100, align: 'right' as const },
  { id: 'ctr', label: 'CTR', minWidth: 100, align: 'right' as const },
  { id: 'period', label: '기간', minWidth: 200 },
];

const rows = [
  { bannerId: 'B001', title: '신규 가입 이벤트', impressions: '10,234', clicks: '523', ctr: '5.11%', period: '2024-02-01 ~ 2024-02-29' },
];

export default function BannerResult() {
  return (
    <Box>
      <PageHeader
        title="배너 결과 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '전시 관리' },
          { label: '배너 관리' },
          { label: '배너 결과 관리' },
        ]}
      />
      
      <DataTable columns={columns} rows={rows} />
    </Box>
  );
}

