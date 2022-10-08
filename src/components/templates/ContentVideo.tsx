import { useParams } from 'react-router-dom'
import { useLocation } from "react-router";
import Card from "@material-ui/core/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { idText } from 'typescript';


export const ContentVideo = () => {

  const { state } = useLocation();
  const { id, title, youtube_url } = state;

  return(
    <>
      <div>
          <h1>個別記事 {id}</h1>
          <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <img src={`${process.env.PUBLIC_URL}/thumbnail/${youtube_url}`} width="100%" />
          </Card>
      </div>
    </>
  )
}

export default ContentVideo;
