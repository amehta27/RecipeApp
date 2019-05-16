import React, {Component} from 'react';
import './AddReceipe.css';
// import { threadId } from 'worker_threads';

export class AddReceipe extends Component {

    constructor(){
        super()
        this.state = {
            category : '',
            title    : '',
            description :'',
            imageUrl : '',
            mediaUrl :'',
            amountOfTime : ''
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
            description : this.state.description,
            imageUrl : this.state.imageUrl,
            mediaUrl : this.state.mediaUrl,
            amountOfTime : this.state.amountOfTime
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
      <div className="columnalign">
        <div className = "heading">Add Receipe here</div>
        <div className="formstyling">
          <label> Enter category:</label> 
          <select className="dropdownstyle" onChange={this.handleTextChange} value={this.state.value} name="category">
          <option value='select'>select</option>
          <option value='italian'>Italian</option>
          <option value='mexican'>Mexican</option>
          <option value='indian'>Indian</option>
        </select>
        </div>
        <div className="formstyling">
          <label> Enter Title:</label><input className = "inputbox2"onChange={this.handleTextChange} type = "text" name="title"/>
        </div >
        <div className="formstyling">
            <label> Enter Description:</label><input className = "inputbox3" onChange={this.handleTextChange} type = "text" name="description"/>
        </div> 
        <div className="formstyling">
            <label> Enter ImageUrl:</label><input className = "inputbox4" onChange={this.handleTextChange} type = "text" name="description"/>
        </div> 
        <div className="formstyling">
            <label> Enter MediaUrl:</label><input className = "inputbox5" onChange={this.handleTextChange} type = "text" name="description"/>
        </div> 
        <div className="formstyling">
            <label>Amount of time:</label><input className = "inputbox6" onChange={this.handleTextChange} type = "text" name="description"/>
        </div> 
        <div className="formstyling">  
        <button className="buttonstyle"onClick= {this.handleSaveClick}>Add Receipe</button>
         </div>
      </div>
    )
  }

}
