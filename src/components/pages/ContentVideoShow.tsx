// @ts-nocheck
import { useState } from 'react';
import axios from 'axios';
import { REST_API_URL } from 'urls/index';
import type { ContentVideo } from "types/contentvideo";
import { useLocation } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query';
import { ContentVideoShowCard } from "components/organisms/ContentVideoShowCard";
import Card from "@material-ui/core/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { idText } from 'typescript';

interface State {
  id: number;
}

const GetContentVideo = ({}) => {
  const [contentVideo, setContentVideo ] = useState<ContentVideo[]>([]);
  const location = useLocation();
  const { id } = location.state as State;
  let { isLoading: queryLoading } = useQuery(['content_videos'],
    async () => {
  //const { state } = useLocation();
  //const { id, title, youtube_url } = state;

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
      console.log(res.data.data)
      console.log(contentVideo)
    }
  );
  console.log(contentVideo)
  if (queryLoading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '150px' }}>
      {/* <Circular large={60} small={60} /> */}
      <p>ロード中</p>
      </div>
    )
  }


  return (
    <div className="container">
      {/** query.isLoadingがtureのとき、つまり、ロード中はクラスネームのローダーのやつが表示*/}
        <ContentVideoShowCard
          id = {contentVideo.attributes.id}
          number = {contentVideo.attributes.number}
          title = {contentVideo.attributes.title}
          description = {contentVideo.attributes.description}
          youtube_url = {contentVideo.attributes.youtube_url}
          //liked = {contentVideo.attributes.liked}
        />
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
