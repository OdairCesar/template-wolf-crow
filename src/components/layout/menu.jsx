import React from 'react'
import { Link } from 'react-router-dom'

import iconMenu from '../../assets/imgs/iconMenu.png'

import './menu.css'

export default function Menu() {
    function handleClickMenu(){
        if(window.innerWidth < 750){
            let element = document.querySelector('.menu')
            if(element.style.display === '' || element.style.display === 'none'){
                element.style.display = 'flex'
            }else{
                element.style.display = ''
            }
        }
    }

    return (
        <nav className='navegador'>
            <ul className='menu'>
                <Link to='/' onClick={handleClickMenu}>
                    <li>Inicio</li>
                </Link>
                <Link to='/curiosities' onClick={handleClickMenu}>
                    <li>Curriosidades</li>
                </Link>
                <Link to='/videos' onClick={handleClickMenu}>
                    <li>Videos</li>
                </Link>
                <a href="https://biolinky.co/coonnect" target='black'>
                    <li>Loja</li>
                </a>
                <Link to='/contact' onClick={handleClickMenu}>
                    <li>Contato</li>
                </Link>
            </ul>
            <img className='iconMenu' src={iconMenu} alt='menu' onClick={handleClickMenu}/>
        </nav>
    )
}
