import React from 'react'
import '../styles/MainContent.scss'
import Itemblock from './Itemblock'
import data from '../db/db.json'

const MainContent = () => {
  const pizzasArr = data.pizzas
  return (
    <>
      <div className='main-text'>
        <h2>Текст</h2>
      </div>
      <div className='main-content'>
        {pizzasArr.map((item) => (
          <Itemblock key={item.id} {...item} />
        ))}
      </div>
    </>
  )
}

export default MainContent
