import React from 'react'
import reactdom from 'react-dom'
import App from './components/app'
// class Fromhandle extends React.Component{

// constructor(props){
// super(props);
// this.state={ username:''}

// namechangehandler=(event)=>{
// this.setState({username:event.target.value})
// }
//  }

//******1st react from  */


// constructor(props) {
//     super(props);
//     this.state = { username: '' };
//   }
//   myChangeHandler = (event) => {
//     this.setState({username: event.target.value});
//   }

// render(){

// return(
//     <div>
 
// <form>

// <h1>Hello {this.state.username}</h1>
// <p>Enter your Name:</p>
// <input  
// type="text"
// onChange={this.myChangeHandler}/>
// </form>
// </div>
// )


// }





///2nd React from ///////


// constructor(props) {
//   super(props);
//   this.state = { username: '' };
// }
// myChangeHandler = (event) => {
//   this.setState({username: event.target.value});
// }
// render() {
//   let header = '';
//   if (this.state.username) {
//     header = <h1>Hello {this.state.username}</h1>;
//   } else {
//     header = '';
//   }
//   return (
//     <form>
//     {header}
//     <p>Enter your name:</p>
//     <input
//       type='text'
//       onChange={this.myChangeHandler}
//     />
//     </form>
//   );
// }


//////3rd react from 

// constructor(props){

//   super(props)
//   this.state={
//     user:''
//   }
// }

// onsummitHandeler=(event)=>{

//   alert("You are submitting " + this.state.user);
 
// }
// onnamechangeHandeler=(event)=>{

// this.setState({user:event.target.value})

// }

// render(){

// return(
//   <div>
//     <form onSubmit={this.onsummitHandeler}> 
// <input type="text" onClick={this.onnamechangeHandeler} />
//  <input type="submit" />
//    </form>
//     </div>
// )


// }




// }

reactdom.render(<App />,document.querySelector('#root'))