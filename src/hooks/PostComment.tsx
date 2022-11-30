import { useAuth0 } from '@auth0/auth0-react';
import axios from 'src/lib/axios';
import { REST_API_URL, API_URL } from 'src/urls/index';
import  { useState } from 'react';

type Id = {
  content_video_id :number;
}

export const PostComment = (props :Id) => {
  const { content_video_id } = props;
  const [comment, setComment] = useState('')
  const {isAuthenticated,getAccessTokenSilently } = useAuth0();

  const handleChange = (e :React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const handleSubmit = async() => {
    const token = isAuthenticated ? await getAccessTokenSilently() : null;

    const csrf_token = () => {
      axios
        .get(`${API_URL}/secured`)
        .then((response) => {
        })
    }
    csrf_token()

    const  post_comment = () => {
      axios
        .post(`${REST_API_URL}/user/content_videos/${content_video_id}/content_video_comments`, {body: comment}, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        .then(response =>{
          console.log(response)
        })
        .catch((error) => {
          console.error(error.response.data);
        });
    }
  post_comment()
  }


  return (
    <div className="form">
      <form>
        <textarea className="textarea" rows={3} cols={80} placeholder="コメントしてね！" onChange={handleChange} /><br/>
        <button type="submit" onClick={handleSubmit} >コメント投稿！</button>
      </form>
    </div>
  )
}

export default PostComment;