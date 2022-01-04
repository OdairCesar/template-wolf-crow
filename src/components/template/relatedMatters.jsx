/* eslint-disable array-callback-return */
import React from 'react'

import CardVideo from './cardVideo'

import './relatedMatters.css'

export default function RelatedMatters({ doubt, list }) {
    let c = 0
    return (
        <div className='relatedMatters'>
            <div className='preView'>
                {doubt ? <div className='artPreView'>
                    <p><a href={`#`+doubt[0].id}>{doubt[0].query}</a></p>
                    <p><a href={`#`+doubt[1].id}>{doubt[1].query}</a></p>
                    <p><a href={`#`+doubt[2].id}>{doubt[2].query}</a></p>
                </div> : null}
                <div className='videoPreView'>
                    {list.map ? list.map((item) => {
                        c = c + 1
                        if(c < 3){
                            return(
                                <CardVideo key={item.id} video={item} definedWidth='80%'/>
                            )
                        }
                    }): null}
                </div>
            </div>
        </div>
    )
}
