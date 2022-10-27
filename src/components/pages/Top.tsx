// @ts-nocheck
import 'src/css/pages/top.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import MovieIcon from '@mui/icons-material/Movie';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import  SetDesignVideo  from 'src/components/molecules/SetDesignVideo';
//import pic from "../public/like.png"
import "src/css/globals/text.css"

export const Top = () => {
  return (
    <div className="top">
      <div className="container">
        <div className="eyecatch-movie-container">
          <div className="eyecatch-movie" >
            <SetDesignVideo url={"title-animation"} />
          </div>
        </div>

        <h1 className="top-text-first">Do you know 『panto mime』?</h1>

        <div className="eyecatch-movie" >
          <SetDesignVideo url={"title-animation"} />
        </div>

        <div>
          <h1 className="top-text-first">What is MIME MOVIE ?</h1>
          <div class="card_textbox">
            <p className="top-text-second">→あなたが『撮った映像』から『物語が始まる』映像を作るアプリ</p>
          </div>
        </div>

        <div>
          <h1 className="top-text-first">How?</h1>
          <div class="card_textbox">
            <p className="top-text-second">{`→説明に沿って、動画を投稿してみてください！\nパントマイミスト「ハナムラ」の映像と合成されて、一本のストーリーに!`}</p>
          </div>
        </div>

        <div>
          <h1 className="top-text-first">Let's Check!</h1>
          <div class="card_textbox">
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
        <div class="card_textbox">
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

