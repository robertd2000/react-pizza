import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  isLoaded: false,
}

const PizzasSlice = createSlice({
  name: 'PizzasSlice',
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.items = action.payload
      state.isLoaded = true
    },
  },
})

export const { setPizzas } = PizzasSlice.actions
export default PizzasSlice.reducer
