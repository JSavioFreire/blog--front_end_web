import React, { useContext } from 'react';
import { Context } from '../../context/Provider';
import { StyleInspirationPage } from './styleInspirationPage';

const InspirationPage = () => {

  const { apiInsp, loadingApiInsp } = useContext(Context)
  return (
    <StyleInspirationPage>
      <div className='each'>
        {loadingApiInsp && <h1>Carregando</h1>}
        {apiInsp && apiInsp.map((item, key) => {
          return (
            <div key={key}>
              <h3>{item.title}</h3>

            </div>

          )
        })}

      </div>
    </StyleInspirationPage>
  )
}

export default InspirationPage