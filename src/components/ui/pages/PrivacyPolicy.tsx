import 'src/css/pages/TermAndPrivacyPolicy.css';
import 'src/css/globals/common.css';
import 'src/css/globals/text.css';
import { PrivacyPolicyData } from 'src/components/data/PrivacyPolicyData';

export const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1 className="privacy-policy-text-first" >プライバシーポリシー</h1>
      <h3 className="privacy-policy-text-second">MIME MOVIE（以下，「当社」といいます。）は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。</h3>
      <div className='card_textbox'>
      <ul className='privacy-policy-list'>
        {PrivacyPolicyData.map((value, key) => {
          return(
            <li key={key} >
              <p className='privacy-policy-text-third'>{value.article}</p>
              <ol>
              {value.paragraph.map((value, key) => {
                return(
                  <li key={key} >
                    <p className='privacy-policy-text-fourth'>{value.body}</p>
                    { value.sub_paragraph ? (
                      <ol>
                      {value.sub_paragraph.map((value, key) => {
                        return(
                          <li key={key} >
                            <p className='privacy-policy-text-fifth'>{value.body}</p>
                          </li>
                        )
                      })}
                      </ol> ) : ( <></> )
                    }
                  </li>
                )
              })}
              </ol>
            </li>
          )
        })}
      </ul>
      </div>
    </div>
  )
}

export default PrivacyPolicy;