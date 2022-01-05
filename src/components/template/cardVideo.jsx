import React, { useEffect } from 'react'

import './cardVideo.css'

let width = '29%'
if(window.innerWidth < 750){
    width = '95%'
}else if(window.innerWidth < 1024){
    width = '45%'
}

export default function CardVideo({ video, definedWidth=width }) {
    
    let year = video.snippet.publishedAt.substr(0, 4)
    let month = video.snippet.publishedAt.substr(5, 2)
    let day = video.snippet.publishedAt.substr(8, 2)
    let firstDate = `${day}/${month}/${year}`

    const snippet = {
        image: video.snippet.thumbnails.medium.url,
        title: video.snippet.title,
        date: firstDate,
        link: video.contentDetails.videoId
    }
    return (
        <div className='card' style={{width: definedWidth}}>
            <img src={snippet.image} alt='Thumbnail'/>
            <h2 className='title'>{snippet.title}</h2>
            <div className='dateAndBtn'>
                <p className='date'>{snippet.date}</p>
                <a href={'https://www.youtube.com/watch?v=' + snippet.link} className='btn-card' target='black'>Assistir</a>
            </div>
        </div>
    )
}
