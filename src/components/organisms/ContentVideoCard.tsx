import { useState } from 'react';
import YouTube from 'react-youtube';
import { LikeButton } from "components/molecules/LikeButton";
import { UnlikeButton } from "components/molecules/UnlikeButton";

import type { ContentVideo } from "types/contentvideo";

export const ContentVideoCard = (props: ContentVideo) => {
  const {
    id,
    number,
    title,
    description,
    youtube_url
  } = props;
  const [LikedState, setLikedState] = useState(false);
  return (
    <div className="card" key={id}>
      <h2>{number}</h2>
      <h2>{title}</h2>
      <h2>{description}</h2>
      <YouTube videoId= {youtube_url} />

      {LikedState ? (
          <UnlikeButton id={id} changeLike={LikedState}/>
        ) : (
          <LikeButton id={id} changeLike={LikedState} />
        )}
    </div>
  )
}

export default ContentVideoCard;
