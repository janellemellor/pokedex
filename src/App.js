import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';
import Paging from './Paging.js';
import SearchPoke from './SearchPoke.js';
import getPoke from './getPoke.js';


export default class App extends Component {
state = { pokemon: [] };

async loadPoke() {
  const response = await getPoke(); 
  const pokemon =  response.results;
  const totalResults = response.count;
  this.setState({ 
    pokemon: pokemon,
    totalResults: totalResults,
   });
}

  async componentDidMount() {
    await this.loadPoke();

    window.addEventListener('hashchange', async () => {
      await this.loadPoke();
    });
  }  


  render() {
    const { pokemon, totalResults } = this.state;
  
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <SearchPoke />
        </section>

        <section>
          <PokeList pokemon={pokemon} />
          <Paging totalResults={totalResults} />
        </section>  
      </main>
    </div>
  );
}}


