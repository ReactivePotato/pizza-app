import React, { useEffect, useState } from 'react'
import '../styles/MainContent.scss'
import Itemblock from './Itemblock'

const MainContent = () => {
  
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
      <div className='main-text'>
        <h2>Все пиццы</h2>
      </div>
      <div className='main-content'>
        {pizzas.map((pizza) => <Itemblock key={pizza.id} {...pizza}/>)}
      </div>
    </>
  )
}

export default MainContent
