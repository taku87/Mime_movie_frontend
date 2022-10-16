// @ts-nocheck
import {SetUserCreatedVideo} from "src/components/molecules/SetUserCreatedVideo";
import "src/css/pages/CompletedVideosIndex.css";

export const CompletedVideosIndex = () => {
  return (
    <div className="completed-videos-index">
      <div className="container">
        <h1>now showing</h1>
        <SetUserCreatedVideo />
      </div>
    </div>

  )
}

export default CompletedVideosIndex;