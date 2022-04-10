import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';

const HeaderButtons = () => {
  const currentPizzasAmount = useSelector((state) => state.pizzasInCartReducer)

  const totalPizzasInCart = currentPizzasAmount.reduce((acc, rec) => {
    return acc + rec.pizza_amount
  }, 0)

  return (
    <Link to="/cart" className='header_buttons'>
      <div className='header_btn_amount'>100 ₽.</div>
      <div className='header_btn_divider'></div>
      <div className='header_btn_cart_img'><FontAwesomeIcon icon={faCartShopping} /></div>
      <div className='header_btn_incart_bg'></div>
      <div className='header_btn_incart'>{totalPizzasInCart}</div>
    </Link>
  )
}

export default HeaderButtons
