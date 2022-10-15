// @ts-nocheck
import { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Auth0Context } from 'src/components/providers/AuthCheckprovider';
import axios from "axios";
import  {useState} from 'react';

import SetUserCreatedVideo  from 'src/components/molecules/SetUserCreatedVideo';


export const UploadUserVideo= ( id :any) => {
  const {isAuthenticated,getAccessTokenSilently } = useAuth0();
  const { setAccessToken } = useContext(Auth0Context);
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [selectedUrls, setSelectedUrls] = useState<string>("");
  const [createdFileName, setCreatedFileName] = useState<string>("");
  const [uploadedState, setUploadedState] = useState<boolean>(false);
  const content_video_id = id["id"]
  const handleChange = async (e: any) => {
    const token = isAuthenticated ? await getAccessTokenSilently() : null;
    setAccessToken(token);
    console.log(token);
    const res = await axios.get(`http://localhost:3001//api/v1/user/user_videos/${content_video_id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    const S3DirectPost = await res.data
    setSelectedFile(e.target.files[0]);
    setSelectedUrls(S3DirectPost["presigned_url"]);
    setCreatedFileName(S3DirectPost["key"]);
    console.log(S3DirectPost)
  }

  console.log(selectedFile)
  console.log(selectedUrls)
  console.log(createdFileName)

  const handleSubmission = async() => {
    const update_res = await axios
      .put(
        selectedUrls,
        selectedFile,
        {
          headers: {
            'Content-Type': selectedFile.type,
          },
        })
      .then(res => {
        console.log(update_res.data)
        setUploadedState(true);
      })
      .catch((error) => {
        console.error(error.update_res.data);
      });
    update_res()
  }

  console.log(uploadedState)
  return (
    <div>
      <input type="file" onChange={handleChange}  />
        <div>
          <button onClick={handleSubmission}>Submit</button>
        </div>
        <div>
            {uploadedState ? (
                <SetUserCreatedVideo  filename={`${createdFileName}`}/>
              ) : (
                <div></div>
              )}
        </div>
    </div>
  )
}

export default UploadUserVideo;
