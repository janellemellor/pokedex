import React, { Component } from "react";

export default class PokeItem extends Component {
    render() {
        return (
            <li>
                <div>
                    <h3>{this.props.title}</h3>
                    <img src={this.props.img} alt=''></img>    
                    <p>{this.props.type1}</p>
                    <p>{this.props.type2}</p>
                    <p>{this.props.ability1}</p>
                    <p>{this.props.ability2}</p>
                </div>    
            </li>
      
        );
    }
}