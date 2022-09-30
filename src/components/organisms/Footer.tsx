import { Link } from 'react-router-dom';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieIcon from '@mui/icons-material/Movie';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction href="/contents_videos/" label="コンテンツ" icon={<MovieIcon />} />
        <BottomNavigationAction href="/completed_videos/" label="投稿動画" icon={<AddAPhotoIcon />} />
        <BottomNavigationAction href="/mypage/" label="マイページ" icon={<AccountBoxIcon />} />
      </BottomNavigation>
    </Box>
  );
}
