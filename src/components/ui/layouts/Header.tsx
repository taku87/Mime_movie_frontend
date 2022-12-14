import 'src/css/ui/layouts/header.css';
import { Link } from 'react-router-dom';
import { LoginButton } from "src/components/ui/parts/LoginButton";
import { HamburgerMenu } from "src/components/ui/layouts/HamburgerMenu";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div  className="header-container">
          <div className="header-items-wrapper">
            <div className="header-title-logo-container">
              <Link to="/">
                <img src={`${process.env.PUBLIC_URL}/title-logo.png`}  className="header-title-logo" alt="title-logo"  />
              </Link>
              <img src={`${process.env.PUBLIC_URL}/movie-camera.png`} alt="movie-camera" className="header-movie-camera" />
            </div>
            <div className="header-iconlist">
              <div className='login-box'>
                <LoginButton  />
              </div>
              <div className='menu-box'>
                <HamburgerMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={`${process.env.PUBLIC_URL}/moviefilm_line.png`} alt="moviefilm-line" className="moviefilm-line" />
    </>
  )
}

export default Header;