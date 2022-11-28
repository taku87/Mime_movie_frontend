import { useContext } from 'react';
import { Auth0Context } from 'src/components/providers/AuthCheckprovider';
import axios from 'src/lib/axios';
import { REST_API_URL, API_URL } from 'src/urls/index';
import { useForm,SubmitHandler } from 'react-hook-form';
import type { Like } from "src/types/like";
import button from 'src/css/atoms/button.module.css';

interface IdInput {
  id?: number;
};

export const LikeButton = (props: Like) => {
  const { id, changeLikedState, changeLikeAmountState } = props;
  const { accessToken } = useContext(Auth0Context);
  const { register, handleSubmit } = useForm({});

  const UseonSubmit: SubmitHandler<IdInput> = ( id ) => {

      const csrf_token = () => {
      axios
        .get(`${API_URL}/secured`)
        .then((response) => {
          console.log(response);
        })
      }

      const likeis = async () => {
      axios
        .post(`${REST_API_URL}/user/content_video_likes`, id, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          changeLikedState(true);
          changeLikeAmountState(response.data.data.attributes.like_amount);
        })
        .catch((error) => {
          console.error(error);
        });
      }
      csrf_token()
      likeis()
  };

  return (
    <>
      <form onSubmit={handleSubmit(UseonSubmit)}>
        <input {...register('id', { value: id })} type='hidden' />
        <input type='image' src={`${process.env.PUBLIC_URL}/blackhat-font.png`} alt="like-button" className={button.like} />
      </form>
    </>
  );
};

export default LikeButton;
