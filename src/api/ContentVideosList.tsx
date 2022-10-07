// @ts-nocheck
import { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Auth0Context } from 'components/providers/AuthCheckprovider';
import { useState } from 'react';
import axios from 'axios';
import { REST_API_URL } from 'urls/index';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query';

import { ContentVideoCard } from "components/organisms/ContentVideoCard";
import type { ContentVideo } from "types/contentvideo";
//import CircularProgress from '@mui/material/CircularProgress';
const ContentVideos = ({ }) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { setAccessToken } = useContext(Auth0Context);
  const [contentVideos, setContentVideos ] = useState<ContentVideo[]>([]);

  // Queries
  //const query = useQuery<取得するデータ型, Error>('ユニークなクエリキー', データ取得関数);
  let { isLoading: queryLoading } = useQuery(['content_videos'],
    async (isAuthenticated) => {
      const token = isAuthenticated ? await getAccessTokenSilently() : null;
      setAccessToken(token);

      /** GETの処理 */
      const res = await axios
      .get<ContentVideo[]>(`${REST_API_URL}/user/content_videos`,{
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .catch((error) => {
        console.error(error.response.data);
      });
      setContentVideos(res.data.data);
      console.log(contentVideos)
      }
    );

  if (queryLoading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '150px' }}>
      {/* <Circular large={60} small={60} /> */}
      <p>ロード中</p>
      </div>
    );
  }

  if (contentVideos.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <p style={{ fontSize: '13px' }}>
          {' '}
          コンテンツ動画がありません
        </p>
      </div>
      )
    }

  return (
      <div className="container">
        {/** query.isLoadingがtureのとき、つまり、ロード中はクラスネームのローダーのやつが表示*/}
        {contentVideos.map((content_video, index) => (
          <ContentVideoCard
            key = {index}
            id = {content_video.attributes.id}
            number = {content_video.attributes.number}
            title = {content_video.attributes.title}
            description = {content_video.attributes.description}
            youtube_url = {content_video.attributes.youtube_url}
            liked = {content_video.attributes.liked}
          />
        ))}
      </div>
    )
  }

const ContentVideosList = () => {
  const queryClient = new QueryClient();
  return (
    // ProviderでQueryClientを設定する
    <QueryClientProvider client={queryClient}>
      <ContentVideos />
    </QueryClientProvider>
  );
};

export default ContentVideosList;
