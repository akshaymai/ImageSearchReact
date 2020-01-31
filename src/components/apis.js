import axios from 'axios'
export default axios.create({
baseURL:'https://api.unsplash.com/',
headers:{
    Authorization:'Client-ID c2c5baf2f240b5ed0dfc460cfc6edb4dd33e8714054d533a97e87ff38d5967ed'
}
})