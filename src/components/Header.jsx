import React from 'react'
import HeaderButtons from '../components/HeaderButtons'
import '../styles/Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Eucalyp-Deus_Pizza.png" alt="pizza" />
      <div className='header_title'>
      <div className='header_title_main'>Такая себе пицца</div>
      <div className='header_title_small'>ну пицца и пицца, чо бубнить</div>
      </div>
      <HeaderButtons />
    </div>
  )
}

export default Header