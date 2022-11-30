import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import MovieIcon from '@mui/icons-material/Movie';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import SetDesignVideo  from 'src/components/molecules/SetDesignVideo';
import { SetYoutubeVideo } from 'src/components/molecules/SetYoutubeVideo';
import { Tutorial } from 'src/components/molecules/Tutorial';
import "src/css/globals/text.css";
import "src/css/globals/common.css";
import 'src/css/pages/Top.css';

export const Top = () => {
  return (
    <div className="top">
      <div className="container">

        <div className="eyecatch-movie-container">
          <div className="eyecatch-movie" >
            <SetDesignVideo url={"title-animation"} />
          </div>
        </div>

        <h1 className="top-text first">{`Do you know\n "パントマイム" ?`}</h1>

        <div className="top-mime-info">
          <div className="top-card-textbox">
            <p className="top-text third">{`→ 誰にでも、何にでもなれる！\nそれがパントマイムの魅力!`}</p>
          </div>
        </div>


          <div className="youtube-movie" >
            <SetYoutubeVideo videoid={"atmxb5zbk1Q"} />
          </div>


        <div className="top-app-info">
          <div className="top-card-textbox">
            <p className="top-text second">{`『あなたが撮った』映像から\n『物語が始まる』映像を作る。\nそれが、MIME MOVIE`}</p>
            <p className="top-text fourth">{`説明に沿って、\n動画を投稿してみてください！\nパントマイミスト「ハナムラ」の映像と\n合成されて、一本のストーリーに!`}</p>
          </div>
        </div>

        <h1 className="top-text second">{`How?\n下のチュートリアルを\n見てみてね!`}</h1>

        <Tutorial />

        <img src={`${process.env.PUBLIC_URL}/mrmime-click.png`} className="mrmime-click" alt="mrmime-click" />

        <div className='top-link-container' >
          <div className='top-link-button-box'>

            <div className="link-button">
              <Button variant="contained"
                      startIcon={<MovieIcon />}
                      component={Link}
                      to="/contents_videos"
                      color="success"
                      className="link-button"
                      size="medium"
                      >
                コンテンツ一覧
              </Button>
            </div>

            <div className="link-button">
              <Button variant="contained"
                      startIcon={<DesktopMacIcon  />}
                      component={Link}
                      to="/completed_videos"
                      color="success"
                      className="link-button"
                      size="medium"
                      >
                完成版映像一覧
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Top;
