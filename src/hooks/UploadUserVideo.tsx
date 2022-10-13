// @ts-nocheck
import { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Auth0Context } from 'src/components/providers/AuthCheckprovider';
import axios from "axios";
import  {useState} from 'react';

import  ViewCompletedVideo  from 'src/components/molecules/ViewCompletedVideo';
import SetUserCreatedVideo  from 'src/components/molecules/SetUserCreatedVideo';


export const UploadUserVideo= ( id :any) => {
  const {isAuthenticated,getAccessTokenSilently } = useAuth0();
  const { setAccessToken } = useContext(Auth0Context);
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [selectedUrls, setSelectedUrls] = useState<string>("");
  const [selectedCreatedUrls, setSelectedCreatedUrls] = useState<string>("");

  const handleChange = async (e: any) => {
    const token = isAuthenticated ? await getAccessTokenSilently() : null;
    setAccessToken(token);
    console.log(token);
    const res = await axios.get(`http://localhost:3001//api/v1/user/user_videos/show/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    const S3DirectPost = await res.data
    setSelectedFile(e.target.files[0]);
    setSelectedUrls(S3DirectPost["presigned_url"]);
    setSelectedCreatedUrls(S3DirectPost["key"]);
  }

  const handleSubmission = async() => {
    const res = await axios
      .put(
        selectedUrls,
        selectedFile,
        {
          headers: {
            'Content-Type': selectedFile.type,
          },
        })
      .then(res => {
        <SetUserCreatedVideo url={`${selectedCreatedUrls}`}/>

        console.log(res)
      })
      .catch((error) => {
        console.error(error.res.data);
      });
    }

  return (
    <div>
      <ViewCompletedVideo />
      <input type="file" onChange={handleChange}  />
        <div>
          <button onClick={handleSubmission}>Submit</button>
        </div>
    </div>
  )
}

export default UploadUserVideo;
