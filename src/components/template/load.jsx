import React from 'react'

import './load.css'

export default function Load({visivel}) {
    return (
        <div className='load' style={{display: visivel? null: 'none'}}>
        </div>
    )
}
