import { TutorialData } from 'src/components/data/TutorialData';
import 'src/css/globals/text.css';
import 'src/css/globals/common.css';
import 'src/css/ui/layouts/Tutorial.css';


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
                      <h1 className='tutorial-text fourth'>{value.text}</h1>
                      <div>
                        <img src={`${process.env.PUBLIC_URL}/${value.mrmime}.png`} className="tutorial-mrmime" alt={value.mrmime} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img src={`${process.env.PUBLIC_URL}/foot-stamp-${value.foot}.png`} className="foot-stamp" alt="foot-stamp" />
            </div>
          )
        })}
      </div>
  )
}

export default Tutorial;