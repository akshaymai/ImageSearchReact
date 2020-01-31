import React from 'react'


class Imagecard extends React.Component{
    constructor(props){
        super(props)
        this.imageRef=React.createRef()
        this.span={span:0}
    }
    componentDidMount(){

this.imageRef.current.addEventListener('load',this.span)
    }

span=()=>{
const height= this.imageRef.current.clientHeight
const span=Math.ceil(height/10)
this.setState({span:span})
}

    render(){
        const {discription,urls}=this.props.image
        return(
            <div style={{gridRowEnd:`span ${this.span}`}}>


                <img 
                ref={this.imageRef}
                 alt={discription}
                 src={urls.regular}
                 />
            </div>
        )
    }
}

export default Imagecard