import React from 'react'

import './featured.css'

export default function Featured({ featured }){
    let firstDate = null

    if(featured.isDate){
        let year = featured.date.substr(0, 4)
        let month = featured.date.substr(5, 2)
        let day = featured.date.substr(8, 2)
        firstDate = `${day}/${month}/${year}`
    }

    return(
        <div className='featured'>
            <div className='featured-container'>
                <img style={{
                    maxWidth: window.innerWidth < 750 ? '450px' : 
                              window.innerWidth < 1024 ? '550px' : 
                              featured.imageWidth
                    }} 
                    src={featured.image} 
                    alt='thumbnail'
                />
                <div className='information'>
                    <h1>{featured.title}</h1>
                    <p>{featured.description}</p>
                    {featured.isDate ? <span>{firstDate}</span> : null}
                    {featured.isCreateButton ? <a className='btn-video' href={featured.link} target='blank'>Abrir video</a> : null}
                </div>
            </div>
        </div>
    )
}

