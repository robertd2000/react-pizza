import React from 'react'
import { useSelector } from 'react-redux'
import { Categories, PizzaItem, SortPopup } from '../components'

const Home = () => {
  const pizzas = useSelector((state) => state.PizzasReducer.items)
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup
        // items={[
        //   { name: 'популярности', type: 'popularity' },
        //   { name: 'цене', type: 'price' },
        //   { name: 'алфавиту', type: 'alphabet' },
        // ]}
        />
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
