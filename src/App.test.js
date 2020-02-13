import React from 'react';
import App from './App.js';
import Header from './Header.js';
import PokeList from './PokeList.js';
import PokeItem from './PokeItem.js';
import renderer from 'react-test-renderer';

test('renders App.js correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders Header.js correctly', () => {
  const tree = renderer
  .create(<Header />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders PokeList.js correctly', () => {
  const tree = renderer
  .create(<PokeList pokemon={this.state.pokemon} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders PokeItem.js correctly', () => {
  const tree = renderer
  .create(<PokeItem />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});