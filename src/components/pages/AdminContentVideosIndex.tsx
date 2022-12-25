// @ts-nocheck
import { useContext, memo } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Auth0Context } from 'src/components/providers/AuthCheckprovider';
import { useState } from 'react';
import axios from 'src/lib/axios';
import { REST_API_URL, API_URL } from 'src/urls/index';
import { useQuery } from 'react-query';

import  { ContentVideoCreateForm } from "src/components/organisms/ContentVideoCreateForm";
import  { ContentVideoEditForm } from "src/components/organisms/ContentVideoEditForm";

import type { ContentVideo } from "src/types/contentvideo";
import CircularProgress from '@mui/material/CircularProgress';
import "src/css/globals/text.css";
import 'src/css/pages/AdminContentVideosIndex.css';

import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

  export const AdminContentVideosIndex = memo(() => {
    const { getAccessTokenSilently } = useAuth0();
    const { setAccessToken, accessToken } = useContext(Auth0Context);
    const [contentVideos, setContentVideos ] = useState<ContentVideo[]>([]);

    const csrf_token = () => {
      axios
        .get(`${API_URL}/secured`)
        .then((response) => {
        })
    }
    csrf_token()

    let { isLoading: queryLoading } = useQuery(['content_videos'],
    async (isAuthenticated) => {
      const token = await getAccessTokenSilently();
      setAccessToken(token);
      /** GETの処理 */
      const res = await axios
      .get<ContentVideo[]>(`${REST_API_URL}/admin/content_videos`,{
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .catch((error) => {
        console.error(error.response.data);
      });
      setContentVideos(res.data.data)
    })

    if (queryLoading) {
      return (
        <div style={{ textAlign: 'center', marginTop: '150px', minHeight: '1000px' }}>
          <CircularProgress
            sx={{
              color: '#314357',
              mt: -1,
              fontSize: '80px',
              '@media screen and (max-width:700px)': {
                mt: -0.4,
              },
            }}
          />
          <p className="loading-text">ロード中</p>
        </div>
      );
    }

    if ( contentVideos === void 0 || contentVideos.length === 0) {
      return (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p className="loading-text" >
            {' '}
            コンテンツ動画はありません
          </p>
        </div>
      )
    }

    // const  update_content_video = () => {
    //   axios
    //     .put(`${REST_API_URL}/admin/content_videos/${content_video_id}`, {body: }, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         'Content-Type': 'application/json',
    //       },
    //     })
    //     .then(response =>{
    //       console.log(response)
    //     })
    //     .catch((error) => {
    //       console.error(error.response.data);
    //     });
    // }


    const handleOnDelete  = async(content_video_id: number) => {
        const csrf_token = () => {
          axios
            .get(`${API_URL}/secured`)
            .then((response) => {
            })
        }
        csrf_token()

        const delete_content_video = (content_video_id: number) => {
          axios
            .delete(`${REST_API_URL}/admin/content_videos/${content_video_id}`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
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
        delete_content_video(content_video_id)
      }


  return (
    <div className="content-videos-index">
		<div className="content-videos-index-container">
			<div className="content-videos-index-header">
				<h1 className="content-videos-index-text-first" >管理者画面</h1>
        <ContentVideoCreateForm />
        <TableContainer className="admin-table">
          <Table sx={{ maxWidth: 1400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">id</TableCell>
                <TableCell align="right">number</TableCell>
                <TableCell align="right">title</TableCell>
                <TableCell align="right">description</TableCell>
                <TableCell align="right">thumbnail</TableCell>
                <TableCell align="right">youtube_url</TableCell>
                <TableCell align="right">state</TableCell>
              </TableRow>
            </TableHead>
              {contentVideos.map((content_video,index) => (
                <>
                  <TableBody>
                    <TableRow
                      key = {`${content_video.id}11${index}`}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {content_video.attributes.id}
                      </TableCell>
                      <TableCell align="right">{content_video.attributes.number}</TableCell>
                      <TableCell align="right">{content_video.attributes.title}</TableCell>
                      <TableCell align="right">{content_video.attributes.description}</TableCell>
                      <TableCell align="right">{content_video.attributes.thumbnail}</TableCell>
                      <TableCell align="right">{content_video.attributes.youtube_url}</TableCell>
                      <TableCell align="right">{content_video.attributes.state}</TableCell>
                    </TableRow>
                  </TableBody>
                  {/* <ContentVideoEditForm
                    key = {`${content_video.id}11${index}`}
                    id = {content_video.attributes.id}
                    number = {content_video.attributes.number}
                    title = {content_video.attributes.title}
                    description = {content_video.attributes.description}
                    thumbnail = {content_video.attributes.thumbnail}
                    state = {content_video.attributes.state} /> */}
                </>
              ))}
          </Table>
        </TableContainer>
      </div>
    </div>
    </div>
  );
})

export default AdminContentVideosIndex;