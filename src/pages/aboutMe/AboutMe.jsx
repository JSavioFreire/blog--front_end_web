import React from 'react'
import { StyleAboutMe } from './styleAboutMe'
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

import Habilities from '../../components/aboutComponents/habilities/habilities'


const AboutMe = () => {
    return (
        <StyleAboutMe>
            <div className='flex'>
                <div data-aos="fade-right" className='text'>
                    <h1>Olá, meu nome é Sávio Freire,</h1>
                    <p>sou desenvolvedor Full-Stack e Mobile. Tenho 24 anos, sou casado e sou um amante de tecnologia. Gosto muito de me desafiar, e como um nerdola nato, sempre gostei de quebra-cabeças e jogo difíceis, acredito que seja por isso que me apaixonei pela programação; Como em um game por exemplo, são nas áreas mais complicadas e desafiadoras que encontramos as maiores recompensas, e pra mim, nada é mais recompensador do que ver a minha aplicação bonitona, meu código lindo e tudo funcionando corretamente.<br />Desenvolvi esse site com a intenção de aprender mais, práticar e ajudar outros desenvolvedores que estão iniciando na área.</p>
                    <h3>Minhas redes</h3>
                    <ul>
                        <a href="https://github.com/JSavioFreire" target='_blank'>
                            <AiFillGithub />
                        </a>
                        <a href="https://www.instagram.com/freiresavio7/" target='_blank'>
                            <AiFillInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/s%C3%A1vio-freire-263198244/" target='_blank'>
                            <AiFillLinkedin />
                        </a>
                        <a href='mailto:freiresavio7@gmail.com' target='_blank'>
                            <MdEmail />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5521968212882" target='_blank'>
                            <AiOutlineWhatsApp />
                        </a>
                        <a href="https://www.youtube.com/@saviofreire3323" target='_blank'>
                            <AiFillYoutube />
                        </a>
                    </ul>
                </div>
                <div data-aos="fade-left">
                    <img className='myImg' src="https://lh3.googleusercontent.com/fwRKm-VKJ2OR9tF9go9h07pNb2zVMNzV6RvsfyNUfwAPANLRranK08mTjiuHG60QFlMcrU5Q9gIynw0hTBOYiW55jxkpnQgBMvV9W6jYsXsW9CGO_bwHh86Hmj5nr6Q_I0UEd16sb66dxR2_aA4xPvY1BFVdvpRU7YyrmxeTQowiWIqlTD-wF-AWQPHHyqAxJnrTB1mIzwTvjoA5wuuigxBQ5pbUJDKkeN86m90384FSX6kGPufy2N5TQZf5LC8HIdjPDkcNFkPI_gKA40GLS5ou2s1E7Q4bBIPIm0PoAHmeqGEwnAYWz0TmaEhdYSv13Y7Xgksk5wQGfQMeTABWOpcad8X9LzUe2laXNvpTbrX1wX5Op0b-UguSUHauBXTzGg1jJv8RCWfepRE3G3mGGShr8iRK9-M1oLIfCji71NU8gG15Hhg2fN9EZGHDO40Or4VPF0htPZ8Y6Tz9zUqWAY7HZiG4CcvNIQQdiPsfBY2RIfJN9aIcPS8s4_BDq3O2Py9EtOuU8CbCQmcPXjDjoJTPjzB2rwQhSUThvJWgs6QKR0FY3XZmCpgpbNTEzoFKT5SPpEqw-SE02jcUvSSMgf2OlTzndugIqyjQjCggaNMjVXZPLe6v7CVwJ26J5XZsO5xyXCjOAxBljZFUM_GsWYPijeRpryZ84a6CWJ14GgHsPljR1kTaGEJ7MWJwYP4K3wrjfk3QZlcCjAE6kGgvbEP_CbXFZstww2BeKquVUCHVI1cFjXJl1Y37f4e2pZ7xnhPpJdBO2-f0LcVgOB-GGoiCUY3bAenZZIbSrKhYn6bfKzgzSJrK3Du7a42HKR0X_0D8wDqMDI-nE18C2RWkDdUT7FQ-Vj2G1gClsEmN3xNEt3D-NNPvNxD77WZFOtd-3hp94iDdoAbk7ZVu-E4Ks-8PQilxVEY1LSqYAQPziXzOVcLiSCbJCHKYpOK-8uD2W5AEyNeh4r2BZj1o_C4=w1204-h893-no?authuser=0" alt="fotoMinha" />
                </div>
            </div>
            <h2 className='titleHab'>Minhas Habilidades</h2>
            <Habilities />
        </StyleAboutMe>
    )
}

export default AboutMe