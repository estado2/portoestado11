export interface MenuItem {
  id: string;
  label: string;
  path?: string;
  icon?: string;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: '전체메뉴',
    path: '/',
    icon: 'Dashboard',
  },
  {
    id: 'member',
    label: '회원정보 조회',
    icon: 'People',
    children: [
      { id: 'member-basic', label: '회원 기본정보 조회', path: '/member/basic' },
      { id: 'member-usim', label: 'USIM배송 조회', path: '/member/usim' },
      { id: 'member-terms', label: '약관동의 조회', path: '/member/terms' },
    ],
  },
  {
    id: 'display',
    label: '전시 관리',
    icon: 'Store',
    children: [
      {
        id: 'display-product',
        label: '상품 관리',
        children: [
          { id: 'product-master', label: '상품 원장 관리', path: '/display/product/master' },
          { id: 'product-display', label: '상품 전시 관리', path: '/display/product/display' },
        ],
      },
      {
        id: 'display-home',
        label: '홈 관리',
        children: [
          { id: 'home-cta', label: 'CTA 관리', path: '/display/home/cta' },
          { id: 'home-quick', label: '퀵메뉴 관리', path: '/display/home/quick' },
          { id: 'home-card', label: '홈 카드 관리', path: '/display/home/card' },
        ],
      },
      {
        id: 'display-pick',
        label: '픽 관리',
        children: [
          { id: 'pick-schedule', label: '픽 일정 관리', path: '/display/pick/schedule' },
          { id: 'pick-manage', label: '픽 관리', path: '/display/pick/manage' },
          { id: 'pick-choice', label: '픽 선택지 관리', path: '/display/pick/choice' },
        ],
      },
      {
        id: 'display-banner',
        label: '배너 관리',
        children: [
          { id: 'banner-manage', label: '배너 및 팝업 관리', path: '/display/banner/manage' },
          { id: 'banner-result', label: '배너 결과 관리', path: '/display/banner/result' },
        ],
      },
      { id: 'display-event', label: '이벤트 홈 관리', path: '/display/event' },
      {
        id: 'display-promotion',
        label: '프로모션 코드관리',
        children: [
          { id: 'promotion-code', label: '프로모션 코드관리', path: '/display/promotion/code' },
          { id: 'promotion-group', label: '프로모션 코드 그룹관리/통계', path: '/display/promotion/group' },
        ],
      },
    ],
  },
  {
    id: 'point',
    label: '포인트/정책 관리',
    icon: 'CardGiftcard',
    children: [
      { id: 'point-inquiry', label: '포인트 조회', path: '/point/inquiry' },
      {
        id: 'point-manage',
        label: '포인트 관리',
        children: [
          { id: 'point-edit', label: '포인트 수정', path: '/point/manage/edit' },
          { id: 'point-history', label: '포인트 수정 상세 이력', path: '/point/manage/history' },
        ],
      },
      { id: 'point-bonus', label: '보너스팩 정책 관리', path: '/point/bonus' },
      { id: 'point-limit', label: '포인트 사용 한도 관리', path: '/point/limit' },
    ],
  },
  {
    id: 'support',
    label: '고객지원',
    icon: 'Support',
    children: [
      { id: 'support-notice', label: '공지사항 관리', path: '/support/notice' },
      { id: 'support-faq', label: '자주묻는 질문 관리', path: '/support/faq' },
      { id: 'support-help', label: '도움말 관리', path: '/support/help' },
      { id: 'support-terms', label: '약관 관리', path: '/support/terms' },
    ],
  },
  {
    id: 'push',
    label: 'PUSH/알림 관리',
    icon: 'Notifications',
    children: [
      { id: 'push-content', label: 'Push 컨텐츠 관리', path: '/push/content' },
      { id: 'push-target', label: 'Push 타겟 관리', path: '/push/target' },
      { id: 'push-send', label: 'Push 발송 관리', path: '/push/send' },
      { id: 'push-result', label: 'Push 결과 조회', path: '/push/result' },
    ],
  },
  {
    id: 'admin',
    label: '관리자 관리',
    icon: 'AdminPanelSettings',
    children: [
      { id: 'admin-mypage', label: '마이페이지', path: '/admin/mypage' },
      { id: 'admin-account', label: '관리자 계정 관리', path: '/admin/account' },
      { id: 'admin-permission', label: '권한 그룹 관리', path: '/admin/permission' },
      { id: 'admin-activity', label: '관리자 활동 이력 조회', path: '/admin/activity' },
      {
        id: 'admin-upload',
        label: '파일 업로드 관리',
        children: [
          { id: 'upload-request', label: '요청 관리', path: '/admin/upload/request' },
          { id: 'upload-approval', label: '승인 관리', path: '/admin/upload/approval' },
        ],
      },
    ],
  },
];

