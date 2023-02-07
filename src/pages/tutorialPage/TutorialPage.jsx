import React, { useContext } from 'react'
import { TutorialPageStyle } from './styleTutorialPage'
import { Context } from '../../context/Provider'

const TutorialPage = () => {

  const { apiTutorial, loadingApiTutorial } = useContext(Context);

  return (
    <TutorialPageStyle>
      <div className='miniMenu'>

      </div>

      <div className='eachTutorial'>
        {loadingApiTutorial && <p>Carregando</p>}
        {apiTutorial && <p>{apiTutorial[0].title}</p>}
      </div>
    </TutorialPageStyle>
  )
}

export default TutorialPage