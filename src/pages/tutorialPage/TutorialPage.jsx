import React, { useContext } from 'react'
import { TutorialPageStyle } from './styleTutorialPage'
import { Context } from '../../context/Provider'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const TutorialPage = () => {

  const { apiTutorial, loadingApiTutorial } = useContext(Context);

  return (
    <TutorialPageStyle>
      {loadingApiTutorial && <p>Carregando</p>}
      {apiTutorial && apiTutorial.map((item, key) => {
        return (
          <div className='each' key={key}>
            <h3>{item.title}</h3>
            <p className='little'>{`Tecnologia: ${item.tec.title}`}</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9kAT7LDggIk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <p>{item.content}</p>
          </div>
        )
      })
      }
    </TutorialPageStyle>
  )
}

export default TutorialPage