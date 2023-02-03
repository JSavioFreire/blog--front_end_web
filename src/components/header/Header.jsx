import React, { useEffect, useState } from 'react'
import { HeaderStyle } from './HeaderStyled'
import writing from '../../hooks/write';
import { NavLink } from 'react-router-dom';

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
            <ul className='menu'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li>Blog</li>
                <li>Portfólio</li>
                <li><NavLink to='/aboutme'>Sobre mim</NavLink></li>
            </ul>
        </HeaderStyle>
    )
}

export default Header