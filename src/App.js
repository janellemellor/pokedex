import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';
// import Paging from './Paging.js';
import SearchPoke from './SearchPoke.js';
// import request from 'superagent';
import getPoke from './getPoke.js';


export default class App extends Component {
state = { pokemon: [] };

async loadPoke() {
  const response = await getPoke(); 
  console.log(response);
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


