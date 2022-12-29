import { saveAs } from 'file-saver';
import button from 'src/css/globals/button.module.css';

type URL = {
  URL: string;
}

export const DownloadCreatedVideo = (props :URL ) => {
  const { URL } = props;

  const DownloadButton = async () => {
    const fileName = URL
    const path = `https://completed-videos-s3-01.s3.ap-northeast-1.amazonaws.com/${fileName}`
    const response = await fetch(path)
    const blob = await response.blob()

    saveAs(blob, URL)

}

  return (
    <div>
      <input onClick={DownloadButton} type='image' src={`${process.env.PUBLIC_URL}/blackhat-download.png`} alt="create-button" className={button.create} />
    </div>
  )
};

export default DownloadCreatedVideo;