// @ts-nocheck
import 'src/css/pages/top.css';
import { Link } from 'react-router-dom';
import  SetSampleVideo  from 'src/components/molecules/SetSampleVideo';
import  SetDesignVideo  from 'src/components/molecules/SetDesignVideo';
//import pic from "../public/like.png"

export const Top = () => {
  return (
    <>
    <div className="top">
      <div className="container">
        <div className="eyecatch-movie-container">
          <div className="eyecatch-movie" >
            <SetDesignVideo />
          </div>
        </div>
        <div>
          <h1 className="text">What is MIME MOVIE ?</h1>
          <p className="text">→あなたが『撮った映像』から『物語が始まる』映像を作ります</p>
        </div>

        <div>
          <h1 className="text">How?</h1>
          <p className="text">{`→説明に沿って、動画を投稿してみてください！\n
          パントマイミスト「ハナムラ」のアクト映像と合成されて、一本のストーリーに!`}</p>
        </div>

        <div><h1>sample!</h1></div>


        {/* <Video /> */}
        <SetSampleVideo />

        <div>
        <h1 className="text">Let's Check!</h1>
          <p className="text">色んなジャンルのコンテンツを用意しているからCheckしてみて!
          </p>
          <Link to='/contents_videos/'>コンテンツ一覧へのリンク_シンプルロゴ</Link>
          {/* <img src={pic} alt="picture" /> */}
        </div>

        <h1 className="text">Let's Enjoy!</h1>
        <p className="text">{`他の人が投稿した動画も見られるよ！\n`}
        </p>
        <Link to='/completed_videos/'>投稿動画一覧へのリンク_シンプルロゴ</Link>
      </div>
    </div>
    </>
  )
}

export default Top;
