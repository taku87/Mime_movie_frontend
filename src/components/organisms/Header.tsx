//Topへのリンク_マイムMOVIEのロゴ
//MENU
import 'css/organisms/header.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { LoginButton } from "components/molecules/LoginButton";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { IconButton } from "@material-ui/core";
import { IconClickEffect }  from "hooks/IconClickEffect"

export const Header = () => {
  return (
    <>
    <div className="header_container">
      <Box>
        <Grid container spacing={2}>
          <Grid xs={5} className="title_logo_container">
            <Link to="/">
              <img src={`${process.env.PUBLIC_URL}/title_logo.png`}  className="title_logo" alt="title_logo"  />
            </Link>
          </Grid>
          <Grid xs={2} >
            <img src={`${process.env.PUBLIC_URL}/movie-camera.png`} className="header_movie-camera" />
          </Grid>
          <Grid xs={4}></Grid>
          <Grid xs={1} className="header_iconlist">
              <IconClickEffect>
                <div className="icon"><LoginButton  /></div>
              </IconClickEffect>
          </Grid>
        </Grid>
      </Box>
    </div>
    <img src={`${process.env.PUBLIC_URL}/moviefilm_line.png`}  className="moviefilm_line" alt="moviefilm_line"  />
    </>
  )
}

export default Header;