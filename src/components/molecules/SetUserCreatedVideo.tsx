import  { useRef, useEffect } from 'react'
//import video_mp4 from `${process.env.PUBLIC_URL}/videos/title-animation.mp4`
import "src/css/molecules/SetUserCreatedVideo.css";


export const   SetUserCreatedVideo = ( url :any) => {

    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        videoRef.current?.play();
    }, []);
    return (
      <div className="user-created-video-wrapper">
        <div className="created-video-design-frame">
          <video className="user-created-video" controls ref={videoRef} >
            <source src={`https://completed-videos-s3-01.s3.ap-northeast-1.amazonaws.com/${url}.mp4`} type="video/mp4" />
          </video>
          <img src={`${process.env.PUBLIC_URL}/cinema-light.png`} className="user-created-video-design-bottom" />
        </div>
      </div>
    );
}

export default SetUserCreatedVideo;