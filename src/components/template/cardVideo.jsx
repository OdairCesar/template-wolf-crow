import React from 'react'

import './cardVideo.css'

export default function cardVideo({ video, definedWidth='29%' }) {
    const snippet = {
        image: video.snippet.thumbnails.medium.url,
        title: video.snippet.title,
        date: video.snippet.publishedAt,
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
