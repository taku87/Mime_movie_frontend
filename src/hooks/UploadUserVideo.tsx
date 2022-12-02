// @ts-nocheck
import { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Auth0Context } from 'src/components/providers/AuthCheckprovider';
import axios from 'src/lib/axios';
import { REST_API_URL, API_URL } from 'src/urls/index';
import AWS from 'aws-sdk';
import  { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom"
import  "src/css/hooks/UploadUserVideo.css";

import { useAsyncCallback } from 'react-async-hook'
import Box from '@mui/material/Box'
import button from 'src/css/atoms/button.module.css';
import "src/css/hooks/UploadUserVideo.css";

import CircularIntegration from 'src/hooks/CircularIntegration';
const initialState = {
  file: null,
}

export const UploadUserVideo= (id :number) => {
  const {isAuthenticated,getAccessTokenSilently } = useAuth0();
  const { setAccessToken } = useContext(Auth0Context);
  const [createdFileName, setCreatedFileName] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const content_video_id = id["id"]
  const navigate = useNavigate()

  const inputRef = useRef(null)
  const [ formState, setFormState ] = useState(initialState)
  const [success, setSuccess] = useState(false)

  const csrf_token = () => {
    axios
      .get(`${API_URL}/secured`)
      .then((response) => {
      })
  }
  csrf_token()

  /*S3に動画をダイレクトアップロードできるように、アップロード権限が付与されたIAMユーザーを設定、
  S3バケット、リージョンの指定*/
  const AWS_ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
  const AWS_SECRET_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
  const BUCKET = process.env.REACT_APP_USER_BACKET;
  const REGION = process.env.REACT_APP_REGION;
  const s3 = new AWS.S3();

  AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
    region: REGION,
  });

    /*ファイル添付時に、バックエンド側に指示出し→
    コンテンツ番号とユーザーIDを組み合わせた一意のファイル名が返ってくる*/
    const uploadFile = async (file: object) => {
      const token = isAuthenticated ? await getAccessTokenSilently() : null;
      setAccessToken(token);
      console.log(token);
      const res = await axios.get(`${REST_API_URL}/user/user_videos/${content_video_id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      /*ファイル名はあとで使うので、useStateにセットする*/
      const upload_file_name = await res.data
      setCreatedFileName(upload_file_name["key"]);

      if (!file) return
      /* アップロード処理に十分な時間をディレイさせる処理 */
      /* 2秒経つまでresolveを返さずに次のアクションに進ませない。
      sleep()の処理が完了（返り値がくる）までawaitしている。*/
      const sleep = ms  => new Promise(resolve => setTimeout(resolve, ms))
      await sleep(2000)

      /* アップロード処理が成功したらフォームの状態を初期化してsuccessステータスをtrueにする */
      setFormState(initialState)
      setSuccess(true)
    }

    /*添付されたファイルを取り出して、useStateにセットする*/
    const onFileInputChange = async (event :React.ChangeEventHandler<HTMLInputElement> | undefined) => {
      const file = event.target.files[0]
      setSelectedFile(file)
      await uploadFile(file)
    }

    const clickFileUploadButton = () => {
      /* アップロードボタンのクリックで着火するイベント。successステータスを一旦戻してる。
      inputRef.current.click()は、別のDOM要素のイベントを起動する処理に使われる→今回はinputタグを参照している */
      setSuccess(false)
      inputRef.current.click()
    }

    /*非同期版のuseCallback　sucessステータスでCircularIntegrationの内容が変わるようにするための処理*/
    const asyncEvent = useAsyncCallback(onFileInputChange);

    /*添付ファイル、ファイル名をセットしてS3にアップロード→完成版視聴画面に遷移*/
    const handleSubmission = () => {
      try {
        const params = {
          Bucket: BUCKET,
          Key: createdFileName,
          ContentType: selectedFile.type,
          Body: selectedFile,
        };
        const res = s3.putObject(params).promise();
        console.log(res)
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
