import React, { useState, useEffect } from 'react'

import Load from '../template/load'
import RelatedMatters from '../template/relatedMatters'
import Featured from '../template/featured'

export default function Contact({ channel, listVideo }) {
    const [ dataFeatured, setDataFeatured ] = useState({
        image: ' ',
        imageWidth: ' ', 
        title: ' ',
        description: ' ',
        isCreateButton: false,
        isDate: false,
        link: ' ',
        date: ' '
    })
    const [ visivel, setVisivel ] = useState(true)

    function isEmptyObject(obj){
       return !!Object.values(obj).length  
    }

    useEffect(() => {
        if(isEmptyObject(channel)){
            setDataFeatured({
                image: channel.thumbnails.medium.url,
                imageWidth: channel.thumbnails.medium.width, 
                title: channel.title,
                description:  channel.description,
                isCreateButton: true,
                isDate: true,
                link: `https://www.youtube.com/channel/${channel.id}`,
                date: channel.publishedAt
            })
        }

        if(typeof listVideo === 'undefined' || typeof channel === 'undefined'){
            setVisivel(true)
        }else{
            setVisivel(false)
        }
    }, [listVideo, channel])

    return (
        <div className='contact'>
            <Featured featured={dataFeatured}/>
            <RelatedMatters doubt={false} list={listVideo}/>
            <Load visivel={visivel}/>
        </div>
    )
}
