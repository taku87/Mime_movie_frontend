// @ts-nocheck
import { useContext, memo } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Auth0Context } from 'src/components/providers/AuthCheckprovider';
import { useState } from 'react';
import axios from 'axios';
import { REST_API_URL } from 'src/urls/index';
import { useQuery } from 'react-query';

import { CompletedVideoCard } from "src/components/organisms/CompletedVideoCard";

import type { ContentVideo } from "src/types/contentvideo";
//import CircularProgress from '@mui/material/CircularProgress';

  export const LoginUserGetCompletedVideos = memo(() => {
    const { getAccessTokenSilently } = useAuth0();
    const { setAccessToken } = useContext(Auth0Context);
    const [contentVideos, setContentVideos ] = useState<ContentVideo[]>([]);

    console.log("ログインユーザーで実行")

    let { isLoading: queryLoading } = useQuery(['content_videos'],
    async (isAuthenticated) => {
      const token = await getAccessTokenSilently();
      setAccessToken(token);
      console.log(token);
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

    if ( contentVideos === void 0 || contentVideos.length === 0) {
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
        {contentVideos.map((content_video,index) => (
            <CompletedVideoCard
              key = {`${content_video.id}11${index}`}
              id = {content_video.attributes.id}
              youtube_url = {content_video.attributes.youtube_url}
              comment = {content_video.attributes.comment}
              liked = {content_video.attributes.liked}
              like_amount = {content_video.attributes.like_amount}
            />
        ))}
      </div>
    )
  })

  export default LoginUserGetCompletedVideos;
