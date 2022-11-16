import { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import { DrawerMenu }  from 'src/components/molecules/DrawerMenu';

import button from 'src/css/atoms/button.module.css';

export const HamburgerMenu = () => {
  // drawerがopenしているかどうかのstate
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}/blackhat-menu.png`}
        onClick={() => setDrawerOpened(true)}
        className={button.menu}
      />
      <Drawer
        anchor={'left'}
        open={drawerOpened}
        onClose={() => setDrawerOpened(false)}>
        <DrawerMenu />
      </Drawer>
    </>
  )
};