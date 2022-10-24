// @ts-nocheck
import { useState } from 'react';
import axios from 'axios';
import { REST_API_URL } from 'src/urls/index';
import type { ContentVideo } from "src/types/contentvideo";
import { useLocation } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query';
import { ContentVideoShowCard } from "src/components/organisms/ContentVideoShowCard";
import { SetExampleVideo } from "src/components/molecules/SetExampleVideo";
import { UploadUserVideo } from "src/hooks/UploadUserVideo";
import 'src/css/pages/ContentVideoShow.css';
import 'src/css/globals/text.css';


interface State {
  id: number;
}

const GetContentVideo = () => {
  const [contentVideo, setContentVideo ] = useState<ContentVideo[]>([]);
  const location = useLocation();
  const { id } = location.state as State;
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
      <div style={{ textAlign: 'center', marginTop: '150px' }}>
      {/* <Circular large={60} small={60} /> */}
      <p>ロード中</p>
      </div>
    )
  }


  return (
    <div className="content-video-show">
      <div className="container">
        <div className="content-videos-show-header">
          <h2>ContentsVideos</h2>
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
              <img src={`${process.env.PUBLIC_URL}/mrmime-videoframe.png`} className="mrmime-videoframe" alt="mrmime-videoframe" width="75%" />
              <SetExampleVideo url={contentVideo.attributes.number} />
            </div>
          </div>

          <div className="content-video-show-second-part">
            <img src={`${process.env.PUBLIC_URL}/mrmime-point-frame.png`} className="lecture-photo" alt="mrmime-point-frame" width="100%" />
          </div>

          <div className="content-video-show-third-part">
            <h1 className="content-videos-show-text-first">Are you ready? Let's TRY!</h1>
            <p className="content-videos-show-text-second">『CREATE』であなたから始まる『MOVIE』!</p>

          </div>
          <UploadUserVideo id = { contentVideo.attributes.id } />
        </div>
      </div>
    </div>
  )
}



export const ContentVideoShow= () => {
  const queryClient = new QueryClient();
  return (
    // ProviderでQueryClientを設定する
    <QueryClientProvider client={queryClient}>
      <GetContentVideo />
    </QueryClientProvider>
  );
};


export default ContentVideoShow;
