import React, { useState } from 'react'

const Categories = React.memo(({ items, onClickItem }) => {
  const [activeItem, setActiveItem] = useState(null)

  const onSelectItem = (index) => {
    setActiveItem(index)
    onClickItem(index)
  }
  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items.map((item, i) => {
          return (
            <li
              className={activeItem === i ? 'active' : ''}
              onClick={() => onSelectItem(i)}
              key={`${item}_${i}`}
            >
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
})

export default Categories
