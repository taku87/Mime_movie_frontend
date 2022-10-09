// @ts-nocheck
import { useState } from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
import { LikeButton } from "components/molecules/LikeButton";
import { UnlikeButton } from "components/molecules/UnlikeButton";
import type { ContentVideo } from "types/contentvideo";

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
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
              <CardActions>
                {liked ? (
                    <UnlikeButton id={id} changeLike={setLikedState}/>
                  ) : (
                    <LikeButton id={id} changeLike={setLikedState} />
                  )}
              </CardActions>
              <Link to={`/contents_videos/${id}`} state={{id : id}}>
                このコンテンツで撮影チャレンジ！
              </Link>
              <img src={`${process.env.PUBLIC_URL}/thumbnail/${thumbnail}`} width="100%" />
            </Card>
          </Grid>
          <Grid xs={0} lg={2}></Grid>
        </Grid>
      </box>
    </div>
  )
}
