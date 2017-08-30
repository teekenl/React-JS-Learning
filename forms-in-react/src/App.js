import React, { Component } from 'react';
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

class Header extends Component{
    render(){
        return(
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
            </div>
        );
    }
}

class Content extends Component{
    constructor(props) {
        super(props);
        this.state = {
            myInputValue: "My Input"
        };
        this.myInputChanged = this.myInputChanged.bind(this);
    }
    myInputChanged(e){
        let itemvalue = e.target.value;
        this.setState({
            myInputValue: itemvalue
        });
    }
    render(){
        return(
            <div className="App-intro">
                <p>Forms in react.</p>
                <p>In this file, I will be learning the form component in react.</p>
                <MyInputComponent inputValue={this.state.myInputValue} myInputChanged={this.myInputChanged} />
                <h4>{this.state.myInputValue}</h4>
                <EssayComponent  />
                <FlavorForm />
                <hr/>
                <Reservation />
            </div>
        );
    }
}

class MyInputComponent extends Component{
    render(){
        return(
            <div>
                <input value={this.props.inputValue} onChange={this.props.myInputChanged} />
            </div>
        );
    }
}

class EssayComponent extends Component{
    constructor(props) {
        super(props);
        this.state ={
            value: "Once a upon time"
        };
        this.handleChanged = this.handleChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChanged(e) {
        let itemvalue = e.target.value;
        this.setState({
            value: itemvalue
        });
    }
    handleSubmit(e){
        alert(this.state.value);
        e.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <textArea value={this.state.value} onChange={this.handleChanged} />
                <h4>{this.state.value}</h4>
                <button type="submit" >Submit</button>
            </form>
        );
    }
}

class FlavorForm extends Component{
    constructor(props){
        super(props);
        this.state={
            value: "grapeFruit"
        };
        this.handleChanged = this.handleChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChanged(e) {
        this.setState({
            value: e.target.value
        });
    }
    handleSubmit(e){
        alert(this.state.value);
        e.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    <select onChange={this.handleChanged}>
                        <option value="grapeFruit">Grape</option>
                        <option value="appleFruit">Apple</option>
                        <option value="choocolate">Chocolate</option>
                        <option value="Banana">Banana</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

class Reservation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleSubmit(e){
        alert('I will going:' + this.state.isGoing + " ,  " + "I will bring "+ this.state.numberOfGuests);
        e.preventDefault();
    }
    handleInputChange(e){
        const target = e.target;
        const value = target.type==="checkbox" ? target.checked : target.value;
        const name = target.name;

        console.log(target, value);
        this.setState({
            [name]:value
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Are you going for the party?
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                </label><br/>
                <label>
                    How many quest will you bring?
                    <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default App;
