// @ts-nocheck
import { memo } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import { useState } from 'react';
import axios from 'axios';
import { REST_API_URL } from 'src/urls/index';
import { useQuery } from 'react-query';

import type { ContentVideo } from "src/types/contentvideo";

import { CompletedVideoCard } from "src/components/organisms/CompletedVideoCard";

const CompletedVideos = () => {
  const [contentVideos, setContentVideos ] = useState<ContentVideo[]>([]);
    let { isLoading: queryLoading } = useQuery(['content_videos'],
    async () => {
      const res = await axios
      .get<ContentVideo[]>(`${REST_API_URL}/guest/content_videos`,{
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .catch((error) => {
        console.error(error.response.data);
      });
      setContentVideos(res.data.data);
    })

    if (queryLoading) {
      return (
        <div style={{ textAlign: 'center', marginTop: '150px' }}>
        {/* <Circular large={60} small={60} /> */}
        <p>ロード中</p>
        </div>
      );
    }

    console.log(contentVideos)

    if (contentVideos === void 0 || contentVideos.length === 0) {
      return (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ fontSize: '13px' }}>
            {' '}
            完成版動画がありません
          </p>
        </div>
      )
    }

  return (
    <>
      {contentVideos.map((content_video) => (
        <CompletedVideoCard
          key = {content_video.attributes.id}
          id = {content_video.attributes.id}
          youtube_url = {content_video.attributes.youtube_url}
          comment = {content_video.attributes.comment}
        />
      ))}
    </>
  )
}

export const CompletedVideosList = memo(() => {
  const queryClient = new QueryClient();
  return (
    // ProviderでQueryClientを設定する
    <QueryClientProvider client={queryClient}>
      <CompletedVideos />
    </QueryClientProvider>
  );
});

export default CompletedVideosList;