// @ts-nocheck
import 'src/css/pages/top.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import MovieIcon from '@mui/icons-material/Movie';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import  SetDesignVideo  from 'src/components/molecules/SetDesignVideo';
//import pic from "../public/like.png"
import "src/css/globals/text.css"

export const Top = () => {
  return (
    <>
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
          <p className="top-text-second">→あなたが『撮った映像』から『物語が始まる』映像を作るアプリ</p>
        </div>

        <div>
          <h1 className="top-text-first">How?</h1>
          <p className="top-text-second">{`→説明に沿って、動画を投稿してみてください！\n
          パントマイミスト「ハナムラ」のアクト映像と合成されて、一本のストーリーに!`}</p>
        </div>

        <div>
        <h1 className="top-text-first">Let's Check!</h1>
          <p className="top-text-second">色んなジャンルのコンテンツを用意しているからCheckしてみて!
          </p>

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
        <p className="top-text-second">{`他の人が投稿した動画も見られるよ！\n`}
        </p>

          <Button variant="contained"
                  startIcon={<AddAPhotoIcon />}
                  component={Link}
                  to="/completed_videos"
                  color="success"
                  >
            完成版動画一覧
          </Button>

      </div>
    </div>
    </>
  )
}

export default Top;

