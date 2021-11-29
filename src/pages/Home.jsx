import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Categories, PizzaItem, SortPopup } from '../components'
import { setCategory } from '../redux/reducers/filter'

const categoriesArr = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

const sortItems = [
  { name: 'популярности', type: 'popularity' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
]

const Home = () => {
  const pizzas = useSelector((state) => state.PizzasReducer.items)
  const { sortBy } = useSelector((state) => state.FilterReducer)
  const dispatch = useDispatch()

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoriesArr} onClickItem={onSelectCategory} />
        <SortPopup items={sortItems} sortBy={sortBy} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.length &&
          pizzas.map((item) => {
            return <PizzaItem key={item.id} {...item} />
          })}
      </div>
    </div>
  )
}

export default Home
