import React, { useState, useEffect } from 'react'

import './home.css'

import ViewVideos from '../template/viewVideos'
import Load from '../template/load'
import Featured from '../template/featured'

export default function Home({featured, listVideo}) {
    const [ dataFeatured, setDataFeatured ] = useState({})
    const [ visivel, setVisivel ] = useState(true)
    const [ videos, setVideos ] = useState([])
    
    useEffect(()=>{
        if(featured){
            setDataFeatured({
                image: featured.thumbnails.standard.url,
                imageWidth: featured.thumbnails.standard.width, 
                title: featured.title,
                description:  featured.description,
                isCreateButton: true,
                isDate: true,
                link: `https://www.youtube.com/watch?v=${featured.resourceId.videoId}`,
                date: featured.publishedAt
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
    }, [featured, listVideo])

    return (
        <div className='home'>
            <Featured featured={dataFeatured}/>

            <ViewVideos list={videos} limit={true}/>

            <Load visivel={visivel}/>
        </div>
    )
}

