import {
  //FacebookShareButton,
  //HatenaShareButton,
  LineShareButton,
  TwitterShareButton,
  //FacebookIcon,
  //HatenaIcon,
  LineIcon,
  TwitterIcon,
} from "react-share";

import 'src/css/atoms/ShareButton.css';

type ShareProps = {
  URL: string;
  QUOTE: string;
}

export const ShareButton = (props :ShareProps) => {
  const { URL, QUOTE } = props;
  const PF = "MIMEMOVIE";
  return (
    <div className="share-button">
      <div>
        <TwitterShareButton url={URL} title={QUOTE} hashtags={[PF]} >
          <TwitterIcon size={60} round />
        </TwitterShareButton>
      </div>
      <div>
        <LineShareButton url={URL} title={QUOTE} >
          <LineIcon size={60} round />
        </LineShareButton>
      </div>
    </div>
  )
}

export default ShareButton;
