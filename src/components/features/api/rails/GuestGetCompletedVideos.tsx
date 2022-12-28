// @ts-nocheck
import { useState } from 'react';
import  {AxiosResponse} from 'axios';
import axios from 'src/lib/axios';
import { REST_API_URL, API_URL } from 'src/urls/index';
import { useQuery } from 'react-query';

import type { ContentVideos } from "src/types/contentvideo";
import { CompletedVideoCard } from "src/components/ui/parts/CompletedVideoCard";

import CircularProgress from '@mui/material/CircularProgress';
import "src/css/globals/text.css";


export const GuestGetCompletedVideos = () => {

  const csrf_token = () => {
    axios
      .get(`${API_URL}/secured`)
      .then((response) => {
      })
  }
  csrf_token()

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
      })
      .catch((error) => {
        console.error(error.response.data);
      });

    })

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
      );
    }

    if (contentVideos === void 0 || contentVideos.length === 0) {
      return (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p className="loading-text" >
            {' '}
            完成版動画はありません
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
          like_amount = {content_video.attributes.like_amount}
        />
      ))}
    </>
  )
}

export default GuestGetCompletedVideos;