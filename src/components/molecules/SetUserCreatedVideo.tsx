import  { useRef, useEffect, memo } from 'react'
import { useLocation } from "react-router-dom";
//import video_mp4 from `${process.env.PUBLIC_URL}/videos/title-animation.mp4`
import "src/css/molecules/SetUserCreatedVideo.css";


export const   SetUserCreatedVideo = memo(() => {
  const location = useLocation()
  const  user_created_file_name = location.state;
    //const user_created_file_name = filename["filename"]
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        videoRef.current?.play();
    }, []);
    return (
      <div className="user-created-video-wrapper">
        <div className="created-video-design-frame">
          <video className="user-created-video" controls ref={videoRef} >
            <source src={`https://completed-videos-s3-01.s3.ap-northeast-1.amazonaws.com/${user_created_file_name}_completed.mp4`} type="video/mp4" />
          </video>
          <img src={`${process.env.PUBLIC_URL}/movie-curtain.png`} alt="movie-curtain" className="created-video-design-frame-curtain" />
          <img src={`${process.env.PUBLIC_URL}/movie-light.png`} alt="movie-light" className="user-created-video-design-bottom" />
        </div>
      </div>
    );
})

export default SetUserCreatedVideo;
