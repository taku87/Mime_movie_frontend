import { useAuth0 } from '@auth0/auth0-react';
import { useContext } from 'react';
import axios from 'axios';
import { REST_API_URL } from 'urls/index';
import { Auth0Context } from 'components/providers/AuthCheckprovider';
import { GlobalContext } from 'components/providers/Globalprovider';
import type { Like } from "types/like";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import button from 'css/atoms/button.module.css';


export const UnlikeButton = ( props: Like ) => {
  const { id, changeLike } = props;
  const { accessToken, setAccessToken } = useContext(Auth0Context);
  const {LikedState, setLikedState} =  useContext(GlobalContext);
  const {isAuthenticated,getAccessTokenSilently } = useAuth0();

  const unLike = () => {
    const unlikeis = async () => {
      const token = isAuthenticated ? await getAccessTokenSilently() : null;
      setAccessToken(token);
      axios
      .delete(`${REST_API_URL}/user/content_video_likes/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setLikedState(false)
        console.log(LikedState)
      })
      .catch((error) => {
        console.error(error);
      });
    }
    unlikeis()
  };
  return (
    <button type='button' onClick={unLike} className={button.unlike}>
      <FavoriteBorderIcon
        sx={{
          fontSize: '14px',
          mb: -0.5,
          mr: 0.1,
          color: 'white',
          '@media screen and (min-width:700px)': {
            fontSize: '20.5px',
            mb: -0.7,
          },
        }}
      />
      いいね済
    </button>
  );
};

export default UnlikeButton;