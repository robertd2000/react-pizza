import { configureStore } from '@reduxjs/toolkit'
import FilterReducer from './reducers/filter'
import PizzasReducer from './reducers/pizzas'
import CartReducer from './reducers/cart'

const store = configureStore({
  reducer: {
    FilterReducer,
    PizzasReducer,
    CartReducer,
  },
})

export default store
