import 'src/css/pages/TermAndPrivacyPolicy.css';
import 'src/css/globals/common.css';
import 'src/css/globals/text.css';
import { TermData } from 'src/components/data/TermData';

export const Terms = () => {
  return (
    <div className="term">
      <h1 className="term-text-first" >利用規約</h1>
      <h3 className="term-text-second">この利用規約（以下,「本規約」といいます。）は,MIME MOVIE（以下,「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。</h3>
      <div className='card_textbox'>
      <ul className='term-list'>
        {TermData.map((value, key) => {
          return(
            <li key={key} >
              <p className='term-text-third'>{value.article}</p>
              <ol>
              {value.paragraph.map((value, key) => {
                return(
                  <li key={key} >
                    <p className='term-text-fourth'>{value.body}</p>
                    { value.sub_paragraph ? (
                      <ol>
                      {value.sub_paragraph.map((value, key) => {
                        return(
                          <li key={key} >
                            <p className='term-text-fifth'>{value.body}</p>
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

export default Terms;
