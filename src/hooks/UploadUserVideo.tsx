// @ts-nocheck
import { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Auth0Context } from 'src/components/providers/AuthCheckprovider';
import axios from "axios";
import AWS from 'aws-sdk';
import  {useState, useRef} from 'react';
import { useNavigate } from "react-router-dom"
import { REST_API_URL } from 'src/urls/index';
import  "src/css/hooks/UploadUserVideo.css";

import { useAsyncCallback } from 'react-async-hook'
import Box from '@mui/material/Box'
import button from 'src/css/atoms/button.module.css';
import "src/css/hooks/UploadUserVideo.css";

import CircularIntegration from 'src/hooks/CircularIntegration';
const initialState = {
  file: null,
}

export const UploadUserVideo= (id :any) => {
  const {isAuthenticated,getAccessTokenSilently } = useAuth0();
  const { accessToken, setAccessToken } = useContext(Auth0Context);
  const [createdFileName, setCreatedFileName] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  //const [uploadedState, setUploadedState] = useState<boolean>(false);
  const content_video_id = id["id"]
  const navigate = useNavigate()

  const inputRef = useRef(null)
  const [ setFormState ] = useState(initialState)
  const [success, setSuccess] = useState(false)

  const AWS_ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
  const AWS_SECRET_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
  const BUCKET = "user-videos-s3-01";
  const s3 = new AWS.S3();


  AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
    region: 'ap-northeast-1'
  });


    const uploadFile = async (file: any) => {
      const token = isAuthenticated ? await getAccessTokenSilently() : null;
      setAccessToken(token);
      console.log(token);
      const res = await axios.get(`${REST_API_URL}/user/user_videos/${content_video_id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      const upload_file_name = await res.data
      setCreatedFileName(upload_file_name["key"]);
      console.log(upload_file_name)

      if (!file) return
      /* アップロード処理に見立てた時間のかかる処理 */
      /* シンプルに5秒経つまでresolveを返さずに次のアクションに進ませない処理？
      sleep()の処理が完了（返り値がくる）までawaitしている。そして、resolveは５秒のディレイ処理がされている
       */
      const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
      await sleep(2000)

      /* アップロード処理が成功したらフォームの状態を
          初期化してsuccessステートをtrueにする */
      setFormState(initialState)
      setSuccess(true)
    }

    const onFileInputChange = async (event :any) => {
      const file = event.target.files[0]
      setSelectedFile(file)
      console.log(file)
      await uploadFile(file)
      /*添付されたファイルを取り出して、セットする処理
      アニメーションを行う処理（uploadFile）は５秒かかる作業なのでawaitさせてる？ */
    }

    const clickFileUploadButton = () => {
      /* アップロードボタンのクリックで着火するイベント。成功ステータスを一旦戻してる。
      inputRef.current.click()は、別のDOM要素のイベントを起動する処理に使われる→今回はinputタグを参照している */
      setSuccess(false)
      inputRef.current.click()
    }

    const asyncEvent = useAsyncCallback(onFileInputChange);

    console.log(selectedFile);
    console.log(createdFileName);


    const handleSubmission = () => {
      try {
        const params = {
          Bucket: BUCKET,
          Key: createdFileName,
          ContentType: selectedFile.type,
          Body: selectedFile,
        };

        const res = s3.putObject(params).promise();
        navigate('/created_video', { state: createdFileName })
      } catch (error) {
        console.log(error);
        return;
      }
    }

  return (
    <div className="upload-user-video">
      <div className="container">
        <div className="upload-to-create">
          <div className="upload-to-create-container">
            <div>
              <Box className={button.upload}>
                <CircularIntegration
                  onClick={clickFileUploadButton}
                  asyncEvent={asyncEvent}
                  success={success}
                  component="label"
                  text={asyncEvent.loading ? '...' : "Upload File"}
                />
                <input
                  hidden
                  ref={inputRef}
                  type="file"
                  onChange={asyncEvent.execute}
                />
              </Box>
            </div>

            {/* <input type="file" onChange={uploadFile}  /> */}
            <div>
                <input onClick={handleSubmission} type='image' src={`${process.env.PUBLIC_URL}/blackhat-create.png`} alt="create-button" className={button.create} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default UploadUserVideo;
