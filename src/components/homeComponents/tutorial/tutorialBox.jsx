import React from 'react'
import { TutorialBoxStyle } from './styleTutorialBox'

const TutorialBox = () => {
  return (
    <TutorialBoxStyle>
      <div className='text'>
        <h1>Tutoriais:</h1>
        <p>Aqui você encontra tutoriais de vários tópicos, frameworks e linguagens diferentes. </p>
      </div>
      <div className='tut'>
        <h1>Ultimos tutoriais:</h1>
      </div>
    </TutorialBoxStyle>
  )
}

export default TutorialBox