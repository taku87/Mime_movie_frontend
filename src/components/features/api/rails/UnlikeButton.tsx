import { useContext } from 'react';
import { Auth0Context } from 'src/components/providers/AuthCheckprovider';
import axios from 'src/lib/axios';
import { REST_API_URL,  API_URL } from 'src/urls/index';

import type { Like } from "src/types/like";
import button from 'src/css/globals/button.module.css';


export const UnlikeButton = ( props: Like ) => {
  const { id, changeLikedState, changeLikeAmountState } = props;
  const { accessToken} = useContext(Auth0Context);

  const csrf_token = () => {
    axios
      .get(`${API_URL}/secured`)
      .then((response) => {
        console.log(response);
      })
    }

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
        changeLikedState(false);
        changeLikeAmountState(response.data.data.attributes.like_amount);
      })
      .catch((error) => {
        console.error(error);
      });
    }
    csrf_token()
    unlikeis()
  };
  return (
    <>
    <input type='image' src={`${process.env.PUBLIC_URL}/blackhat-liked-font.png`} alt="unlike-button" onClick={unLike} className={button.unlike} />
    </>
  );
};

export default UnlikeButton;