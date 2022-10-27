import ContentVideosList from "src/components/organisms/ContentVideosList";

import 'src/css/pages/ContentVideosIndex.css';
import "src/css/globals/text.css"

export const  ContentVideosIndex = () => {
  return(
	<>
  <div className="content-videos-index">
		<div className="container">
			<div className="content-videos-index-header">
				<h1 className="content-videos-index-text-first" >Show Room</h1>
			</div>
			<ContentVideosList />
		</div>
	</div>
	</>
  );
};

export default ContentVideosIndex;