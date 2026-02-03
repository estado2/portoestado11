# N-Admin - 관리자 사이트

React + TypeScript + Material-UI 기반의 모던한 관리자 사이트입니다.

## 🚀 기술 스택

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Material-UI (MUI)** - UI 컴포넌트 프레임워크
- **React Router v6** - 라우팅
- **Vite** - 빌드 도구

## 📦 주요 기능

### 1. 회원정보 조회
- 회원 기본정보 조회
- USIM배송 조회
- 약관동의 조회

### 2. 전시 관리
- **상품 관리**: 상품 원장, 전시 관리
- **홈 관리**: CTA, 퀵메뉴, 홈 카드
- **픽 관리**: 픽 일정, 픽 관리, 픽 선택지
- **배너 관리**: 배너/팝업 관리, 결과 관리
- **이벤트 홈 관리**
- **프로모션 코드관리**: 코드 관리, 그룹 관리/통계

### 3. 포인트/정책 관리
- 포인트 조회
- 포인트 관리 (수정, 상세 이력)
- 보너스팩 정책 관리
- 포인트 사용 한도 관리

### 4. 고객지원
- 공지사항 관리
- 자주묻는 질문 관리
- 도움말 관리
- 약관 관리

### 5. PUSH/알림 관리
- Push 컨텐츠 관리
- Push 타겟 관리
- Push 발송 관리
- Push 결과 조회

### 6. 관리자 관리
- 마이페이지
- 관리자 계정 관리
- 권한 그룹 관리
- 관리자 활동 이력 조회
- 파일 업로드 관리 (요청/승인)

## 🎨 UI/UX 특징

- **Material Design** 기반의 모던한 디자인
- **반응형** 레이아웃 (데스크톱/태블릿/모바일 지원)
- **사이드바 네비게이션** (접기/펼치기 기능)
- **다크/라이트 모드** 지원 준비
- **데이터 테이블** (검색, 필터, 페이지네이션)
- **브레드크럼** 네비게이션

## 🛠️ 설치 및 실행

### 개발 환경 실행

```bash
# 패키지 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev
```

### 프로덕션 빌드

```bash
# 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 🌐 GitHub Pages 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 배포됩니다.

### 배포 방법

1. GitHub 저장소 생성
2. 코드 푸시:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/n-admin.git
   git push -u origin main
   ```

3. GitHub 저장소 설정:
   - Settings → Pages
   - Source: GitHub Actions 선택

4. 자동 배포 완료! 
   - URL: `https://YOUR_USERNAME.github.io/n-admin/`

### 수동 배포 (선택사항)

```bash
npm run deploy
```

## 📁 프로젝트 구조

```
n-admin/
├── src/
│   ├── components/
│   │   ├── Common/          # 공통 컴포넌트
│   │   │   ├── DataTable.tsx
│   │   │   └── PageHeader.tsx
│   │   └── Layout/          # 레이아웃 컴포넌트
│   │       ├── Header.tsx
│   │       ├── Sidebar.tsx
│   │       └── MainLayout.tsx
│   ├── pages/               # 페이지 컴포넌트
│   │   ├── Dashboard.tsx
│   │   ├── Member/
│   │   ├── Display/
│   │   ├── Point/
│   │   ├── Support/
│   │   ├── Push/
│   │   └── Admin/
│   ├── theme/               # MUI 테마 설정
│   │   └── theme.ts
│   ├── types/               # TypeScript 타입 정의
│   │   └── menu.ts
│   ├── routes.tsx           # 라우팅 설정
│   ├── App.tsx
│   └── main.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions 배포 워크플로우
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 향후 개선 사항

- [ ] 실제 API 연동
- [ ] 인증/인가 시스템 구현
- [ ] 다크 모드 전환 기능
- [ ] 차트/그래프 추가 (recharts)
- [ ] 엑셀 다운로드 기능
- [ ] 파일 업로드 기능
- [ ] 이미지 미리보기
- [ ] 에러 바운더리
- [ ] 로딩 상태 관리

## 📄 라이선스

MIT License

## 👥 기여

이슈 및 PR은 언제나 환영합니다!

