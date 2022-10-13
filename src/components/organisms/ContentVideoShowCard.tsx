// @ts-nocheck
//import { useState } from 'react';
//import YouTube from 'react-youtube';
//import { Link } from 'react-router-dom';
//import { LikeButton } from "src/components/molecules/LikeButton";
//import { UnlikeButton } from "src/components/molecules/UnlikeButton";
import type { ContentVideo } from "src/types/contentvideo";

//import Box from '@mui/material/Box';
import Card from "@material-ui/core/Card";
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
//import Grid from '@mui/material/Unstable_Grid2';

export const ContentVideoShowCard = (props: ContentVideo) => {
  const {
    id,
    //number,
    title,
    //description,
    thumbnail,
    //liked,
  } = props;
//  const {setLikedState} = useState(liked);

  return (
    <div>
    <h1>個別記事 {id}</h1>
    <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <img src={`${process.env.PUBLIC_URL}/thumbnail/${thumbnail}`} width="100%" />
    </Card>
    </div>
  )
}
