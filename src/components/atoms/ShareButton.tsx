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

export const ShareButton = (props :any) => {
  const { URL, QUOTE } = props;
  const PF = "MIMEMOVIE";
  return (
    <>
      <TwitterShareButton url={URL} title={QUOTE} hashtags={[PF]}   >
        <TwitterIcon size={60} round />
      </TwitterShareButton>
      <LineShareButton url={URL} title={QUOTE} >
        <LineIcon size={60} round />
      </LineShareButton>
    </>
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