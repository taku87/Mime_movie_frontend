import React, { useRef, useEffect } from 'react'
//import video_mp4 from `${process.env.PUBLIC_URL}/videos/title-animation.mp4`

export function SetDesignVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        videoRef.current?.play();
    }, []);
    return (
                    <video className="movie"  muted ref={videoRef} width="800" height="450" >
                        <source src={`${process.env.PUBLIC_URL}/videos/title-animation.mp4`} type="video/mp4" />
                    </video>
    );
}

export default SetDesignVideo;