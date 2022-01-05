import React from 'react'

import './featured.css'

export default function Featured({ featured }){
    return(
        <div className='featured'>
            <div className='featured-container'>
                <img style={{
                    maxWidth: featured.imageWidth,
                    minWidth: '150px'
                    }} 
                    src={featured.image} 
                    alt='thumbnail'
                />
                <div className='information'>
                    <h1>{featured.title}</h1>
                    <p>{featured.description}</p>
                    {featured.isDate ? <span>{featured.date}</span> : null}
                    {featured.isCreateButton ? <a className='btn-video' href={featured.link} target='blank'>Abrir video</a> : null}
                </div>
            </div>
        </div>
    )
}

