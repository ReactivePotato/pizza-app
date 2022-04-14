import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../styles/MainContent.scss'
import Itemblock from './Itemblock'

const MainContent = () => {
  
  const pizzaFilter = ['Все', 'Мясные', 'гриль', 'Вегетарианские', 'Острые', 'Сырные']

  const currentCategory = useSelector((it) => it.pizzaFilterReducer.category_id)
  const currentSortType = useSelector((it) => it.sortingType.sort_type)

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
    .then((data) => data.json())
    .then((json) => {
      if (currentSortType === 'name') {
        json.pizzas.sort((a, b) => a.name > b.name ? 1 : -1)
      }
      if (currentSortType === 'price') {
        json.pizzas.sort((a, b) => a.startprice > b.startprice ? 1 : -1)
      }
      const categorizedPizzas = currentCategory !== 0 ? json.pizzas.filter((pizzas) => pizzas.category === currentCategory) : json.pizzas 
      setPizzas(categorizedPizzas)
    });
  }, [currentCategory, currentSortType])

  return (
    <>
      <div className='main__text'>
        <h2>{currentCategory === 2 ? `Пиццы-${pizzaFilter[currentCategory]}` : `${pizzaFilter[currentCategory]} пиццы`}</h2>
      </div>
      <div className='main__content'>
        {pizzas.map((pizza) => <Itemblock key={pizza.id} {...pizza}/>)}
      </div>
    </>
  )
}

export default MainContent
