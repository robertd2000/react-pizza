import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: null,
  sortBy: {
    type: 'popular',
    order: 'desc',
  },
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

export const { setSortBy, setCategory } = FilterSlice.actions
export default FilterSlice.reducer
