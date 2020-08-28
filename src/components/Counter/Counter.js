import React, {Component, UseState} from 'react';

export class Counter extends Component{
  constructor(){
    super();
    this.state = {
      counter: 0,
      inputValue: 0,
    }
  }
  onChange = (event) => {
    let inputValue = event.target.value;
    this.setState({inputValue});
  };

  onIncrease = () => {
    if (this.state.counter < 10){
    let counter = this.state.counter +1;
    this.setState({counter});
    }
  }

   onDecrease = () => {
    if (this.state.counter > 0){
      let counter = this.state.counter -1;
      this.setState({counter});
    } 
  }


render(){
  return(
      <div>
        <button className="btn btn-primary"onClick={this.onDecrease}>-</button>
        <input className="form-control" type="number" onChange= {this.onChange} value={this.state.counter} min="0" max="10"/>
        <button className="btn btn-primary" onClick={this.onIncrease}>+</button>
      </div>
    );
  }
}

export default Counter;