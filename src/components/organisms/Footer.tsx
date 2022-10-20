import React from "react";
import { Link } from 'react-router-dom'
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MovieIcon from '@mui/icons-material/Movie';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: "#d4cb94",
    },
    appBar: {
      top: "auto",
      bottom: 0,
    },
  })
);

const actionStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "inherited",
      "&$selected": {
        color: "#b87551",
      },
    },
    selected: {},
  })
);


export const Footer = () => {

  const classes = useStyles();
  const actionClass = actionStyles();
  const [value, setValue] = React.useState(0);

  return (
    <AppBar position='fixed' color='primary' className={classes.appBar}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        classes={{ root: classes.root }}
      >
        <BottomNavigationAction
          classes={actionClass}
          label='コンテンツ一覧'
          icon={<MovieIcon />}
          component={Link}
          to="/contents_videos"
        />
        <BottomNavigationAction
          classes={actionClass}
          label='完成版一覧'
          icon={<AddAPhotoIcon />}
          component={Link}
          to="/completed_videos"
        />
        <BottomNavigationAction
          classes={actionClass}
          label='マイページ'
          icon={<AccountBoxIcon />}
          component={Link}
          to="/mypage"
        />
      </BottomNavigation>
    </AppBar>
  );
}
