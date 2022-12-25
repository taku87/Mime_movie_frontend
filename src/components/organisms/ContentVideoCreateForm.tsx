// @ts-nocheck
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'src/lib/axios';
import { REST_API_URL, API_URL } from 'src/urls/index';

import { useState} from "react"
import { FormControl, FormControlLabel, FormGroup, IconButton, InputLabel, makeStyles, MenuItem, Select, TextField, Theme } from "@material-ui/core"
import  { ContentVideoFormData } from "src/types/contentvideo"

export const ContentVideoCreateForm= () => {

  const {isAuthenticated,getAccessTokenSilently } = useAuth0();

  const [number, setNumber] = useState<number>()
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [thumbnail, setThumbnail] = useState<string>("")
  const [youtubeUrl, setYoutubeUrl] = useState<string>("")
  const [state, setState] = useState<string>("")

  const [formData, setFormData] = useState<ContentVideoFormData>({
    number: 0,
    title: "",
    description: "",
    thumbnail: "",
    youtube_url: "",
    state: 0,
  })

  // 共通化したstate更新処理
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleClick  = async() => {
    const token = isAuthenticated ? await getAccessTokenSilently() : null;
    // const csrf_token = () => {
    //   axios
    //     .get(`${API_URL}/secured`)
    //     .then((response) => {
    //     })
    // }
    // csrf_token()

    const create_content_video = () => {
      axios
        .post(`${REST_API_URL}/admin/content_videos`,
          { number: formData.number,
            title: formData.title,
            description: formData.description,
            thumbnail: formData.thumbnail,
            youtube_url: formData.youtubeUrl,
            state: formData.state,
          },
        {
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
    create_content_video()
  }

  return (
    <div>
      <form >
      <button onClick={handleClick}>作成</button>
        <TextField
          variant="outlined"
          label= "ナンバー"
          name='number'
          value={formData.number}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          label="タイトル"
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          label="説明"
          name='description'
          value={formData.description}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          label="サムネイル"
          name='thumbnail'
          value={formData.thumbnail}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          label="youtubeUrl"
          name='youtubeUrl'
          value={formData.youtubeUrl}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          label="state"
          name='state'
          value={formData.state}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

