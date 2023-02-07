import React from 'react'
import { ChallengersBoxStyle } from './styleChallengersBox'

const ChallengersBox = () => {
  return (
    <ChallengersBoxStyle>
      <div className='eighty'>
        <h3>Desafios de Programação</h3>
        <p>Acredito que a melhor forma de aprender programação é a prática, por isso, aqui você encontra vários desafios de vários níveis e linguagem diferentes. <br />Alguns desses desafios são utilizados por empresas no seu processo seletivo.</p>
        <div className='flex'>
          <div className='circle'>
            <h2>Easy</h2>
          </div>
          <div className='circle'>
            <h2>Medium</h2>
          </div>
          <div className='circle'>
            <h2>Hard</h2>
          </div>
        </div>
      </div>
    </ChallengersBoxStyle>
  )
}

export default ChallengersBox