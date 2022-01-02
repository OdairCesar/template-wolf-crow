import React from 'react'

import './home.css'

import CardVideo from '../template/cardVideo'

import Featured from '../template/featured'

export default function Home({featured, listVideo }) {
    const dataFeatured = {
        image: 'https://i.ytimg.com/vi/7-DKkYyD-iA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDITYl23pePpDKznoW6fK1r3WL-sA',
        title: 'Velho Logan - História Completa',
        description: `Muito Obrigado por visualizar! Se Gostou da uma curtida e segue o canal por que tem mais vindo :)! Não deixe de ajudar a indústria de quadrinhos, se curtiu a história, compre o Gibi e confira a história na íntegra.`,
        isCreateButton: true,
        isDate: false,
        link:'https://youtu.be/7-DKkYyD-iA',
        date: '29/08/2021'
    }

    return (
        <div className='home'>
            <Featured featured={dataFeatured}/>

            <div className='effectBackground'>
                <div className='allVideos'>
                    <CardVideo video={listVideo ? listVideo.items[1] : null} />
                    <CardVideo video={listVideo ? listVideo.items[1] : null} />
                    <CardVideo video={listVideo ? listVideo.items[1] : null} />
                    <CardVideo video={listVideo ? listVideo.items[1] : null} />
                    <CardVideo video={listVideo ? listVideo.items[1] : null} />
                    <CardVideo video={listVideo ? listVideo.items[1] : null} />
                </div>
            </div>
        </div>
    )
}

