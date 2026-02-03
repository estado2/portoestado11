import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../../components/Common/PageHeader';
import DataTable from '../../../components/Common/DataTable';

const columns = [
  { id: 'requestId', label: '요청 ID', minWidth: 100 },
  { id: 'adminName', label: '요청자', minWidth: 120 },
  { id: 'fileName', label: '파일명', minWidth: 200 },
  { id: 'fileSize', label: '파일 크기', minWidth: 100 },
  { id: 'purpose', label: '용도', minWidth: 150 },
  { id: 'requestedAt', label: '요청일시', minWidth: 150 },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { requestId: 'UR001', adminName: '김담당', fileName: 'banner_image.jpg', fileSize: '2.5MB', purpose: '배너 이미지', requestedAt: '2024-02-04 10:00', status: '승인대기' },
  { requestId: 'UR002', adminName: '이운영', fileName: 'product_list.xlsx', fileSize: '1.2MB', purpose: '상품 일괄 등록', requestedAt: '2024-02-03 15:30', status: '승인대기' },
];

export default function UploadRequest() {
  return (
    <Box>
      <PageHeader
        title="파일 업로드 요청 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '관리자 관리' },
          { label: '파일 업로드 관리' },
          { label: '요청 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            파일 업로드 요청
          </Button>
        }
      />
    </Box>
  );
}

