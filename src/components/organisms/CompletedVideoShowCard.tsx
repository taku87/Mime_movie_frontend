// @ts-nocheck
//import type { CompletedVideo } from "src/types/contentvideo";
import { SetYoutubeVideo } from "src/components/molecules/SetYoutubeVideo";
import 'src/css/organisms/CompletedVideoShowCard.css';
import "src/css/globals/text.css"

export const CompletedVideoShowCard = () => {

  return (
      <div className="set-completed-video-wrapper">
        <h1 className="completed-video-card-text" >Now Showing</h1>
        <div className="completed-video-design-frame">
          <SetYoutubeVideo videoid={"BZeHfLsVMTo"} className="youtube" />
          <img src={`${process.env.PUBLIC_URL}/movie-curtain-left.png`} alt="movie-curtain" className="completed-video-design-frame-curtain-left" />
          <img src={`${process.env.PUBLIC_URL}/movie-curtain-right.png`} alt="movie-curtain" className="completed-video-design-frame-curtain-right" />
          <img src={`${process.env.PUBLIC_URL}/movie-light.png`} alt="movie-light" className="completed-video-design-bottom" />
          <img src={`${process.env.PUBLIC_URL}/mrmime-popcorn.png`} alt="mrmime-popcorn" className="completed-video-mrmime-popcorn" />
        </div>
      </div>

  )
}
