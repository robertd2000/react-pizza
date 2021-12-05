import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  items: [],
  isLoaded: false,
}

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async ({ sortBy, category }) => {
    const response = await axios.get(
      `http://localhost:3001/pizzas?${
        category !== null ? `category=${category}` : ''
      }&_sort=${sortBy.type}&_order=${sortBy.order}`
    )
    return response.data
  }
)

const PizzasSlice = createSlice({
  name: 'PizzasSlice',
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.items = action.payload
      state.isLoaded = true
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state, action) => {
        state.isLoaded = false
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload
        state.isLoaded = true
      })
  },
})

export const { setPizzas } = PizzasSlice.actions
export default PizzasSlice.reducer
