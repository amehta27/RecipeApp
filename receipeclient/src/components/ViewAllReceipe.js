import React, {Component} from 'react';
import './ViewAllReceipe.css';


export class ViewAllReceipe extends Component {

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
            <br />
            <br />
            <div className = 'item-container'>
                <ul className="itemstyling">
                    <li>{receipe.category}</li>
                    <li><img src = {receipe.imageUrl}/></li>
                    <li>{receipe.title}</li>
                    <li className = "columndisplay">
                    <div dangerouslySetInnerHTML = {{__html:receipe.description}} />
                    </li>
                    <li><a href={receipe.mediaurl}>Video</a></li>
                    <div className="timelabel">
                    <label>amount Of time:</label><li className="paddingtime">{receipe.amountoftime}</li>
                     </div>
                </ul>
            </div>
            </div>
          )
        })
        return (
           <div className='listContainer'>{receipeItems}</div>
        )
      }
    
    }
    


//   render() {
//     return (
//       <h1>ViewAllReceipe</h1>
//     )
//   }

// }