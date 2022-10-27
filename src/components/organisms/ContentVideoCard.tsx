// @ts-nocheck
import { useState, memo  } from 'react';
import { LikeButton } from "src/components/molecules/LikeButton";
import { UnlikeButton } from "src/components/molecules/UnlikeButton";
import { FlipCardButton } from "src/components/molecules/FlipCardButton";
import type { ContentVideo } from "src/types/contentvideo"

import 'src/css/organisms/ContentVideoCard.css';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';


export const ContentVideoCard = memo((props: ContentVideo) => {
  const {
    id,
    title,
    description,
    thumbnail,
    liked,
  } = props;
  const [likedState, setLikedState] = useState(liked);

  const SwitchLikeButtons = memo(() => {
    return(
      <>
        {likedState ? (
            <UnlikeButton id={id} changeLikedState={setLikedState} className="content-video-card-button" />
          ) : (
            <LikeButton id={id} changeLikedState={setLikedState} className="content-video-card-button" />
        )}
      </>
    )
  })

  return (
    <div className="card">
      <Grid container spacing={2}>
        <Grid xs={0} lg={2}></Grid>
        <Grid xs={12} lg={8}>
          <div>
            <div className="content-video-card-information-list">
              <div className="information-box">
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" >
                    {description}
                  </Typography>
              </div>
            </div>
            <div className="content-video-card-button-list">
              {likedState === undefined ? (
                <></>
                ) : (
                    <SwitchLikeButtons />
                  )}
            </div>

            <div className="thumbnail-frame">
              <div class="image">
                <img src={`${process.env.PUBLIC_URL}/thumbnail/${thumbnail}`} alt="thumbnail" className="thumbnail-card" />
              </div>
              <div className="thumbnail-door" >
                <FlipCardButton id={id}  />
              </div>
            </div>
          </div>
        </Grid>
        <Grid xs={0} lg={2}></Grid>
      </Grid>
    </div>
  )
})
