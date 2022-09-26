//import { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { REST_API_URL } from 'urls/index';
//import { AuthGuardContext } from './../../providers/AuthGuard';
import type { Like } from "types/like";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import button from 'css/atoms/button.module.css';


export const UnlikeButton = ( props: Like ) => {
  //const { accessToken } = useContext(AuthGuardContext);
  const { id, changeLike } = props;
  const [LikedState, setLikedState] = useState(changeLike);
  const unLike = () => {
    axios
      .delete(`${REST_API_URL}/user/likes/${id}`, {
        headers: {
          //Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setLikedState(false);
      })
      .catch((error) => {
        console.error(error);
      });
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