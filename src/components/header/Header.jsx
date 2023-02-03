import React, { useEffect, useState } from 'react'
import { HeaderStyle } from './HeaderStyled'
import writing from '../../hooks/write';

const Header = () => {

    const [nameWeb, setNameWeb] = useState('HelloWorld');

    useEffect(() => {
        setTimeout(() => writing(nameWeb, setNameWeb))
    }, [])

    return (
        <HeaderStyle>
            <div className='logo'>
                <h1>{nameWeb}</h1><h1 className='bar'>|</h1>
            </div>
            <div className='menu'>
                <h2>Home</h2>
                <h2>Blog</h2>
                <h2>Portfólio</h2>
                <h2>Sobre mim</h2>
            </div>
        </HeaderStyle>
    )
}

export default Header