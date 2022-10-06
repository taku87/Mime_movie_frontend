// @ts-nocheck
import { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Auth0Context } from 'components/providers/AuthCheckprovider';
import axios from 'axios';
import { REST_API_URL } from 'urls/index';
import { useForm } from 'react-hook-form';
import type { Like } from "types/like";
import button from 'css/atoms/button.module.css';
import "css/LikeButton.css";

export const LikeButton = (props: Like) => {
  const { id, changeLike } = props;
  const { accessToken } = useContext(Auth0Context);
  const { register, handleSubmit } = useForm({});

  const UseonSubmit = (data :any) => {
      const likeis = async () => {
      axios
        .post(`${REST_API_URL}/user/content_video_likes`, data, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(changeLike)
          changeLike(true);
        })
        .catch((error) => {
          console.error(error);
        });
      }
      likeis()
  };
  return (
    <form onSubmit={handleSubmit(UseonSubmit)}>
      <input {...register('id', { value: id })} type='hidden' />

      <input type='submit' value={`いいね`} className={button.like} />
    </form>
  );
};

export default LikeButton;
