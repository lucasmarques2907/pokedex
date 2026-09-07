import { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("You must provide a Pokemon name");
  }

  const name = args[0];
  const pokemon = await state.pokeAPI.fetchPokemon(name);

  const res = Math.floor(Math.random() * pokemon.base_experience);

  console.log(`Throwing a Pokeball at ${pokemon.name}...`);

  if (res > 40) {
    console.log(`${pokemon.name} escaped!`);
    return;
  }
  console.log(`${pokemon.name} was caught!`);
  console.log("You may now inspect it with the inspect command");
  state.pokedex[pokemon.name] = pokemon;
}
