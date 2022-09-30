import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
    <div className="flex flex-col w-full border-opacity-50">
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        <div className="flex">
          <div>ここはヘッダー</div>
            <Link to='/'>homeへのリンク_マイムMOVIEのロゴ</Link>
            <Link to='*'>ポイヤツへのリンク_ポイヤツのロゴ</Link>
            <Link to='*'>MENU これはmoleculeかorganism</Link>
            <Link to='*'>ログイン これはmoleculeかorganism</Link>
        </div>
      </div>
    </div>
    </>
  )
}
