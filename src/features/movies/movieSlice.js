import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: {}
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        getMovies: (state, { payload }) => {
            state.movies = payload;

        },

    },
});


export const { getMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;