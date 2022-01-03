import React from 'react'

import './cardDoubt.css'

export default function CardDoubt({ doubt }) {
    const response = doubt.response.replace(/(?:\r\n|\r|\n)/g, '<p></p>')
    return (
        <div id={doubt.id} className='cardDoubt'>
            <h2>{doubt.query}</h2>
            <p dangerouslySetInnerHTML={{__html: response}} />
        </div>
    )
}
