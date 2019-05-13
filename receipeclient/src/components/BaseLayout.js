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
        <li><Link to="/view-all-receipes">View All Recipe</Link></li>
        <li><Link to="/add-receipe">Add Receipe</Link></li>
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
          <Menu />
          {this.props.children} 
          <Footer />
        </div>
      )
    }
  
  }
  