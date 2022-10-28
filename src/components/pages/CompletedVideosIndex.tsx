// @ts-nocheck
import {CompletedVideoShowCard} from "src/components/organisms/CompletedVideoShowCard";
import "src/css/pages/CompletedVideosIndex.css";
import "src/css/globals/common.css";

export const CompletedVideosIndex = () => {
  return (
    <div className="completed-videos-index">
      <div className="completed-videos-container">
        <div className="completed-videos-index-header">
            <h1 className="completed-videos-index-text-first" >Theater Room</h1>
        </div>
          <CompletedVideoShowCard className="completed-video-set"  />
      </div>
    </div>

  )
}

export default CompletedVideosIndex;