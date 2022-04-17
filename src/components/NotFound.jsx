import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import '../styles/NotFound.scss'
import Header from './Header'

const NotFound = () => {
  return (
    <>
      <Header />
      <div className='not__found__block'>

        <div className='not_found_error'>Ошибка</div>
        <div>4 <FontAwesomeIcon icon={faPizzaSlice} /> 4</div>
        <div className='not_fount_text_block'>
          <div>Упс! Кажется что-то пошло не так!</div>
          <div>Пицца, которую вы ищете, вероятно, еще не придумана :)</div> У нас много разных пицц, попробуйте выбрать ту, которая подойдет именно вам!
        </div>
        <Link to="/"><div className='back_to_main_button'>Выбрать пиццу</div></Link>
      </div>
    </>
  )
}

export default NotFound