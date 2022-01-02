import React from 'react'

import './home.css'

import CardVideo from '../template/cardVideo'

export default function Home({featured, listVideo }) {

    return (
        <div className='home'>
            <div className='featured'>
                <img src='https://i.ytimg.com/vi/7-DKkYyD-iA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDITYl23pePpDKznoW6fK1r3WL-sA' alt='thumbnail'/>
                <div className='information'>
                    <h2>Velho Logan - História Completa</h2>
                    <p>Muito Obrigado por visualizar!
                    Se Gostou da uma curtida e segue o canal por que tem mais vindo :)!
                    Não deixe de ajudar a indústria de quadrinhos, se curtiu a história, compre o Gibi e confira a história na íntegra.</p>
                    <button className='btn-video'>Abrir video</button>
                </div>
            </div>
            <div className='allVideos'>
                <CardVideo video={listVideo ? listVideo.items[1] : null} />
                <CardVideo video={listVideo ? listVideo.items[1] : null} />
                <CardVideo video={listVideo ? listVideo.items[1] : null} />
                <CardVideo video={listVideo ? listVideo.items[1] : null} />
                <CardVideo video={listVideo ? listVideo.items[1] : null} />
                <CardVideo video={listVideo ? listVideo.items[1] : null} />
                <CardVideo video={listVideo ? listVideo.items[1] : null} />
                <CardVideo video={listVideo ? listVideo.items[1] : null} />
            </div>
        </div>
    )
}

