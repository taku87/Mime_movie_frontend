import 'src/css/pages/top.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import MovieIcon from '@mui/icons-material/Movie';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import SetDesignVideo  from 'src/components/molecules/SetDesignVideo';
import {SetYoutubeVideo} from 'src/components/molecules/SetYoutubeVideo';
import "src/css/globals/text.css";
import "src/css/globals/common.css";

export const Top = () => {
  return (
    <div className="top">
      <div className="container">
        <div className="eyecatch-movie-container">
          <div className="eyecatch-movie" >
            <SetDesignVideo url={"title-animation"} />
          </div>
        </div>
        <h1 className="top-text-first"> Do you know "パントマイム" ?</h1>
        <div className="top-appーpantomime-movie">
          <div className="card_textbox">
            <div className="eyecatch-movie" >
              <p className="top-text-second">→誰にでも、何にでもなれる！それがパントマイム！</p>
              <SetYoutubeVideo videoid={"atmxb5zbk1Q"} />
              <div className="area"></div>
            </div>
          </div>
        </div>
        <div className="top-app-info">
          <div className="card_textbox">
            <p className="top-text-first">{`『あなたが撮った』映像から\n『物語が始まる』映像を作る。\nそれが、MIME MOVIE`}</p>
            <p className="top-text-second">{`説明に沿って、動画を投稿してみてください！\nパントマイミスト「ハナムラ」の映像と合成されて、\n一本のストーリーに!`}</p>
          </div>
        </div>

        <div className="top-app-info">
          <h1 className="top-text-first">How?</h1>
          <div className="card_textbox">
            <p className="top-text-second">{`→説明に沿って、動画を投稿してみてください！\nパントマイミスト「ハナムラ」の映像と合成されて、一本のストーリーに!`}</p>
          </div>
        </div>

        <div>
          <h1 className="top-text-first">Let's Check!</h1>
          <div className="card_textbox">
            <p className="top-text-second">→色んなジャンルのコンテンツを用意しているからCheckしてみて!</p>
          </div>
        </div>

        <div className="link-button">
          <Button variant="contained"
                  startIcon={<MovieIcon />}
                  component={Link}
                  to="/contents_videos"
                  color="success"
                  >
            コンテンツ一覧
          </Button>
        </div>

        <h1 className="top-text-first">Let's Enjoy!</h1>
        <div className="card_textbox">
          <p className="top-text-second">{`→完成版映像もご覧あれ！\n`}</p>
        </div>

        <div className="link-button">
          <Button variant="contained"
                  startIcon={<DesktopMacIcon  />}
                  component={Link}
                  to="/completed_videos"
                  color="success"
                  className="link-button"
                  >
            完成版映像一覧
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Top;

