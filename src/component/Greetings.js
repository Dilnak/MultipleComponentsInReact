import React, { Component } from 'react';

class Greetings extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name:""
    }
    
  }
  handleNameChange=(event)=>{
   
  this.setState({
      name:event.target.value
    })
this.props.sendData(this.state.name);
  }
   
    render() {
      return (
        <div>
        <form>
          <label>Name:</label>
          <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
          
          
          
          </form>
        </div>
      );
    }
  }
  
export default Greetings;