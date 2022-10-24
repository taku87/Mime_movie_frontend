import YouTube from 'react-youtube';

export const SetYoutubeVideo = (props: any) => {
  const { videoid } = props;

    return(
      <div>
        <YouTube videoId= {videoid} />
      </div>
    )
  }
