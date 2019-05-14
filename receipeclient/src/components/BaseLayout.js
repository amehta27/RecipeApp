import React, {Component} from 'react';
import './BaseLayout.css';
import {ViewAllReceipe} from './ViewAllReceipe'
import {AddReceipe} from './AddReceipe'
import {Link, NavLink} from 'react-router-dom'


export class Menu extends Component {

    render() {
      return (
        
        <ul className="menu">
        <li><NavLink to="/" className="link">Home</NavLink></li>
        <li><NavLink to="/view-all-receipes" className="link">View All Recipe</NavLink></li>
        <li><NavLink to="/add-receipe" className="link">Add Receipe</NavLink></li>
        </ul>
      )
    }
  }
  
  export class Footer extends Component {
  
    render() {
      return (
        <div className="footer">Copyright 2019</div>
      )
    }
  
  }
  
  export class BaseLayout extends Component {
  
    render() {
      return (
        <div className = "baselayout">
             <div className='content-wrap'>
                <Menu />
                {this.props.children} 
                <Footer />
          </div>
        </div>
      )
    }
  
  }
  