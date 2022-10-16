// @ts-nocheck
import type { ContentVideo } from "src/types/contentvideo";

import Card from "@material-ui/core/Card";

import 'src/css/organisms/ContentVideoShowCard.css';

export const ContentVideoShowCard = (props: ContentVideo) => {
  const {
    title,
    description,
    thumbnail,
  } = props;

  return (
    <div  className="content-video-card-information-list">
      <div className="information-box">
        <div className="video-card-title">
          {title}
        </div>
        <div div className="video-card-description">
          {description}
        </div>
      </div>
      <Card className="video-card-thumbnail">
          <img src={`${process.env.PUBLIC_URL}/thumbnail/${thumbnail}`} alt="thumbnail" width="100%" />
      </Card>
    </div>
  )
}
