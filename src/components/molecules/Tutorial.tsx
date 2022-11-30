import { TutorialData } from 'src/components/atoms/TutorialData';
import 'src/css/globals/text.css';
import 'src/css/globals/common.css';
import 'src/css/molecules/Tutorial.css';
import 'src/css/pages/Top.css';


export const Tutorial = () => {
  return (
      <div className='tutorial-list'>
        { TutorialData.map((value, key) => {
          return(
            <div key={key} >
              <div className="tutorial-card-textbox">
                <div className='tutorial-box'>
                  <div className='tutorial-image-box'>
                    <div>
                      <img src={`${process.env.PUBLIC_URL}/tutorial/${value.image}.png`} className="tutorial-image" alt={value.image} />
                    </div>
                  </div>
                  <div className='tutorial-mrmime-box'>
                    <div className='tutorial-mrmime-box-object'>
                      <h1 className='top-text fourth'>{value.text}</h1>
                      <div>
                        <img src={`${process.env.PUBLIC_URL}/${value.mrmime}.png`} className="tutorial-mrmime" alt={value.mrmime} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              { key % 2  ?
                (<img src={`${process.env.PUBLIC_URL}/foot-stamp-right.png`} className="foot-stamp" alt="foot-stamp-right" />)
                :
                (<img src={`${process.env.PUBLIC_URL}/foot-stamp-left.png`} className="foot-stamp" alt="foot-stamp-left" />)
              }
            </div>
          )
        })}
      </div>
  )
}

export default Tutorial;