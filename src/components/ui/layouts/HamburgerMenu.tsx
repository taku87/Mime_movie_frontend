import { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import { DrawerMenu }  from 'src/components/ui/layouts/DrawerMenu';


export const HamburgerMenu = () => {
  // drawerがopenしているかどうかのstate
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}/blackhat-menu.png`}
        onClick={() => setDrawerOpened(true)}
        className="menu-button"
        alt="menu-button"
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