import React, { Component } from 'react';
import Greetings from "./component/Greetings";
import './App.css';

class App extends Component {
 constructor(){
   super();
   this.state={data:"",
   childData:"",
   showResult:false
  }
  this.displayMessage=this.displayMessage.bind(this)
this.getData=this.getData.bind(this)
 };
  getData(data){
    this.setState({childData:data})
  }
 displayMessage(){
   var today=new Date()
   var curHr=today.getHours()
   this.setState({showResult:true});
   if(curHr<12){
     this.setState({data:"Goodmorning"})
   }
   else if(curHr<18){
     this.setState({data:"Goodafternoon"})

   }
   else{
     this.setState({data:"Goodevening "})
   }
 
} 
 
  render() {
    return (
    <div>
        <Greetings sendData={this.getData}/>
        <button onClick={this.displayMessage}>click</button>
        <div className={!this.state.showResult ? 'hidden':''}></div>
        <h1>{this.state.data }{this.state.childData}</h1>
        
    </div>
    );
  }
 }
 export default App;