import React, { useContext } from 'react'
import { Context } from '../../../context/Provider'
import { StyleInspirationBox } from './styleInspirationBox'
import { AiFillStar } from 'react-icons/ai';

const InspirationBox = () => {
    const { apiInsp, loadingApiInsp } = useContext(Context);
    let stars = [];
    const diff = (num) => {
        for (let i = 0; i < num; i++) {
            stars.push(<AiFillStar key={i} />)
        }
    }

    return (
        <StyleInspirationBox>
            <div>
                <h2>Desafios e Inspirações</h2>
                <h4>
                    Quer desenvolver algo diferente com programação mas falta uma ideia de aplicação? Aqui você encontra algumas inspirações.
                </h4>
                <div className='row' >
                    {loadingApiInsp && <p>Carregando</p>}
                    {apiInsp && apiInsp.map((item, key) => {
                        return (
                            <div className='insp' data-aos="fade-up" style={{ backgroundImage: `url(${item.image})` }} key={key}>
                                <div className='text' key={key}>
                                    <h1>{item.title}</h1>
                                    <p>{item.content}</p>
                                    <div className='flex'>
                                        <h4>Dificuldade: </h4>
                                        {diff(item.difficult)}
                                        {stars}
                                    </div>
                                    <div className='flex'>
                                        <h4>Principal tecnologia utilizada: </h4>
                                        <img src={item.tec.image} alt="image" />
                                    </div>
                                    <div className='flex'>
                                        <h4>Link:</h4>
                                        <p>{item.link}</p>
                                    </div>
                                    <div className='dev'>
                                        <h4>Desenvolvido por: </h4>
                                        <p>{item.dev}</p>
                                    </div>

                                </div>

                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </StyleInspirationBox >
    )
}

export default InspirationBox;