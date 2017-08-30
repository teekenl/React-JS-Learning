import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
          <Header header={this.state.headerText} />
          <Content content={this.state.contentText} />
          {/* /*<Clock />
              <h1>{this.state.headerText}</h1>
              <p>{this.state.contentText}</p>*/
          }
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


// Using props validation
Header.propTypes = {
    propString: React.PropTypes.string.isRequired,
    propArray : React.PropTypes.array.isRequired,
    propBool : React.PropTypes.bool,
    propNumber: React.PropTypes.number,
    propObject: React.PropTypes.object,
    propFunc: React.PropTypes.func
};

Header.defaultProps = {
    propString: "String value...",
    propBool: false,
    propNumber: 1,
    propObject: {
        "object": "objectValue1",
        "object2": "objectValue2",
        "object3": "objectValue3"
    },
    propFunc: function(e) {return e}
};


class Content extends Component {
    constructor(props){
        super(props);
        this.state =  {
            data:[],
            count: 0
        };

        // In ES6 in order to use function of object you need to use bind..
        this.updateMyState = this.updateMyState.bind(this);
        this.forceUpdateRenderNumber = this.forceUpdateRenderNumber.bind(this);
        this.findMyDOMNode = this.findMyDOMNode.bind(this);
    }
    updateMyState(){
        let count = this.state.count;
        count++;
        let item = "Click -" + count;
        let myArray = this.state.data;
        myArray.push(item);
        // using setState function to update state variable within component.
        this.setState({data:myArray});
    }

    forceUpdateRenderNumber (){
        // re-render page without set the state again.
        this.forceUpdate();
    }

    findMyDOMNode(){
        // playing with javascript DOM
        let myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'red';
    }

    render(){
        return (
            <p className="App-intro">
                <h1>Welcome to Component</h1>
                To get started, edit <code>src/App.js</code> and save to reload.
                {this.state.content}<br/>
                <button onClick={this.updateMyState}>Click me</button>
                <h4>State Data: {this.state.data}</h4>
                <button onClick={this.forceUpdateRenderNumber}>Random number</button>
                <h4>Random Number: {Math.random()}</h4>
                <button onClick={this.findMyDOMNode}>Find Random node</button>
                <div id="myDiv">This is my DIV</div>
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
    constructor(props){
        super(props);
    }
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
