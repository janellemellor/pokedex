import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';
// import Paging from './Paging.js';
import SearchPoke from './SearchPoke.js';
import request from 'superagent';


export default class App extends Component {
state = { pokemon: [] };

async getPoke() {
  const pokeData = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex?');
  let queryString = window.location.hash.slice(1);

  const newPokeDataUrl = `${pokeData}${queryString}`;
  const response = await fetch(newPokeDataUrl);
  const data = await response.json();
  return data;
}


async loadPoke() {
  const response = await this.getPoke();
  const pokemon =  response.results;
  this.setState({ 
    pokemon: pokemon
   });
}

  async componentDidMount() {
    await this.loadPoke();

    window.addEventListener('hashchange', async () => {
      await this.loadPoke();
    });
  }  


  render() {
    const { pokemon } = this.state;
  
  return (
    <div>
      <Header />
      <SearchPoke />
      <PokeList pokemon={pokemon} />
        {/* // ? this.state.pokemon : 'loading'} /> */}
    </div>
  );
}}


