import { useAuth0 } from "@auth0/auth0-react";
import "src/css/organisms/Profile.css";
import "src/css/globals/text.css";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  } else if (isAuthenticated && user) {
    return (
      <div>
        <img src={user.picture} alt={user.name} className="avatar"/>
        <h2 className="profile-name" >{user.name}</h2>
        <h2 className="profile-email">{user.email}</h2>
      </div>
    );
  }
  else {
    return null
  }
}

export default Profile;