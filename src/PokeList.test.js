import React from 'react';
import PokeList from './PokeList.js';
import renderer from 'react-test-renderer';

test('renders PokeList.js correctly', () => {
  const squirtleArray = [{
    _id: "5cef3501ef6005a77cd4fd1f",
    pokemon: "squirtle",
    id: 10,
    species_id: 7,
    height: 5,
    weight: 90,
    base_experience: 63,
    type_1: "water",
    type_2: "NA",
    attack: 48,
    defense: 65,
    hp: 44,
    special_attack: 50,
    special_defense: 64,
    speed: 43,
    ability_1: "torrent",
    ability_2: "NA",
    ability_hidden: "rain-dish",
    color_1: "#6890F0",
    color_2: "NA",
    color_f: "NA",
    egg_group_1: "monster",
    egg_group_2: "water1",
    url_image: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    generation_id: 1,
    evolves_from_species_id: "NA",
    evolution_chain_id: 3,
    shape_id: 6,
    shape: "upright",
    pokebase: "squirtle",
    pokedex: "http://www.pokemon.com/us/pokedex/squirtle"
    }]
    const tree = renderer
    .create(<PokeList pokemon={[squirtleArray]} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });