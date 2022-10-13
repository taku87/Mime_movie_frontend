// @ts-nocheck
import { useState } from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
import { LikeButton } from "src/components/molecules/LikeButton";
import { UnlikeButton } from "src/components/molecules/UnlikeButton";
import type { ContentVideo } from "src/types/contentvideo";

import 'src/css/organisms/ContentVideoCard.css';
import Box from '@mui/material/Box';
import Card from "@material-ui/core/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';


export const ContentVideoCard = (props: ContentVideo) => {
  const {
    id,
    number,
    title,
    description,
    thumbnail,
    liked,
  } = props;
  const {setLikedState} = useState(liked);

  return (
    <div className="card" key={id}>
      <box>
        <Grid container spacing={2}>
          <Grid xs={0} lg={2}></Grid>
          <Grid xs={12} lg={8}>
            <div>
              <div className="content-video-card-information-list">
                <foreignObject Id="svg-section" Width="100%" Height="100%" Style="height: 100%; overflow: auto;">
                  <div class="pic-container">
                      <div class="box">
                      <div>
                        <Typography gutterBottom variant="h5" component="div">
                          {title}
                        </Typography>
                        <Typography variant="body2" >
                          {description}
                        </Typography>
                      </div>
                      </div>
                  </div>
                </foreignObject>
              </div>
              <div className="content-video-card-button-list">
                  {liked ? (
                      <UnlikeButton id={id} changeLike={setLikedState} className="content-video-card-button" />
                    ) : (
                      <LikeButton id={id} changeLike={setLikedState} className="content-video-card-button" />
                    )}
              </div>
              <Link to={`/contents_videos/${id}`} state={{id : id}}>
                このコンテンツで撮影チャレンジ！
              </Link>
              <img src={`${process.env.PUBLIC_URL}/thumbnail/${thumbnail}`} width="100%" />
            </div>
          </Grid>
          <Grid xs={0} lg={2}></Grid>
        </Grid>
      </box>
    </div>
  )
}
