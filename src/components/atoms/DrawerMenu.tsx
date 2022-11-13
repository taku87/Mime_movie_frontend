import { Link } from 'react-router-dom';

export const DrawerMenu = () => {
  return (
    <>
      <h2>Menu</h2>
      <Link to='/terms/'>利用規約</Link>
      <Link to='/privacy_policy/'>プライバシーポリシー</Link>
    </>
  )
}