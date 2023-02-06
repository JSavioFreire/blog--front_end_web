import React from 'react'
import { ChallengersBoxStyle } from './styleChallengersBox'

const ChallengersBox = () => {
  return (
    <ChallengersBoxStyle>
      <div className='eighty'>
        <h3>Desafios de Programação</h3>
        <p>Acredito que a melhor forma de aprender programação é a prática, por isso, aqui você encontra vários desafios de vários níveis e linguagem diferentes. <br />Alguns desses desafios são utilizados por empresas no seu processo seletivo</p>
        <div>Ouro</div>
        <div>Prata</div>
        <div>Bronze</div>
      </div>
    </ChallengersBoxStyle>
  )
}

export default ChallengersBox