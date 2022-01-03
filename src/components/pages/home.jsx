import React, { useState, useEffect } from 'react'

import './home.css'

import CardVideo from '../template/cardVideo'
import Load from '../template/load'
import Featured from '../template/featured'

export default function Home({featured, listVideo}) {
    const [ dataFeatured, setDataFeatured ] = useState({})
    const [ visivel, setVisivel ] = useState(true)
    const [ list, setList ] = useState([])
    
    useEffect(()=>{
        console.log(featured)
        if(featured){
            setDataFeatured({
                image: featured.thumbnails.standard.url,
                imageWidth: featured.thumbnails.standard.width, 
                title: featured.title,
                description:  featured.description,
                isCreateButton: true,
                isDate: true,
                link: `https://www.youtube.com/watch?v${featured.resourceId.videoId}`,
                date: featured.publishedAt
            })
            setVisivel(false)
        }else{
            setVisivel(true)
        }

        if(listVideo){
            setList(listVideo)
            setVisivel(false)
        }else{
            setVisivel(true)
        }
    }, [featured, listVideo])

    return (
        <div className='home'>
            <Featured featured={dataFeatured? dataFeatured: null}/>

            <div className='effectBackground'>
                <div className='allVideos'>
                    {list.map ? list.map(item =>( 
                        <CardVideo key={item.id} video={item}/>
                    )) : null}
                </div>
                <Load visivel={visivel}/>
            </div>
        </div>
    )
}

