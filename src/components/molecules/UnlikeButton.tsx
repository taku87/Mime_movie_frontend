// @ts-nocheck
import { useContext } from 'react';
import { Auth0Context } from 'src/components/providers/AuthCheckprovider';
import axios from 'axios';
import { REST_API_URL } from 'src/urls/index';

import type { Like } from "src/types/like";
import button from 'src/css/atoms/button.module.css';


export const UnlikeButton = ( props: Like ) => {
  const { id, like_amount, changeLikedState } = props;
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
        changeLikedState(false)
      })
      .catch((error) => {
        console.error(error);
      });
    }
    unlikeis()
  };
  return (
    <>
    <input type='image' src={`${process.env.PUBLIC_URL}/blackhat-liked-font.png`} alt="unlike-button" onClick={unLike} className={button.unlike} />
    </>
  );
};

export default UnlikeButton;