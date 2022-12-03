import { DrawerMenuData } from 'src/components/atoms/DrawerMenuData';
import MessageIcon from '@mui/icons-material/Message';

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
    <div className='DrawerMenu-raw'>
    <div id='icon'><MessageIcon /></div>
      <a id='link' target="_blank"  rel="noopener noreferrer" href="https://twitter.com/hanatomura">問い合わせ</a>
    </div>
    <img src={`${process.env.PUBLIC_URL}/mrmime-stand.png`} alt="mrmime-stand" className="mrmime-stand" />
  </div>
  )
}
