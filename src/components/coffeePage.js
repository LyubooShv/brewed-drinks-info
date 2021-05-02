import React, { Component } from 'react'
import Nav from "./Nav"

export default class CoffeePage extends Component {
    render() {
        return (
          <div>
          
          <Nav/>
            <div className="drinks">
            
          {this.props.coffees.map(item => (
            <li key={item.id}>
              <img src={item.img} alt={item.name} className="drinksImg"/>
              <p>{item.name }</p>
            </li>
          ))}
       
            </div>
            </div>
        )
    }
}
