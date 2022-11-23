import  { useRef, useEffect, memo } from 'react'
import { useLocation } from "react-router-dom";
//import video_mp4 from `${process.env.PUBLIC_URL}/videos/title-animation.mp4`
import "src/css/molecules/SetUserCreatedVideo.css";
import 'src/css/organisms/CompletedVideoCard.css';
import "src/css/globals/text.css";
import "src/css/globals/common.css";
import { LoadingCountButton } from "src/components/molecules/LoadingCountButton";
import { ShareButton } from "src/components/atoms/ShareButton";
import { DownloadCreatedVideo } from "src/hooks/DownloadCreatedVideo";

export const   SetUserCreatedVideo = memo(() => {
  const location = useLocation()
  const  user_created_file_name = location.state;
    //const user_created_file_name = filename["filename"]
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        videoRef.current?.play();
    }, []);
    return (
      <div className="set-user-created-video-wrapper">
        <LoadingCountButton />
        <h1 className="completed-video-card-text" >Now Showing</h1>
        <div className="completed-video-design-frame">
          <video className="user-created-video"  playsInline controls ref={videoRef} >
            <source src={`https://completed-videos-s3-01.s3.ap-northeast-1.amazonaws.com/${user_created_file_name}_completed.mp4`} type="video/mp4" />
          </video>
          <img src={`${process.env.PUBLIC_URL}/movie-curtain-left.png`} alt="movie-curtain" className="completed-video-design-frame-curtain-left" />
          <img src={`${process.env.PUBLIC_URL}/movie-curtain-right.png`} alt="movie-curtain" className="completed-video-design-frame-curtain-right" />
          <img src={`${process.env.PUBLIC_URL}/movie-light.png`} alt="movie-light" className="completed-video-design-bottom" />
          <img src={`${process.env.PUBLIC_URL}/mrmime-popcorn.png`} alt="mrmime-popcorn" className="completed-video-mrmime-popcorn" />
        </div>
        <ShareButton URL={'https://mime-movie.com'} QUOTE={'あなたが撮った映像からストーリーが始まる映像を作れるアプリ！マイムムービー!'} />
        <DownloadCreatedVideo URL={`${user_created_file_name}_completed.mp4`} />
      </div>
    );
})

export default SetUserCreatedVideo;
