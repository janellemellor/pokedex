import request from 'superagent';

const pokeData = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?';

export default async function getPoke() {
    let queryString = window.location.hash.slice(1);
    const newPokeDataUrl = `${pokeData}${queryString}`;

    const response = await request.get(newPokeDataUrl);
    const data = response.body;
    

    if (data.response === 'False') {
        return {
            Search: [],
            totalResults: 0
        };
    }
    return data;
  }