import  { useRef, useEffect } from 'react'
import type { Video } from "src/types/video";

export const SetInformationVideo = (props :Video) => {
  const {url} = props;
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        videoRef.current?.play();
    }, []);
    return (
      <video className="movie" playsInline  ref={videoRef} width="800" height="450" >
          <source src={`${process.env.PUBLIC_URL}/videos/${url}.mp4`} type="video/mp4" />
      </video>
    );
}

export default SetInformationVideo;