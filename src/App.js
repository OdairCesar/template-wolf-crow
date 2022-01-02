import { useEffect, useState } from 'react'
import { getChannel, getListVideo} from './service/apiYouTubeV3'

export default function App() {
  const [ channel, setChannel ] = useState({})
  const [ listVideo, setListVideo ] = useState([])

  useEffect(() => {
    const loadAll = async() => {
      const channel = await getChannel()
      setChannel(channel.items[0])

      const list = await getListVideo()
      setListVideo(list)
    }

    loadAll()
  }, [])
 
  return (
    <div className="App">
      Olá mundo
    </div>
  );
}
