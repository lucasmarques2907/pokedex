import { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("You must provide a Pokemon name");
  }

  const name = args[0].toLowerCase();
  const pokemon = state.pokedex[name];
  if (!pokemon) {
    throw new Error("You have not caught that Pokemon");
  }

  console.log(`Name: ${pokemon.name}`);
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.weight}`);
  console.log("Stats:");
  for (const stat of pokemon.stats) {
    console.log(` - ${stat.stat.name}: ${stat.base_stat}`);
  }
  console.log("Types:");
  const types = pokemon.types;
  for (const type of types) {
    console.log(` - ${type.type.name}`);
  }
}
