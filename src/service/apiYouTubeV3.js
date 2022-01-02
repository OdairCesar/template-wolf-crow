const API_KEY = process.env.REACT_APP_API_KEY
const API_BASE = process.env.REACT_APP_API_BASE
const ID_CHANNEL = process.env.REACT_APP_ID_CHANNEL
const ID_LIST = process.env.REACT_APP_ID_LIST

const basicFetch = async (search) => {
    const req = await fetch(`${API_BASE}${search}`)
    const json = await req.json()
    return json
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getChannel: async() => {
        const channel = await basicFetch(`channels?part=snippet&id=${ID_CHANNEL}&key=${API_KEY}`)
        return channel
    },

    getListVideo: async() => {
        const list = await basicFetch(`playlistItems?part=snippet,contentDetails&maxResults=50&order=date&playlistId=${ID_LIST}&key=${API_KEY}`)
        return list
    }
}
/*
 *exemplo para buscar informações do canal:
 *https://www.googleapis.com/youtube/v3/channels?part=snippet&id=z3-XfZcVTxMhoacG&key=IzaSyBWaaKdU5BcgJr4thOrMZKbPco4
 *
 *exemplo para buscar informações da lista de videos: 
 *https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=50&order=date&playlistId=z3-XfZcVTxMhoacGxzA&key=IzaSyBWaaKdU5BcgJr4thOrMZKbPco4
 */