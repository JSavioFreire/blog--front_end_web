import React, { useContext } from 'react'
import { TutorialBoxStyle } from './styleTutorialBox'
import { Context } from '../../../context/Provider';

const TutorialBox = () => {
  const { apiTec, loadingApiTec } = useContext(Context);
  var tecs = apiTec && apiTec.slice(0, 5).map((item, key) => {
    return (
      <div key={key} className='divImage'>
        <img src={item.image} alt="image" />
      </div>
    );
  });
  console.log(tecs)

  return (
    <TutorialBoxStyle>
      <div className='text' data-aos="fade-right">
        <h1>Tutoriais:</h1>
        <p>Aqui você encontra tutoriais de vários tópicos, frameworks e linguagens diferentes. </p>
        <h4>Alguns dos tópicos falados aqui.</h4>
        {loadingApiTec && <h1>Carregando</h1>}
        <div className='flex'>
          {apiTec && tecs}

        </div>

      </div>
      <div className='tut' data-aos="fade-left">
        <h1>Tutoriais mais recentes:</h1>
      </div>
    </TutorialBoxStyle>
  );
}

export default TutorialBox