import { configureStore } from '@reduxjs/toolkit'
import FilterReducer from './reducers/filter'
import PizzasReducer from './reducers/pizzas'

const store = configureStore({
  reducer: {
    FilterReducer,
    PizzasReducer,
  },
})

export default store
