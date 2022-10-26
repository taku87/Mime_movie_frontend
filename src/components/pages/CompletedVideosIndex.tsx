// @ts-nocheck
import {CompletedVideoShowCard} from "src/components/organisms/CompletedVideoShowCard";
import "src/css/pages/CompletedVideosIndex.css";

export const CompletedVideosIndex = () => {
  return (
    <div className="completed-videos-index">
      <div className="completed-videos-container">
          <CompletedVideoShowCard className="completed-video-set"  />
      </div>
    </div>

  )
}

export default CompletedVideosIndex;