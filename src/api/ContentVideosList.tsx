import axios from 'axios';
import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query';


import { ContentVideoCard } from "components/organisms/ContentVideoCard";
import type { ContentVideo } from "types/contentvideo";

//import CircularProgress from '@mui/material/CircularProgress';


const ContentVideos = () => {
  //const [isLoading, setIsLoading] = useState(false);
  const [contentVideos, setContentVideos ] = useState<ContentVideo[]>([]);
  // Queries
  //const query = useQuery<取得するデータ型, Error>('ユニークなクエリキー', データ取得関数);
  let { isLoading: queryLoading, data: content_videos } = useQuery(
    ['content_videos'],
    async () => {
      /** GETの処理 */
      const res = await axios
      .get<ContentVideo[]>('http://localhost:3001/api/v1/user/content_videos');
        setContentVideos(res.data);
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
            id = {content_video.id}
            number = {content_video.number}
            title = {content_video.title}
            description = {content_video.description}
            youtube_url = {content_video.youtube_url}
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
