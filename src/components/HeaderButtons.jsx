import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

const HeaderButtons = () => {
  return (
    <Link to="/cart" className='header_buttons'>
      <div className='header_btn_amount'>100 ₽.</div>
      <div className='header_btn_divider'></div>
      <div className='header_btn_cart'><FontAwesomeIcon icon={faCartShopping} /></div>
    </Link>
  )
}

export default HeaderButtons
