import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';
// import pokemon from './data.js';
import request from 'superagent';


export default class App extends Component {
state = { pokemon: [] };

  async componentDidMount() {
    const pokeData = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
   this.setState({ pokemon: pokeData.body.results })
   console.log(this.state.poke);
  }  
  render() {
  
  return (
    <div>
      <Header />
      <PokeList pokemon={this.state.pokemon} />
        {/* // ? this.state.pokemon : 'loading'} /> */}
    </div>
  );
}}


