import React from 'react'
import './imagelist.css'
import Imagecard from './imagecard'

const ImageList=(props)=>{
    
var images=props.imagelists.map((image)=>{

    return <  Imagecard 
   
     key={image.id} 
     image={image} />
})
return(
    <div className="grid-container"  >{images} </div>
)



 }
export default ImageList