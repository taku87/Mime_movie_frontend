//import SetContentVideo from "components/molecules/SetContentVideo";
import { SwingVideos } from "components/molecules/SwingVideos";
import ContentVideosList from "api/ContentVideosList";

export const  ContentVideos = () => {
  return(
	<>
	<h2>ContentsVideos</h2>
  <SwingVideos />
	<ContentVideosList />
	</>
  );
};

export default ContentVideos;