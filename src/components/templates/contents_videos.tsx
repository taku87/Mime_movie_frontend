import SetContentsVideo from "components/molecules/SetContentsVideo";
import { SwingVideos } from "components/molecules/SwingVideos";


export const  ContentsVideos = () => {
  return(
	<>
	<h2>ContentsVideos</h2>;
	<SetContentsVideo />
  <SwingVideos />
	<SetContentsVideo />

	</>
  );
};

export default ContentsVideos;