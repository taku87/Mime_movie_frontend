import axios from "axios";
import  {useState} from 'react';

export const UploadUserVideo= () => {

  /*
  type Field = {
    key: string
    success_action_status: string
    acl: string
    policy: string
  }

  type selectedFields = {
    fileds: Field[]
  }

  */

  const [selectedFile, setSelectedFile] = useState<string>("");
  const [selectedFields, setSelectedFields] = useState([]);
  const [selectedUrls, setSelectedUrls] = useState<string>("");

  const handleChange = async (e: any) => {

    const res = await axios.get('http://localhost:3001//api/v1/user/1/user_videos/new')
    const S3DirectPost = await res.data

    setSelectedFile(e.target.files[0]);
    setSelectedFields(S3DirectPost["fields"]);
    setSelectedUrls(S3DirectPost["url"]);

  }


  const handleSubmission = async() => {
    const formData = new FormData()
    for (let key in selectedFields) {
      formData.append(key, selectedFields[key])
    }
    formData.append('file', selectedFile)
    console.log(selectedUrls)
    console.log(formData.get('file'))
    fetch(selectedUrls, {method: 'POST', headers: { Accept: 'multipart/form-data' }, body: formData})

    /*

    const resText = await ret.text()
    const resXML = await parseXML(resText)
    // eslint-disable-next-line
    const key = await resXML.getElementsByTagName('Key')[0].childNodes[0].nodeValue

    const parseXML = (text: any) => new DOMParser().parseFromString(text, 'application/xml')

    */
  }

  return (
    <div>
      <input type="file" onChange={handleChange}  />
        <div>
          <button onClick={handleSubmission}>Submit</button>
        </div>
    </div>
  )
}

export default UploadUserVideo;
