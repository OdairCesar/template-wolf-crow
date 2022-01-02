import React from 'react'

import './featured.css'

export default function Featured({ featured }){
    return(
        <div className='featured'>
            <div className='featured-container'>
                <img src={featured.image} alt='thumbnail'/>
                <div className='information'>
                    <h1>{featured.title}</h1>
                    <p>{featured.description}</p>
                    {featured.isCreateButton ? <a className='btn-video' href={featured.link} target='blank'>Abrir video</a> : null}
                    {featured.isDate ? <span>{featured.date}</span> : null}
                </div>
            </div>
        </div>
    )
}

