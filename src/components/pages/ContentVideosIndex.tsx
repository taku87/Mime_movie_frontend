import ContentVideosList from "src/components/organisms/ContentVideosList";

import 'src/css/pages/ContentVideosIndex.css';

export const  ContentVideosIndex = () => {
  return(
	<>
  <div className="content-videos-index">
		<div className="container">
			<div className="content-videos-index-header">
				<h2>ContentsVideos</h2>
			</div>
			<ContentVideosList />
		</div>
	</div>
	</>
  );
};

export default ContentVideosIndex;