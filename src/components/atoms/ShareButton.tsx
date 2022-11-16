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

export const ShareButton = (props :any) => {
  const { URL, QUOTE } = props;
  const PF = "MIMEMOVIE";
  return (
    <div className="share-button">
      <div>
        <TwitterShareButton url={URL} title={QUOTE} hashtags={[PF]}   >
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

      {/* <FacebookShareButton url={URL} quote={QUOTE}>
        <FacebookIcon size={24} round />
      </FacebookShareButton> */}

      {/* <HatenaShareButton
        url={URL}
        title={QUOTE}
        windowWidth={660}
        windowHeight={460}
      >
        <HatenaIcon size={24} round />
      </HatenaShareButton> */}

      // hashtags={PF}