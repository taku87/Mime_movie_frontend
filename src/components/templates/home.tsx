import { Link } from 'react-router-dom';
import  SetSampleVideo  from 'components/molecules/SetSampleVideo';
//import pic from "../public/like.png"

export const Home = () => {
  return (
    <>

    <div>Home</div>

    <div>
      <h1 className="text">マイムMOVIEとは？</h1>
      <p className="text">→まるで、アニメのワンシーンや漫画の一コマ「っぽい」映像を、誰でも作れるアプリ！</p>
    </div>

    <div>
      <h1 className="text">どうやって、、？</h1>
      <p className="text">{`→説明に沿って、簡単なアクトをした動画を投稿してみてください！\n
      「アニメOPっポイヤツ」メンバーのアクト映像と合成されて、驚きのストーリーに!`}</p>
    </div>

    <div><h1>紹介ムービーの説明文</h1></div>


    {/* <Video /> */}
    <SetSampleVideo />

    <div>
      <h1 className="text">まるでアメコミのようなアクション系！や
        淡い青春系、、などなど、色んなジャンル
        のポイヤツコンテンツを用意しているから
        Checkしてみて!
      </h1>
      <Link to='/contents_videos/'>コンテンツ一覧へのリンク_シンプルロゴ</Link>
      {/* <img src={pic} alt="picture" /> */}
    </div>

    <h1 className="text">他の人が投稿した動画も見られるよ！
    「わー、ぽいなー！」と思ったら、
    </h1>

    <h1 className="text">「これは推せる❤︎」と思ったら、</h1>

    <h1 className="text">ボタンを押してね！</h1>

    <Link to='/completed_videos/'>投稿動画一覧へのリンク_シンプルロゴ</Link>

    </>
  )
}

export default Home;
