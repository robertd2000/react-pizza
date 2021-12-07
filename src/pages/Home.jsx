import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Categories,
  PizzaItem,
  PizzaLoadingBlock,
  SortPopup,
} from '../components'
import { addPizzaCart } from '../redux/reducers/cart'
import { setCategory, setSortBy } from '../redux/reducers/filter'
import { fetchPizzas } from '../redux/reducers/pizzas'

const categoriesArr = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
]

const Home = () => {
  const { items, isLoaded } = useSelector((state) => state.PizzasReducer)
  const { sortBy, category } = useSelector((state) => state.FilterReducer)
  const cartItems = useSelector((state) => state.CartReducer.items)
  const dispatch = useDispatch()

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSortType = useCallback((index) => {
    dispatch(setSortBy(index))
  }, [])

  const handleAddPizzaToCart = (obj) => {
    // dispatch(addPizzaCart(obj))
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    })
  }

  useEffect(() => {
    const foo = async () => {
      dispatch(fetchPizzas({ sortBy, category }))
    }
    foo()
  }, [category, sortBy])

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoriesArr} onClickItem={onSelectCategory} />
        <SortPopup
          items={sortItems}
          sortBy={sortBy.type}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item) => {
              return (
                <PizzaItem
                  onClickAddPizza={handleAddPizzaToCart}
                  key={item.id}
                  {...item}
                  addedCount={
                    cartItems[item.id] && cartItems[item.id].items.length
                  }
                />
              )
            })
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  )
}

export default Home
