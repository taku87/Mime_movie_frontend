// @ts-nocheck
//import type { CompletedVideo } from "src/types/contentvideo";
import { SetYoutubeVideo } from "src/components/molecules/SetYoutubeVideo";
import 'src/css/organisms/CompletedVideoShowCard.css';

export const CompletedVideoShowCard = () => {

  return (
      <div className="set-completed-video-wrapper">
        <div className="completed-video-design-frame">
          <SetYoutubeVideo videoid={"7BAJuWQYeyw"} />
          <img src={`${process.env.PUBLIC_URL}/movie-curtain.png`} alt="movie-curtain" className="completed-video-design-frame-curtain" />
          <img src={`${process.env.PUBLIC_URL}/movie-light.png`} alt="movie-light" className="completed-video-design-bottom" />
        </div>
      </div>

  )
}
