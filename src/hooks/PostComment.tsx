import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { REST_API_URL } from 'src/urls/index';
import  { useState } from 'react';

export const PostComment = (props :any) => {
  const { content_video_id } = props;
  const [comment, setComment] = useState('')
  const {isAuthenticated,getAccessTokenSilently } = useAuth0();

  const handleChange = (e :any) => {
    setComment(e.target.value)
  }

  const handleSubmit = async() => {
    const token = isAuthenticated ? await getAccessTokenSilently() : null;
      axios
      .post(`${REST_API_URL}/user/content_videos/${content_video_id}/content_video_comments`, {body: comment}, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => { axios.defaults.headers.common['x-csrf-token'] = response.headers['x-csrf-token']})
      .catch((error) => {
        console.error(error.response.data);
      });
    }


  return (
    <div className="form">
      <form>
        <textarea placeholder="コメントしてね！" onChange={handleChange} /><br/>
        <button type="submit" onClick={handleSubmit} >comment投稿</button>
      </form>
    </div>
  )
}

export default PostComment;