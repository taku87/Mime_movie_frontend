import "css/LikeButton.css";
import button from 'css/atoms/button.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { REST_API_URL } from 'urls/index';
import { Auth0Context } from 'components/providers/AuthCheckprovider';
import type { Like } from "types/like";

export const LikeButton = (props: Like) => {
  const { accessToken, setAccessToken } = useContext(Auth0Context);
  const { id, changeLike } = props;
  const [LikedState, setLikedState] = useState(changeLike);
  const { register, handleSubmit } = useForm({});
  const {isAuthenticated,getAccessTokenSilently } = useAuth0();
  const UseonSubmit = (data :any) => {
    const likeis = async () => {
      const token = isAuthenticated ? getAccessTokenSilently() : null;
      setAccessToken(token);
      axios
        .post(`${REST_API_URL}/user/content_video_likes`, data, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          setLikedState(true)
        })
        .catch((error) => {
          console.error(error);
        });
      }
  };
  return (
    <form onSubmit={handleSubmit(UseonSubmit)}>
      <input {...register('id', { value: id })} type='hidden' />

      <input type='submit' value={`いいね`} className={button.like} />
    </form>
  );
};

export default LikeButton;
