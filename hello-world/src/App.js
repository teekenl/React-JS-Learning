import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        headerText: "Welcome to React",
        contentText: "In this lecture, we will go over the component"
    };
  }
  render() {
    return (
      <div className="App">
          <Header/>
          <Content/>
          {/*<Clock />*/}
          {/*<h1>{this.state.headerText}</h1>
          <p>{this.state.contentText}</p>*/}
      </div>
    );
  }
}

class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Welcome to React</h2>
            </div>
        );
    }
}

class Content extends Component {
    constructor(props){
        super(props);
        this.state =  {
            data:[
                {
                    "id":1,
                    "name":"foo",
                    "age":"30"
                },
                {
                    "id":2,
                    "name":"venice",
                    "age":"20"
                },
                {
                    "id":3,
                    "name":"tua",
                    "age":"10"
                }
            ]
        };
    }
    render(){
        return (
            <p className="App-intro">
                <h1>Welcome to Component</h1>
                To get started, edit <code>src/App.js</code> and save to reload.
                <table>
                    <thead>
                    <th>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                    </th>
                    </thead>
                    <tbody>
                    {this.state.data.map((person,i)=> <TableRow key={i} data={person} /> )}
                    </tbody>
                </table>
            </p>
        );
    }
}

class Clock extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            comment: "Hello"
        };
    }
    componentDidMount(){
        this.timeID = setInterval(
            ()=>{this.tick()},
            1000);
    }
    tick(){
        this.setState({
            date: new Date(),
            comment: this.state.comment + "x"
        });
    }
    componentWillUnmount(){
        clearInterval(this.timeID);
    }
    render(){
        return (
            <div>
                <h2>The time is : {this.state.date.toLocaleTimeString()}</h2>
                <p>
                    {this.state.comment}
                </p>
            </div>
        );
    }
}


class TableRow extends Component {
    render(){
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}



export default App;
