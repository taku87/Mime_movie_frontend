// @ts-nocheck
import { memo } from 'react';
import { useState } from 'react';
import axios from 'src/lib/axios';
import { REST_API_URL, API_URL } from 'src/urls/index';
import { useQuery } from 'react-query';

import SwingVideos from "src/components/ui/pages/SwingVideos";
import { ContentVideoCard } from "src/components/ui/parts/ContentVideoCard";

import type { ContentVideo } from "src/types/contentvideo";
import CircularProgress from '@mui/material/CircularProgress';
import "src/css/globals/text.css";

export const GuestGetContentVideos = memo(() => {

  const csrf_token = () => {
    axios
      .get(`${API_URL}/secured`)
      .then((response) => {
      })
  }
  csrf_token()

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
            コンテンツ動画はありません
          </p>
        </div>
      )
    }


    return (
      <>
        <SwingVideos contentVideos = {contentVideos} />
        {/** query.isLoadingがtureのとき、つまり、ロード中はクラスネームのローダーのやつが表示*/}
        {contentVideos.map((content_video,index) => (
            <ContentVideoCard
              key = {`${content_video.id}11${index}`}
              id = {content_video.attributes.id}
              number = {content_video.attributes.number}
              title = {content_video.attributes.title}
              description = {content_video.attributes.description}
              thumbnail = {content_video.attributes.thumbnail}
              state = {content_video.attributes.state}
            />
        ))}
      </>
    )
  })