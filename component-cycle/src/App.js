import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to Component Cycle. </h2>
            </div>
        );
    }
}

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            count: 0
        };
        
    }
    render(){
        return (
            <p className="App-intro">
                <h1>Components Life cycle!</h1>
                <p>In this lecture, we will going to talk about the cycle.</p>
             </p>
    );
}
}


export default App;
