// @ts-nocheck
import { useAuth0 } from '@auth0/auth0-react';
import { useState, memo } from 'react';
import axios from 'axios';
import { REST_API_URL, API_URL} from 'src/urls/index';
import type { ContentVideo } from "src/types/contentvideo";
import { useLocation } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';
import { ContentVideoShowCard } from "src/components/ui/parts/ContentVideoShowCard";
import { SetExampleVideo } from "src/components/ui/parts/SetExampleVideo";
import { UploadUserVideo } from "src/components/features/api/rails/UploadUserVideo";
import 'src/css/pages/ContentVideoShow.css';
import 'src/css/globals/text.css';
import "src/css/globals/common.css";

interface State {
  id: number;
}

const GetContentVideo = memo(() => {
  const { isAuthenticated } = useAuth0();
  const [contentVideo, setContentVideo ] = useState<ContentVideo[]>([]);
  const location = useLocation();
  const { id } = location.state as State || {};

  const csrf_token = () => {
    axios
      .get(`${API_URL}/secured`)
      .then((response) => {
      })
  }
  csrf_token()

  let { isLoading: queryLoading } = useQuery(['content_videos'],
    async () => {
    /** GETの処理 */
    const res = await axios
      .get<ContentVideo[]>(`${REST_API_URL}/user/content_videos/${id}`,{
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .catch((error) => {
        console.error(error.response.data);
      });
      setContentVideo(res.data.data);
    }
  );

  if (queryLoading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '150px', minHeight: '1000px' }}>
      <CircularProgress
        sx={{
          color: '#314357',
          mt: -1,
          fontSize: '80px',
          '@media screen and (max-width:700px)': {
            mt: -0.4,
          },
        }}
      />
      <p className="loading-text">ロード中</p>
    </div>
    )
  }


  return (
    <div className="content-video-show">
      <div className="content-video-show-container">
        <div className="content-videos-show-header">
          <h1 className="content-videos-show-text-first" >Filming Room</h1>
        </div>
        <div className="content-videos-show-container-secondary">
          {/** query.isLoadingがtureのとき、つまり、ロード中はクラスネームのローダーのやつが表示*/}
          <div className="content-video-show-first-part">
            <div className="content-video-show-card">
              <ContentVideoShowCard
                id = {contentVideo.attributes.id}
                number = {contentVideo.attributes.number}
                title = {contentVideo.attributes.title}
                description = {contentVideo.attributes.description}
                thumbnail = {contentVideo.attributes.thumbnail}
              />
            </div>
            <div className="example-video">
              <img src={`${process.env.PUBLIC_URL}/mrmime-videoframe.png`} className="mrmime-videoframe" alt="mrmime-videoframe" width="95%" />
              <SetExampleVideo url={contentVideo.attributes.number} />
            </div>
          </div>

          <div className="content-video-show-second-part">
            <img src={`${process.env.PUBLIC_URL}/mrmime-point-frame-${contentVideo.attributes.number}.png`} className="lecture-photo" alt="mrmime-point-frame"  />
          </div>

          <div className="content-video-show-third-part">
            <h1 className="content-videos-show-text-first">Are you ready? Let's TRY!</h1>
            <div className='card_textbox-v2' >
              <p className="content-videos-show-text-second"><span>『CREATE』</span>であなたから始まる<span>『MOVIE』!</span></p>
              <p className="content-videos-show-text-third">撮影できたら、動画をアップロードして<span>create!</span>のボタンを押してね!</p>
            </div>

          </div>
          { isAuthenticated ? (
            <UploadUserVideo id = { contentVideo.attributes.id } />
            ) : (
                <h1 className="content-videos-show-text-fourth">Sorry! Please Login!</h1>
              )}
        </div>
      </div>
    </div>
  )
});

export const ContentVideoShow= memo(() => {
  const queryClient = new QueryClient();
  return (
    // ProviderでQueryClientを設定する
    <QueryClientProvider client={queryClient}>
      <GetContentVideo />
    </QueryClientProvider>
  );
});


export default ContentVideoShow;
