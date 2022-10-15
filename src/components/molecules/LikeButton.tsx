// @ts-nocheck
import { useContext } from 'react';
import { Auth0Context } from 'src/components/providers/AuthCheckprovider';
import axios from 'axios';
import { REST_API_URL } from 'src/urls/index';
import { useForm } from 'react-hook-form';
import type { Like } from "src/types/like";
import button from 'src/css/atoms/button.module.css';
import "src/css/LikeButton.css";

export const LikeButton = (props: Like) => {
  const { id, changeLikedState } = props;
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
          changeLikedState(true);
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
      <input type='image' src={`${process.env.PUBLIC_URL}/blackhat.png`} alt="like-button" className={button.like} />
    </form>
  );
};

export default LikeButton;
