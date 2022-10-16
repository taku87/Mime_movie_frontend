import React, { useRef, useEffect } from 'react'
import 'src/css/molecules/SetExampleVideo.css';

export const SetExampleVideo = (props :any) => {
  const {url} = props;
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        videoRef.current?.play();
    }, []);
    return (
      <video className="movie" controls muted ref={videoRef} width="800" height="450" >
          <source src={`${process.env.PUBLIC_URL}/videos/example/${url}.mp4`} type="video/mp4" />
      </video>
    );
}

export default SetExampleVideo;