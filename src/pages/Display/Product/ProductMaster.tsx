import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import PageHeader from '../../../components/Common/PageHeader';
import DataTable from '../../../components/Common/DataTable';

const columns = [
  { id: 'productId', label: '상품 ID', minWidth: 100 },
  { id: 'name', label: '상품명', minWidth: 200 },
  { id: 'category', label: '카테고리', minWidth: 120 },
  { id: 'price', label: '가격', minWidth: 100, align: 'right' as const },
  { id: 'stock', label: '재고', minWidth: 80, align: 'right' as const },
  { id: 'status', label: '상태', minWidth: 100 },
];

const rows = [
  { productId: 'P001', name: '5G 데이터 무제한', category: '요금제', price: '55,000원', stock: '999', status: '판매중' },
  { productId: 'P002', name: 'LTE 100GB', category: '요금제', price: '35,000원', stock: '999', status: '판매중' },
];

export default function ProductMaster() {
  return (
    <Box>
      <PageHeader
        title="상품 원장 관리"
        breadcrumbs={[
          { label: '홈', path: '/' },
          { label: '전시 관리' },
          { label: '상품 관리' },
          { label: '상품 원장 관리' },
        ]}
      />
      
      <DataTable
        columns={columns}
        rows={rows}
        actions={
          <Button variant="contained" startIcon={<Add />}>
            상품 등록
          </Button>
        }
      />
    </Box>
  );
}

