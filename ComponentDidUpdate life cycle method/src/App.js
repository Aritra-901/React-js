import logo from './logo.svg';
import './App.css';
import React,{component} from'react'
export default class App extends component
{
  constructor()
  {
    super();
    console.warn("constructor")
    this.state={
      count:0
    }
  }
  componentDidUpdate(prerops,preState,snapshot)
  {
    console.warn("componentDidUpdate",preState.count,this.state.count)
    if(this.state.count<10)
    {
      this.state({count:this.state.count+1})
    }
  }
  render()
  {
    return (
      <div className="App">
       <h1>Component Did Update{this.state.count}</h1>
       <button onClick={()=>{this.setState({count:1})}}>Update</button>
      </div>
    );
  }
}



  
