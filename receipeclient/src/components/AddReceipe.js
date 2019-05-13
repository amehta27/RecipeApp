import React, {Component} from 'react';
// import { threadId } from 'worker_threads';

export class AddReceipe extends Component {

    constructor(){
        super()
        this.state = {
            category : '',
            title    : '',
            description :''

        }

    }

    handleTextChange = (e) => {
        this.setState({
           [e.target.name] : e.target.value
        })
    }

    handleSaveClick = () => {
        fetch('http://localhost:8080/api/receipes',{
            method:'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
        body: JSON.stringify({
            category : this.state.category,
            title : this.state.title,
            description : this.state.description
        })
  }).then(response => response.json())
  .then(result => {
      if(result.success) {
        //   this.populateAllBooks
        this.props.history.push('/view-all-receipes')
      }
  })

    }

  render() {


  
    return (
      <div>
          <label> Enter category</label><input onChange={this.handleTextChange} type = "text" name="category"/>
          <label> Enter Title</label><input onChange={this.handleTextChange} type = "text" name="title"/>
          <label> Enter Description</label><input onChange={this.handleTextChange} type = "text" name="description"/>
          <button onClick= {this.handleSaveClick}>Add Receipe</button>
      
      </div>
    )
  }

}
