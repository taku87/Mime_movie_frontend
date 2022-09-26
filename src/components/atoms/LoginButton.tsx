import { useAuth0 } from "@auth0/auth0-react";
import LoginIcon from '@mui/icons-material/Login';

export const LoginButton = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return !isAuthenticated ? (
        <LoginIcon onClick={loginWithRedirect}>Log in</LoginIcon>
      ) : <button
            onClick={() => {
              logout({ returnTo: window.location.origin });
            }}
          >LOG OUT</button>
  }

export default LoginButton;



