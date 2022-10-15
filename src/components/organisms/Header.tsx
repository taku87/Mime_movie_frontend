import 'src/css/organisms/header.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { LoginButton } from "src/components/molecules/LoginButton";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { IconClickEffect }  from "src/hooks/IconClickEffect"

export const Header = () => {
  return (
    <>
    <div className="header">
      <div  className="container">
        <Box>
          <Grid container spacing={2} className="header-items-wrapper">
            <Grid xs={7} className="header-title-logo-container">
              <Link to="/">
                <img src={`${process.env.PUBLIC_URL}/title_logo.png`}  className="header-title-logo" alt="title-logo"  />
              </Link>
              <img src={`${process.env.PUBLIC_URL}/movie-camera.png`} alt="movie-camera" className="header-movie-camera" />
            </Grid>
            <Grid xs={3}></Grid>
            <Grid xs={2} className="header-iconlist">
                <IconClickEffect>
                  <div className="icon"><LoginButton  /></div>
                </IconClickEffect>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
    <img src={`${process.env.PUBLIC_URL}/moviefilm_line.png`} alt="moviefilm-line" className="moviefilm-line" />
    </>
  )
}

export default Header;