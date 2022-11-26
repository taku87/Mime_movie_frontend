import 'src/css/organisms/header.css';
import { Link } from 'react-router-dom';
import { LoginButton } from "src/components/molecules/LoginButton";
import { IconClickEffect }  from "src/hooks/IconClickEffect"
import { HamburgerMenu } from "src/components/molecules/HamburgerMenu";

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
              <IconClickEffect >
                <div className="icon"><LoginButton  /></div>
              </IconClickEffect>
          </div>
          <div className="header-hamburger-menu">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </div>
    <img src={`${process.env.PUBLIC_URL}/moviefilm_line.png`} alt="moviefilm-line" className="moviefilm-line" />
    </>
  )
}

export default Header;