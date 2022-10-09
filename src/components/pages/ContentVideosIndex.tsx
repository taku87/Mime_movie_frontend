//import SetContentVideo from "components/molecules/SetContentVideo";
import { SwingVideos } from "components/molecules/SwingVideos";
import ContentVideosList from "components/organisms/ContentVideosList";

export const  ContentVideosIndex = () => {
  return(
	<>
	<h2>ContentsVideos</h2>
  <SwingVideos />
	<ContentVideosList />
	</>
  );
};

export default ContentVideosIndex;