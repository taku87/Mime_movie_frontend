import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          <div className="flex">
            <div>ここはフッター</div>
            <Link to='/contents_videos/'>コンテンツ一覧へのリンク_シンプルロゴ</Link>
            <Link to='/completed_videos/'>投稿動画一覧へのリンク_シンプルロゴ</Link>
            <Link to='/mypage/'>マイページへのリンク_シンプルロゴ</Link>
          </div>
        </div>
      </div>
    </>
  )
}

