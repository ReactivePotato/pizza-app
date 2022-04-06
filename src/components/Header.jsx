import React from 'react'
import HeaderButtons from '../components/HeaderButtons'
import '../styles/Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Eucalyp-Deus_Pizza.png" alt="pizza" />
      <div className='header-title'>
      <div className='header-title-main'>Такая себе пицца</div>
      <div className='header-title-small'>тут мелкий еле живой текст про пиццу</div>
      </div>
      <HeaderButtons />
    </div>
  )
}

export default Header