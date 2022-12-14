
import {CompletedVideosList} from 'src/components/ui/parts/CompletedVideosList';
import "src/css/pages/CompletedVideosIndex.css";
import "src/css/globals/common.css";

export const CompletedVideosIndex = () => {
  return (
    <div className="completed-videos-index">
      <div className="completed-videos-container">
        <div className="completed-videos-index-header">
            <h1 className="completed-videos-index-text-first" >Theater Room</h1>
        </div>
          <CompletedVideosList />
      </div>
    </div>
  )
}

export default CompletedVideosIndex;