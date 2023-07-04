import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokemonArray: [],
        detailPokemon: null,
        backUrl: null,
        frontUrl: null,
        searchKey: "all"
    },
    reducers: {
        resetAllPokemon: (state, action) => {
            state.pokemonArray = [];
        },
        setAllPokemon: (state, action) => {
            // console.log(action.payload)
            state.pokemonArray.push(action.payload);
        },
        setDetailPokemon: (state, action) => {
            state.detailPokemon = action.payload
        },
        setBackUrlink: (state, action) => {
            state.backUrl = action.payload
        },
        setFrontUrlink: (state, action) => {
            state.frontUrl = action.payload
        },
        setSearchKey: (state, action) => {
            state.searchKey = action.payload
        },
    }
});

export const { setAllPokemon, setDetailPokemon, resetAllPokemon, setBackUrlink, setFrontUrlink, setSearchKey } = pokemonSlice.actions;
export default pokemonSlice.reducer;