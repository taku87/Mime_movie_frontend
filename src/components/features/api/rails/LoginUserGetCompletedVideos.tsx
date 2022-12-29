// @ts-nocheck
import { useContext, memo } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Auth0Context } from 'src/components/providers/AuthCheckprovider';
import { useState } from 'react';
import axios from 'src/lib/axios';
import { REST_API_URL, API_URL } from 'src/urls/index';
import { useQuery } from 'react-query';

import { CompletedVideoCard } from "src/components/ui/parts/CompletedVideoCard";

import type { ContentVideo } from "src/types/contentvideo";
import CircularProgress from '@mui/material/CircularProgress';
import "src/css/globals/text.css";

  export const LoginUserGetCompletedVideos = memo(() => {
    const { getAccessTokenSilently } = useAuth0();
    const { setAccessToken } = useContext(Auth0Context);
    const [contentVideos, setContentVideos ] = useState<ContentVideo[]>([]);

    const csrf_token = () => {
      axios
        .get(`${API_URL}/secured`)
        .then((response) => {
        })
    }
    csrf_token()

    let { isLoading: queryLoading } = useQuery(['content_videos'],
    async (isAuthenticated) => {
      const token = await getAccessTokenSilently();
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

    if ( contentVideos === void 0 || contentVideos.length === 0) {
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
        {/** query.isLoadingがtureのとき、つまり、ロード中はクラスネームのローダーのやつが表示*/}
        {contentVideos.map((content_video,index) => (
            <CompletedVideoCard
              key = {`${content_video.id}11${index}`}
              id = {content_video.attributes.id}
              youtube_url = {content_video.attributes.youtube_url}
              comments = {content_video.attributes.comments}
              liked = {content_video.attributes.liked}
              like_amount = {content_video.attributes.like_amount}
            />
        ))}
      </>
    )
  })

  export default LoginUserGetCompletedVideos;
