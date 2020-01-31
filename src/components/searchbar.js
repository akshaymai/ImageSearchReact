import React from 'react'
 

class Searchbar extends React.Component{
constructor(){

super()
   this.state={
        term:''
    }
this.onfromsubmit=this.onfromsubmit.bind(this)
}

 

onfromsubmit(event)
{
event.preventDefault();
this.props.onsumbit(this.state.term);

} 
render(){
return(
    <div className="ui segment">
        <form onSubmit={this.onfromsubmit} className="ui form">
           <div className="field">
            <label>Search For.... What??....</label>
            <input type="text" 
            value={this.state.value}
            onChange={e=>this.setState({term: e.target.value})}
            />
            </div>
 
            </form>
        </div>
)

}


}

export default Searchbar