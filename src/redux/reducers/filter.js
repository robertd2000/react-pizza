import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    { name: 'популярности', type: 'popularity' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' },
  ],
  category: 0,
  sortBy: 'popularity',
}

const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSortBy(state, action) {
      state.sortBy = action.payload
    },
    setCategory(state, action) {
      state.category = action.payload
    },
  },
})

export const { setSortBy } = FilterSlice.actions
export default FilterSlice.reducer
