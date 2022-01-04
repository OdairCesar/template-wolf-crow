import React, { useState, useEffect} from 'react'

import ViewVideos from '../template/viewVideos'
import Load from '../template/load'
import Featured from '../template/featured'

export default function Videos({ channel, listVideo }) {
    const [ videos, setVideos ] = useState([])
    const [ visivel, setVisivel ] = useState(true)
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

    function isEmptyObject(obj){
        return !!Object.values(obj).length  
    }

    useEffect(()=>{
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

        if(listVideo){
            setVideos(listVideo)
        }

        if(typeof listVideo === 'undefined' || typeof channel === 'undefined'){
            setVisivel(true)
        }else{
            setVisivel(false)
        }
    }, [channel, listVideo])

    return (
        <div>
            <Featured featured={dataFeatured}/>
            <ViewVideos list={videos} limit={false}/>
            <Load visivel={visivel}/>
        </div>
    )
}
