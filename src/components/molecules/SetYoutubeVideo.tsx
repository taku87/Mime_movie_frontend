import YouTube from 'react-youtube';
import "src/css/molecules/SetYoutubeVideo.css";
import style from "src/css/atoms/SetYoutubeVideo.module.css";

export const SetYoutubeVideo = (props: any) => {
  const { videoid } = props;
    return(
      <YouTube videoId={videoid} className={style.iframe} />
    )
  }