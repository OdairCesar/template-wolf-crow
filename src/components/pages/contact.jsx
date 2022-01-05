import React, { useState, useEffect } from 'react'

import Load from '../template/load'
import RelatedMatters from '../template/relatedMatters'
import Featured from '../template/featured'

import imgInstagram from '../../assets/imgs/instagram.png'
import imgTwitter from '../../assets/imgs/twitter.png'
import imgTiktok from '../../assets/imgs/tiktok.png'
import image from '../../assets/imgs/contact.png'

import './contact.css'

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

export default function Contact({ listVideo }) {
    const [ dataFeatured, setDataFeatured ] = useState(initialState)
    const [ visivel, setVisivel ] = useState(true)


    useEffect(() => {
        setDataFeatured({
            image: image, 
            title: 'Fale conosco',
            description: 'Redes socias do canal e informações para entrar em contato com o Wolf Crow',
            isCreateButton: false,
            isDate: true,
            link: ' ',
            date: '2022-01-05'
        })

        if(typeof listVideo === 'undefined'){
            setVisivel(true)
        }else{
            setVisivel(false)
        }
    }, [listVideo])

    return (
        <div className='contact'>
            <Featured featured={dataFeatured}/>
            <main className='effectBackground'>
                <div className='contactAndPrew'>
                    <div className='contactAndForm'>
                        <div className='socialAndContact'>
                            <div className='socialMidia'>
                                <h2>Redes Socias</h2>
                                <div className='iconMidia'>
                                    <a href='https://www.instagram.com/wolfcrow_oficial/' target='black'><img src={imgInstagram} alt="Instagram" /></a>
                                    <a href='https://www.tiktok.com/' target='black'><img src={imgTiktok} alt="TikTok" /></a>
                                    <a href='https://twitter.com/home' target='black'><img src={imgTwitter} alt="Twitter" /></a>
                                </div>
                            </div>
                            <div className='contacts'>
                                <h2>Contato</h2>
                                <p><span>E-mail: </span>sfdgsdfgsdfg</p>
                                <p><span>WhatsApp: </span>gsdfgsdfgsdfgsd</p>
                            </div>
                        </div>
                        <form className='form' onClick={null}>
                            <h2>Envie sua mensagem:</h2>
                            <label>
                                Nome:
                                <input className='inputSimple' name='nome' type='text'/>
                            </label>
                            <label>
                                Assunto:
                                <input className='inputSimple' name='assunto' type='text'/>
                            </label>
                            <label>
                                E-mail:
                                <input className='inputSimple' name='email' type='email'/>
                            </label>
                            <label>
                                Mensagem: 
                                <textarea className='inputArea' name='msg'/>
                            </label>
                            <input className='btnSubmit' type='submit' value='Enviar' />
                        </form>
                    </div>
                    <RelatedMatters  doubt={false} list={listVideo}/>
                </div>
            </main>
            <Load visivel={visivel}/>
        </div>
    )
}
