// コンポーネント読み込み
//import WrapMainContent from './components/WrapMainContent'

// 共通スタイル読み込み
import './css/App.css';

// Route関連
//ブラウザでアクセスしたURLのパスを元にルーティングして、
//パスに紐づいているコンポーネントを表示する仕組み
//import { Route, Switch } from 'react-router-dom';

//不明なRouteは全てNotFound
//const NotFound = () => {
//  return(
//    <h2>ページが見つかりません</h2>
//  )
//}
import { Routes, Route } from 'react-router-dom';
import Home from './components/templates/home';
import CompletedVideos from './components/templates/completed_videos';
import CompletedVideo from './components/templates/completed_video';
import ContentsVideos from './components/templates/contents_videos';
import ContentsVideo from './components/templates/contents_video';
import MyVideos from './components/templates/my_videos';
import Mypage from './components/templates/mypage';
import PrivacyPolicy from './components/templates/privacy_policy';
import Terms from './components/templates/terms';
import SignUpLogin from './components/templates/signup_login';
import VideoPost from './components/templates/video_post';

import NoMatch from './components/templates/nomatch';

function App() {
  return (
    <div>
      <h1>Hello React Router v6</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/completed_videos/" element={<CompletedVideos />}>
          <Route path=":completedVideoId" element={<CompletedVideo />} />
        </Route>
        <Route path="/contents_videos/*" element={<ContentsVideos />}>
          <Route path=":contentVideoId" element={<ContentsVideo />} />
        </Route>
        <Route path="/my_videos/" element={<MyVideos />} />
        <Route path="/mypage/" element={<Mypage />} />
        <Route path="/privacy_policy/" element={<PrivacyPolicy />} />
        <Route path="/terms/" element={<Terms />} />
        <Route path="/signup_logins/" element={<SignUpLogin />} />
        <Route path="/video_post/" element={<VideoPost />} />

      </Routes>
    </div>
  );
}

// React-Router情報取得
export default App;
