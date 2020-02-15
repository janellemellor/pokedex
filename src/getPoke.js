const pokeData = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?';

export default async function getPoke() {
    let queryString = window.location.hash.slice(1);
    const newPokeDataUrl = `${pokeData}${queryString}`;
    const response = await fetch(newPokeDataUrl);
    const data = await response.json();
    return data;
  }