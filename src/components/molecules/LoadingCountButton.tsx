// @ts-nocheck
import { useState } from 'react';
import "src/css/globals/text.css";
import "src/css/atoms/PushButton.css";

export const LoadingCountButton = () => {
  const [count,setCount] = useState(0);
  const countUp = () => {
    setCount(count + 2);
  }

  return  (
    <div className='text'>
    <div className='loading-text-container'>
        <div className='card_textbox' >

          <p>
          <span className='big-text'>動画撮影、投稿ありがとう！</span>
{`
\nごめんな、今、裏でめちゃくちゃ頑張って動画加工の処理が行われているから、もうちょっと待ってくれ。\n
こんな時に、オシャレでリッチな”ロード中”のアニメーションと、動画完成を検知して自動リロードをかける処理！　みたいな小粋なものを実装できたらよかったんだけど、、\n
あいにく納期ってやつは、俺を待ってはくれなかったんだ、、\n
代わりといってはなんだけど、人力の"ロードシステム”を作っておいたよ。\n
下のMrマイムのアイコンをひたすら連打してくれ。100%を超える頃には、流石に処理完了してると思う。\n
こうやって長々書いているのも、処理時間を稼ぐためだから、読み飛ばすのは勘弁してくれ。\n
ちなみに100%超えたら、自分でリロードして欲しいんだ。\n
`}
          <span className='big-text'>さぁそれじゃあ、Let's Push!</span>
          </p>
        </div>
      </div>
        <div className='card-loading'>
          <p className='card-loading-text'>ロード中　{count}% </p>
        </div>
        <input onClick={countUp} type='image' src={`${process.env.PUBLIC_URL}/blackhat-push.png`} alt="push-button" className='push-button' />
    </div>
    )
}

export default LoadingCountButton;
