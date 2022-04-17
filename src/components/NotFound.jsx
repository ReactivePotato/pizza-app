import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import '../styles/NotFound.scss'

const NotFound = () => {
  return (
    <div className='not__found__block'>
      <div className='not_found_error'>Ошибка</div>
      4 <FontAwesomeIcon icon={faPizzaSlice} /> 4
      <div className='not_fount_text_block'>
        <div>Упс! Кажется что-то пошло не так!</div> 
        <div>Пицца, которую вы ищете, вероятно, еще не придумана :)</div> У нас много разных пицц, попробуйте выбрать ту, которая подойдет именно вам!
      </div>
    </div>
  )
}

export default NotFound