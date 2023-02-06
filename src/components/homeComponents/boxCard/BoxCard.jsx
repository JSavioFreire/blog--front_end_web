import React from 'react'
import { BoxCardStyle } from './styleBoxCard'

const BoxCard = () => {
    return (
        <BoxCardStyle>
            <div className='boxInside' data-aos="fade-up">
                <section>
                    <div className='text'>
                        <h1>Hello Dev</h1>
                        <div>
                        <p>Tudo bem? espero que sim. Essa aplicação foi desenvolvida com o objetivo de ajudar você desenvolvedor (e você que quer ser um), a <strong>evoluir</strong>, conhecer novas tecnologias, se inspirar, se desafiar, e, com tudo isso, se tornar um profissional melhor nessa área que é tão incrivel.</p>
                        <p>Faça como o Blastoise e continue evoluindo sempre junto com a gente.</p>
                        </div>
                    </div>
                    <img src="https://31.media.tumblr.com/9bfe1c8014fb4bbeaa2d8c9bfdd51e26/tumblr_muh4esnkF11qe212wo1_500.gif" />
                </section>
            </div>
        </BoxCardStyle>
    )
}

export default BoxCard