import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../styles/MainContent.scss'
import Itemblock from './Itemblock'

const MainContent = () => {
  
  const pizzaFilter = ['Все', 'Мясные', 'гриль', 'Вегетарианские', 'Острые', 'Закрытые']

  const currentCategory = useSelector((it) => it.pizzaFilterReducer.category_id)

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
    .then((data) => data.json())
    .then((json) => {
      setPizzas(json.pizzas)
    });
  }, [])

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
