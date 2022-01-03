import React from 'react'
import { Link } from 'react-router-dom'

import './menu.css'
export default function Menu() {
    return (
        <nav className='navegador'>
            <ul className='menu'>
                <Link to='/'>
                    <li>Inicio</li>
                </Link>
                <Link to='/curiosities'>
                    <li>Curriosidades</li>
                </Link>
                <Link to='/videos'>
                    <li>Videos</li>
                </Link>
                <a href="https://biolinky.co/coonnect" target='black'>
                    <li>Loja</li>
                </a>
                <Link to='/contact'>
                    <li>Contato</li>
                </Link>
            </ul>
        </nav>
    )
}
