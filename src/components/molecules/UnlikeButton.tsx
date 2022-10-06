import { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Auth0Context } from 'components/providers/AuthCheckprovider';
import axios from 'axios';
import { REST_API_URL } from 'urls/index';

import type { Like } from "types/like";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import button from 'css/atoms/button.module.css';


export const UnlikeButton = ( props: Like ) => {
  const { id, changeLike } = props;
  const { accessToken} = useContext(Auth0Context);

  const unLike = () => {
    const unlikeis = async () => {
      axios
      .delete(`${REST_API_URL}/user/content_video_likes/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(changeLike)
        changeLike(false)
      })
      .catch((error) => {
        console.error(error);
      });
    }
    unlikeis()
  };
  return (
    <button type='button' onClick={unLike} >
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