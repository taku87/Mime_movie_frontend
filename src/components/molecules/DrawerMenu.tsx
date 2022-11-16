import { DrawerMenuData } from 'src/components/atoms/DrawerMenuData';

import 'src/css/molecules/DrawerMenu.css';

export const DrawerMenu = () => {
  return (
  <div className='DrawerMenu-container'>
    <ul className='DrawerMenu-list'>
      {DrawerMenuData.map((value, key) => {
        return(
          <li key={key}
              className='DrawerMenu-raw'
              onClick={() =>{
              window.location.pathname = value.link;
              }}
          >
            <div id='icon'>{value.icon}</div>
            <div id='icon'>{value.title}</div>
          </li>
        )
      })}
    </ul>
    <img src={`${process.env.PUBLIC_URL}/mrmime-stand.png`} alt="mrmime-stand" className="mrmime-stand" />
  </div>
  )
}
