import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    films: [],
    quantity: 0,
  },
  reducers: {
    addFilm: (state, action) => {
      state.quantity += 1;
      state.films.push(action.payload.film);
    },
    removeFilm: (state, index) => {
      state.quantity -= 1;
      state.films.splice(index, 1);
    },
  },
});
export const { addFilm, removeFilm } = cartSlice.actions;
export default cartSlice.reducer;
