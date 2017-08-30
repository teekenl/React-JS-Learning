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
            data: 0
        };
        // function binding
        this.setNewNumber = this.setNewNumber.bind(this);
    }
    setNewNumber(){
        this.setState({
            data: this.state.data +1
        })
    }

    render(){
        return (
            <div className="App-intro">
                <h1>Components Life cycle!</h1>
                <p>In this lecture, we will going to talk about the cycle.</p>
                <div>
                    <button onClick={this.setNewNumber}> Update Number.</button>
                </div>
                <NumberComponent myNumber={this.state.data}/>
             </div>
        );
    }
}

class NumberComponent extends Component{
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        console.log("component will mount");
    }
    componentDidMount(){
        console.log("component did mount");
    }
    componentWillReceiveProps(newProps){
        // receive new set of props
        console.log("Called the component will receive props");
    }
    shouldComponentUpdate(newProps, newState) {
        console.log("Component should update");
        return true;
    }
    componentWillUpdate(newProps, newState){
        console.log("Component will update");
    }
    componentDidUpdate(newProps,newState) {
        console.log("Component did update");
    }
    componentWillUnmount(){
        console.log('Component will unmount');
    }

    render(){
        return(
            <h4>{this.props.myNumber}</h4>
        );
    }
}



export default App;
