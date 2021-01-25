const moment = require("moment-timezone"); // will help us do all the dates math while considering the moment-timezone
const util = require("./util");
const axios = require("axios");

const fetchPokemon = async (pokemonId) => {
  const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
  // list of actors with pictures and date of birth for a given day and month

  const url = `${ENDPOINT}${pokemonId}`;
  const config = {
    timeout: 6500, // timeout API call before we reach Alexa's 8 second timeout, or set globally via axios.defaults.timeout
    headers: { Accept: "application/json" },
  };
  console.log(url);

  let result = await axios.get(url, config);
  return result;
};

const convertPokemonResponse = (handlerInput, response, timezone) => {
  const { t } = handlerInput;
  const pokemon = response.data;
  let speechResponse = "";
  // if the API call failed we just don't append today's birthdays to the response
  if (!pokemon || !pokemon.name) {
    speechResponse += t("ERROR_MSG");
    return speechResponse;
  }
  let type = "";
  speechResponse += t("POKEMON_INFO", {
    height: (0.0 + pokemon.height) / 10,
    weight: (0.0 + pokemon.weight) / 10,
    name: pokemon.name,
  });

  return speechResponse;
};

module.exports = {
  fetchPokemon,
  convertPokemonResponse,
};
