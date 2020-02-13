import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';
import pokemon from './data.js';
// import request from 'superagent';


class App extends Component {
  // async componentDidMount() {
  //   const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
  
  //   console.log(data)

  render() {
  
  return (
    <div>
      <Header />
      <PokeList pokemon={pokemon} />
    </div>
  );
}}

export default App;
