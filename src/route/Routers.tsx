import { memo } from 'react';
import { Routes, Route } from 'react-router-dom';

import Top from 'components/templates/Top';
import CompletedVideos from 'components/templates/CompletedVideos';
import CompletedVideo from 'components/templates/CompletedVideo';
import ContentsVideos from 'components/templates/ContentVideos';
import ContentsVideo from 'components/templates/ContentVideo';
import MyVideos from 'components/templates/MyVideos';
import Mypage from 'components/templates/MyPage';
import PrivacyPolicy from 'components/templates/PrivacyPolicy';
import Terms from 'components/templates/Terms';
import VideoPost from 'components/templates/PostVideo';

import NoMatch from 'components/templates/NoMatch';

export const Routers = memo(() => {
  return (
    <Routes>
    <Route path="/" element={<Top />} />
    <Route path="*" element={<NoMatch />} />
    <Route path="/completed_videos/" element={<CompletedVideos />}>
      <Route path=":completedVideoId" element={<CompletedVideo />} />
    </Route>
    <Route path="/contents_videos" element={<ContentsVideos />}/>
    <Route path="contents_videos/:contentsVideoId" element={<ContentsVideo />} />
    <Route path="/my_videos/" element={<MyVideos />} />
    <Route path="/mypage/" element={<Mypage />} />
    <Route path="/privacy_policy/" element={<PrivacyPolicy />} />
    <Route path="/terms/" element={<Terms />} />
    <Route path="/video_post/" element={<VideoPost />} />
    </Routes>
  );
});