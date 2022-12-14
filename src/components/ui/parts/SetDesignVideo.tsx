import React, { useRef, useEffect } from 'react'
import type { Video } from "src/types/video";

export const SetDesignVideo = (props :Video) => {
  const {url} = props;
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        videoRef.current?.play();
    }, []);
    return (
      <video className="set-design-movie" playsInline  autoPlay muted loop ref={videoRef}  >
          <source src={`${process.env.PUBLIC_URL}/videos/${url}.mp4`} type="video/mp4" />
      </video>
    );
}

export default SetDesignVideo;
