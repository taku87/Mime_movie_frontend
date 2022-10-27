//import YouTube from 'react-youtube';
import "src/css/molecules/SetYoutubeVideo.css";

export const SetYoutubeVideo = (props: any) => {
  const { videoid } = props;
    return(
    <div className="responsive">
      <iframe src="https://www.youtube.com/embed/BZeHfLsVMTo?rel=0"
      width="100%" height="100%" title="YouTube video player" frameBorder="0" allow="gyroscope; picture-in-picture" allowFullScreen ></iframe>
    </div>
    )
  }

//<YouTube videoId= {videoid}  className="youtube" />

