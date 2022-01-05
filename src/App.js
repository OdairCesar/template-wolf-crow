import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/layout/header'
import Contact from './components/pages/contact'
import Videos from './components/pages/videos'
import Home from './components/pages/home'
import Curiosities from './components/pages/curiosities'

import './App.css'

import apiYT from './service/apiYouTubeV3'

export default function App() {
  const [ channel, setChannel ] = useState({})
  const [ listVideo, setListVideo ] = useState({})
  const [ featured, setFeatured ] = useState(null)

  useEffect(() => {
    let numRandom = Math.floor(Math.random() * (25 - 0) + 0)
    const loadAll = async() => {
      const channel = await apiYT.getChannel()
      setChannel(channel.items[0].snippet)

      const list = await apiYT.getListVideo()
      setListVideo(list.items)

      setFeatured(list.items[numRandom].snippet)
    }

    loadAll()
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route 
            path='/contact'
            element={<Contact listVideo={listVideo}/>}
          />
          <Route 
            path='/videos'
            element={<Videos channel={channel} listVideo={listVideo}/>}
          />
          <Route 
            path='/curiosities'
            element={<Curiosities listVideo={listVideo}/>}
          />
          <Route 
            exact path='/'
            element={<Home featured={featured} listVideo={listVideo}/>}
          />
          <Route 
            path="*" 
            element={<Home />}
          />
        </Routes>
      </div>
    </Router>
  );
}
