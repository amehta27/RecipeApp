import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      receipes : []
    }
  }

  componentDidMount(){
    fetch('http://localhost:8080/api/receipes')
    .then (response => response.json())
    .then(json => {
      this.setState({
        receipes:json
      })
    })

}
  render(){
    let receipes = this.state.receipes
    let receipeItems = receipes.map((receipe) => {
      return(
        <div>
        <li>{receipe.category}</li>
        <li>{receipe.title}</li>
        <li>{receipe.description}</li>
        <li>{receipe.mediaurl}</li>
        <li>{receipe.imageUrl}</li>
        </div>
      )
    })
    return (
       <ul>{receipeItems}</ul>
    )
  }

}

export default App;
