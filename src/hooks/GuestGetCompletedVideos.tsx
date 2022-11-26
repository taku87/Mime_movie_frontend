// @ts-nocheck
import { memo } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import { useState } from 'react';
import axios, {AxiosResponse} from 'axios';
import { REST_API_URL } from 'src/urls/index';
import { useQuery } from 'react-query';


import type { ContentVideo, ContentVideos } from "src/types/contentvideo";
import { CompletedVideoCard } from "src/components/organisms/CompletedVideoCard";


export const GuestGetCompletedVideos = () => {
  const [contentVideos, setContentVideos ] = useState<ContentVideos[]>([]);
    let { isLoading: queryLoading } = useQuery(['content_videos'],
    async () => {
      await axios
      .get<ContentVideos[]>(`${REST_API_URL}/guest/content_videos`,{
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res: AxiosResponse<ContentVideos[]>) => {
        const { data } = res;
        setContentVideos(data.data);
        console.log(data)
        console.log(data.data)
      })
      .catch((error) => {
        console.error(error.response.data);
      });

    })

    if (queryLoading) {
      return (
        <div style={{ textAlign: 'center', marginTop: '150px' }}>
        {/* <Circular large={60} small={60} /> */}
        <p>ロード中</p>
        </div>
      );
    }

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
          comments = {content_video.attributes.comments}
        />
      ))}
    </>
  )
}

export default GuestGetCompletedVideos;