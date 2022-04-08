import React, { useState } from 'react'
import '../styles/Filters.scss'
import SortBy from './SortBy'

const Filters = () => {

  const pizzaFilter = ['Все', 'Мясные', 'Гриль', 'Вегетарианские', 'Острые', 'Закрытые']

  const [pizzaFill, setPizzaFill] = useState(0)

  const onSelectFilter = (index) => {
    setPizzaFill(index)
  }

  return (
    <div className='filters_group'>
      {pizzaFilter.map((filter, index) => {
        return (
          <div
            key={filter}
            onClick={() => { onSelectFilter(index) }}
            className={pizzaFill === index ? 'filter_button active' : 'filter_button'}>
            {filter}
          </div>
        )
      })}
      <div className='filters_sort'>
        <SortBy />
      </div>
    </div>

  )
}

export default Filters