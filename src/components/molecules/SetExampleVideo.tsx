import React, { useRef, useEffect } from 'react'
import 'src/css/molecules/SetExampleVideo.css';

export const SetExampleVideo = (props :any) => {
  const {url} = props;
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        videoRef.current?.play();
    }, []);
    return (
      <video className="video-frame" playsInline controls  muted ref={videoRef}  >
          <source className="movie" src={`${process.env.PUBLIC_URL}/videos/${url}.mp4`} type="video/mp4" />
      </video>
    );
}

export default SetExampleVideo;