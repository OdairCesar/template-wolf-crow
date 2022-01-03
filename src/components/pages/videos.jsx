import React, { useState, useEffect} from 'react'

import ViewVideos from '../template/viewVideos'
import Load from '../template/load'
import Featured from '../template/featured'

export default function Videos({ channel, listVideo }) {
    const [ videos, setVideos ] = useState([])
    const [ visivel, setVisivel ] = useState(true)
    const [ dataFeatured, setDataFeatured ] = useState({})

    useEffect(()=>{
        if(channel){
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
            setVisivel(false)
        }else{
            setVisivel(true)
        }

        if(listVideo){
            setVideos(listVideo)
            setVisivel(false)
        }else{
            setVisivel(true)
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
