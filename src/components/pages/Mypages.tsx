import { Profile } from "src/components/organisms/Profile";
import "src/css/pages/MyPage.css";
import "src/css/globals/common.css";

export const MyPage = () => {
  return (
    <div className="mypage">
      <div className="mypage-container">
        <div className="mypage-header">
          <h1 className="mypage-text-first" >mypage</h1>
        </div>
        <Profile />
      </div>
    </div>
  )
}

export default MyPage;
