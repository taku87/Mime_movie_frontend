
import {  memo } from 'react';
import { FlipCardButton } from "src/components/molecules/FlipCardButton";
import type { ContentVideo } from "src/types/contentvideo"

import 'src/css/organisms/ContentVideoCard.css';
import Grid from '@mui/material/Unstable_Grid2';


export const ContentVideoCard = memo((props: ContentVideo) => {
  const {
    id,
    title,
    description,
    thumbnail,
    state,
  } = props;

  return (
    <div className="card">
      <Grid container spacing={2}>
        <Grid xs={0} lg={2}></Grid>
        <Grid xs={12} lg={8}>
          <div>
            <div className="content-video-card-information-list">
              <div className="information-box">
                  <div  className="info-title" >
                    {title}
                  </div>
                  <div className="info-description" >
                    {description}
                  </div>
              </div>
            </div>

            <div className="thumbnail-frame">
              <div className="image">
                <img src={`${process.env.PUBLIC_URL}/thumbnail/${thumbnail}`} alt="thumbnail" className="thumbnail-card" />
              </div>
              <div className="thumbnail-door" >
                { state === "draft" ? (
                  <div className="door-waiting"></div>
                  ) : (
                      <FlipCardButton id={id}  />
                    )}
              </div>
            </div>
          </div>
        </Grid>
        <Grid xs={0} lg={2}></Grid>
      </Grid>
    </div>
  )
})
