import type { State } from "./state.js";

export async function commandMapb(state: State) {
    const locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);
    state.nextLocationsURL = locations.next ?? "";
    state.prevLocationsURL = locations.previous ?? "";



    for (const location of Object.values(locations.results)) {
        console.log(location.name);
    };
}