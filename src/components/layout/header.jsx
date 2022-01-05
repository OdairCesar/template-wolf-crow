import React from 'react'

import Menu from './menu'

import './header.css'

import logo from '../../assets/imgs/logo-tipo2.png'

export default function header() {
    return (
        <div className='cabecalho'>
            <div className='logotipo'>
                <img src={logo} alt="logo-tipo" />
            </div>
            <Menu />
        </div>
    )
}
