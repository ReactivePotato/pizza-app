import React, { useState } from 'react'
import '../styles/Filters.scss'

const Filters = () => {

  const pizzaFilter = ['Все', 'Мясные', 'Гриль', 'Вегетарианские', 'Острые', 'Закрытые']
  // const pizzaSort = ['популярности', 'цене', 'алфавиту']

  const [pizzaFill, setPizzaFill] = useState(0)
  // const [sortPizza, setSortPizza] = useState(0)

  const onSelectFilter = (index) => {
    setPizzaFill(index)
  }

  // const onSelectSort = (index) => {
  //   console.log(index)
  //   setSortPizza(index)
  // }

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
      {/* <select className='filters_sort'>
        {pizzaSort.map((sort, index) => {
          return (
            <option key={sort}
            onChange={ () => { onSelectSort(index) }}
            className={sortPizza === index ? 'filter_sortby active' : 'filter_sortby'}>
              {sort}
            </option>
          )
        })}
      </select> */}
    </div>

  )
}

export default Filters