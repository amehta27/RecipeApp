import React, {Component} from 'react';
// import './ViewAllReceipe.css';


export class HomePage extends Component {
  constructor() {
    super()

    this.state={
      value: 'select',
      dishes: []

    }
  }


  handleTextChange = (e) => {
      this.setState({
        value: e.target.value
      }, () => {
        this.fetchCategory()
      })
      
    }
  

    fetchCategory() {
      console.log(this.state.value)
      fetch(`http://localhost:8080/api/categories/${this.state.value}`)
      .then (response => response.json())
      .then(json => {
        this.setState({
          dishes: json
        })
      })
    }


    render(){
      
        let dishes = this.state.dishes
        let dishesItems = dishes.map((dish) => {
          return(
            <div className = 'item-container'>
                <ul className="itemstyling">
                    <li>{dish.category}</li>
                    <li><img src = {dish.imageUrl}/></li>
                    <li>{dish.title}</li>
                    <li className = "columndisplay">
                    <div dangerouslySetInnerHTML = {{__html:dish.description}} />
                    </li>
                    <li><a href={dish.mediaurl}>Video</a></li>
                    <div className="timelabel">
                    <label>amount Of time:</label><li className="paddingtime">{dish.amountoftime}</li>
                     </div>
                </ul>
            </div>
          )
        })

         return(
        <div>
        <label> Enter category:</label>
        <select onChange={this.handleTextChange} value={this.state.value} name="category">
          <option value=''></option>
          <option value='italian'>Italian</option>
          <option value='mexican'>Mexican</option>
          <option value='indian'>Indian</option>
        </select>
        <div className='listContainer'>{dishesItems}</div>
        </div>
         )
        
      }
    
    }
