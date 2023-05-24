import axios from "axios"


export const KEY = 'AIzaSyDl3RFw1vgd087K88--Iy2663gn4aaDrqw'

export default axios.create({
     baseURL: 'https://www.googleapis.com/youtube/v3',
     params: {
          part: 'snippet',
          maxResults: 100,
          key: KEY,
          // q: 
     }
})
