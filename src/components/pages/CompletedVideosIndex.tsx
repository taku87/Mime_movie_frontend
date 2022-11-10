// @ts-nocheck
import { CompletedVideosList } from "src/components/organisms/CompletedVideosList";
import "src/css/pages/CompletedVideosIndex.css";
import "src/css/globals/common.css";

export const CompletedVideosIndex = () => {
  return (
    <div className="completed-videos-index">
      <div className="completed-videos-container">
        <div className="completed-videos-index-header">
            <h1 className="completed-videos-index-text-first" >Theater Room</h1>
        </div>
          <CompletedVideosList className="completed-video-set"  />
      </div>
    </div>
  )
}

export default CompletedVideosIndex;