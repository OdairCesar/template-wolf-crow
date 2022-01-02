import React from 'react'

import './cardVideo.css'

export default function cardVideo({ video }) {
    return (
        <div className='card'>
            <img src='https://i.ytimg.com/vi/WkZNNr79X-k/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDyL6Yjo2QgrNIXg33eHcGKbDKKHA' alt='thumbnail'/>
            <button className='btn-card'>Quadrinhos</button>
            <h2 className='title'>Injustiça Deuses entre Nós - O Filme</h2>
            <p className='date'>29/10/2017</p>
        </div>
    )
}
