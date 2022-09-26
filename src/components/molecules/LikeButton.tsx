import "css/LikeButton.css";
import { useState } from 'react';
//import { useContext } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { REST_API_URL } from 'urls/index';
//import { AuthGuardContext } from './../../providers/AuthGuard';
import type { Like } from "types/like";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import button from 'css/atoms/button.module.css';
import { AnyMxRecord } from "dns";

export const LikeButton = (props: Like) => {
  //const { accessToken } = useContext(AuthGuardContext);
  const { id, changeLike } = props;
  const [LikedState, setLikedState] = useState(changeLike);
  const { register, handleSubmit } = useForm({});
  const onSubmit = (data :any) => {
    axios
      .post(`${REST_API_URL}/user/likes`, data, {
        headers: {
          //Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setLikedState(true)
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('id', { value: id })} type='hidden' />

      <input type='submit' value={`いいね`} className={button.like} />
    </form>
  );
};

export default LikeButton;