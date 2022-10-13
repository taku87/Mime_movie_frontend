import { memo } from 'react';
import { Routes, Route } from 'react-router-dom';

import Top from 'src/components/pages/Top';
import NoMatch from 'src/components/pages/NoMatchs';
import ContentsVideosIndex from 'src/components/pages/ContentVideosIndex';
import ContentsVideoShow from 'src/components/pages/ContentVideoShow';
import UserVideoPost from 'src/components/pages/UserVideoPost';
import CompletedVideosIndex from 'src/components/pages/CompletedVideosIndex';
//import CompletedVideo from 'src/components/templates/CompletedVideo';
//import MyVideos from 'src/components/templates/MyVideos';
import Mypage from 'src/components/pages/Mypages';
import PrivacyPolicy from 'src/components/pages/PrivacyPolicy';
import Terms from 'src/components/pages/Term';


export const Routers = memo(() => {
  return (
    <Routes>
    <Route path="/" element={<Top />} />
    <Route path="*" element={<NoMatch />} />
    <Route path="/contents_videos" element={<ContentsVideosIndex />}/>
    <Route path="contents_videos/:contentsVideoId" element={<ContentsVideoShow />} />
    <Route path="/video_post/" element={<UserVideoPost />} />
    <Route path="/completed_videos/" element={<CompletedVideosIndex />}>
      {/* <Route path=":completedVideoId" element={<CompletedVideo />} /> */}
    </Route>
      {/* <Route path="/my_videos/" element={<MyVideos />} /> */}
    <Route path="/mypage/" element={<Mypage />} />
    <Route path="/privacy_policy/" element={<PrivacyPolicy />} />
    <Route path="/terms/" element={<Terms />} />
    </Routes>
  );
});