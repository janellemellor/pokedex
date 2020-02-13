import React, { Component } from "react";
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        return <ul>
            {this.props.pokemon.map(poke => <PokeItem title={poke.pokemon} img={poke.url_image} type1={poke.type_1}type2={poke.type_2} ability1={poke.ability_1} ability2={poke.ability_2}/>
            )}

        </ul>
        
    }
}

