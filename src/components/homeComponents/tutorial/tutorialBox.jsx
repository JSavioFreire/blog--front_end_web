import React, { useContext } from 'react'
import { TutorialBoxStyle } from './styleTutorialBox'
import { Context } from '../../../context/Provider';
import Skeleton from 'react-loading-skeleton';

const TutorialBox = () => {
  const { apiTec, loadingApiTec, apiTutorial, loadingApiTutorial } = useContext(Context);

  var tecs = apiTec && apiTec.slice(0, 5).map((item, key) => {
    return (
      <div key={key} className='divImage'>
        <img src={item.image} alt="image" />
      </div>
    );
  });

  var tut = apiTutorial && apiTutorial.slice(0, 3).map((item, key) => {
    return (
      <div className='eachTutorial' key={key}>
        <img src={item.tec.image} />
        <p>{item.title}</p>
      </div>
    )
  })
  return (
    <TutorialBoxStyle>
      <div className='text' data-aos="fade-right">
        <h1>Tutoriais:</h1>
        <p>Aqui você encontra tutoriais de vários tópicos, frameworks e linguagens diferentes. </p>
        <h4>Alguns dos tópicos falados aqui.</h4>
        {loadingApiTec && <Skeleton height={100} />}
        <div className='flex'>
          {apiTec && tecs}
        </div>

      </div>
      <div className='tut' data-aos="fade-left">
        <h1>Tutoriais mais recentes:</h1>
        {loadingApiTutorial && <div className='tutLoading'><Skeleton height={60} /></div>}
        {apiTutorial && tut}
      </div>
    </TutorialBoxStyle>
  );
}

export default TutorialBox