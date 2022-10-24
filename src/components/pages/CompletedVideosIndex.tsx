// @ts-nocheck
import {CompletedVideoShowCard} from "src/components/organisms/CompletedVideoShowCard";
import "src/css/pages/CompletedVideosIndex.css";

export const CompletedVideosIndex = () => {
  return (
    <div className="completed-videos-index">
      <div className="completed-videos-container">
        <div className="completed-video-set">
          <h1>now showing</h1>
          <CompletedVideoShowCard />
        </div>
      </div>
    </div>

  )
}

export default CompletedVideosIndex;