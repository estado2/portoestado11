import { Box, Button, ButtonGroup } from '@mui/material';
import { Check, Close } from '@mui/icons-material';
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
  {
    id: 'actions',
    label: '승인/반려',
    minWidth: 150,
    align: 'center' as const,
  },
];

const rows = [
  {
    requestId: 'UR001',
    adminName: '김담당',
    fileName: 'banner_image.jpg',
    fileSize: '2.5MB',
    purpose: '배너 이미지',
    requestedAt: '2024-02-04 10:00',
    status: '승인대기',
    actions: (
      <ButtonGroup size="small">
        <Button color="success" startIcon={<Check />}>승인</Button>
        <Button color="error" startIcon={<Close />}>반려</Button>
      </ButtonGroup>
    ),
  },
  {
    requestId: 'UR002',
    adminName: '이운영',
    fileName: 'product_list.xlsx',
    fileSize: '1.2MB',
    purpose: '상품 일괄 등록',
    requestedAt: '2024-02-03 15:30',
    status: '승인대기',
    actions: (
      <ButtonGroup size="small">
        <Button color="success" startIcon={<Check />}>승인</Button>
        <Button color="error" startIcon={<Close />}>반려</Button>
      </ButtonGroup>
    ),
  },
];

export default function UploadApproval() {
  return (
    <Box>
      <PageHeader
        title="파일 업로드 승인 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '관리자 관리' },
          { label: '파일 업로드 관리' },
          { label: '승인 관리' },
        ]}
      />
      
      <DataTable columns={columns} rows={rows} />
    </Box>
  );
}

