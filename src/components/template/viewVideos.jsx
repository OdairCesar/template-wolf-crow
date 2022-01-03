import React from 'react'

import CardVideo from './cardVideo'
import './viewVideos.css'

export default function ViewVideos({ list, limit }) {
    let c = 0

    return (
        <div className='effectBackground'>
            <div className='allVideos'>
                {list.map ? list.map(item =>{
                    if(limit){
                        c += 1
                        if(c < 10){
                            return( 
                                <CardVideo key={item.id} video={item}/>
                            )
                        }
                    }else{
                        return(
                            <CardVideo key={item.id} video={item}/>
                        )
                    }
                    }) : null }
            </div>
        </div>
    )
}
