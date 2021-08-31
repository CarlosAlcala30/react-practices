import React,{Component} from 'react';
import './App.css';
import CustomHeader from './Components/custom-header'
import CustomList from './Components/custom-list'

class App extends Component{
  constructor(){
    super()
    this.state = {
      title:"Hola koders",
      listItem:[]
    }

    this.changeHandler= this.changeHandler.bind(this)
    this.saveHandler=this.saveHandler.bind(this)
  }

  changeHandler(event){
      const text = event.target.value
      this.setState({title:text})
  }

  saveHandler(){
    this.setState({listItem:[...this.state.listItem,this.state.title]})
  }


  render(){
    return (
      <>
        <input type="text" onChange={this.changeHandler}/>
        <button onClick={this.saveHandler}>Guardar</button>
        {/*<CustomHeader 
          title = {this.state.title?this.state.title:"Hola koders"}
          customClasses = {["text-bold","color-red"]}
        />*/}
        <CustomList
          listItem = {this.state.listItem}
        />
        
      </>
    )
    
  }
}

export default App

