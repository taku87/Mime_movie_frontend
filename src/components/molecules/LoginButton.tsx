import 'css/molecules/login-button.css';
import { useAuth0 } from "@auth0/auth0-react";


export const LoginButton = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return !isAuthenticated ? (
      <img onClick={loginWithRedirect} className="login-button"
        src={`${process.env.PUBLIC_URL}/login.png`} alt="login-button" />
      ) : <button
            onClick={() => {
              logout({ returnTo: window.location.origin });
            }}
          >LOG OUT</button>
  }

export default LoginButton;



