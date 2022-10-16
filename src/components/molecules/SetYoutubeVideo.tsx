import YouTube from 'react-youtube';

export const SetYoutubevideo = (props: any) => {
  const { videoid } = props;

    return(
      <div>
        <YouTube videoId= {videoid} />
      </div>
    )
  }
