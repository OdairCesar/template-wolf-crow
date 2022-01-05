import React, { useState, useEffect } from 'react'

import './home.css'

import ViewVideos from '../template/viewVideos'
import Load from '../template/load'
import Featured from '../template/featured'

const initialState ={
    image: ' ',
    imageWidth: ' ', 
    title: ' ',
    description: ' ',
    isCreateButton: false,
    isDate: false,
    link: ' ',
    date: ' '
}

export default function Home({featured, listVideo}) {
    const [ dataFeatured, setDataFeatured ] = useState(initialState)
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
        }

        if(listVideo){
            setVideos(listVideo)
        }

        if(typeof listVideo === 'undefined' || typeof featured === 'undefined'){
            setVisivel(true)
        }else{
            setVisivel(false)
        }
    }, [featured, listVideo])

    return (
        <div className='home'>
            <Featured featured={dataFeatured}/>
            <main>
                <ViewVideos list={videos} limit={true}/>
            </main>
            <Load visivel={visivel}/>
        </div>
    )
}

