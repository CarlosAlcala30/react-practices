import React,{Component} from 'react';
import './App.css';
import CustomHeader from './Components/custom-header'

class App extends Component{
  constructor(){
    super()
    this.state = {
      title:"Hola koders"
    }

    this.changeHandler= this.changeHandler.bind(this)
  }

  changeHandler(event){
      const text = event.target.value
      this.setState({title:text})
  }


  render(){
    return (
      <>
        <input type="text" onChange={this.changeHandler}/>
        <CustomHeader 
          title = {this.state.title?this.state.title:"Hola koders"}
          customClasses = {["text-bold","color-red"]}
        />
      </>
    )
    
  }
}

export default App

