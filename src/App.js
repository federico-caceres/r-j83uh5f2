import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      counter: 0
    }
  }

  handlerOnChange = (e) => {
    const value = e.target.value
    this.setState({
      counter: value.length
    });
  };


  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.handlerOnChange}></textarea>
        <div className="counter">{ this.state.counter }</div>
      </div>
    );
  }
}

export default App;
