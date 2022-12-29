import ContentVideosList from "src/components/ui/parts/ContentVideosList";

import 'src/css/pages/ContentVideosIndex.css';
import "src/css/globals/text.css";
import "src/css/globals/common.css";

export const  ContentVideosIndex = () => {
  return(
	<>
  <div className="content-videos-index">
		<div className="content-videos-index-container">
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