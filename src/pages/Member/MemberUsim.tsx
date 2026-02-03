import { Box } from '@mui/material';
import PageHeader from '../../components/Common/PageHeader';
import DataTable from '../../components/Common/DataTable';

const columns = [
  { id: 'orderId', label: '주문 ID', minWidth: 100 },
  { id: 'memberId', label: '회원 ID', minWidth: 100 },
  { id: 'name', label: '수령인', minWidth: 120 },
  { id: 'phone', label: '연락처', minWidth: 130 },
  { id: 'address', label: '배송지', minWidth: 250 },
  { id: 'status', label: '배송 상태', minWidth: 100 },
  { id: 'deliveryDate', label: '배송일', minWidth: 150 },
];

const rows = [
  { orderId: 'O001', memberId: 'M001', name: '홍길동', phone: '010-1234-5678', address: '서울시 강남구', status: '배송완료', deliveryDate: '2024-02-01' },
  { orderId: 'O002', memberId: 'M002', name: '김철수', phone: '010-2345-6789', address: '서울시 서초구', status: '배송중', deliveryDate: '2024-02-03' },
];

export default function MemberUsim() {
  return (
    <Box>
      <PageHeader
        title="USIM배송 조회"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '회원정보 조회' },
          { label: 'USIM배송 조회' },
        ]}
      />
      
      <DataTable columns={columns} rows={rows} />
    </Box>
  );
}

