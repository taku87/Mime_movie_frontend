// @ts-nocheck
import { memo } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { REST_API_URL } from 'src/urls/index';
import { useQuery } from 'react-query';

import SwingVideos from "src/components/molecules/SwingVideos";
import { ContentVideoCard } from "src/components/organisms/ContentVideoCard";

import type { ContentVideo } from "src/types/contentvideo";
//import CircularProgress from '@mui/material/CircularProgress';


export const GuestGetContentVideos = memo(() => {
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
            コンテンツ動画がありません
          </p>
        </div>
      )
    }


    return (
      <div className="container">
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
              liked = {content_video.attributes.liked}
              like_amount = {content_video.attributes.like_amount}
              state = {content_video.attributes.state}
              comment = {content_video.attributes.comment}
            />
        ))}
      </div>
    )
  })