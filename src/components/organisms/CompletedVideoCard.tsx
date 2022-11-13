// @ts-nocheck
//import type { CompletedVideo } from "src/types/contentvideo";
import { useAuth0 } from '@auth0/auth0-react';
import { SetYoutubeVideo } from "src/components/molecules/SetYoutubeVideo";
import { PostComment } from "src/hooks/PostComment";
import { CommentList } from "src/components/organisms/CommentList";
import 'src/css/organisms/CompletedVideoCard.css';
import "src/css/globals/text.css"

import type { ContentVideo } from "src/types/contentvideo"

export const CompletedVideoCard = ( props: ContentVideo ) => {
  const {isAuthenticated } = useAuth0();
  const {
    id,
    youtube_url,
    comment
  } = props;

  return (
      <div className="set-completed-video-wrapper">
        <h1 className="completed-video-card-text" >Now Showing</h1>
        <div className="completed-video-design-frame">
          <SetYoutubeVideo videoid={youtube_url} className="youtube-frame" />
          <img src={`${process.env.PUBLIC_URL}/movie-curtain-left.png`} alt="movie-curtain" className="completed-video-design-frame-curtain-left" />
          <img src={`${process.env.PUBLIC_URL}/movie-curtain-right.png`} alt="movie-curtain" className="completed-video-design-frame-curtain-right" />
          <img src={`${process.env.PUBLIC_URL}/movie-light.png`} alt="movie-light" className="completed-video-design-bottom" />
          <img src={`${process.env.PUBLIC_URL}/mrmime-popcorn.png`} alt="mrmime-popcorn" className="completed-video-mrmime-popcorn" />
        </div>
          { isAuthenticated ? ( <PostComment content_video_id={id} /> ) : ( <></> )}
        <CommentList comments={comment} />
      </div>
  )
}

export default CompletedVideoCard;