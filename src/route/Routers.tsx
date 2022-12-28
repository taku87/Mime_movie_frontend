import { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ScrollToTop } from 'src/components/features/hooks/ScrollToTop';

import Top from 'src/components/ui/pages/Top';
import NoMatch from 'src/components/ui/pages/NoMatchs';
import AdminContentVideosIndex from 'src/components/ui/pages/AdminContentVideosIndex';
import ContentsVideosIndex from 'src/components/ui/pages/ContentVideosIndex';
import ContentsVideoShow from 'src/components/ui/pages/ContentVideoShow';
import SetUserCreatedVideo  from 'src/components/ui/layouts/SetUserCreatedVideo';
import CompletedVideosIndex from 'src/components/ui/pages/CompletedVideosIndex';
//import CompletedVideo from 'src/components/templates/CompletedVideo';
//import MyVideos from 'src/components/templates/MyVideos';
import Mypage from 'src/components/ui/pages/Mypages';
import PrivacyPolicy from 'src/components/ui/pages/PrivacyPolicy';
import Terms from 'src/components/ui/pages/Term';



export const Routers = memo(() => {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/admin/contents_videos" element={<AdminContentVideosIndex />} />
        <Route path="/contents_videos" element={<ContentsVideosIndex />}/>
        <Route path="contents_videos/:contentsVideoId" element={<ContentsVideoShow />} />
        <Route path="/created_video" element={<SetUserCreatedVideo/>}/>
        <Route path="/completed_videos/" element={<CompletedVideosIndex />} />
        <Route path="/mypage/" element={<Mypage />} />
        <Route path="/privacy_policy/" element={<PrivacyPolicy />} />
        <Route path="/terms/" element={<Terms />} />
      </Routes>
    </>
  );
});