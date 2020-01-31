import React from 'react'
import Searchbar from './searchbar'
import upsplaceapi from './apis'
import ImageList from './imageList'

class App extends React.Component {

state={images:[]};

onsearchsubmit= async(term)=>{
const response=await upsplaceapi.get('/search/photos',{
params:{query:term}
 }) 
 
this.setState({images: response.data.results});
}
 
    render(){
         console.log("My term is:",this.state.images)
        return(
            < div  className="ui container" style={{'marginTop':'10px','color':'blue'}}>
                <Searchbar  onsumbit={this.onsearchsubmit} />
                <ImageList imagelists={this.state.images}  />
                
                </div>
        )
    }
 

}
export default App