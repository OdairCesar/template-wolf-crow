import React from 'react'

import './cardVideo.css'

export default function cardVideo({ video }) {
    const snippet = {
        image: video.snippet.thumbnails.medium.url,
        title: video.snippet.title,
        date: video.snippet.publishedAt,
    }
    return (
        <div className='card'>
            <img src={snippet.image} alt='thumbnail'/>
            <button className='btn-card'>Quadrinhos</button>
            <h2 className='title'>{snippet.title}</h2>
            <p className='date'>{snippet.date}</p>
        </div>
    )
}
