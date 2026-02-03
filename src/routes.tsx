import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

// Member pages
import MemberBasic from './pages/Member/MemberBasic';
import MemberUsim from './pages/Member/MemberUsim';
import MemberTerms from './pages/Member/MemberTerms';

// Display pages
import ProductMaster from './pages/Display/Product/ProductMaster';
import ProductDisplay from './pages/Display/Product/ProductDisplay';
import HomeCta from './pages/Display/Home/HomeCta';
import HomeQuick from './pages/Display/Home/HomeQuick';
import HomeCard from './pages/Display/Home/HomeCard';
import PickSchedule from './pages/Display/Pick/PickSchedule';
import PickManage from './pages/Display/Pick/PickManage';
import PickChoice from './pages/Display/Pick/PickChoice';
import BannerManage from './pages/Display/Banner/BannerManage';
import BannerResult from './pages/Display/Banner/BannerResult';
import EventHome from './pages/Display/EventHome';
import PromotionCode from './pages/Display/Promotion/PromotionCode';
import PromotionGroup from './pages/Display/Promotion/PromotionGroup';

// Point pages
import PointInquiry from './pages/Point/PointInquiry';
import PointEdit from './pages/Point/Manage/PointEdit';
import PointHistory from './pages/Point/Manage/PointHistory';
import PointBonus from './pages/Point/PointBonus';
import PointLimit from './pages/Point/PointLimit';

// Support pages
import SupportNotice from './pages/Support/SupportNotice';
import SupportFaq from './pages/Support/SupportFaq';
import SupportHelp from './pages/Support/SupportHelp';
import SupportTerms from './pages/Support/SupportTerms';

// Push pages
import PushContent from './pages/Push/PushContent';
import PushTarget from './pages/Push/PushTarget';
import PushSend from './pages/Push/PushSend';
import PushResult from './pages/Push/PushResult';

// Admin pages
import AdminMypage from './pages/Admin/AdminMypage';
import AdminAccount from './pages/Admin/AdminAccount';
import AdminPermission from './pages/Admin/AdminPermission';
import AdminActivity from './pages/Admin/AdminActivity';
import UploadRequest from './pages/Admin/Upload/UploadRequest';
import UploadApproval from './pages/Admin/Upload/UploadApproval';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      
      {/* Member routes */}
      <Route path="/member/basic" element={<MemberBasic />} />
      <Route path="/member/usim" element={<MemberUsim />} />
      <Route path="/member/terms" element={<MemberTerms />} />
      
      {/* Display routes */}
      <Route path="/display/product/master" element={<ProductMaster />} />
      <Route path="/display/product/display" element={<ProductDisplay />} />
      <Route path="/display/home/cta" element={<HomeCta />} />
      <Route path="/display/home/quick" element={<HomeQuick />} />
      <Route path="/display/home/card" element={<HomeCard />} />
      <Route path="/display/pick/schedule" element={<PickSchedule />} />
      <Route path="/display/pick/manage" element={<PickManage />} />
      <Route path="/display/pick/choice" element={<PickChoice />} />
      <Route path="/display/banner/manage" element={<BannerManage />} />
      <Route path="/display/banner/result" element={<BannerResult />} />
      <Route path="/display/event" element={<EventHome />} />
      <Route path="/display/promotion/code" element={<PromotionCode />} />
      <Route path="/display/promotion/group" element={<PromotionGroup />} />
      
      {/* Point routes */}
      <Route path="/point/inquiry" element={<PointInquiry />} />
      <Route path="/point/manage/edit" element={<PointEdit />} />
      <Route path="/point/manage/history" element={<PointHistory />} />
      <Route path="/point/bonus" element={<PointBonus />} />
      <Route path="/point/limit" element={<PointLimit />} />
      
      {/* Support routes */}
      <Route path="/support/notice" element={<SupportNotice />} />
      <Route path="/support/faq" element={<SupportFaq />} />
      <Route path="/support/help" element={<SupportHelp />} />
      <Route path="/support/terms" element={<SupportTerms />} />
      
      {/* Push routes */}
      <Route path="/push/content" element={<PushContent />} />
      <Route path="/push/target" element={<PushTarget />} />
      <Route path="/push/send" element={<PushSend />} />
      <Route path="/push/result" element={<PushResult />} />
      
      {/* Admin routes */}
      <Route path="/admin/mypage" element={<AdminMypage />} />
      <Route path="/admin/account" element={<AdminAccount />} />
      <Route path="/admin/permission" element={<AdminPermission />} />
      <Route path="/admin/activity" element={<AdminActivity />} />
      <Route path="/admin/upload/request" element={<UploadRequest />} />
      <Route path="/admin/upload/approval" element={<UploadApproval />} />
    </Routes>
  );
}

