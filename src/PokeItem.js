import React, { Component } from "react";

export default class PokeItem extends Component {
    render() {
        return (
            <li>
                <div id='item-div' >
                    <h3>{this.props.title}</h3>
                    <img src={this.props.img} alt=''></img>    
                    <p>Type 1: {this.props.type1}</p>
                    <p>Type 2: {this.props.type2}</p>
                    <p>Ability 1: {this.props.ability1}</p>
                    <p>Ability 2: {this.props.ability2}</p>
                </div>    
            </li>
      
        );
    }
}