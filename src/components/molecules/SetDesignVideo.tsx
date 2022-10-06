import React, { useRef, useEffect } from 'react'
import video_mp4 from "videos/title-animation.mp4"

export function SetDesignVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        videoRef.current?.play();
    }, []);
    return (
                    <video className="movie"  muted ref={videoRef} width="800" height="450" >
                        <source src={video_mp4} type="video/mp4" />
                    </video>
    );
}

export default SetDesignVideo;