import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changePizzaCategory } from './redux/reducers/pizzaFilterReducer'
import '../styles/Filters.scss'
import SortBy from './SortBy'


const Filters = () => {

  const dispatch = useDispatch()

  const pizzaFilter = ['Все', 'Мясные', 'Гриль', 'Вегетарианские', 'Острые', 'Сырные']

  const [pizzaFill, setPizzaFill] = useState(0)

  const onSelectFilter = (index) => {
    setPizzaFill(index)
    selectPizzaCategory(index)
  }

  const selectPizzaCategory = (id) => {
    dispatch(changePizzaCategory({ 'category_id': id }))
  }

  return (
    <div className='filters__group'>
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
      <div className='filters__sort'>
        <SortBy />
      </div>
    </div>

  )
}

export default Filters